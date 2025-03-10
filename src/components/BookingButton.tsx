import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BookingButton = ({ className = "" }: { className?: string }) => {
  return (
    <a
      href="https://calendly.com/darahim-info/30min"
      target="_blank"
      rel="noopener noreferrer"
      className={`button-primary flex items-center gap-2 ${className}`}
    >
      أحجز موعد <ArrowLeft className="h-4 w-4 text-justify align-middle" />
    </a>
  );
};

export default BookingButton;