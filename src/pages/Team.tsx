
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Team = () => {
  const founders = [
    {
      id: 1,
      name: "محمد الزليطني",
      role: "المؤسس والرئيس التنفيذي",
      bio: "مهندس برمجيات مع أكثر من 10 سنوات من الخبرة في مجال التكنولوجيا المالية. قاد محمد العديد من المشاريع الناجحة في القطاع المصرفي قبل تأسيس دراهم.",
      imageUrl: "/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png",
      socialLinks: {
        email: "mohamed@darahem.com",
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "سارة العبيدي",
      role: "المؤسس المشارك ورئيس التكنولوجيا",
      bio: "خبيرة في تطوير البرمجيات وأمن المعلومات مع خبرة أكثر من 8 سنوات. تخصصت سارة في تطوير أنظمة المدفوعات الآمنة وتقود فريق التطوير التقني في دراهم.",
      imageUrl: "/lovable-uploads/9b14e838-2969-48fd-be92-aa3e678c56d3.png",
      socialLinks: {
        email: "sara@darahem.com",
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">فريقنا</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              تعرف على الأشخاص الذين يقودون ثورة المدفوعات الرقمية في ليبيا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            {founders.map((founder) => (
              <div key={founder.id} className="feature-card group hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="inline-block rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                    <img 
                      src={founder.imageUrl} 
                      alt={founder.name} 
                      className="w-48 h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">{founder.name}</h3>
                  <p className="text-primary font-medium">{founder.role}</p>
                </div>
                
                <p className="text-text/80 mb-8 text-center">
                  {founder.bio}
                </p>
                
                <div className="flex justify-center gap-4">
                  <a href={`mailto:${founder.socialLinks.email}`} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    <Mail size={20} />
                  </a>
                  <a href={founder.socialLinks.twitter} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href={founder.socialLinks.linkedin} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={founder.socialLinks.github} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">انضم إلى فريقنا</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              نحن دائمًا نبحث عن المواهب المتميزة للانضمام إلى فريقنا. استكشف الفرص المتاحة لدينا.
            </p>
            <a href="/jobs" className="button-primary inline-block">استكشف الوظائف</a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
