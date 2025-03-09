
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section 
      className="min-h-screen pt-32 pb-16 px-6 hero-pattern flex items-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Hero Image - Now on the left for desktop */}
        <div className="order-2 lg:order-1 flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-10 -left-8 w-16 h-16 rounded-xl bg-secondary/70 backdrop-blur-sm animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -bottom-6 left-20 w-12 h-12 rounded-full bg-accent/70 backdrop-blur-sm animate-float" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-20 -right-4 w-8 h-8 rounded-lg bg-primary/70 backdrop-blur-sm animate-float" style={{ animationDelay: '0.6s' }}></div>
            
            {/* Main card visualization */}
            <div className="w-[280px] md:w-[380px] h-[200px] rounded-3xl glass-card bg-gradient-to-br from-white/50 to-white/10 flex flex-col p-6 shadow-xl border border-white/20 relative overflow-hidden z-10">
              <div className="flex justify-between items-center mb-auto">
                <div className="w-12 h-18 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold">د</span>
                </div>
                <span className="text-xl font-bold">دراهم كارد</span>
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between">
                  <span className="text-text/70">محمد أحمد</span>
                  <span className="text-text/70">12/27</span>
                </div>
                <div className="mt-2 bg-white/20 backdrop-blur-sm h-10 w-full rounded-lg"></div>
                <div className="mt-2 flex justify-between">
                  <span className="text-text/70">1234 5678 9012 3456</span>
                  <span className="text-text/70">PREMIUM</span>
                </div>
              </div>
            </div>
            
            {/* Secondary card */}
            <div className="absolute -bottom-10 -left-10 w-[260px] md:w-[320px] h-[160px] rounded-2xl glass-card bg-gradient-to-br from-secondary/50 to-secondary/10 flex flex-col p-4 -rotate-12 shadow-lg border border-white/20 z-0">
              <div className="flex justify-between items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-xs">د</span>
                </div>
                <span className="text-sm font-bold">بطاقة ولاء</span>
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between">
                  <span className="text-xs text-text/70">أحمد علي</span>
                  <span className="text-xs text-text/70">GOLD</span>
                </div>
                <div className="mt-2 bg-white/20 backdrop-blur-sm h-6 w-full rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Content - Now on the right for desktop */}
        <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block px-4 py-1 rounded-full bg-secondary/30 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium">نحن نقدم خدمات تسويق و حلول للشركات و التجار #1 في ليبيا</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            حلول <span className="text-gradient">البطاقات الرقمية</span> وبرامج المكافآت والولاء
          </h1>
          <p className="text-lg mb-8 text-text/80 max-w-xl">
            دراهم هي الشركة الليبية الرائدة في حلول البطاقات الرقمية وبرامج المكافآت والولاء. نحن نمكّن الأفراد، الشركات، والتجار من تعظيم الفائدة من القيمة الرقمية، مع تجربة سلسة واستثنائية باستخدام تقنيات مبتكرة.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="button-primary">ابدأ الآن مجانًا</a>
            <a href="#why-us" className="button-outline">لماذا دراهم؟</a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-secondary/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">+500</span>
              </div>
              <span className="text-sm">عميل نشط</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-secondary/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">99%</span>
              </div>
              <span className="text-sm">رضا عملائنا</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-secondary/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">24/7</span>
              </div>
              <span className="text-sm">دعم فني</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
