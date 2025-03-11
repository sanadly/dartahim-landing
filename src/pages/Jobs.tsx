
import { BriefcaseIcon, FileTextIcon, UserPlusIcon, ClipboardIcon, GraduationCap, Flame, Users, Mail, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "مطور واجهة أمامية",
      description: "نبحث عن مطور واجهة أمامية ذو خبرة في React وTypeScript لمساعدتنا في تطوير منصتنا الرقمية.",
      type: "دوام كامل",
      location: "عن بعد",
      icon: <BriefcaseIcon className="h-6 w-6" />,
      imageUrl: "/lovable-uploads/frontend.avif"
    },
    {
      id: 2,
      title: "مصمم تجربة المستخدم",
      description: "نبحث عن مصمم تجربة مستخدم مبدع للانضمام إلى فريقنا وتحسين تجربة المستخدم لمنتجاتنا.",
      type: "دوام كامل",
      location: "عن بعد",
      icon: <FileTextIcon className="h-6 w-6" />,
      imageUrl: "/lovable-uploads/ux.avif"
    },
    {
      id: 3,
      title: "مطور خلفية",
      description: "نبحث عن مطور خلفية ذو خبرة في Node.js وقواعد البيانات لتطوير بنية تحتية قوية لمنصتنا.",
      type: "دوام جزئي",
      location: "بنغازي، ليبيا",
      icon: <ClipboardIcon className="h-6 w-6" />,
      imageUrl: "/lovable-uploads/backend.avif"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">انضم إلى فريقنا</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              نحن دائمًا نبحث عن المواهب المتميزة للانضمام إلى فريقنا. استكشف الفرص المتاحة أدناه.
            </p>
          </div>
          
          <div className="relative mb-16 overflow-hidden rounded-2xl">
            <img 
              src="/lovable-uploads/team.avif" 
              alt="فريق العمل" 
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">كن جزءًا من فريق مبدع</h2>
              <p className="text-white/90 max-w-2xl">
                نؤمن بأن نجاحنا يأتي من فريقنا المتميز. نحن نبحث عن المبدعين والمتحمسين والطموحين للانضمام إلى رحلتنا في بناء مستقبل الحلول الرقمية في ليبيا.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {jobs.map((job) => (
              <div key={job.id} className="feature-card group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="h-48 w-full overflow-hidden rounded-t-xl">
                  <img 
                    src={job.imageUrl} 
                    alt={job.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-4 items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-sm text-text/60 flex gap-3 mt-1">
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-text/80 mb-6">
                    {job.description}
                  </p>
                  <a 
                    href={`mailto:cv@darahim.ly?subject=طلب توظيف: ${job.title}`} 
                    className="button-primary inline-flex items-center gap-2"
                  >
                    <Mail size={16} />
                    <span>التقديم عبر البريد</span>
                  </a>
                </div>
              </div>
            ))}
            
            {/* Unsolicited Application Card */}
            <div className="feature-card group hover:shadow-lg transition-all duration-300">
              <div className="h-48 w-full overflow-hidden rounded-t-xl bg-gradient-to-r from-primary/30 to-accent/30">
                <div className="h-full w-full flex items-center justify-center">
                <img 
                    src="/lovable-uploads/bewerbung.jpg"
                    alt="bewerbung "
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-4 items-start mb-4">
                  <div className="p-3 bg-secondary/30 rounded-full text-primary">
                    <UserPlusIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">تقديم طلب عام</h3>
                    <p className="text-sm text-text/60 mt-1">
                      لا ترى الوظيفة المناسبة؟ تقدم بطلب عام
                    </p>
                  </div>
                </div>
                <p className="text-text/80 mb-6">
                  إذا كنت مهتمًا بالانضمام إلى فريقنا ولكن لم تجد الوظيفة المناسبة، يمكنك تقديم طلب عام وسنضعك في الاعتبار عندما تتوفر فرص مناسبة.
                </p>
                <a 
                  href="mailto:cv@darahim.ly?subject=طلب توظيف عام" 
                  className="button-outline inline-flex items-center gap-2"
                >
                  <Mail size={16} />
                  <span>إرسال طلب عام</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">لماذا تنضم إلينا؟</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              نحن نقدم بيئة عمل مرنة وحديثة، وفرص للتطور المهني، ومزايا تنافسية. انضم إلينا وكن جزءًا من فريق يعمل على تطوير مستقبل برامج الولاء والحلول الرقمية في ليبيا.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-primary mb-4">
                  <Flame className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="font-bold text-xl mb-2">بيئة عمل مرنة</h3>
                <p className="text-text/70">نقدم ساعات عمل مرنة وإمكانية العمل عن بعد جزئياً</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-primary mb-4">
                  <GraduationCap className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="font-bold text-xl mb-2">فرص النمو</h3>
                <p className="text-text/70">برامج تدريبية وفرص للتطور المهني وتعلم مهارات جديدة</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-primary mb-4">
                  <Users className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="font-bold text-xl mb-2">مزايا تنافسية</h3>
                <p className="text-text/70">رواتب تنافسية وتأمين صحي ومكافآت أداء</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
