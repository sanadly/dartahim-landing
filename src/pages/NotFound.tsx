
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 py-24">
      <div className="text-center max-w-md mx-auto">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <span className="text-white font-bold text-3xl">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">الصفحة غير موجودة</h1>
        <p className="text-text/80 mb-8">عذرًا، الصفحة التي تبحث عنها غير موجودة. قد تكون قد أدخلت عنوانًا خاطئًا أو تم نقل الصفحة.</p>
        <a 
          href="/" 
          className="button-primary inline-flex items-center gap-2"
        >
          <span>العودة للصفحة الرئيسية</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
