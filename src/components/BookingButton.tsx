
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Define Calendly interface for TypeScript
interface CalendlyWidget {
  initInlineWidget: (config: {
    url: string;
    parentElement: HTMLElement;
    prefill?: Record<string, any>;
    utm?: Record<string, any>;
  }) => void;
}

// Extend Window interface
declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}

const BookingButton = ({ className = "" }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  
  // Load Calendly script
  useEffect(() => {
    // Check if Calendly is already available in window
    if (window.Calendly) {
      setIsScriptLoaded(true);
      return;
    }
    
    // Create and add script if not already loaded
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded successfully');
      setIsScriptLoaded(true);
    };
    document.head.appendChild(script);
    
    return () => {
      // Cleanup if component unmounts before script loads
      script.remove();
    };
  }, []);

  // Initialize Calendly when dialog opens and script is loaded
  useEffect(() => {
    if (isOpen && calendarRef.current && window.Calendly && isScriptLoaded) {
      console.log('Initializing Calendly widget with URL: https://calendly.com/darahim-info/30min');
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/darahim-info/30min',
        parentElement: calendarRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, [isOpen, isScriptLoaded]);

  return (
    <>
      <button 
        onClick={() => {
          console.log('Booking button clicked, opening dialog');
          setIsOpen(true);
        }} 
        className={`button-primary flex items-center gap-2 ${className}`}
      >
        أحجز موعد <ArrowLeft className="h-4 w-4" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">حجز موعد</DialogTitle>
          <DialogDescription className="sr-only">
            احجز موعدًا مع فريق دراهم
          </DialogDescription>
          {!isScriptLoaded ? (
            <div className="flex justify-center items-center p-8 h-[600px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-lg">جارِ تحميل الجدول...</p>
              </div>
            </div>
          ) : (
            <div 
              ref={calendarRef}
              className="calendly-inline-widget" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingButton;
