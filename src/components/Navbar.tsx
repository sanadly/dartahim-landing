
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
      window.location.href = `/${anchor}`;
    }
  };
  
  return <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-2 md:py-4', 
                            scrolled ? 'glass-nav shadow-sm' : 'bg-transparent')}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-text flex items-center gap-2">
          <img alt="دراهم" src="/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png" className="h-16 md:h-20 object-fill" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" onClick={(e) => handleAnchorClick(e, '#features')} className="hover:text-primary transition-colors">المميزات</a>
          <a href="#why-us" onClick={(e) => handleAnchorClick(e, '#why-us')} className="hover:text-primary transition-colors">لماذا نحن</a>
          <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="hover:text-primary transition-colors">اتصل بنا</a>
          <Link to="/who-are-we" className="hover:text-primary transition-colors">من نحن</Link>
          <Link to="/news" className="hover:text-primary transition-colors">الأخبار</Link>
          <Link to="/team" className="hover:text-primary transition-colors">فريقنا</Link>
          <Link to="/jobs" className="hover:text-primary transition-colors">الوظائف</Link>
          <a href="#" className="button-primary">أحجز موعد</a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-text bg-white/50 backdrop-blur-sm p-2 rounded-full" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-lg transition-all duration-300 md:hidden z-50", 
                         mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none -z-10")}>
        <a href="#features" onClick={(e) => { handleAnchorClick(e, '#features'); setMobileMenuOpen(false); }} className="hover:text-primary transition-colors">المميزات</a>
        <a href="#why-us" onClick={(e) => { handleAnchorClick(e, '#why-us'); setMobileMenuOpen(false); }} className="hover:text-primary transition-colors">لماذا نحن</a>
        <a href="#contact" onClick={(e) => { handleAnchorClick(e, '#contact'); setMobileMenuOpen(false); }} className="hover:text-primary transition-colors">اتصل بنا</a>
        <Link to="/who-are-we" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>من نحن</Link>
        <Link to="/news" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>الأخبار</Link>
        <Link to="/team" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>فريقنا</Link>
        <Link to="/jobs" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>الوظائف</Link>
        <a href="#" className="button-primary mt-4" onClick={() => setMobileMenuOpen(false)}>ابدأ الآن</a>
        
        {/* Close button inside mobile menu */}
        <button 
          className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-2 rounded-full" 
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>
      </div>
    </nav>;
};
export default Navbar;
