import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import RegistrationBadge from "./RegistrationBadge";

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: "من نحن", path: "/who-are-we" },
  { label: "خدماتنا", path: "/#services" },
  { label: "المدونة", path: "/news" },
  { label: "وظائف", path: "/jobs" },
  { label: "مركز المساعدة", path: "/help-center" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname: path } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 px-4 md:px-6",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/01b4c9b6-74b9-4aa4-95ae-cef321707e46.png" alt="Darahim Logo" className="h-8 md:h-10" />
          <span className={cn(
            "font-bold text-xl hidden md:block transition-colors",
            scrolled ? "text-text" : "text-text"
          )}>دراهم</span>
        </a>
        
        <div className="flex items-center gap-3 md:gap-6">
          <RegistrationBadge className="hidden md:flex" />
          
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.path} 
                href={link.path} 
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  path === link.path ? "text-primary" : scrolled ? "text-text/80" : "text-text/80"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <a href="#contact" className="button-primary hidden md:block text-xs md:text-sm py-2 px-4 md:px-6">تواصل معنا</a>
          
          <button 
            className={cn(
              "flex lg:hidden p-2 rounded-md transition-colors",
              scrolled ? "text-text hover:bg-gray-100" : "text-text hover:bg-white/20"
            )}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/95 transition-transform duration-300 lg:hidden pt-24 px-6",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <RegistrationBadge className="md:hidden mb-2" />
          {navLinks.map((link) => (
            <a 
              key={link.path} 
              href={link.path} 
              className={cn(
                "text-base font-medium py-2 hover:text-primary transition-colors w-full",
                path === link.path ? "text-primary" : "text-text/80"
              )}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="button-primary text-sm py-2 px-6 mt-4"
            onClick={closeMenu}
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
