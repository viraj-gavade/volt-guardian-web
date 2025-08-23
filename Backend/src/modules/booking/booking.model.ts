import mongoose, { Document, Schema, Model } from 'mongoose';

export enum ServiceType {
  Consulting = 'Consulting',
  Repairing = 'Repairing',
}

export enum BookingStatus {
  Upcoming = 'Upcoming',
  Expired = 'Expired',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

export interface Booking {
  firstName: string;
  lastName: string;
  companyName?: string;
  phoneNumber: string;
  email: string;
  address: string;
  serviceType: ServiceType;
  timeSelector: Date;
  date: Date;
  status?: BookingStatus;
  additionalNotes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BookingDocument extends Booking, Document {}

const BookingSchema: Schema<BookingDocument> = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    companyName: { type: String },
    phoneNumber: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    address: { type: String, required: true },
    serviceType: {
      type: String,
      enum: Object.values(ServiceType),
      required: true,
    },
    timeSelector: { type: Date, required: true },
    date: { type: Date, required: true },
    status: {
      type: String,
      enum: Object.values(BookingStatus),
      default: BookingStatus.Upcoming,
    },
    additionalNotes: { type: String },
  },
  {
    timestamps: true,
  }
);

BookingSchema.index({ email: 1, date: 1 });

export const BookingModel: Model<BookingDocument> = mongoose.model<BookingDocument>('Booking', BookingSchema);
