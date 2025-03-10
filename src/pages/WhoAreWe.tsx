
import { Info, Clock, Target, Briefcase, Heart, Shield } from "lucide-react";
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

  const milestones = [
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              تعرف على قصة دراهم ورؤيتنا لمستقبل المدفوعات الرقمية في ليبيا
            </p>
          </div>
          
          {/* Our Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div>
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
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png" 
                alt="قصة دراهم" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Our Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="feature-card p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Clock className="text-primary" />
                <span>رؤيتنا</span>
              </h3>
              <p className="text-text/80 leading-relaxed">
                نطمح أن تكون دراهم المنصة المالية الرقمية الرائدة في ليبيا، ممكنة الأفراد والشركات من إجراء المعاملات المالية بسهولة وأمان، والمساهمة في تطوير اقتصاد رقمي شامل ومستدام.
              </p>
            </div>
            <div className="feature-card p-8">
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
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">قيمنا</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <div key={index} className="feature-card p-8 text-center">
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-text/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Milestones */}
          <div className="mb-20">
            /*<h2 className="text-3xl font-bold mb-8 text-center">مراحل تطورنا</h2>*/
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:gap-8`}>
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <div className="feature-card p-8">
                        <div className="text-primary font-bold text-3xl mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-text/80">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-8 relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full"></div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* CTA */}
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">انضم إلى رحلتنا</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              نحن ملتزمون بتطوير خدمات مالية رقمية تلبي احتياجات المستخدمين والشركات في ليبيا. تواصل معنا اليوم لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="button-primary">ابدأ الآن</a>
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
