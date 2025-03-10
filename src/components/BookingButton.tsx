
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const BookingButton = ({ className = "" }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This will ensure that Calendly properly initializes when the dialog opens
    if (isOpen && calendarRef.current && window.Calendly) {
      // @ts-ignore - Calendly is loaded globally
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/darahim-info/30min?primary_color=50ba64',
        parentElement: calendarRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className={`button-primary flex items-center gap-2 ${className}`}
      >
        أحجز موعد <ArrowLeft className="h-4 w-4" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">حجز موعد</DialogTitle>
          <div 
            ref={calendarRef}
            className="calendly-inline-widget" 
            data-url="https://calendly.com/darahim-info/30min?primary_color=50ba64" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingButton;
