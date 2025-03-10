
import { BriefcaseIcon, FileTextIcon, UserPlusIcon, ClipboardIcon } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "مطور واجهة أمامية",
      description: "نبحث عن مطور واجهة أمامية ذو خبرة في React وTypeScript لمساعدتنا في تطوير منصتنا الرقمية.",
      type: "دوام كامل",
      location: "طرابلس، ليبيا",
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
                <a href="#" className="button-primary inline-block">تقديم طلب</a>
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
              <a href="#" className="button-outline inline-block">تقديم طلب عام</a>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">لماذا تنضم إلينا؟</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              نحن نقدم بيئة عمل مرنة وحديثة، وفرص للتطور المهني، ومزايا تنافسية. انضم إلينا وكن جزءًا من فريق يعمل على تغيير مستقبل المدفوعات الرقمية في ليبيا.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-2">بيئة عمل مرنة</h3>
                <p className="text-text/70">نقدم ساعات عمل مرنة وإمكانية العمل عن بعد جزئياً</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-2">فرص النمو</h3>
                <p className="text-text/70">برامج تدريبية وفرص للتطور المهني وتعلم مهارات جديدة</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
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
