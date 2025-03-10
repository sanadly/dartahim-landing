
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Award } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BookingButton from './BookingButton';

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
  
  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-2 md:py-4', 
      scrolled ? 'glass-nav shadow-sm' : 'bg-transparent')}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-text flex items-center gap-2">
          <img alt="دراهم" src="/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png" className="h-16 md:h-20 object-fill" />
          {/* <div className="flex flex-col items-start">
            <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full text-xs text-primary">
              <Award size={12} className="text-primary" />
              <span>شركة مُسجلة في ليبيا</span>
            </div>
          </div> */}
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/who-are-we" className="hover:text-primary transition-colors">من نحن</Link>
          <Link to="/news" className="hover:text-primary transition-colors">الأخبار</Link>
          <Link to="/our-team" className="hover:text-primary transition-colors">فريقنا</Link>
          <Link to="/jobs" className="hover:text-primary transition-colors">الوظائف</Link>
          <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="hover:text-primary transition-colors">تواصل معنا</a>
          <BookingButton />
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-text bg-white/50 backdrop-blur-sm p-2 rounded-full" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-md md:hidden",
        "flex flex-col items-center justify-start pt-8 pb-12 gap-6 text-lg transition-all duration-300",
        "border-b border-white/10",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <Link to="/who-are-we" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>من نحن</Link>
        <Link to="/news" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>الأخبار</Link>
        <Link to="/our-team" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>فريقنا</Link>
        <Link to="/jobs" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>الوظائف</Link>
        <a href="#contact" onClick={(e) => { handleAnchorClick(e, '#contact'); setMobileMenuOpen(false); }} className="hover:text-primary transition-colors">تواصل معنا</a>
        <BookingButton />
      </div>
    </nav>
  );
};

export default Navbar;
