
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CreditCard, Gift, BarChart4, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  // Auto-rotate the active card every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 0,
      title: "بطاقات الولاء",
      description: "حلول بطاقات رقمية تعزز من ولاء عملائك",
      icon: <CreditCard className="h-5 w-5" />,
      color: "from-primary to-accent",
      link: "/loyalty-cards"
    },
    {
      id: 1,
      title: "منصات التسويق",
      description: "حلول رقمية متكاملة لتسويق منتجاتك وخدماتك",
      icon: <BarChart4 className="h-5 w-5" />,
      color: "from-secondary to-primary",
      link: "/marketing-platforms"
    },
    {
      id: 2,
      title: "حلول استرداد النقود",
      description: "برامج استرداد نقدي تزيد من إقبال العملاء",
      icon: <Gift className="h-5 w-5" />,
      color: "from-accent to-secondary",
      link: "/cashback-solutions"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-16 px-6 hero-pattern flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-light"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-light" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-pulse-light" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Hero Content */}
        <motion.div 
          className="order-2 lg:order-1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1 rounded-full bg-secondary/30 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium">المتخصصون في برامج الولاء و حلول التسويق الرقمية #1 في ليبيا</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            حلول <span className="text-gradient">البطاقات الرقمية</span> وبرامج المكافآت والولاء
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg mb-8 text-text/80 max-w-xl">
            دراهم هي الشركة الليبية الرائدة في حلول البطاقات الرقمية وبرامج المكافآت والولاء. نحن نمكّن الأفراد، الشركات، والتجار من تعظيم الفائدة من القيمة الرقمية، مع تجربة سلسة واستثنائية باستخدام تقنيات مبتكرة.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a href="#" className="button-primary flex items-center gap-2">
              أحجز موعد <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#why-us" className="button-outline">لماذا دراهم؟</a>
          </motion.div>
          
          {/* Trust Indicators with emojis */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 items-center mt-10">
            <div className="flex items-center gap-2">
              <div className="bg-secondary/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">+50</span>
              </div>
              <span className="text-sm">👥 عميل في ليبيا</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-secondary/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">99%</span>
              </div>
              <span className="text-sm">😍 رضا عملائنا</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-secondary/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">24/7</span>
              </div>
              <span className="text-sm">🛎️ دعم فني</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Interactive Card Showcase */}
        <motion.div 
          className="order-1 lg:order-2 flex flex-col justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* 3D Card Showcase */}
          <div className="relative perspective-1000 w-full max-w-md mb-10">
            {/* Featured product card - animated showcase */}
            <div 
              className="w-full relative transform transition-all duration-500"
              style={{ 
                transform: `rotateY(${activeCard * 5}deg) rotateX(${activeCard * 2}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Main card */}
              <div className="w-[280px] md:w-[380px] h-[200px] rounded-3xl glass-card bg-gradient-to-br from-white/50 to-white/10 flex flex-col p-6 shadow-xl border border-white/20 relative overflow-hidden z-10 hover:shadow-2xl transition-all duration-300 mx-auto">
                <div className="flex justify-between items-center mb-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white font-bold">د</span>
                  </div>
                  <span className="text-xl font-bold">دراهم كارد</span>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between">
                    <span className="text-text/70">محمد أحمد</span>
                    <span className="text-text/70">12/27</span>
                  </div>
                  <div className="mt-2 h-16 w-full rounded-lg bg-white/5 backdrop-blur-sm flex justify-center items-center p-1">
                    <img alt="DARAHIM CARD barcode" className="h-full w-full object-contain" src="/lovable-uploads/9b14e838-2969-48fd-be92-aa3e678c56d3.png" />
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-text/70">1234 5678 9012 3456</span>
                    <span className="text-text/70">PREMIUM</span>
                  </div>
                </div>
              </div>

              {/* Floating secondary products */}
              <div 
                className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 p-4 shadow-lg transform -rotate-12 -z-10 animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <BarChart4 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs text-white font-bold">تحليلات</span>
                </div>
              </div>

              <div 
                className="absolute -bottom-4 -left-4 w-36 h-36 rounded-2xl bg-gradient-to-br from-accent to-primary/50 p-4 shadow-lg transform rotate-6 -z-10 animate-float"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Gift className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs text-white font-bold">مكافآت</span>
                </div>
              </div>

              <div 
                className="absolute top-1/2 -translate-y-1/2 -left-20 w-28 h-28 rounded-2xl bg-gradient-to-br from-primary to-secondary/50 p-4 shadow-lg transform -rotate-12 -z-20 animate-float"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <CreditCard className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-xs text-white font-bold">بطاقة</span>
                </div>
              </div>
            </div>

            {/* Features that appear based on active card */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${services[activeCard].color}`}></div>
                <h4 className="font-bold">{services[activeCard].title}</h4>
              </div>
              <p className="text-sm text-text/70">
                {activeCard === 0 && "بطاقات رقمية سهلة الاستخدام مع نظام نقاط مرن لمكافأة عملائك المخلصين."}
                {activeCard === 1 && "منصات تحليلية متقدمة لقياس أداء حملاتك التسويقية وتحسين استراتيجيتك."}
                {activeCard === 2 && "حلول استرداد نقدي مبتكرة تشجع العملاء على زيادة قيمة مشترياتهم."}
              </p>
            </div>
          </div>

          {/* Services Showcase - Moved to under the card */}
          <div className="w-full mt-2">
            <h3 className="text-xl font-bold mb-4 text-center">خدماتنا الرئيسية</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <a 
                  key={service.id}
                  href={service.link}
                  className={cn(
                    "p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all hover:shadow-lg flex flex-col",
                    activeCard === service.id ? "ring-2 ring-primary shadow-md" : ""
                  )}
                  onMouseEnter={() => setActiveCard(service.id)}
                >
                  <div className={`p-2 rounded-full bg-gradient-to-r ${service.color} w-fit mb-3`}>
                    {service.icon}
                  </div>
                  <h4 className="font-bold mb-1">{service.title}</h4>
                  <p className="text-sm text-text/70 mb-2">{service.description}</p>
                  <div className="mt-auto flex items-center text-xs text-primary font-medium">
                    اكتشف المزيد <ChevronRight className="h-3 w-3 mr-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
