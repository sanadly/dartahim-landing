
import { Heart, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "الشركة",
      links: [
        { name: "من نحن", url: "#" },
        { name: "فريق العمل", url: "#" },
        { name: "الوظائف", url: "#" },
        { name: "الأخبار", url: "#" }
      ]
    },
    {
      title: "المنتجات",
      links: [
        { name: "بطاقات الولاء", url: "#" },
        { name: "حلول الكاشباك", url: "#" },
        { name: "منصات التسويق", url: "#" },
        { name: "الدفع الإلكتروني", url: "#" }
      ]
    },
    {
      title: "الدعم",
      links: [
        { name: "مركز المساعدة", url: "#" },
        { name: "الأسئلة الشائعة", url: "#" },
        { name: "التوثيق", url: "#" },
        { name: "اتصل بنا", url: "#contact" }
      ]
    },
    {
      title: "قانوني",
      links: [
        { name: "شروط الخدمة", url: "#" },
        { name: "سياسة الخصوصية", url: "#" },
        { name: "سياسة ملفات الارتباط", url: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-primary/5 pt-16 pb-8 px-6">
      <div className="container mx-auto">
        {/* Footer Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.url} 
                      className="text-text/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Footer Middle - Newsletter */}
        <div className="py-8 border-t border-b border-primary/10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-bold text-lg mb-2">اشترك في نشرتنا الإخبارية</h4>
              <p className="text-text/70 mb-0">احصل على آخر التحديثات والعروض الخاصة</p>
            </div>
            <div>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني" 
                  className="px-4 py-2 rounded-lg bg-white/50 border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 flex-grow"
                />
                <button type="submit" className="button-primary whitespace-nowrap">
                  اشترك الآن
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-text flex items-center gap-2">
              <img src="/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png" alt="دراهم" className="h-10" />
            </a>
          </div>
          
          <div className="text-text/70 text-sm flex items-center gap-1">
            <span>صنع بكل</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>في ليبيا {currentYear} ©</span>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-text/70 hover:text-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-text/70 hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-text/70 hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-text/70 hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-text/70 hover:text-primary transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
