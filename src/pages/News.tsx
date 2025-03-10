import { CalendarIcon, ChevronRightIcon } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const News = () => {
  const articles = [
    {
      id: 8,
      title: "📢 موعدنا في معرض EuroCIS في دوسلدورف! 🚀",
      summary: "أكبر معرض متخصص في تكنولوجيا تجارة التجزئة، حيث سنلتقي بكبرى الشركات العالمية، ونعقد شراكات مميزة، ونستكشف أحدث الابتكارات في المجال.",
      date: "١٢ فبراير ٢٠٢٤",
      imageUrl: "/lovable-uploads/eurocis-1.png",
      coverImage: "/lovable-uploads/düsseldorf.jpg"
    },
    {
      id: 7,
      title: "🧮 هل أنت مستعد لإطلاق برنامج ولاء؟ دليل دراهم الشامل لتقدير التكلفة الحقيقية",
      summary: "لقد أدركت الآن قوة وأهمية برنامج الولاء لنمو عملك، وربما وضعت بالفعل خططك التسويقية. لكن السؤال الأهم: كيف تحدد التكلفة الحقيقية لإطلاق برنامج ولاء ناجح؟",
      date: "٥ أكتوبر ٢٠٢٣",
      imageUrl: "/lovable-uploads/8403013f-eafe-4e9c-be77-241e2d56d4fe.png",
      coverImage: "/lovable-uploads/pricing-guide.jpg"
    },
    {
      id: 6,
      title: "💌 عميلك أقرب إليك الآن: اكتشف قوة الحملات التسويقية المخصصة في تطبيق دراهم",
      summary: "في عالم الأعمال اليوم، العلاقة مع العميل ليست مجرد معاملة بيع وشراء، بل هي شراكة حقيقية. اكتشف كيف تساعدك ميزة الحملات التسويقية المخصصة في تطبيق دراهم على تعزيز علاقتك مع عملائك.",
      date: "١٠ سبتمبر ٢٠٢٣",
      imageUrl: "/lovable-uploads/02c3c264-3de6-4eaf-9f6f-3e695a9724e1.png",
      coverImage: "/lovable-uploads/notification.jpg"
    },
    {
      id: 5,
      title: "🔄 بناء شبكة ولاء العملاء الخاصة بك: رؤية دراهم للنمو المستقبلي",
      summary: "برامج الولاء ليست مجرد وسيلة لتحقيق مكاسب فورية. إنها استثمار استراتيجي لبناء ميزة تنافسية مستدامة ونمو طويل الأجل في سوق التجزئة الليبي المتطور.",
      date: "١٥ أغسطس ٢٠٢٣",
      imageUrl: "/lovable-uploads/9b14e838-2969-48fd-be92-aa3e678c56d3.png",
      coverImage: "/lovable-uploads/23cf95d4-cc38-45ad-b52f-be19624de0d1.png"
    },
    {
      id: 4,
      title: "📱 تطبيق ولاء العملاء: مفتاح النمو المستدام في سوق التجزئة الليبي",
      summary: "يشهد قطاع التجزئة في ليبيا تطورًا متسارعًا، حيث يتزايد وعي المستهلكين وتتنوع خياراتهم. في هذا السياق، يبرز تطبيق ولاء العملاء المخصص كأداة استراتيجية لا غنى عنها لتحقيق النمو المستدام والربحية على المدى الطويل.",
      date: "٢٠ يوليو ٢٠٢٣",
      imageUrl: "/lovable-uploads/d8c5b993-2a67-47ca-9ad1-222ee8ff41e9.png",
      coverImage: "/lovable-uploads/f7341154-6b0b-4d67-837b-075f65bcade6.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">✨ أخبار دراهم ✨</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              آخر الأخبار والتحديثات حول خدماتنا ومنتجاتنا وشراكاتنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {articles.map((article) => (
              <div key={article.id} className="feature-card group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={article.coverImage || article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                  <div className="flex items-center gap-2 text-sm text-text/60">
                    <CalendarIcon size={16} />
                    <span>{article.date}</span>
                  </div>
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
            <h2 className="text-3xl font-bold mb-4">📬 اشترك في نشرتنا الإخبارية</h2>
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
                اشترك الآن 🚀
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
