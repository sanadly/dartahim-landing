
import { Heart, Facebook, Instagram, Twitter, Linkedin, Youtube, Award } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If we're on the home page, smooth scroll to the section
      const targetElement = document.querySelector(anchor);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on another page, navigate to home page with the anchor
      navigate('/', { replace: true });
      // Reset scroll position and then scroll to anchor after a short delay
      window.scrollTo(0, 0);
      
      // Use a timeout to ensure navigation completes before attempting to scroll
      setTimeout(() => {
        const targetElement = document.querySelector(anchor);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };
  
  // Handle regular link navigation to ensure scroll reset
  const handleRegularNavigation = () => {
    window.scrollTo(0, 0);
  };
  
  const footerLinks = [{
    title: "الشركة",
    links: [{
      name: "من نحن",
      url: "/who-are-we"
    },  {
      name: "الوظائف",
      url: "/jobs"
    }, {
      name: "الأخبار",
      url: "/news"
    }]
  }, {
    title: "المنتجات",
    links: [{
      name: "بطاقات الولاء",
      url: "/loyalty-cards"
    }, {
      name: "حلول الكاشباك",
      url: "/cashback-solutions"
    }, {
      name: "منصات التسويق",
      url: "/marketing-platforms"
    }]
  }, {
    title: "الدعم",
    links: [{
      name: "مركز المساعدة",
      url: "/help-center"
    }, {
      name: "الأسئلة الشائعة",
      url: "/faq"
    }, {
      name: "اتصل بنا",
      url: "/#contact"
    }]
  }];
  
  return <footer className="bg-primary/5 pt-16 pb-8 px-6">
      <div className="container mx-auto">
        {/* Footer Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, idx) => <div key={idx}>
              <h4 className="font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => <li key={linkIdx}>
                    {link.url.startsWith('/#') ? (
                      <a 
                        href={link.url} 
                        onClick={(e) => handleAnchorClick(e, link.url.substring(1))}
                        className="text-text/70 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.url} 
                        onClick={handleRegularNavigation}
                        className="text-text/70 hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>)}
              </ul>
            </div>)}
        </div>
        
        {/* Footer Middle - Newsletter */}
        <div className="py-8 border-t border-b border-primary/10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="order-1 md:order-1 mb-4 md:mb-0">
              <h4 className="font-bold text-lg mb-2">اشترك في نشرتنا الإخبارية</h4>
              <p className="text-text/70 mb-0">احصل على آخر التحديثات والعروض الخاصة</p>
            </div>
            <div className="order-2 md:order-2">
              <form className="flex gap-2 max-w-full">
                <input type="email" placeholder="أدخل بريدك الإلكتروني" className="px-4 py-2 rounded-lg bg-white/50 border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 flex-grow min-w-0" />
                <button type="submit" className="button-primary whitespace-nowrap">
                  اشترك الآن
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" onClick={handleRegularNavigation} className="text-xl font-bold text-text flex items-center gap-2">
              <img src="/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png" alt="دراهم" className="h-20 object-fill" />
            </Link>
            <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full text-sm text-primary">
              <Award size={14} className="text-primary" />
              <span>شركة مُسجلة في ليبيا</span>
            </div>
          </div>
          
          <div className="text-text/70 text-sm flex items-center gap-1">
            <span>صنع بكل</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>في ليبيا {currentYear} ©</span>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.facebook.com/darahim.ly" className="text-text/70 hover:text-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-text/70 hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-text/70 hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/darahimly/" className="text-text/70 hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-text/70 hover:text-primary transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
