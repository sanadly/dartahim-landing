
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const Features = () => {
  const featuresList = [
    {
      id: "01",
      emoji: "💎",
      title: "ولاء العملاء = أرباح أكبر",
      description: "نقدم حلولًا متقدمة لأنظمة الولاء والعروض الكاشباك لزيادة العائدات.",
      benefits: [
        "أنظمة ولاء مخصصة حسب احتياجاتك",
        "عروض كاشباك جذابة لزيادة المبيعات",
        "تقارير مفصلة لقياس الأداء"
      ]
    },
    {
      id: "02",
      emoji: "🚀",
      title: "تسويق ذكي. نتائج مذهلة",
      description: "حلول تسويقية مبتكرة بتقنيات الذكاء الاصطناعي لزيادة العوائد.",
      benefits: [
        "تسويق ذكي بالذكاء الاصطناعي",
        "تحليل بيانات العملاء بدقة",
        "حملات مخصصة حسب البيانات"
      ]
    },
    {
      id: "03",
      emoji: "⚡",
      title: "أدوات متقدمة. نتائج مضمونة",
      description: "أدوات واستراتيجيات لتحسين الأداء وفهم سلوك العملاء لاتخاذ القرارات الذكية.",
      benefits: [
        "تحليل سلوك العملاء",
        "أدوات تحسين أداء متقدمة",
        "تقارير تفصيلية للنتائج"
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
            نحن نقدم حلولًا مبتكرة تساعدك على تحقيق أهدافك بسهولة وكفاءة.
          </p>
        </div>
        
        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature) => (
            <div 
              key={feature.id}
              className="feature-card group"
            >
              <div className="flex flex-col h-full">
                {/* Emoji Header */}
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                  {feature.emoji}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-text/80 mb-6 text-sm">{feature.description}</p>
                
                <div className="space-y-2 mt-auto">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-primary" />
                      </div>
                      <p className="text-sm">{benefit}</p>
                    </div>
                  ))}
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
