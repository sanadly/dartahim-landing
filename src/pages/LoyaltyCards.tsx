
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Star, Gift, User, CreditCard, TrendingUp } from "lucide-react";

const LoyaltyCards = () => {
  const benefits = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "زيادة ولاء العملاء",
      description: "تعزز بطاقات الولاء من ارتباط العملاء بعلامتك التجارية وتزيد من معدلات الاحتفاظ بهم."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "زيادة المبيعات",
      description: "يزيد متوسط قيمة المعاملات والتردد على المتجر مع برامج الولاء الفعالة."
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "فهم أفضل للعملاء",
      description: "جمع بيانات قيمة عن سلوك العملاء وتفضيلاتهم لتحسين عروضك."
    }
  ];

  const features = [
    {
      title: "برامج النقاط المرنة",
      description: "صمم نظام نقاط يناسب عملك مع خيارات متعددة للكسب والاسترداد."
    },
    {
      title: "بطاقات رقمية وفعلية",
      description: "اختر بين البطاقات الرقمية، البطاقات البلاستيكية أو كليهما حسب احتياجاتك."
    },
    {
      title: "المكافآت المخصصة",
      description: "حدد مكافآت فريدة ومخصصة لعملائك بناءً على سلوكهم الشرائي."
    },
    {
      title: "التكامل السلس",
      description: "تكامل سهل مع أنظمة نقاط البيع وأنظمة إدارة العملاء الحالية."
    },
    {
      title: "لوحة تحكم شاملة",
      description: "تتبع ومراقبة برنامج الولاء الخاص بك من خلال لوحة تحكم سهلة الاستخدام."
    },
    {
      title: "تحليلات متقدمة",
      description: "تقارير وتحليلات تفصيلية لقياس أداء برنامج الولاء وتأثيره على عملك."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">بطاقات الولاء</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              زد من ولاء عملائك وعزز مبيعاتك مع حلول بطاقات الولاء المبتكرة من دراهم
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">برامج ولاء تناسب كل الأعمال</h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                في عالم الأعمال التنافسي اليوم، أصبح الاحتفاظ بالعملاء أكثر أهمية من أي وقت مضى. توفر بطاقات الولاء من دراهم طريقة فعالة لتشجيع العملاء على العودة مراراً وتكراراً، وزيادة قيمة مشترياتهم في كل زيارة.
              </p>
              <p className="text-text/80 mb-4 leading-relaxed">
                نقدم حلول بطاقات ولاء متكاملة تناسب جميع أحجام الأعمال، من المتاجر الصغيرة إلى سلاسل البيع بالتجزئة الكبيرة. صممنا برامجنا لتكون مرنة وقابلة للتخصيص بالكامل لتلبية احتياجات عملك الفريدة.
              </p>
              <p className="text-text/80 leading-relaxed">
                مع بطاقات الولاء من دراهم، يمكنك بسهولة إدارة برنامج المكافآت الخاص بك، تتبع سلوك العملاء، وتصميم حملات مستهدفة لزيادة المبيعات والولاء على المدى الطويل.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png" 
                alt="بطاقات الولاء" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">فوائد برامج الولاء</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">مميزات حلول بطاقات الولاء</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="feature-card p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-text/80">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">جاهز لتعزيز ولاء عملائك؟</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              تواصل معنا اليوم لمعرفة المزيد عن حلول بطاقات الولاء المخصصة التي يمكننا تقديمها لعملك.
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

export default LoyaltyCards;
