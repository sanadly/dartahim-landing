
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
  
  // Check if Calendly script is loaded
  useEffect(() => {
    if (window.Calendly) {
      setIsScriptLoaded(true);
    } else {
      // Script onload event listener
      const handleScriptLoad = () => setIsScriptLoaded(true);
      
      // Find if the script is already in the DOM
      const existingScript = document.querySelector('script[src*="calendly.com"]');
      
      if (existingScript) {
        // If script exists but not loaded yet, add event listener
        existingScript.addEventListener('load', handleScriptLoad);
        return () => existingScript.removeEventListener('load', handleScriptLoad);
      }
      
      // Script doesn't exist, we should depend on the one in index.html
      // which should trigger the window.Calendly assignment
      const checkCalendlyInterval = setInterval(() => {
        if (window.Calendly) {
          setIsScriptLoaded(true);
          clearInterval(checkCalendlyInterval);
        }
      }, 100);
      
      return () => clearInterval(checkCalendlyInterval);
    }
  }, []);

  // Initialize Calendly when dialog opens
  useEffect(() => {
    if (isOpen && calendarRef.current && window.Calendly && isScriptLoaded) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/darahim-info/30min?primary_color=50ba64',
        parentElement: calendarRef.current,
        prefill: {},
        utm: {}
      });
      
      console.log('Calendly widget initialized');
    }
  }, [isOpen, isScriptLoaded]);

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
          <DialogDescription className="sr-only">
            احجز موعدًا مع فريق دراهم
          </DialogDescription>
          <div 
            ref={calendarRef}
            className="calendly-inline-widget" 
            data-url="https://calendly.com/darahim-info/30min?primary_color=50ba64" 
            style={{ minWidth: '320px', height: '700px' }}
          />
          {!isScriptLoaded && (
            <div className="flex justify-center items-center p-4">
              جارِ تحميل الجدول...
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingButton;
