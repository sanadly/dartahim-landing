
import { NewspaperIcon, CalendarIcon, ChevronRightIcon } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const News = () => {
  const articles = [
    {
      id: 1,
      title: "دراهم تطلق خدمة المدفوعات الرقمية في ليبيا",
      summary: "أطلقت شركة دراهم اليوم خدمة المدفوعات الرقمية الجديدة التي ستمكن المستخدمين من إجراء المعاملات المالية بسهولة وأمان عبر الهاتف المحمول.",
      date: "١٥ يونيو ٢٠٢٣",
      imageUrl: "/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png",
    },
    {
      id: 2,
      title: "شراكة استراتيجية مع مصرف ليبيا المركزي",
      summary: "أعلنت شركة دراهم عن توقيع شراكة استراتيجية مع مصرف ليبيا المركزي لتوسيع نطاق خدمات المدفوعات الرقمية وتحسين البنية التحتية المالية.",
      date: "٢٥ مايو ٢٠٢٣",
      imageUrl: "/lovable-uploads/9b14e838-2969-48fd-be92-aa3e678c56d3.png",
    },
    {
      id: 3,
      title: "دراهم تفوز بجائزة أفضل شركة ناشئة في مجال التكنولوجيا المالية",
      summary: "حصلت شركة دراهم على جائزة أفضل شركة ناشئة في مجال التكنولوجيا المالية خلال مؤتمر الابتكار المالي الذي أقيم في طرابلس الأسبوع الماضي.",
      date: "١٠ أبريل ٢٠٢٣",
      imageUrl: "/lovable-uploads/69b73410-b7da-4aa0-9a35-00ac7c62e874.png",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">أخبار دراهم</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              آخر الأخبار والتحديثات حول خدماتنا ومنتجاتنا وشراكاتنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {articles.map((article) => (
              <div key={article.id} className="feature-card group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-text/60 mb-2">
                  <CalendarIcon size={16} />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-text/80 mb-6 flex-grow">{article.summary}</p>
                <Link to={`/news/${article.id}`} className="flex items-center gap-2 text-primary hover:underline mt-auto group-hover:gap-3 transition-all">
                  <span>اقرأ المزيد</span>
                  <ChevronRightIcon size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
              احصل على آخر الأخبار والتحديثات مباشرة إلى بريدك الإلكتروني
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="flex-grow px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="button-primary whitespace-nowrap">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
