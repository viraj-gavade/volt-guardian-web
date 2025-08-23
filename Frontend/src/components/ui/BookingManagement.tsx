import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { cancelBooking, rescheduleBooking } from '@/lib/api';
import { Calendar, Clock, User, Mail, Phone, MapPin, Building, X, Edit, Trash2 } from 'lucide-react';

interface Booking {
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
  status: 'upcoming' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

interface BookingManagementProps {
  className?: string;
}

const BookingManagement: React.FC<BookingManagementProps> = ({ className }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  // Mock data for demonstration
  useEffect(() => {
    // In a real app, you would fetch bookings from the API
    setLoading(false);
    setBookings([
      {
        _id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phoneNumber: '+1234567890',
        address: '123 Main St, City, State',
        serviceType: 'Generator Sales',
        timeSelector: '10:00',
        date: '2025-01-15',
        status: 'upcoming',
        createdAt: '2025-01-10T10:00:00Z',
        updatedAt: '2025-01-10T10:00:00Z'
      }
    ]);
  }, []);

  const handleCancelBooking = async (bookingId: string) => {
    try {
      await cancelBooking(bookingId);
      setBookings(prev => prev.map(booking => 
        booking._id === bookingId 
          ? { ...booking, status: 'cancelled' as const }
          : booking
      ));
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to cancel booking');
    }
  };

  const handleRescheduleBooking = async () => {
    if (!selectedBooking || !newDate || !newTime) return;

    try {
      await rescheduleBooking(selectedBooking._id, newDate, newTime);
      setBookings(prev => prev.map(booking => 
        booking._id === selectedBooking._id 
          ? { ...booking, date: newDate, timeSelector: newTime }
          : booking
      ));
      setShowRescheduleModal(false);
      setSelectedBooking(null);
      setNewDate('');
      setNewTime('');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to reschedule booking');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatTime = (timeString: string) => {
    return timeString;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-6xl mx-auto p-6", className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Management</h2>
        <p className="text-gray-600">Manage your service bookings</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-lg flex items-center gap-3">
          <X className="w-5 h-5" />
          <span>{error}</span>
          <button 
            onClick={() => setError(null)}
            className="ml-auto text-red-600 hover:text-red-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="grid gap-6">
        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings found</h3>
            <p className="text-gray-600">You don't have any bookings yet.</p>
          </div>
        ) : (
          bookings.map((booking) => (
            <div key={booking._id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {booking.firstName} {booking.lastName}
                  </h3>
                  <span className={cn("px-2 py-1 rounded-full text-sm font-medium", getStatusColor(booking.status))}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
                <div className="flex gap-2">
                  {booking.status === 'upcoming' && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedBooking(booking);
                          setNewDate(booking.date);
                          setNewTime(booking.timeSelector);
                          setShowRescheduleModal(true);
                        }}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Reschedule
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleCancelBooking(booking._id)}
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>{booking.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{booking.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-gray-400" />
                  <span>{booking.serviceType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{formatDate(booking.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{formatTime(booking.timeSelector)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="truncate">{booking.address}</span>
                </div>
              </div>

              {booking.companyName && (
                <div className="mt-2 text-sm text-gray-600">
                  Company: {booking.companyName}
                </div>
              )}

              {booking.additionalNotes && (
                <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
                  <strong>Notes:</strong> {booking.additionalNotes}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Reschedule Modal */}
      {showRescheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Reschedule Booking</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="newDate" className="block text-sm font-medium text-gray-700 mb-1">
                  New Date
                </label>
                <input
                  type="date"
                  id="newDate"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="newTime" className="block text-sm font-medium text-gray-700 mb-1">
                  New Time
                </label>
                <select
                  id="newTime"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowRescheduleModal(false);
                  setSelectedBooking(null);
                  setNewDate('');
                  setNewTime('');
                }}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleRescheduleBooking}
                disabled={!newDate || !newTime}
                className="flex-1"
              >
                Reschedule
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingManagement;
