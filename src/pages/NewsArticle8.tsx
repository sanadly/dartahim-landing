
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ArticleContent from "@/components/ArticleContent";

const NewsArticle8 = () => {
  const articleData = {
    id: 8,
    title: "📢 موعدنا في معرض EuroCIS في دوسلدورف! 🚀",
    date: "15 فبراير 2025",
    imageUrl: "/lovable-uploads/eurocis-1.png",
    coverImage: "/lovable-uploads/düsseldorf.jpg",
    content: [
      "كان فريق دراهم متواجدًا في معرض EuroCIS، أكبر معرض متخصص في تكنولوجيا تجارة التجزئة، حيث التقينا بكبرى الشركات العالمية، وعقدنا شراكات مميزة، واستكشفنا أحدث الابتكارات في المجال. 🌍",
      
      "يعد معرض EuroCIS في دوسلدورف 🇩🇪 من أهم الفعاليات العالمية في مجال تكنولوجيا تجارة التجزئة، حيث يجمع تحت سقف واحد الشركات الرائدة والمبتكرين وصناع القرار من جميع أنحاء العالم. 🌐",
      
      "كان هدفنا الأساسي هو استكشاف أحدث التقنيات والتوجهات في مجال برامج الولاء وتقنيات المدفوعات الرقمية، والتواصل مع خبراء الصناعة لبناء شراكات استراتيجية تساعدنا في تطوير حلولنا وخدماتنا المقدمة للسوق الليبي. 💯",
      
      "<div className='my-10 rounded-lg overflow-hidden shadow-md'>",
      "<img src='/lovable-uploads/eurocis-1.png' alt='صورة من معرض EuroCIS' className='w-full object-cover' />",
      "<p className='text-center text-sm text-text/60 mt-2'>صورة من معرض EuroCIS للتكنولوجيا في دوسلدورف</p>",
      "</div>",
      
      "<h2 className='text-2xl font-bold mt-12 mb-6'>أبرز ما شاهدناه في المعرض ✨</h2>",
      
      "<ul className='list-disc mr-8 my-6 space-y-3'>",
      "<li><strong>تقنيات متطورة:</strong> اطلعنا على أحدث الحلول التقنية في مجال برامج الولاء والمدفوعات الذكية. 📱</li>",
      "<li><strong>نماذج أعمال مبتكرة:</strong> تعرفنا على نماذج أعمال جديدة يمكن تطبيقها في السوق الليبي. 👥</li>",
      "<li><strong>فرص شراكة:</strong> عقدنا لقاءات مع عدة شركات عالمية مهتمة بالسوق الليبي وفرص التعاون المحتملة. 🤝</li>",
      "<li><strong>اتجاهات المستقبل:</strong> حصلنا على رؤى قيمة حول مستقبل قطاع التجزئة وبرامج الولاء. 🚀</li>",
      "</ul>",
      
      "<div className='my-10 rounded-lg overflow-hidden shadow-md'>",
      
      "<img src='/lovable-uploads/eurocis-2.png' alt='لقطة أخرى من معرض EuroCIS' className='w-full object-cover' />",


      "<p className='text-center text-sm text-text/60 mt-2'>جانب من المناقشات والعروض التقنية في المعرض</p>",
      "</div>",
      
      "<h2 className='text-2xl font-bold mt-12 mb-6'>لماذا كان حضورنا مهمًا؟ 🤔</h2>",
      
      "حضورنا في المعرض العالمي كان له أهمية كبيرة لعدة أسباب:",
      
      "<ul className='list-disc mr-8 my-6 space-y-3'>",
      "<li>نقل أحدث التقنيات والابتكارات العالمية إلى السوق الليبي. 💻</li>",
      "<li>بناء علاقات وشراكات دولية تعزز من قدرتنا على تقديم خدمات متطورة. 🌐</li>",
      "<li>الاطلاع على تجارب ناجحة يمكن تطبيقها محليًا بما يتناسب مع السوق الليبي. 📈</li>",
      "<li>تمثيل ليبيا في المحافل الدولية وإبراز الفرص الاستثمارية فيها. 🇱🇾</li>",
      "</ul>",
                  
      "<div className='bg-primary/10 p-6 rounded-xl mt-10 shadow-sm'>",
      "<h3 className='font-bold text-xl mb-4'>تفاصيل المعرض: 📋</h3>",
      "<p><strong>المكان:</strong> دوسلدورف، ألمانيا 🇩🇪</p>",
      "<p><strong>التاريخ:</strong> 13-15 فبراير 2024</p>",
      "</div>",
      
      "نحن متحمسون لمشاركة كل ما تعلمناه وشاهدناه في هذا الحدث العالمي معكم، وكيف سننقل هذه الخبرات والمعارف لتطوير حلولنا المقدمة لكم. 📱",
            
      "<div className='bg-primary/20 p-8 rounded-xl mt-12 text-center shadow-md'>",
      "<h3 className='font-bold text-2xl mb-4'>هل تريد معرفة المزيد؟ 🤩</h3>",
      "<p>تواصل معنا لمعرفة كيف يمكن أن تستفيد أعمالك من برامج الولاء المتطورة التي نقدمها!</p>",
      "<p className='mt-4'>لا تترددوا في مراسلتنا على البريد الإلكتروني: <strong>info@darahem.ly</strong></p>",
      "</div>"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto">
          <ArticleContent {...articleData} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsArticle8;
