import { Router } from 'express';
import { createBooking, } from './booking.controller';

const router = Router();

// Create booking
router.post('/', createBooking);

// Cancel booking
router.patch('/:id/cancel',);

// Reschedule booking
router.patch('/:id/reschedule',);

export default router;
