
import { BriefcaseIcon, FileTextIcon, UserPlusIcon, ClipboardIcon, GraduationCap, Flame, Users, Mail } from "lucide-react";
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
      icon: <BriefcaseIcon className="h-6 w-6" />
    },
    {
      id: 2,
      title: "مصمم تجربة المستخدم",
      description: "نبحث عن مصمم تجربة مستخدم مبدع للانضمام إلى فريقنا وتحسين تجربة المستخدم لمنتجاتنا.",
      type: "دوام كامل",
      location: "عن بعد",
      icon: <FileTextIcon className="h-6 w-6" />
    },
    {
      id: 3,
      title: "مطور خلفية",
      description: "نبحث عن مطور خلفية ذو خبرة في Node.js وقواعد البيانات لتطوير بنية تحتية قوية لمنصتنا.",
      type: "دوام جزئي",
      location: "بنغازي، ليبيا",
      icon: <ClipboardIcon className="h-6 w-6" />
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
          
          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-16 h-[300px] md:h-[400px]">
            <img 
              src="/lovable-uploads/1f1a3c21-8499-4e8e-847d-49ff8212b3cf.png" 
              alt="فريق عمل دراهم" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 md:p-10 text-white max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">كن جزءًا من فريق دراهم</h2>
                <p className="text-white/80">انضم إلى فريق من المبدعين والمطورين الذين يعملون على تغيير مستقبل برامج الولاء والتسويق الرقمي في ليبيا</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {jobs.map((job) => (
              <div key={job.id} className="feature-card group hover:shadow-lg transition-all duration-300">
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
                  <Mail className="h-4 w-4" />
                  تقديم طلب
                </a>
              </div>
            ))}
            
            {/* Unsolicited Application Card */}
            <div className="feature-card group hover:shadow-lg transition-all duration-300">
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
                <Mail className="h-4 w-4" />
                تقديم طلب عام
              </a>
            </div>
          </div>
          
          {/* Team Culture Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">ثقافة الفريق</h2>
              <p className="text-text/80 mb-4">
                في دراهم، نؤمن بأن أفضل الأفكار تأتي من فريق متنوع ومتعاون. نحن نقدّر الإبداع والابتكار والعمل الجماعي، ونسعى دائمًا لتوفير بيئة عمل إيجابية ومحفزة.
              </p>
              <p className="text-text/80 mb-6">
                نحن نشجع التعلم المستمر والتطور المهني، ونوفر لفريقنا الفرصة للعمل على مشاريع متنوعة ومثيرة تسهم في تطوير مهاراتهم وخبراتهم.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="text-primary bg-primary/10 p-2 rounded-full">
                    <Flame className="h-5 w-5" />
                  </div>
                  <span>بيئة عمل مرنة وديناميكية</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-primary bg-primary/10 p-2 rounded-full">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span>فرص للتعلم والتطور المهني</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="text-primary bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5" />
                  </div>
                  <span>فريق متعاون ومتنوع</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-[160px]">
                <img src="/lovable-uploads/9d3431e8-f0b4-4b0c-a766-c4ba1bd2505d.jpg" alt="فريق العمل" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-[160px]">
                <img src="/lovable-uploads/a60ccd7c-eb30-4c78-ae67-9c6337896ffc.jpg" alt="بيئة العمل" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-[160px] col-span-2">
                <img src="/lovable-uploads/da1e9582-2257-4e62-a7c9-5b81477776c8.jpg" alt="مكتب العمل" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">لماذا تنضم إلينا؟</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              نحن نقدم بيئة عمل مرنة وحديثة، وفرص للتطور المهني، ومزايا تنافسية. انضم إلينا وكن جزءًا من فريق يعمل على تطوير برامج الولاء والتسويق الرقمي في ليبيا.
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
