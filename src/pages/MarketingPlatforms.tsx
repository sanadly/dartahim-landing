
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart4, Target, Users, Mail, Smartphone, MessageSquare, BarChart2, Globe, Flag } from "lucide-react";

const MarketingPlatforms = () => {
  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "استهداف دقيق",
      description: "الوصول للعملاء المناسبين في الوقت المناسب مع أدوات استهداف متقدمة."
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "قياس النتائج",
      description: "تحليلات شاملة لقياس أداء حملاتك التسويقية وتحسينها باستمرار."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "فهم أعمق للعملاء",
      description: "بناء ملفات تعريف متكاملة للعملاء لفهم احتياجاتهم وتفضيلاتهم."
    }
  ];

  const platforms = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "منصة التسويق بالبريد الإلكتروني",
      description: "إنشاء وإدارة حملات بريدية مخصصة مع تتبع دقيق للنتائج وأتمتة كاملة للرسائل."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "منصة الرسائل النصية",
      description: "التواصل الفوري مع العملاء عبر الرسائل النصية للإعلانات والعروض الحصرية."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "منصة الدردشة الآلية",
      description: "روبوتات محادثة ذكية للرد على استفسارات العملاء وتقديم دعم على مدار الساعة."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "منصة تحليلات العملاء",
      description: "فهم سلوك العملاء واتجاهات المبيعات لاتخاذ قرارات تسويقية مدروسة."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "منصة إدارة وسائل التواصل الاجتماعي",
      description: "إدارة جميع حسابات التواصل الاجتماعي من مكان واحد مع جدولة المحتوى وتحليل الأداء."
    },
    {
      icon: <Flag className="h-6 w-6" />,
      title: "منصة إدارة الحملات",
      description: "تخطيط وتنفيذ ومتابعة الحملات التسويقية المتكاملة عبر جميع القنوات."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">منصات التسويق</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              حلول تسويقية متكاملة تساعدك على الوصول إلى عملائك وتنمية أعمالك
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">استراتيجيات تسويقية مبنية على البيانات</h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                في عصر التحول الرقمي، أصبح التسويق الفعال يعتمد بشكل أساسي على البيانات والتحليلات. توفر منصات التسويق من دراهم حلولاً متكاملة تمكنك من فهم عملائك بشكل أعمق والتواصل معهم بطريقة مخصصة وفعالة.
              </p>
              <p className="text-text/80 mb-4 leading-relaxed">
                نقدم مجموعة من المنصات التسويقية المتطورة التي تساعدك على إدارة علاقات العملاء، إنشاء حملات تسويقية مستهدفة، وتحليل النتائج لتحسين أداء أعمالك باستمرار.
              </p>
              <p className="text-text/80 leading-relaxed">
                مع منصات التسويق من دراهم، ستتمكن من توحيد جميع جهودك التسويقية في مكان واحد، مما يوفر لك الوقت والجهد ويزيد من فعالية استراتيجياتك التسويقية.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png" 
                alt="منصات التسويق" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">فوائد منصات التسويق</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="feature-card p-8">
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-text/80">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Platforms Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">منصاتنا التسويقية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="feature-card p-8">
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{platform.title}</h3>
                  <p className="text-text/80">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Integration Section */}
          <div className="bg-primary/5 rounded-2xl p-10 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">تكامل سلس مع أنظمتك الحالية</h2>
                <p className="text-text/80 mb-4">
                  تتكامل منصات التسويق من دراهم بسلاسة مع أنظمة إدارة علاقات العملاء (CRM)، أنظمة التجارة الإلكترونية، وأنظمة نقاط البيع التي تستخدمها حالياً.
                </p>
                <p className="text-text/80">
                  نوفر واجهات برمجة تطبيقات (APIs) مفتوحة تسمح بنقل البيانات بسهولة بين منصاتنا وأنظمتك الأخرى، مما يضمن تجربة متكاملة وفعالة.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="feature-card p-6 text-center">
                  <h3 className="font-bold mb-0">تكامل مع أنظمة CRM</h3>
                </div>
                <div className="feature-card p-6 text-center">
                  <h3 className="font-bold mb-0">تكامل مع منصات التجارة الإلكترونية</h3>
                </div>
                <div className="feature-card p-6 text-center">
                  <h3 className="font-bold mb-0">تكامل مع أنظمة نقاط البيع</h3>
                </div>
                <div className="feature-card p-6 text-center">
                  <h3 className="font-bold mb-0">تكامل مع منصات التحليل</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Case Studies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">قصص نجاح</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="feature-card p-8">
                <h3 className="text-xl font-bold mb-2">سلسلة متاجر التجزئة</h3>
                <p className="text-text/80 mb-4">
                  حققت سلسلة متاجر محلية زيادة بنسبة 40% في مبيعاتها خلال 6 أشهر من استخدام منصات التسويق المتكاملة من دراهم، من خلال حملات مستهدفة وتحليل سلوك العملاء.
                </p>
              </div>
              <div className="feature-card p-8">
                <h3 className="text-xl font-bold mb-2">مطعم شهير</h3>
                <p className="text-text/80 mb-4">
                  تمكن مطعم محلي من زيادة عدد الزوار بنسبة 35% وزيادة معدل تكرار الزيارات من خلال استخدام منصة الرسائل النصية وبرنامج الولاء المدمج مع حلول دراهم.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">ارفع مستوى تسويقك مع منصات دراهم</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              تواصل معنا اليوم لمعرفة كيف يمكن لمنصات التسويق المتكاملة من دراهم أن تساعد في نمو أعمالك وتحسين علاقاتك مع العملاء.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="button-primary">أحجز موعد</a>
              <a href="/#contact" className="button-outline">تواصل معنا</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketingPlatforms;
