
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const Features = () => {
  const featuresList = [
    {
      id: "01",
      title: "ولاء العملاء = أرباح أكبر",
      description: "نقدم حلولًا متقدمة لأنظمة الولاء والعروض الكاشباك التي تساعدك على تعزيز ولاء العملاء وزيادة أرباحك.",
      benefits: [
        "أنظمة ولاء مخصصة لتناسب احتياجات عملك",
        "عروض كاشباك جذابة لزيادة مبيعاتك",
        "تقارير مفصلة لقياس أداء برامج الولاء/كاشباك"
      ]
    },
    {
      id: "02",
      title: "تسويق ذكي. نتائج مذهلة",
      description: "نقدم حلولًا تسويقية مبتكرة تعتمد على أحدث تقنيات الذكاء الاصطناعي لتحقيق نتائج مذهلة وزيادة عوائدك.",
      benefits: [
        "حلول تسويقية متقدمة تعتمد على الذكاء الاصطناعي",
        "تحليل بيانات العملاء باستخدام الذكاء الاصطناعي",
        "حملات تسويقية مخصصة تعتمد على البيانات",
        "تقارير أداء تفصيلية لتحسين الاستراتيجيات"
      ]
    },
    {
      id: "03",
      title: "أدوات متقدمة. نتائج مضمونة",
      description: "نقدم لك الأدوات والاستراتيجيات التي تساعدك على تحسين الأداء وفهم سلوك العملاء لاتخاذ قرارات أكثر ذكاءً.",
      benefits: [
        "تحليل سلوك العملاء باستخدام الذكاء الاصطناعي",
        "أدوات تحسين الأداء لزيادة الكفاءة",
        "تقارير تفصيلية لقياس الأداء وتحسين الاستراتيجيات"
      ]
    }
  ];

  return (
    <section id="features" className="section-padding px-6 relative">
      {/* Background decorative element */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-accent/5 to-transparent"></div>
      
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-secondary/30 backdrop-blur-sm mb-4 animate-fade-up">
            <span className="text-sm font-medium">المميزات</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            منتج واحد، <span className="text-gradient">حلول لا حدود</span> لها
          </h2>
          <p className="text-text/80 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            نحن نقدم حلولًا مبتكرة تساعدك على تحقيق أهدافك بسهولة وكفاءة. اكتشف كيف يمكننا مساعدتك.
          </p>
        </div>
        
        {/* Features Cards */}
        <div className="space-y-32">
          {featuresList.map((feature, idx) => (
            <div 
              key={feature.id}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                idx % 2 === 1 ? "lg:rtl" : ""
              )}
            >
              {/* Feature Content */}
              <div>
                <div className="inline-block px-4 py-1 rounded-full bg-secondary/30 backdrop-blur-sm mb-4">
                  <span className="text-sm font-medium">Features {feature.id}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-text/80 mb-8">{feature.description}</p>
                
                <div className="space-y-4">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-primary" />
                      </div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Feature Image/Visualization */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-white to-secondary/30 flex items-center justify-center shadow-lg border border-white/20 overflow-hidden group">
                  {/* Decorative elements */}
                  <div className="absolute top-8 right-8 w-16 h-16 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-all duration-500"></div>
                  <div className="absolute bottom-12 left-10 w-20 h-20 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-all duration-500"></div>
                  <div className="absolute bottom-24 right-20 w-12 h-12 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-all duration-500"></div>
                  
                  {/* Feature number */}
                  <div className="relative z-10 text-7xl md:text-8xl font-bold text-gradient opacity-90">
                    {feature.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
