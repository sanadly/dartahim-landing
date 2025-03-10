import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import RegistrationBadge from "./RegistrationBadge";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const socialLinks = [
    { name: "Facebook", url: "#", icon: <Facebook className="h-5 w-5" /> },
    { name: "Twitter", url: "#", icon: <Twitter className="h-5 w-5" /> },
    { name: "Instagram", url: "#", icon: <Instagram className="h-5 w-5" /> },
    { name: "LinkedIn", url: "#", icon: <Linkedin className="h-5 w-5" /> },
  ];
  
  return (
    <footer className="bg-primary/5 py-12 md:py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/lovable-uploads/01b4c9b6-74b9-4aa4-95ae-cef321707e46.png" alt="Darahim Logo" className="h-10" />
              <span className="font-bold text-xl">دراهم</span>
            </a>
            <p className="text-text/70 max-w-md mb-4">
              نقدم حلول مخصصة لبرامج الولاء والتسويق الرقمي للشركات في ليبيا، من خلال تطبيقات وأنظمة مبتكرة تناسب احتياجات عملك وتساعدك على بناء علاقات أقوى مع عملائك.
            </p>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text/70 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <RegistrationBadge variant="footer" className="mb-4" />
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/who-are-we" className="hover:text-primary transition-colors">من نحن</a>
              </li>
              <li>
                <a href="/news" className="hover:text-primary transition-colors">الأخبار</a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-primary transition-colors">الوظائف</a>
              </li>
              <li>
                <a href="/help-center" className="hover:text-primary transition-colors">مركز المساعدة</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">خدماتنا</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/loyalty-cards" className="hover:text-primary transition-colors">بطاقات الولاء</a>
              </li>
              <li>
                <a href="/cashback-solutions" className="hover:text-primary transition-colors">حلول الكاشباك</a>
              </li>
              <li>
                <a href="/marketing-platforms" className="hover:text-primary transition-colors">منصات التسويق</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-text/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-text/60 text-sm">
          <p>{currentYear} © دراهم. جميع الحقوق محفوظة.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="hover:text-primary transition-colors">شروط الاستخدام</a>
            <a href="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
