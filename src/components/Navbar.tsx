import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  return <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4', scrolled ? 'glass-nav shadow-sm' : 'bg-transparent')}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-text flex items-center gap-2">
          <img alt="دراهم" src="/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png" className="h-20 object-fill" />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="hover:text-primary transition-colors">المميزات</a>
          <a href="#why-us" className="hover:text-primary transition-colors">لماذا نحن</a>
          <a href="#contact" className="hover:text-primary transition-colors">اتصل بنا</a>
          <a href="#" className="button-primary">أحجز موعد</a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-text" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-lg transition-all duration-300 md:hidden", mobileMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none -z-10")}>
        <a href="#features" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>المميزات</a>
        <a href="#why-us" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>لماذا نحن</a>
        <a href="#contact" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>اتصل بنا</a>
        <a href="#" className="button-primary mt-4" onClick={() => setMobileMenuOpen(false)}>ابدأ الآن</a>
      </div>
    </nav>;
};
export default Navbar;