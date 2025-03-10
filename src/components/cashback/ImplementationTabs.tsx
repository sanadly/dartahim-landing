import { useState } from "react";
import { Search, Code, Rocket, Headphones, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const ImplementationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Implementation process tabs - simplified and focused
  const implementationTabs = [{
    id: 0,
    title: "تحليل احتياجاتك",
    icon: <Search className="h-4 w-4" />,
    content: {
      title: "نفهم عملك قبل أي شيء",
      description: "نبدأ بتحليل شامل لعملك التجاري لفهم احتياجاتك وأهدافك من برنامج الكاشباك.",
      features: ["تحديد نقاط التفاعل مع العملاء المستهدفين", "تحليل سلوك المشتريات وأنماط الإنفاق", "دراسة المنافسين واتجاهات السوق"],
      stats: {
        title: "زيادة المبيعات",
        value: "25%",
        caption: "متوسط زيادة مبيعات عملائنا خلال 3 أشهر"
      },
      cta: "احصل على تحليل مجاني"
    }
  }, {
    id: 1,
    title: "تطوير حل مخصص",
    icon: <Code className="h-4 w-4" />,
    content: {
      title: "حلول كاشباك مصممة خصيصاً",
      description: "نطور حلول كاشباك مخصصة تتكامل بسلاسة مع أنظمتك الحالية وتعكس هوية علامتك التجارية.",
      features: ["واجهات مستخدم بسيطة وجذابة", "تكامل مع أنظمة نقاط البيع والتجارة الإلكترونية", "خيارات استرداد متعددة (نقدي، نقاط، قسائم)"],
      stats: {
        title: "معدل التفاعل",
        value: "3x",
        caption: "معدل تفاعل أعلى مقارنة بالأنظمة التقليدية"
      },
      cta: "استعرض نماذجنا"
    }
  }, {
    id: 2,
    title: "إطلاق وقياس النتائج",
    icon: <Rocket className="h-4 w-4" />,
    content: {
      title: "نتائج ملموسة وقابلة للقياس",
      description: "نساعدك على إطلاق برنامج الكاشباك بنجاح ونقيس أداءه لضمان تحقيق أهدافك التجارية.",
      features: ["خطة إطلاق متكاملة وتدريب فريقك", "لوحات تحكم وتقارير أداء مفصلة", "اختبارات A/B لتحسين معدلات التحويل"],
      stats: {
        title: "ولاء العملاء",
        value: "40%",
        caption: "زيادة في معدل الاحتفاظ بالعملاء"
      },
      cta: "اطلب عرض توضيحي"
    }
  }, {
    id: 3,
    title: "الدعم المستمر",
    icon: <Headphones className="h-4 w-4" />,
    content: {
      title: "شريكك على المدى الطويل",
      description: "نقدم دعمًا مستمرًا ونساعدك على تطوير برنامج الكاشباك وتحسين نتائجه باستمرار.",
      features: ["فريق دعم فني متخصص على مدار الساعة", "تحديثات دورية للنظام وإضافة ميزات جديدة", "تحليلات مستمرة واقتراحات للتحسين"],
      stats: {
        title: "رضا العملاء",
        value: "95%",
        caption: "معدل رضا عملائنا عن خدمات الدعم"
      },
      cta: "تواصل مع فريق الدعم"
    }
  }];

  // Real-life case study
  const caseStudy = {
    company: "ماركت بلس - سلسلة متاجر",
    challenge: "انخفاض معدل تكرار الزيارات وقيمة سلة المشتريات",
    solution: "تطبيق نظام كاشباك بمعدل استرداد تصاعدي يكافئ تكرار الزيارات وقيمة المشتريات",
    results: [{
      metric: "زيادة متوسط قيمة المشتريات",
      value: "32%"
    }, {
      metric: "زيادة معدل تكرار الزيارات",
      value: "28%"
    }, {
      metric: "زيادة إجمالي المبيعات",
      value: "47%"
    }, {
      metric: "عائد الاستثمار",
      value: "340%"
    }]
  };
  return <div className="bg-background rounded-xl p-6 shadow-md">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">عملية التنفيذ المبسطة</h2>
        <p className="text-text/70 max-w-3xl mx-auto">
          نهج منظم وفعال لتنفيذ حلول الكاشباك التي تحقق نتائج ملموسة لعملك
        </p>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex mb-8 bg-muted/40 rounded-full p-1 border overflow-x-auto">
        {implementationTabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("flex items-center justify-center gap-2 py-2 px-4 rounded-full transition-all flex-1 whitespace-nowrap text-sm md:text-base", activeTab === tab.id ? "bg-primary text-white shadow-sm" : "hover:bg-background/80 text-text/70")}>
            {tab.icon}
            <span>{tab.title}</span>
          </button>)}
      </div>
      
      {/* Active Tab Content */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Left column: Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">{implementationTabs[activeTab].content.title}</h3>
            <p className="text-text/70 mb-4">{implementationTabs[activeTab].content.description}</p>
            
            <ul className="space-y-2">
              {implementationTabs[activeTab].content.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>{feature}</span>
                </li>)}
            </ul>
          </div>
          
          {/* Stat highlight */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
            <div className="font-medium text-sm text-text/70">
              {implementationTabs[activeTab].content.stats.title}
            </div>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold text-primary">
                {implementationTabs[activeTab].content.stats.value}
              </div>
              <div className="text-sm text-text/70 pb-1">
                {implementationTabs[activeTab].content.stats.caption}
              </div>
            </div>
          </div>
          
          <Button variant="default" className="w-full md:w-auto">
            {implementationTabs[activeTab].content.cta}
            <ArrowRight className="h-4 w-4 mr-1" />
          </Button>
        </div>
        
        {/* Right column: Case Study */}
        <div className="bg-secondary/5 p-5 rounded-lg border border-secondary/10">
          <div className="mb-4">
            <div className="text-xs uppercase tracking-wider text-text/50 mb-1">قصة نجاح حقيقية</div>
            <h3 className="text-xl font-bold">{caseStudy.company}</h3>
          </div>
          
          <div className="space-y-4 text-sm">
            <div>
              <div className="font-medium mb-1">التحدي:</div>
              <p className="text-text/70">{caseStudy.challenge}</p>
            </div>
            
            <div>
              <div className="font-medium mb-1">الحل:</div>
              <p className="text-text/70">{caseStudy.solution}</p>
            </div>
            
            <div>
              <div className="font-medium mb-2">النتائج:</div>
              <div className="grid grid-cols-2 gap-3">
                {caseStudy.results.map((result, idx) => <div key={idx} className="bg-background p-3 rounded-lg">
                    <div className="text-xs text-text/60">{result.metric}</div>
                    <div className="font-bold text-lg text-secondary">{result.value}</div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Implementation Timeline */}
      <div className="mt-5 pt-4 border-t border-dashed border-primary/20">
        <div className="flex justify-between">
          {implementationTabs.map((tab, idx) => <div key={idx} className={`flex flex-col items-center ${activeTab >= idx ? 'text-primary' : 'text-text/40'}`} style={{
          width: `${100 / implementationTabs.length}%`
        }}>
              <div className={`w-3 h-3 rounded-full ${activeTab >= idx ? 'bg-primary' : 'bg-text/20'}`}></div>
              <div className="text-[10px] mt-1 text-center hidden md:block">
                {tab.title}
              </div>
            </div>)}
        </div>
        <div className="relative h-0.5 bg-text/20 -mt-[9px] z-0 my-[19px]">
          <div className="absolute top-0 right-0 h-full bg-primary transition-all" style={{
          width: `${activeTab / (implementationTabs.length - 1) * 100}%`
        }}></div>
        </div>
      </div>
    </div>;
};
export default ImplementationTabs;