import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import bookingRoutes from './modules/booking/booking.routes';
import { notFound, errorHandler } from './middleware/error.js';

export const createApp = () => {
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', process.cwd() + '/views');

  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  const limiter = rateLimit({ windowMs: 60 * 1000, max: 120 });
  app.use(limiter);

  // Booking routes
  app.use('/api/bookings', bookingRoutes);

  // EJS form route for manual testing
  app.get('/book', (_req, res) => {
    res.render('create-booking');
  });

  app.get('/health', (_req, res) => res.json({ status: 'ok' }));

  app.get('/', (_req, res) => res.json({ message: 'Welcome to the API' }));
  app.use(notFound);
  app.use(errorHandler);

  return app;
};
