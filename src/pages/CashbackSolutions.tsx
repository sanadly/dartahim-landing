
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart, Percent, Coins, RefreshCw, Shield, Settings } from "lucide-react";

const CashbackSolutions = () => {
  const benefits = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: "زيادة معدل التحويل",
      description: "تحفيز المستخدمين لإتمام عمليات الشراء بفضل حوافز الكاشباك الفورية."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "تعزيز تكرار الشراء",
      description: "تشجيع العملاء على العودة مرة أخرى من خلال تراكم مكافآت الكاشباك."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "زيادة متوسط قيمة الطلب",
      description: "دفع العملاء لزيادة حجم مشترياتهم للحصول على مكافآت كاشباك أعلى."
    }
  ];

  const features = [
    {
      title: "معدلات كاشباك مرنة",
      description: "تحديد نسب الكاشباك بناءً على فئات المنتجات، حجم الطلب، أو فترات زمنية محددة."
    },
    {
      title: "استرداد متعدد الخيارات",
      description: "تقديم خيارات متنوعة لاسترداد الكاشباك سواء كرصيد للطلبات المستقبلية أو تحويل نقدي."
    },
    {
      title: "حملات موجهة",
      description: "إنشاء عروض كاشباك مخصصة لشرائح عملاء محددة أو لتعزيز مبيعات منتجات معينة."
    },
    {
      title: "إشعارات فورية",
      description: "إبلاغ العملاء في الوقت الفعلي عن الكاشباك المكتسب لتعزيز تجربة التسوق الإيجابية."
    },
    {
      title: "تكامل سلس",
      description: "دمج حلول الكاشباك بسهولة مع أنظمة المدفوعات ومنصات التجارة الإلكترونية الحالية."
    },
    {
      title: "تقارير وتحليلات شاملة",
      description: "متابعة أداء برامج الكاشباك وتأثيرها على سلوك العملاء والمبيعات."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">حلول الكاشباك</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              حفز مبيعاتك وعزز ولاء عملائك مع برامج الكاشباك المبتكرة من دراهم
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -z-10 top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png" 
                alt="حلول الكاشباك" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">برامج كاشباك مصممة لنمو أعمالك</h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                تعتبر برامج الكاشباك من أكثر استراتيجيات التسويق فعالية لجذب العملاء والاحتفاظ بهم. توفر حلول الكاشباك من دراهم طريقة فعالة لمكافأة عملائك على كل عملية شراء، مما يشجعهم على العودة مراراً وتكراراً.
              </p>
              <p className="text-text/80 mb-4 leading-relaxed">
                نقدم منصة متكاملة لإدارة برامج الكاشباك بكل سهولة، مع خيارات مرنة للتخصيص حسب احتياجات عملك. سواء كنت تدير متجراً صغيراً أو سلسلة متاجر كبيرة، يمكننا تصميم برنامج كاشباك يناسب أهدافك التجارية.
              </p>
              <p className="text-text/80 leading-relaxed">
                مع حلول الكاشباك من دراهم، ستتمكن من زيادة متوسط قيمة المشتريات، تعزيز معدل تكرار الزيارات، وبناء قاعدة عملاء مخلصين على المدى الطويل.
              </p>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">فوائد حلول الكاشباك</h2>
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
          
          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">مميزات حلول الكاشباك من دراهم</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="feature-card p-6">
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Percent size={18} className="text-primary" />
                    {feature.title}
                  </h3>
                  <p className="text-text/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">حالات استخدام حلول الكاشباك</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="feature-card p-8">
                <h3 className="text-xl font-bold mb-4">للمتاجر ومحلات التجزئة</h3>
                <p className="text-text/80 mb-4">
                  زيادة متوسط قيمة المشتريات وتردد العملاء من خلال تقديم كاشباك على كل عملية شراء، مع معدلات أعلى للمشتريات الأكبر.
                </p>
              </div>
              <div className="feature-card p-8">
                <h3 className="text-xl font-bold mb-4">للمطاعم والمقاهي</h3>
                <p className="text-text/80 mb-4">
                  تشجيع الزيارات المتكررة وزيادة حجم الطلبات من خلال برامج كاشباك مخصصة لأوقات الذروة والركود.
                </p>
              </div>
              <div className="feature-card p-8">
                <h3 className="text-xl font-bold mb-4">للتجارة الإلكترونية</h3>
                <p className="text-text/80 mb-4">
                  تحسين معدلات التحويل وتقليل التخلي عن سلة التسوق من خلال عروض كاشباك جذابة على المشتريات المكتملة.
                </p>
              </div>
              <div className="feature-card p-8">
                <h3 className="text-xl font-bold mb-4">للخدمات المهنية</h3>
                <p className="text-text/80 mb-4">
                  بناء علاقات طويلة الأمد مع العملاء من خلال برامج كاشباك تكافئ الولاء وتشجع على الإحالات.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">جاهز لتنفيذ برنامج كاشباك فعال؟</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              تواصل معنا اليوم لمعرفة كيف يمكن لحلول الكاشباك من دراهم أن تساعد في نمو أعمالك وزيادة ولاء عملائك.
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

export default CashbackSolutions;
