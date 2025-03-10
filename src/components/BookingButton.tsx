
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const BookingButton = ({ className = "" }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="calendly-inline-widget" 
               data-url="https://calendly.com/darahim-info/30min?primary_color=50ba64" 
               style={{ minWidth: '320px', height: '700px' }}>
          </div>
          <script type="text/javascript" 
                  src="https://assets.calendly.com/assets/external/widget.js" 
                  async>
          </script>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingButton;
