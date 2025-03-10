import { Info, Clock, Target, Briefcase, Heart, Shield, Users, TrendingUp, CheckCircle, Zap, Award, GraduationCap, Building, Lightbulb } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import BookingButton from "@/components/BookingButton";

const founders = [
    {
      id: 1,
      name: "محمد الزليطني",
      role: "المؤسس والرئيس التنفيذي",
      bio: "مهندس برمجيات مع أكثر من 10 سنوات من الخبرة في مجال التكنولوجيا المالية. حاصل على درجة الماجستير من جامعة برلين التقنية، وقاد العديد من المشاريع الناجحة في القطاع المصرفي الألماني قبل تأسيس دراهم.",
      imageUrl: "/lovable-uploads/mo.jpeg",
      socialLinks: {
        email: "mohamed@darahem.com",
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "أحمد الحسن",
      role: "المدير العام",
      bio: "مهندس برمجيات مع أكثر من 15 سنوات من الخبرة في مجال التكنولوجيا المالية. حاصل على درجة الماجستير من جامعة القاهرة، وقاد العديد من المشاريع الناجحة في القطاع المصرفي المصري قبل تأسيس دراهم.",
      imageUrl: "/lovable-uploads/sara.jpeg",
      socialLinks: {
        email: "ahmed@darahem.com",
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    }
];

const WhoAreWe = () => {
  const [isVisible, setIsVisible] = useState<{
    [key: string]: boolean;
  }>({
    story: false,
    values: false,
    expertise: false,
    services: false,
    cta: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['story', 'values', 'expertise', 'services', 'cta'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const position = element.getBoundingClientRect();
          if (position.top < window.innerHeight * 0.75) {
            setIsVisible(prev => ({
              ...prev,
              [section]: true
            }));
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyValues = [{
    icon: <Heart className="h-8 w-8" />,
    title: "الموثوقية",
    description: "نلتزم بتقديم برامج ولاء وحلول تسويقية موثوقة وفعالة تنال ثقة عملائنا التجاريين."
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "الأمان",
    description: "نستخدم أحدث تقنيات التشفير وأمن المعلومات لحماية بيانات مستخدمي منصاتنا وتطبيقاتنا."
  }, {
    icon: <Target className="h-8 w-8" />,
    title: "الابتكار",
    description: "نسعى باستمرار لتطوير حلول برمجية مبتكرة تلبي احتياجات الشركات المتغيرة في السوق الليبي."
  }, {
    icon: <Briefcase className="h-8 w-8" />,
    title: "الشفافية",
    description: "نؤمن بأهمية الشفافية في جميع تعاملاتنا مع العملاء والشركاء والموظفين."
  }];

  const expertiseAreas = [{
    icon: <Award className="h-6 w-6" />,
    title: "خبرة عملية",
    description: "فريق عمل متخصص يملك خبرة عملية في مجال تطوير برامج الولاء والحلول التسويقية الرقمية تمتد لأكثر من 10 سنوات."
  }, {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "خلفية أكاديمية",
    description: "نضم متخصصين حاصلين على شهادات أكاديمية عليا في مجالات هندسة البرمجيات وتكنولوجيا المعلومات من ألمانيا."
  }, {
    icon: <Building className="h-6 w-6" />,
    title: "شراكات دولية",
    description: "نتعاون مع شركات برمجية عالمية لتطبيق أفضل الممارسات في تطوير برامج الولاء وحلول التسويق الرقمية."
  }, {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "البحث والتطوير",
    description: "نستثمر بشكل مستمر في البحث والتطوير لابتكار حلول رقمية تناسب احتياجات الشركات والأعمال في السوق الليبي."
  }];

  const serviceFeatures = [{
    title: "بطاقات الولاء",
    description: "أنظمة ولاء متكاملة تساعد الشركات على زيادة ولاء العملاء وتعزيز المبيعات.",
    icon: <Users className="h-6 w-6" />,
    color: "bg-primary/10",
    link: "/loyalty-cards"
  }, {
    title: "حلول الكاشباك",
    description: "منصات استرداد نقدي متطورة تزيد من معدلات التحويل وتحفز العملاء على الشراء المتكرر.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "bg-secondary/10",
    link: "/cashback-solutions"
  }, {
    title: "منصات التسويق",
    description: "أدوات تسويقية متكاملة تمكنك من التواصل مع عملائك وتقديم عروض مخصصة.",
    icon: <Zap className="h-6 w-6" />,
    color: "bg-accent/10",
    link: "/marketing-platforms"
  }];

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              تعرف على قصة دراهم ورؤيتنا لمستقبل برامج الولاء والحلول التسويقية الرقمية في ليبيا
            </p>
          </div>
          
          {/* Our Story Section */}
          <div id="story" className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
            <div className={cn("transition-all duration-700", isVisible.story ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50px]")}>
              <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
              <p className="text-text/80 mb-4 leading-relaxed">
                تأسست شركة دراهم بواسطة مجموعة من الخبراء في مجال تطوير البرمجيات وأنظمة الولاء الرقمية، مستفيدين من خبراتهم في السوق الألماني وتعليمهم في أفضل الجامعات الألمانية. هدفنا هو تقديم حلول برمجية مبتكرة للشركات والمؤسسات في ليبيا، تركز على برامج الولاء وأنظمة التسويق الرقمية المخصصة.
              </p>
              <p className="text-text/80 mb-4 leading-relaxed">
                بدأت رحلتنا في عام 2020 بتطوير منصات متخصصة في أنظمة الولاء الرقمية والتطبيقات المخصصة للشركات، مستفيدين من خبرتنا في السوق الألماني وعلاقاتنا مع كبرى شركات البرمجة في ألمانيا. ومع مرور الوقت توسعت خدماتنا لتشمل حلول الكاشباك المتطورة ومنصات التسويق الرقمية المتكاملة.
              </p>
              <p className="text-text/80 leading-relaxed">
                نجمع بين الخبرة التقنية الألمانية والفهم العميق للسوق الليبي لتقديم حلول برمجية متكاملة مصممة خصيصاً لتلبية احتياجات الشركات المحلية، مع التركيز على تطوير برامج الولاء وأنظمة التسويق التي تساعد الشركات على تنمية أعمالها وتعزيز علاقاتها مع عملائها.
              </p>
            </div>
            <div className={cn("relative transition-all duration-700", isVisible.story ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50px]")}>
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
              <img alt="قصة دراهم" src="/lovable-uploads/bdfa7c4b-92a3-45d1-a576-a9b04c74bcc2.jpg" className="w-full h-[400px] rounded-2xl shadow-lg hover:shadow-xl transition-shadow object-cover" />
            </div>
          </div>
          
          {/* Our Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className={cn("feature-card p-8 transition-all duration-500", isVisible.story ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20")}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Clock className="text-primary" />
                <span>رؤيتنا</span>
              </h3>
              <p className="text-text/80 leading-relaxed">
                نطمح أن تكون دراهم الشريك الاستراتيجي الأول للشركات والمؤسسات في ليبيا في مجال تطوير برامج الولاء الرقمية وأنظمة التسويق المخصصة، من خلال تقديم تطبيقات وحلول برمجية متميزة ومبتكرة تساهم في تطوير بيئة الأعمال الرقمية في ليبيا، وتمكين الشركات من النمو وتحقيق أهدافها.
              </p>
            </div>
            <div className={cn("feature-card p-8 transition-all duration-500 delay-100", isVisible.story ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20")}>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="text-primary" />
                <span>مهمتنا</span>
              </h3>
              <p className="text-text/80 leading-relaxed">
                مهمتنا هي تمكين الشركات والمؤسسات من تطوير علاقات أقوى مع عملائها من خلال توفير حلول برمجية متكاملة لبرامج الولاء ومنصات التسويق الرقمية، مع تقديم تطبيقات مخصصة تلبي احتياجات كل عميل وتساعده على تحسين تجربة عملائه وزيادة إيراداته، مستندين إلى خبرتنا التقنية والعملية في هذا المجال.
              </p>
            </div>
          </div>
          
          {/* Our Values */}
          <div id="values" className="mb-20">
            <h2 className={cn("text-3xl font-bold mb-8 text-center transition-all duration-500", isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>قيمنا</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => <div key={index} className={cn("feature-card p-8 text-center hover:bg-white/80 transition-all duration-500", isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20")} style={{
              transitionDelay: `${index * 100}ms`
            }}>
                  <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-text/80">{value.description}</p>
                </div>)}
            </div>
          </div>
          
          {/* Our Expertise - New Section */}
          <div id="expertise" className="mb-20">
            <h2 className={cn("text-3xl font-bold mb-8 text-center transition-all duration-500", isVisible.expertise ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>خبرتنا ومؤهلاتنا</h2>
            <p className={cn("text-text/70 max-w-3xl mx-auto text-center mb-10 transition-all duration-500 delay-100", isVisible.expertise ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              نجمع بين الخبرة العملية والمؤهلات الأكاديمية لتقديم أفضل الحلول التقنية والاستشارية في مجال تطوير البرمجيات
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseAreas.map((area, index) => <div key={index} className={cn("feature-card p-8 hover:scale-[1.02] transition-all duration-500", isVisible.expertise ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20")} style={{
              transitionDelay: `${index * 150}ms`
            }}>
                  <div className="bg-accent/10 p-3 rounded-lg inline-flex mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-text/80 mb-4">{area.description}</p>
                </div>)}
            </div>
          </div>
          
          {/* Our Services */}
          <div id="services" className="mb-20">
            <h2 className={cn("text-3xl font-bold mb-8 text-center transition-all duration-500", isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>خدماتنا</h2>
            <p className={cn("text-text/70 max-w-3xl mx-auto text-center mb-10 transition-all duration-500 delay-100", isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
              نقدم مجموعة متكاملة من الحلول الرقمية المخصصة للشركات والمؤسسات لتعزيز علاقاتها مع العملاء وزيادة إيراداتها
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceFeatures.map((service, index) => <div key={index} className={cn("feature-card p-8 hover:scale-[1.02] transition-all duration-500", isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20")} style={{
              transitionDelay: `${index * 150}ms`
            }}>
                  <div className={`${service.color} p-3 rounded-lg inline-flex mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-text/80 mb-4">{service.description}</p>
                  <a href={service.link} className="text-primary font-medium flex items-center hover:underline">
                    اكتشف المزيد 
                    <CheckCircle className="h-4 w-4 mr-1" />
                  </a>
                </div>)}
            </div>
          </div>
          
          {/* CTA */}
          <div id="cta" className={cn("bg-primary/5 rounded-2xl p-10 text-center mb-16 transition-all duration-700", isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20")}>
            <h2 className="text-3xl font-bold mb-4">تعاون معنا لتطوير أعمالك</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              نحن ملتزمون بتقديم حلول مبتكرة ومخصصة لكل عميل، تلبي احتياجاته الخاصة وتساعده على تحقيق أهدافه. تواصل معنا اليوم للحصول على استشارة مجانية حول كيفية تطوير علاقتك مع عملائك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingButton className="text-sm md:text-base py-2 md:py-3" />
              <a href="/#contact" className="button-outline hover:scale-105 transition-transform">تواصل معنا</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default WhoAreWe;
