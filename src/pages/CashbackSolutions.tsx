
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart, Percent, Coins, RefreshCw, Shield, Settings, ShoppingCart, Utensils, Store, Briefcase, ChevronRight } from "lucide-react";

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

  const useCases = [
    {
      icon: <Store />,
      title: "للمتاجر ومحلات التجزئة",
      description: "زيادة متوسط قيمة المشتريات وتردد العملاء من خلال تقديم كاشباك على كل عملية شراء، مع معدلات أعلى للمشتريات الأكبر."
    },
    {
      icon: <Utensils />,
      title: "للمطاعم والمقاهي",
      description: "تشجيع الزيارات المتكررة وزيادة حجم الطلبات من خلال برامج كاشباك مخصصة لأوقات الذروة والركود."
    },
    {
      icon: <ShoppingCart />,
      title: "للتجارة الإلكترونية",
      description: "تحسين معدلات التحويل وتقليل التخلي عن سلة التسوق من خلال عروض كاشباك جذابة على المشتريات المكتملة."
    },
    {
      icon: <Briefcase />,
      title: "للخدمات المهنية",
      description: "بناء علاقات طويلة الأمد مع العملاء من خلال برامج كاشباك تكافئ الولاء وتشجع على الإحالات."
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
          
          {/* Main Content - replaced image with component */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div className="order-2 md:order-1">
              {/* New Cashback Component */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-primary/10 p-4 pb-0">
                <div className="absolute -z-10 top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5"></div>
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white font-bold">د</span>
                      </div>
                      <h3 className="font-bold">كاشباك دراهم</h3>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      نشط
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-secondary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">12,500</div>
                      <div className="text-sm text-text/70">رصيد الكاشباك</div>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary">5%</div>
                      <div className="text-sm text-text/70">نسبة الكاشباك</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-dashed border-primary/20 pt-4 mb-4">
                    <h4 className="font-medium mb-2">آخر المعاملات</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>متجر الإلكترونيات</span>
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">+500</span>
                          <ChevronRight className="h-4 w-4 text-text/50" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>مطعم البحر</span>
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">+120</span>
                          <ChevronRight className="h-4 w-4 text-text/50" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>سوبر ماركت</span>
                        <div className="flex items-center">
                          <span className="text-green-600 font-medium">+350</span>
                          <ChevronRight className="h-4 w-4 text-text/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary/10 rounded-lg p-3 mb-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">استبدال الكاشباك</span>
                      <button className="text-primary text-sm font-medium">استرداد الآن</button>
                    </div>
                  </div>
                </div>
                
                <div className="h-10 bg-gradient-to-r from-primary to-accent mt-4"></div>
              </div>
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
          
          {/* Benefits Section with image */}
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
          
          {/* Added image for engagement */}
          <div className="mb-20 bg-primary/5 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-4">عزز ولاء العملاء من خلال الكاشباك</h2>
                <p className="text-text/80 mb-6">
                  يعد الكاشباك من أقوى الأدوات التي تساعدك على بناء علاقات طويلة المدى مع عملائك. كلما زادت مشترياتهم، زادت المكافآت، مما يخلق حلقة إيجابية من الولاء والإنفاق المتكرر.
                </p>
                <ul className="space-y-2">
                  {[1, 2, 3].map((_, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="text-primary">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                      <span className="text-text/80">
                        {index === 0 ? "زيادة معدل الاحتفاظ بالعملاء بنسبة تصل إلى 30%" : 
                         index === 1 ? "زيادة متوسط قيمة الطلب بنسبة 25%" : 
                         "الاستفادة من بيانات سلوك العملاء لتحسين العروض"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:h-full">
                <img 
                  src="/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png" 
                  alt="كاشباك دراهم" 
                  className="w-full h-full object-cover"
                />
              </div>
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
          
          {/* Use Cases with icons */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">حالات استخدام حلول الكاشباك</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="feature-card p-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <div className="text-primary p-2 bg-primary/10 rounded-full">
                      {useCase.icon}
                    </div>
                    {useCase.title}
                  </h3>
                  <p className="text-text/80 mb-4">
                    {useCase.description}
                  </p>
                </div>
              ))}
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
