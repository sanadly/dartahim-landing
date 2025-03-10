
import { cn } from '@/lib/utils';

const WhyUs = () => {
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
    <section id="why-us" className="section-padding px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-accent/5 to-transparent"></div>
      
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-secondary/30 backdrop-blur-sm mb-4 animate-fade-up">
            <span className="text-sm font-medium">لماذا تختارنا</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            لماذا <span className="text-gradient">دراهم</span> خيارك الاستراتيجي؟
          </h2>
          <p className="text-text/80 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            منصة متكاملة تجمع بين ذكاء التسويق وأنظمة الولاء الذكية
          </p>
        </div>
        
        {/* With vs Without Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Without Solutions */}
          <div className="rounded-2xl p-8 bg-white/50 backdrop-blur-sm border border-white/20 relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-red-400/10 group-hover:bg-red-400/20 transition-all duration-500"></div>
            
            <h3 className="text-xl font-bold mb-6 relative z-10">بدون حلول دراهم</h3>
            <p className="mb-6 text-text/70 relative z-10">استمرار عملك بدون حلول دراهم يعني:</p>
            
            <div className="space-y-4 relative z-10">
              {withoutSolutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-xs">✕</span>
                  </div>
                  <p className="text-text/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* With Solutions */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-sm border border-primary/20 relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-500"></div>
            
            <h3 className="text-xl font-bold mb-6 relative z-10">مع حلول دراهم الذكية</h3>
            <p className="mb-6 text-text/70 relative z-10">نقلة نوعية لعملك مع نظام متكامل لتحويل تفاعلات العملاء إلى فرص نمو مستدامة عبر:</p>
            
            <div className="space-y-4 relative z-10">
              {withSolutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-text/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Features Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">حلول متكاملة</h3>
          <p className="text-text/80 mb-12 max-w-2xl mx-auto">
            كل ما تحتاجه لتحويل تجربة عملائك إلى تجربة رقمية استثنائية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="feature-card flex flex-col items-center text-center group"
              style={{ animationDelay: `${0.1 * idx}s` }}
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
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">معًا نحقق النجاح</h3>
          <a href="#contact" className="button-primary inline-block">تواصل معنا الآن</a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
