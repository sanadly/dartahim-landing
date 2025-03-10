
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById('why-us');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', onScroll);
    onScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const withoutSolutions = [
    "فرص مبيعات ضائعة بسبب غياب الحوافز",
    "صعوبة في جذب العملاء الجدد والاحتفاظ بالحاليين",
    "بيانات محدودة لفهم سلوك العملاء",
    "غياب التكامل بين القنوات التسويقية",
    "صعوبة قياس العائد على الاستثمار التسويقي"
  ];

  const withSolutions = [
    "منصات ولاء ذكية بخصومات ديناميكية",
    "تحليلات سلوك العملاء باستخدام الذكاء الاصطناعي",
    "عروض كاشباك مخصصة بناءً على أنماط الشراء",
    "تكامل مع كل قنواتك الرقمية والتقليدية",
    "لوحة تحكم شاملة لرصد الأداء في الوقت الفعلي",
    "حملات تسويقية تلقائية مدعومة بالبيانات"
  ];

  const additionalFeatures = [
    {
      icon: "📱",
      title: "تطبيقات متوافقة مع الجوال",
      description: "وفر لعملائك تجربة سلسة على الهواتف الذكية مع تطبيقات دراهم المتوافقة مع جميع الأجهزة."
    },
    {
      icon: "⚡",
      title: "أداء عالي",
      description: "أنظمة سريعة وفعالة تضمن تجربة مستخدم سلسة وأداءً عاليًا حتى في أوقات الذروة."
    },
    {
      icon: "🔒",
      title: "أمان وحماية",
      description: "أنظمة حماية متقدمة تضمن أمان بيانات عملائك وخصوصيتهم في كل الأوقات."
    },
    {
      icon: "🔌",
      title: "واجهات برمجية قوية",
      description: "واجهات برمجية متقدمة تمكنك من التكامل مع أنظمتك الحالية بسهولة وكفاءة."
    }
  ];

  return (
    <section id="why-us" className="section-padding px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-accent/5 to-transparent"></div>
      
      {/* Animated floating circles */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float opacity-70"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-secondary/20 animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-accent/10 animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className={cn(
            "inline-block px-4 py-1 rounded-full bg-secondary/30 backdrop-blur-sm mb-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="text-sm font-medium">لماذا تختارنا</span>
          </div>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            لماذا <span className="text-gradient">دراهم</span> خيارك الاستراتيجي؟
          </h2>
          <p className={cn(
            "text-text/80 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            منصة متكاملة تجمع بين ذكاء التسويق وأنظمة الولاء الذكية
          </p>
        </div>
        
        {/* With vs Without Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Without Solutions */}
          <div className={cn(
            "rounded-2xl p-8 bg-white/50 backdrop-blur-sm border border-white/20 relative overflow-hidden group hover:shadow-lg transition-all duration-500",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50px]"
          )}>
            <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-red-400/10 group-hover:bg-red-400/20 transition-all duration-500"></div>
            
            <h3 className="text-xl font-bold mb-6 relative z-10">بدون حلول دراهم</h3>
            <p className="mb-6 text-text/70 relative z-10">استمرار عملك بدون حلول دراهم يعني:</p>
            
            <div className="space-y-4 relative z-10">
              {withoutSolutions.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-400/20 flex items-center justify-center flex-shrink-0">
                    <XCircle className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-text/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* With Solutions */}
          <div className={cn(
            "rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-sm border border-primary/20 relative overflow-hidden group hover:shadow-lg transition-all duration-500",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50px]"
          )}>
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-500"></div>
            
            <h3 className="text-xl font-bold mb-6 relative z-10">مع حلول دراهم الذكية</h3>
            <p className="mb-6 text-text/70 relative z-10">نقلة نوعية لعملك مع نظام متكامل لتحويل تفاعلات العملاء إلى فرص نمو مستدامة عبر:</p>
            
            <div className="space-y-4 relative z-10">
              {withSolutions.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 transition-all duration-500"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-text/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Features Section */}
        <div className={cn(
          "mb-16 text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">حلول متكاملة</h3>
          <p className="text-text/80 mb-12 max-w-2xl mx-auto">
            كل ما تحتاجه لتحويل تجربة عملائك إلى تجربة رقمية استثنائية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className={cn(
                "feature-card flex flex-col items-center text-center group transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              )}
              style={{ transitionDelay: `${300 + idx * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-text/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className={cn(
          "mt-20 text-center transition-all duration-700 delay-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">معًا نحقق النجاح</h3>
          <a href="#contact" className="button-primary inline-block group">
            <span className="inline-flex items-center">
              تواصل معنا الآن
              <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-[-4px] transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
