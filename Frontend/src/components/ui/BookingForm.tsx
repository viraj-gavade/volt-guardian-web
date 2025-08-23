import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { createBooking, type BookingData } from '@/lib/api';
import { Calendar, Clock, User, Mail, Phone, MapPin, Building, Wrench, MessageSquare, CheckCircle, X } from 'lucide-react';

interface BookingFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  address: string;
  serviceType: string;
  timeSelector: string;
  date: string;
  additionalNotes: string;
}

interface BookingFormProps {
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ className }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    address: '',
    serviceType: '',
    timeSelector: '',
    date: '',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const serviceTypes = [
    'Consulting',
    'Repairing'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await createBooking(formData as BookingData);
      
      setSubmitStatus({
        type: 'success',
        message: 'Booking successfully created! You will receive a confirmation email shortly.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        phoneNumber: '',
        email: '',
        address: '',
        serviceType: '',
        timeSelector: '',
        date: '',
        additionalNotes: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to create booking. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date as minimum date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg", className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Our Services</h2>
        <p className="text-gray-600">Schedule your power solution consultation or service</p>
      </div>

      {submitStatus.type && (
        <div className={cn(
          "mb-6 p-4 rounded-lg flex items-center gap-3",
          submitStatus.type === 'success' ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
        )}>
          {submitStatus.type === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <X className="w-5 h-5 text-red-600" />
          )}
          <span>{submitStatus.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4" />
              First Name *
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4" />
              Last Name *
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number *
            </label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Company and Address */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <Building className="w-4 h-4" />
              Company Name
            </label>
            <Input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter your company name (optional)"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Address *
            </label>
            <Input
              id="address"
              name="address"
              type="text"
              required
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your complete address"
            />
          </div>
        </div>

        {/* Service Details */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleInputChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select a service</option>
              {serviceTypes.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Preferred Date *
              </label>
              <Input
                id="date"
                name="date"
                type="date"
                required
                min={getTomorrowDate()}
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="timeSelector" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Preferred Time *
              </label>
              <select
                id="timeSelector"
                name="timeSelector"
                required
                value={formData.timeSelector}
                onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="space-y-2">
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={4}
            value={formData.additionalNotes}
            onChange={handleInputChange}
            placeholder="Any specific requirements or additional information..."
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </div>
            ) : (
              'Book Service'
            )}
          </Button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">
            Need immediate assistance? Contact us directly:
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
            <a href="tel:+15551234567" className="flex items-center gap-1 text-green-600 hover:text-green-700">
              <Phone className="w-4 h-4" />
              +1 (555) 123-4567
            </a>
            <a href="mailto:info@powergen.com" className="flex items-center gap-1 text-green-600 hover:text-green-700">
              <Mail className="w-4 h-4" />
              info@powergen.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
