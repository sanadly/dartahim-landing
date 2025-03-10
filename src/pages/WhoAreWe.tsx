
import { Info, Clock, Target, Briefcase, Heart, Shield, Award, Users, Zap, BarChart4 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const WhoAreWe = () => {
  const companyValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "الموثوقية",
      description: "نلتزم بتقديم خدمات مالية موثوقة وآمنة تحظى بثقة عملائنا في جميع الأوقات."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "الأمان",
      description: "نستخدم أحدث تقنيات التشفير وأمن المعلومات لحماية بيانات ومعاملات عملائنا."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "الابتكار",
      description: "نسعى باستمرار لتطوير حلول مالية مبتكرة تلبي احتياجات السوق المتغيرة."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "الشفافية",
      description: "نؤمن بأهمية الشفافية في جميع تعاملاتنا مع العملاء والشركاء والموظفين."
    }
  ];

  const keyFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "نظام بطاقات الولاء",
      description: "نقدم نظام بطاقات ولاء رقمي متكامل يمكن الشركات من تقديم تجربة استثنائية لعملائها."
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "منصة تحليلات متقدمة",
      description: "نوفر منصة تحليلات متقدمة تمكن الشركات من فهم سلوك العملاء واتخاذ قرارات مدروسة."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "حلول الكاشباك",
      description: "نقدم حلول كاشباك مبتكرة تعزز ولاء العملاء وتزيد من معدلات العائد على الاستثمار."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "منصات تسويقية متكاملة",
      description: "نوفر منصات تسويقية متكاملة تمكن الشركات من تنفيذ استراتيجيات تسويقية فعالة."
    }
  ];

  const stats = [
    { value: "+60", label: "عميل في ليبيا", icon: <Users className="h-5 w-5" /> },
    { value: "+200", label: "معاملة يومية", icon: <BarChart4 className="h-5 w-5" /> },
    { value: "99%", label: "نسبة رضا العملاء", icon: <Heart className="h-5 w-5" /> },
    { value: "24/7", label: "دعم فني متواصل", icon: <Zap className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              تعرف على قصة دراهم ورؤيتنا لمستقبل المدفوعات الرقمية في ليبيا
            </p>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-white/50 backdrop-blur-sm p-4 border border-secondary/30 flex items-center gap-4 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-text/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Our Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                بدأت رحلة دراهم من رؤية لتحويل طريقة تعامل الناس في ليبيا مع المال. لاحظنا التحديات التي يواجهها الناس في إجراء المعاملات المالية، والاعتماد الكبير على النقد، ومحدودية الوصول إلى الخدمات المالية الرقمية.
              </p>
              <p className="text-text/80 mb-4 leading-relaxed">
                تأسست دراهم في عام 2020 بهدف إنشاء نظام مالي رقمي سهل الاستخدام، آمن، وموثوق به للمستخدمين والشركات في ليبيا. منذ ذلك الوقت، نمت دراهم لتصبح منصة متكاملة توفر مجموعة متنوعة من الخدمات المالية، بما في ذلك المدفوعات الإلكترونية، بطاقات الولاء، وحلول الكاشباك.
              </p>
              <p className="text-text/80 leading-relaxed">
                اليوم، نفخر بخدمة آلاف العملاء والشركاء في جميع أنحاء ليبيا، ونواصل الابتكار وتطوير حلول مالية تلبي احتياجات السوق المتغيرة.
              </p>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png" 
                alt="قصة دراهم" 
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              />
            </div>
          </div>
          
          {/* Our Products/Features Section */}
          <div className="mb-20 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl font-bold mb-8 text-center">خدماتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, idx) => (
                <div key={idx} 
                     className="rounded-xl p-6 bg-white/50 backdrop-blur-sm border border-secondary/30 flex gap-4 hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
                     style={{ animationDelay: `${0.6 + idx * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-text/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Our Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="feature-card p-8 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Clock className="text-primary" />
                <span>رؤيتنا</span>
              </h3>
              <p className="text-text/80 leading-relaxed">
                نطمح أن تكون دراهم المنصة المالية الرقمية الرائدة في ليبيا، ممكنة الأفراد والشركات من إجراء المعاملات المالية بسهولة وأمان، والمساهمة في تطوير اقتصاد رقمي شامل ومستدام.
              </p>
            </div>
            <div className="feature-card p-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="text-primary" />
                <span>مهمتنا</span>
              </h3>
              <p className="text-text/80 leading-relaxed">
                مهمتنا هي توفير حلول مالية رقمية مبتكرة، آمنة، وسهلة الاستخدام للجميع في ليبيا، مع تمكين الشركات من النمو وتحسين تجربة العملاء، والمساهمة في التحول الرقمي للاقتصاد الليبي.
              </p>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mb-20 animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <h2 className="text-3xl font-bold mb-8 text-center">قيمنا</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <div key={index} className="feature-card p-8 text-center hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-text/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card Dashboard Visualization */}
          <div className="mb-20 animate-fade-up" style={{ animationDelay: '1s' }}>
            <h2 className="text-3xl font-bold mb-8 text-center">منصتنا الرقمية</h2>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 p-6 overflow-hidden">
              {/* Decorative Card Elements */}
              <div className="absolute top-10 left-10 w-64 h-40 rounded-xl glass-card bg-gradient-to-br from-primary/30 to-primary/10 -rotate-6 shadow-lg"></div>
              <div className="absolute top-20 left-20 w-64 h-40 rounded-xl glass-card bg-gradient-to-br from-secondary/30 to-secondary/10 rotate-3 shadow-lg"></div>
              <div className="absolute bottom-10 right-10 w-80 h-48 rounded-xl glass-card bg-gradient-to-br from-white/50 to-white/20 rotate-6 shadow-lg"></div>
              
              {/* Dashboard Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">منصة دراهم المتكاملة</h3>
                  <p className="text-sm text-text/70">إدارة برامج الولاء وتحليل سلوك العملاء في مكان واحد</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/60 rounded-lg p-3 text-center shadow-sm">
                    <div className="text-primary text-xl font-bold">5,240</div>
                    <div className="text-xs text-text/70">عميل نشط</div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 text-center shadow-sm">
                    <div className="text-primary text-xl font-bold">12,750</div>
                    <div className="text-xs text-text/70">معاملة شهرية</div>
                  </div>
                </div>
                
                <div className="bg-white/60 rounded-lg p-3 shadow-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-text/70">معدل النمو الشهري</span>
                    <span className="text-xs font-bold text-primary">+24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16 animate-fade-up" style={{ animationDelay: '1.1s' }}>
            <h2 className="text-3xl font-bold mb-4">انضم إلى رحلتنا</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              نحن ملتزمون بتطوير خدمات مالية رقمية تلبي احتياجات المستخدمين والشركات في ليبيا. تواصل معنا اليوم لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك.
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

export default WhoAreWe;
