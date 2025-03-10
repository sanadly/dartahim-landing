
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Star, Gift, User, CreditCard, TrendingUp, Award, Shield, Crown, Sparkles, ChevronRight } from "lucide-react";
import BookingButton from "@/components/BookingButton";

const LoyaltyCards = () => {
  const benefits = [{
    icon: <Star className="h-6 w-6" />,
    title: "زيادة ولاء العملاء",
    description: "تعزز بطاقات الولاء من ارتباط العملاء بعلامتك التجارية وتزيد من معدلات الاحتفاظ بهم."
  }, {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "زيادة المبيعات",
    description: "يزيد متوسط قيمة المعاملات والتردد على المتجر مع برامج الولاء الفعالة."
  }, {
    icon: <User className="h-6 w-6" />,
    title: "فهم أفضل للعملاء",
    description: "جمع بيانات قيمة عن سلوك العملاء وتفضيلاتهم لتحسين عروضك."
  }];
  
  const features = [{
    title: "برامج النقاط المرنة",
    description: "صمم نظام نقاط يناسب عملك مع خيارات متعددة للكسب والاسترداد."
  }, {
    title: "بطاقات رقمية وفعلية",
    description: "اختر بين البطاقات الرقمية، البطاقات البلاستيكية أو كليهما حسب احتياجاتك."
  }, {
    title: "المكافآت المخصصة",
    description: "حدد مكافآت فريدة ومخصصة لعملائك بناءً على سلوكهم الشرائي."
  }, {
    title: "التكامل السلس",
    description: "تكامل سهل مع أنظمة نقاط البيع وأنظمة إدارة العملاء الحالية."
  }, {
    title: "لوحة تحكم شاملة",
    description: "تتبع ومراقبة برنامج الولاء الخاص بك من خلال لوحة تحكم سهلة الاستخدام."
  }, {
    title: "تحليلات متقدمة",
    description: "تقارير وتحليلات تفصيلية لقياس أداء برنامج الولاء وتأثيره على عملك."
  }];

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
          
          {/* Main Content - replaced image with component */}
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
              {/* Loyalty Card Component */}
              <div className="relative">
                {/* Background elements */}
                <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
                
                {/* Main loyalty card */}
                <div className="relative perspective-1000">
                  {/* Card 1 - Main Card */}
                  <div className="bg-gradient-to-r from-primary to-accent rounded-2xl shadow-xl p-6 mb-6 transform hover:-rotate-y-12 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white font-bold">د</span>
                        </div>
                        <h3 className="text-white font-bold">بطاقة دراهم الذهبية</h3>
                      </div>
                      <div className="flex items-center gap-1">
                        <Crown className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                        <span className="text-white font-medium text-sm">VIP</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between mb-4">
                      <div>
                        <div className="text-white/70 text-xs mb-1">حامل البطاقة</div>
                        <div className="text-white font-medium">أحمد محمد</div>
                      </div>
                      <div>
                        <div className="text-white/70 text-xs mb-1">صالحة حتى</div>
                        <div className="text-white font-medium">12/2026</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/20 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white/70 text-xs mb-1">مجموع النقاط</div>
                          <div className="text-white font-bold text-xl">12,450</div>
                        </div>
                        <div>
                          <div className="text-white/70 text-xs mb-1">المستوى</div>
                          <div className="text-white font-bold text-xl">ذهبي</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-white/70 text-xs">بطاقة رقم #LY2345678</div>
                      <div className="flex items-center gap-1">
                        <Sparkles className="h-4 w-4 text-yellow-300" />
                        <span className="text-white text-xs">تقدم للمستوى التالي: 550 نقطة</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 2 - Behind Card */}
                  <div className="absolute top-10 -right-6 w-full h-40 bg-gradient-to-r from-secondary/80 to-primary/50 rounded-2xl shadow-lg p-4 -z-10 transform -rotate-y-6 opacity-80">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">د</span>
                        </div>
                        <h3 className="text-white text-sm font-bold">بطاقة دراهم الفضية</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 3 - Bottom Card */}
                  <div className="absolute top-16 -right-12 w-full h-40 bg-gradient-to-r from-accent/50 to-secondary/50 rounded-2xl shadow-lg p-4 -z-20 transform -rotate-y-12 opacity-60">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">د</span>
                        </div>
                        <h3 className="text-white text-sm font-bold">بطاقة دراهم البرونزية</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Benefits banner */}
                <div className="bg-white rounded-xl shadow-lg border border-primary/10 p-4 mt-8">
                  <h4 className="font-bold text-center mb-2">مزايا حصرية لحاملي البطاقات</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>خصومات حصرية تصل إلى 20%</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>نقاط مضاعفة في المناسبات الخاصة</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>وصول مبكر للعروض والتخفيضات</span>
                    </li>
                  </ul>
                </div>
              </div>
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
          
          {/* Added image section for engagement */}
          <div className="mb-20 bg-primary/5 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:h-full">
                <img alt="بطاقات ولاء دراهم" className="w-full h-full object-cover" src="/lovable-uploads/8d82719d-8f80-4a58-9372-6835998ad7a9.jpg" />
              </div>
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-4">برامج ولاء مبتكرة ومتطورة</h2>
                <p className="text-text/80 mb-6">
                  تعزز بطاقات الولاء من دراهم علاقتك مع عملائك وتقوي ارتباطهم بعلامتك التجارية من خلال نظام مكافآت متطور يمنحهم قيمة حقيقية.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">انضمام سهل وسريع</h3>
                      <p className="text-sm text-text/70">
                        يستطيع العملاء الانضمام إلى برنامج الولاء الخاص بك بخطوات بسيطة وفي أقل من دقيقة.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">أمان وخصوصية</h3>
                      <p className="text-sm text-text/70">
                        تضمن تقنيات الأمان المتقدمة حماية بيانات العملاء وتحافظ على خصوصيتهم.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">مكافآت متنوعة</h3>
                      <p className="text-sm text-text/70">
                        مجموعة واسعة من المكافآت والهدايا التي تناسب تفضيلات العملاء المختلفة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
              <BookingButton />
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
