
import { Info, Clock, Target, Briefcase, Heart, Shield, CheckCircle, ChevronRight, Users, Award } from "lucide-react";
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

  const keyStatistics = [
    { value: "3+", label: "سنوات من الخبرة" },
    { value: "50+", label: "شريك تجاري" },
    { value: "10K+", label: "مستخدم فعال" },
    { value: "99%", label: "رضا العملاء" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              تعرف على قصة دراهم ورؤيتنا لمستقبل المدفوعات الرقمية في ليبيا
            </p>
          </div>
          
          {/* Our Story Section - Enhanced with animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
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
              
              {/* Added bullet points for key achievements */}
              <div className="mt-6 space-y-2">
                {['تطوير أول نظام متكامل للمدفوعات الإلكترونية في ليبيا', 'بناء شبكة شركاء تضم أكثر من 50 متجر', 'إطلاق برنامج ولاء مبتكر يدعم الشركات الليبية'].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 animate-fade-up" style={{ animationDelay: `${0.4 + idx * 0.1}s` }}>
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-text/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/10 hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png" 
                  alt="قصة دراهم" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Key Statistics - New component */}
          <div className="mb-20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10">
              <h2 className="text-3xl font-bold mb-10 text-center">نمو وتطور مستمر</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {keyStatistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2 text-primary animate-fade-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                      {stat.value}
                    </div>
                    <div className="text-text/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Our Vision and Mission - Enhanced with animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="feature-card p-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Clock className="text-primary" />
                <span>رؤيتنا</span>
              </h3>
              <p className="text-text/80 leading-relaxed">
                نطمح أن تكون دراهم المنصة المالية الرقمية الرائدة في ليبيا، ممكنة الأفراد والشركات من إجراء المعاملات المالية بسهولة وأمان، والمساهمة في تطوير اقتصاد رقمي شامل ومستدام.
              </p>
              
              {/* Added visual component */}
              <div className="mt-6 bg-primary/5 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary mt-1" />
                  <p className="text-text/90 italic">
                    "نسعى لبناء مستقبل مالي رقمي شامل في ليبيا، حيث يمكن للجميع الاستفادة من التكنولوجيا المالية بطريقة آمنة وسهلة."
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-card p-8 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="text-primary" />
                <span>مهمتنا</span>
              </h3>
              <p className="text-text/80 leading-relaxed">
                مهمتنا هي توفير حلول مالية رقمية مبتكرة، آمنة، وسهلة الاستخدام للجميع في ليبيا، مع تمكين الشركات من النمو وتحسين تجربة العملاء، والمساهمة في التحول الرقمي للاقتصاد الليبي.
              </p>
              
              {/* Progress visualization */}
              <div className="mt-6 space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>تمكين الشركات</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>الخدمات الرقمية</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Values - Enhanced with animations */}
          <div className="mb-20 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold mb-8 text-center">قيمنا</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <div key={index} className="feature-card p-8 text-center group hover:bg-primary/5 transition-all animate-fade-up" style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-text/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* New Team Highlights Component */}
          <div className="mb-20 animate-fade-up" style={{ animationDelay: '1s' }}>
            <h2 className="text-3xl font-bold mb-8 text-center">فريقنا</h2>
            <div className="bg-secondary/10 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <Users className="h-20 w-20 text-primary p-4 bg-primary/10 rounded-full" />
              </div>
              <p className="text-center text-lg mb-6">
                يتكون فريق دراهم من خبراء في مجالات التكنولوجيا المالية، تطوير البرمجيات، وخدمة العملاء، جميعهم ملتزمون بتحقيق رؤيتنا في تقديم خدمات مالية رقمية متميزة في ليبيا.
              </p>
              <div className="flex justify-center">
                <a href="/team" className="button-primary inline-flex items-center gap-2">
                  <span>تعرف على فريقنا</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* New Awards & Recognition Component */}
          <div className="mb-20 animate-fade-up" style={{ animationDelay: '1.1s' }}>
            <h2 className="text-3xl font-bold mb-8 text-center">الجوائز والاعترافات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="feature-card p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">أفضل مزود خدمات مالية رقمية</h3>
                  <p className="text-text/70 text-sm">2022 - ملتقى التكنولوجيا المالية ليبيا</p>
                </div>
              </div>
              <div className="feature-card p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">أكثر الشركات الناشئة ابتكاراً</h3>
                  <p className="text-text/70 text-sm">2021 - منتدى ريادة الأعمال طرابلس</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA - Enhanced with animations */}
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16 animate-fade-up" style={{ animationDelay: '1.2s' }}>
            <h2 className="text-3xl font-bold mb-4">انضم إلى رحلتنا</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              نحن ملتزمون بتطوير خدمات مالية رقمية تلبي احتياجات المستخدمين والشركات في ليبيا. تواصل معنا اليوم لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="button-primary animate-float" style={{ animationDelay: '0.2s' }}>أحجز موعد</a>
              <a href="/#contact" className="button-outline animate-float" style={{ animationDelay: '0.4s' }}>تواصل معنا</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhoAreWe;
