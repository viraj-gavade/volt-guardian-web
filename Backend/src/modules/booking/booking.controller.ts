import { Request, Response, NextFunction } from 'express';
import { BookingModel, Booking, BookingStatus } from './booking.model';
import mongoose from 'mongoose';
import { sendEmail } from '../../utils/sendEmail';
import dotenv from 'dotenv';


dotenv.config();


const ADMIN_EMAIL = process.env.ADMIN_EMAIL || '';


console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS);
console.log("SMTP_FROM:", process.env.SMTP_FROM);
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);


// Helper: Check for booking overlap
async function isBookingOverlap(date: Date, timeSelector: Date): Promise<boolean> {
  const exists = await BookingModel.exists({ date, timeSelector });
  return !!exists;
}

// Create Booking
export const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      firstName,
      lastName,
      companyName,
      phoneNumber,
      email,
      address,
      serviceType,
      timeSelector,
      date,
      additionalNotes,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !phoneNumber || !email || !address || !serviceType || !timeSelector || !date) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Convert date and timeSelector to Date objects
    // date: 'YYYY-MM-DD', timeSelector: 'HH:mm'
    const bookingDate = new Date(date);
    const [hours, minutes] = timeSelector.split(':').map(Number);
    const bookingDateTime = new Date(bookingDate);
    bookingDateTime.setHours(hours, minutes, 0, 0);

    // Check for overlap
    const overlap = await isBookingOverlap(date, bookingDateTime);
    if (overlap) {
      return res.status(400).json({ message: 'Time slot already booked' });
    }

    // Create booking
    const booking = await BookingModel.create({
      firstName,
      lastName,
      companyName,
      phoneNumber,
      email,
      address,
      serviceType,
      timeSelector: bookingDateTime,
      date: bookingDate,
      additionalNotes,
    });

    // Email content for client
    const clientSubject = 'Booking Confirmation';
    const clientHtml = `<p>Dear ${firstName} ${lastName},</p>
      <p>Your booking for <b>${serviceType}</b> is confirmed.</p>
      <p>Date: <b>${bookingDate.toLocaleDateString()}</b><br>Time: <b>${bookingDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</b></p>
      <p>Thank you for choosing us!</p>`;

    // Email content for admin
    const adminSubject = 'New Booking Received';
    const adminHtml = `<p>New booking received:</p>
      <ul>
        <li>Name: ${firstName} ${lastName}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phoneNumber}</li>
        <li>Service: ${serviceType}</li>
        <li>Date: ${bookingDate.toLocaleDateString()}</li>
        <li>Time: ${bookingDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</li>
        <li>Company: ${companyName || '-'}</li>
        <li>Address: ${address}</li>
        <li>Notes: ${additionalNotes || '-'}</li>
      </ul>`;

    // Send emails
    let clientMailSent = false;
    let adminMailSent = false;
    try {
      const clientResult = await sendEmail(email, clientSubject, clientHtml);
      clientMailSent = Array.isArray(clientResult.accepted) && clientResult.accepted.length > 0;
    } catch (e) {
      console.log('error while sending the client mail', e);
      clientMailSent = false;
    }
    try {
      const adminResult = await sendEmail(ADMIN_EMAIL, adminSubject, adminHtml);
      adminMailSent = Array.isArray(adminResult.accepted) && adminResult.accepted.length > 0;
    } catch (e) {
      console.log('error while sending the admin mail', e);
      adminMailSent = false;
    }

    res.status(201).json({ booking, mailStatus: { clientMailSent, adminMailSent } });
  } catch (err) {
    next(err);
  }
};

// // Cancel Booking
export const cancelBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const booking = await BookingModel.findByIdAndUpdate(
      id,
      { status: BookingStatus.Cancelled },
      { new: true }
    );
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    const subject = 'Booking Cancelled';
    const html = `<p>Booking for ${booking.firstName} ${booking.lastName} on ${booking.date.toLocaleDateString()} at ${booking.timeSelector.toLocaleTimeString()} has been cancelled.</p>`;
    await sendEmail(booking.email, subject, html);
    await sendEmail(ADMIN_EMAIL, subject, html);

    res.json({ booking });
  } catch (err) {
    next(err);
  }
};

// // Reschedule Booking
export const rescheduleBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { date, timeSelector } = req.body;
    if (!date || !timeSelector) {
      return res.status(400).json({ message: 'Missing new date or time' });
    }
    // Check for overlap
    const overlap = await isBookingOverlap(date, timeSelector);
    if (overlap) {
      return res.status(400).json({ message: 'Time slot already booked' });
    }
    const booking = await BookingModel.findByIdAndUpdate(
      id,
      { date, timeSelector, status: BookingStatus.Upcoming },
      { new: true }
    );
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    const subject = 'Booking Rescheduled';
    const html = `<p>Booking for ${booking.firstName} ${booking.lastName} has been rescheduled to ${booking.date.toLocaleDateString()} at ${booking.timeSelector.toLocaleTimeString()}.</p>`;
    await sendEmail(booking.email, subject, html);
    await sendEmail(ADMIN_EMAIL, subject, html);

    res.json({ booking });
  } catch (err) {
    next(err);
  }
};

// Reminder Utility (to be used in a cron job)
// export async function sendBookingReminders() {
//   const now = new Date();
//   const reminderTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);
//   const bookings = await BookingModel.find({
//     status: BookingStatus.Upcoming,
//     date: {
//       $gte: reminderTime,
//       $lt: new Date(reminderTime.getTime() + 60 * 60 * 1000),
//     },
//   });
//   for (const booking of bookings) {
//     const subject = 'Booking Reminder';
//     const html = `<p>Reminder: Booking for ${booking.firstName} ${booking.lastName} (${booking.serviceType}) is scheduled on ${booking.date.toLocaleDateString()} at ${booking.timeSelector.toLocaleTimeString()}.</p>`;
//     await sendEmail(booking.email, subject, html);
//     await sendEmail(ADMIN_EMAIL, subject, html);
//   }
// }
