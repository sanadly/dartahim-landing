
import { CreditCard, Gift, BarChart4 } from 'lucide-react';
import { servicesData } from './servicesData';

interface HeroCardDisplayProps {
  activeCard: number;
}

const HeroCardDisplay = ({ activeCard }: HeroCardDisplayProps) => {
  return (
    <div className="relative perspective-1000 w-full max-w-md mb-8 md:mb-10">
      <div className="w-full relative transform transition-all duration-500" style={{
        transform: `rotateY(${activeCard * 5}deg) rotateX(${activeCard * 2}deg)`,
        transformStyle: 'preserve-3d'
      }}>
        <div className="w-[240px] md:w-[320px] lg:w-[380px] h-[160px] md:h-[200px] rounded-3xl glass-card bg-gradient-to-br from-white/50 to-white/10 flex flex-col p-4 md:p-6 shadow-xl border border-white/20 relative overflow-hidden z-10 hover:shadow-2xl transition-all duration-300 mx-auto">
          <div className="flex justify-between items-center mb-auto">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-accent  via-white to-accent  flex items-center justify-center">
              <span className="text-white font-bold"><img src="favicon.png" className='h-6 ' alt="" /></span>
            </div>
            <span className="text-lg md:text-xl font-bold">دراهم كارد</span>
          </div>

          <div className="mt-auto">
            <div className="flex justify-between">
              <span className="text-sm md:text-text/70">محمد أحمد</span>
              <span className="text-sm md:text-text/70">12/27</span>
            </div>
            <div className="mt-2 h-12 md:h-16 w-full rounded-lg bg-white/5 backdrop-blur-sm flex justify-center items-center p-1">
              <img alt="DARAHIM CARD barcode" className="h-full w-full object-contain" src="/lovable-uploads/9b14e838-2969-48fd-be92-aa3e678c56d3.png" />
            </div>
            <div className="mt-2 flex justify-between text-xs md:text-sm">
              <span className="text-text/70">1234 5678 9012 3456</span>
              <span className="text-text/70">PREMIUM</span>
            </div>
          </div>
        </div>

        <FloatingCards />
      </div>

      <div className="mt-6 md:mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20 shadow-lg">
        <div className="flex items-center gap-2 mb-1 md:mb-2">
          <div className={`w-2 md:w-3 h-2 md:h-3 rounded-full bg-gradient-to-r ${servicesData[activeCard].color}`}></div>
          <h4 className="font-bold text-sm md:text-base">{servicesData[activeCard].title}</h4>
        </div>
        <p className="text-xs md:text-sm text-text/70">
          {servicesData[activeCard].detailDescription}
        </p>
      </div>
    </div>
  );
};

const FloatingCards = () => {
  return (
    <>
      <div className="absolute -top-6 -right-6 w-24 md:w-32 h-24 md:h-32 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 p-4 shadow-lg transform -rotate-12 -z-10 animate-float hidden sm:block" style={{
        animationDelay: '0.5s'
      }}>
        <div className="flex items-center justify-between">
          <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-white/20 flex items-center justify-center">
            <BarChart4 className="h-3 md:h-4 w-3 md:w-4 text-white" />
          </div>
          <span className="text-xs text-white font-bold">تحليلات</span>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 w-28 md:w-36 h-28 md:h-36 rounded-2xl bg-gradient-to-br from-accent to-primary/50 p-4 shadow-lg transform rotate-6 -z-10 animate-float hidden sm:block" style={{
        animationDelay: '0.3s'
      }}>
        <div className="flex items-center justify-between">
          <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Gift className="h-3 md:h-4 w-3 md:w-4 text-white" />
          </div>
          <span className="text-xs text-white font-bold">مكافآت</span>
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 -left-10 md:-left-20 w-20 md:w-28 h-20 md:h-28 rounded-2xl bg-gradient-to-br from-primary to-secondary/50 p-3 md:p-4 shadow-lg transform -rotate-12 -z-20 animate-float hidden sm:block" style={{
        animationDelay: '0.7s'
      }}>
        <div className="flex items-center justify-between">
          <div className="w-5 md:w-6 h-5 md:h-6 rounded-full bg-white/20 flex items-center justify-center">
            <CreditCard className="h-2 md:h-3 w-2 md:w-3 text-white" />
          </div>
          <span className="text-xs text-white font-bold">بطاقة</span>
        </div>
      </div>
    </>
  );
};

export default HeroCardDisplay;
