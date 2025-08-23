// API configuration and booking-related API calls

const API_BASE_URL = 'http://localhost:3000/api';

export interface BookingData {
  firstName: string;
  lastName: string;
  companyName?: string;
  phoneNumber: string;
  email: string;
  address: string;
  serviceType: string;
  timeSelector: string;
  date: string;
  additionalNotes?: string;
}

export interface BookingResponse {
  booking: {
    _id: string;
    firstName: string;
    lastName: string;
    companyName?: string;
    phoneNumber: string;
    email: string;
    address: string;
    serviceType: string;
    timeSelector: string;
    date: string;
    additionalNotes?: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  mailStatus: {
    clientMailSent: boolean;
    adminMailSent: boolean;
  };
}

export interface ApiError {
  message: string;
  status?: number;
}

// Create a new booking
export const createBooking = async (bookingData: BookingData): Promise<BookingResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `HTTP error! status: ${response.status}`);
    }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred while creating the booking');
  }
};

// Cancel a booking
export const cancelBooking = async (bookingId: string): Promise<BookingResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/cancel`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `HTTP error! status: ${response.status}`);
    }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred while canceling the booking');
  }
};

// Reschedule a booking
export const rescheduleBooking = async (
  bookingId: string,
  newDate: string,
  newTime: string
): Promise<BookingResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/reschedule`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: newDate,
        timeSelector: newTime,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `HTTP error! status: ${response.status}`);
    }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred while rescheduling the booking');
  }
};

// Check if a time slot is available
export const checkTimeSlotAvailability = async (date: string, time: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings/check-availability?date=${date}&time=${time}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `HTTP error! status: ${response.status}`);
    }

    return result.available;
  } catch (error) {
    // If the endpoint doesn't exist, assume the slot is available
    console.warn('Time slot availability check failed, assuming available:', error);
    return true;
  }
};

export default {
  createBooking,
  cancelBooking,
  rescheduleBooking,
  checkTimeSlotAvailability,
};
