import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS);
console.log("SMTP_FROM:", process.env.SMTP_FROM);
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  });


export async function sendEmail(to: string, subject: string, html: string) {
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.GMAIL_USER,
    to,
    subject,
    html,
  };
  return await transporter.sendMail(mailOptions);
}
