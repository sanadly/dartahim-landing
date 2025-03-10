
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
  
  // Load Calendly script if not already loaded
  useEffect(() => {
    // Check if script is already loaded
    if (window.Calendly) {
      setIsScriptLoaded(true);
      return;
    }
    
    // Check if script tag is already in the document
    const existingScript = document.querySelector('script[src*="calendly.com"]');
    
    if (existingScript) {
      // If script exists but Calendly not available yet, wait for it
      existingScript.addEventListener('load', () => {
        setIsScriptLoaded(true);
      });
    } else {
      // Create and load script if not present
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsScriptLoaded(true);
      document.head.appendChild(script);
    }
    
    // Check periodically for Calendly
    const interval = setInterval(() => {
      if (window.Calendly) {
        setIsScriptLoaded(true);
        clearInterval(interval);
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  // Initialize Calendly when dialog opens and script is loaded
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
              data-url="https://calendly.com/darahim-info/30min?primary_color=50ba64" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingButton;
