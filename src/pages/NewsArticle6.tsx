
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ArticleContent from "@/components/ArticleContent";

const NewsArticle6 = () => {
  const articleData = {
    id: 6,
    title: "عميلك أقرب إليك الآن: اكتشف قوة الحملات التسويقية المخصصة في تطبيق \"دراهم\"",
    date: "١٠ سبتمبر ٢٠٢٣",
    imageUrl: "/lovable-uploads/826dee67-fe96-49ef-b742-a9d4925e06e2.png",
    content: [
      "في عالم الأعمال اليوم، العلاقة مع العميل ليست مجرد معاملة بيع وشراء، بل هي شراكة حقيقية. عندما تُظهر اهتمامًا حقيقيًا بعملائك، فإنك تبني جسورًا من الثقة والولاء تدفعهم للعودة إليك مرارًا وتكرارًا. في \"دراهم\"، نؤمن بأن التواصل الإنساني هو مفتاح النجاح، ولهذا السبب نضيف باستمرار ميزات مبتكرة تساعدك على تعزيز هذه العلاقة القيمة.",
      
      "يسعدنا أن نعلن عن أحدث إضافة إلى لوحة تحكم \"دراهم\": خاصية \"الحملات التسويقية المخصصة\"! هذه الخاصية الجديدة تمنحك القدرة على الاقتراب من عملائك أكثر من أي وقت مضى، وبناء تواصل شخصي وإنساني يعزز من ولائهم لعلامتك التجارية.",
      
      "<h2 className='text-2xl font-bold mt-12 mb-6'>شارك عملائك لحظاتهم الهامة، وكافئهم على ولائهم، وأعد الاتصال بمن غابوا</h2>",
      
      "تخيل أن تتواصل مع عملائك في أعياد ميلادهم بتهنئة خاصة ومكافأة بسيطة تعبر عن تقديرك. أو أن تبعث رسالة ودية للاطمئنان على عميل لم يزر متجرك منذ فترة، مع حافز بسيط لعودته. أو حتى أن تدعوهم لحضور افتتاح فرعك الجديد بعرض حصري خاص بهم.",
      
      "<div className='my-10 rounded-lg overflow-hidden shadow-md'>",
      "<img src='/lovable-uploads/60805f98-983a-4681-b35e-a9f1b913f092.png' alt='إشعارات مخصصة في تطبيق ولاء العملاء' className='w-full object-cover' />",
      "<p className='text-center text-sm text-text/60 mt-2'>إشعارات مخصصة تعزز العلاقة مع العميل وتزيد من ولائه</p>",
      "</div>",
      
      "خاصية \"الحملات التسويقية المخصصة\" تجعل كل هذا ممكنًا وأكثر! من خلال الإشعارات الذكية لتطبيق \"دراهم\"، يمكنك إرسال رسائل شخصية وموجهة لعملائك في اللحظات التي تهمهم، مما يحول العلاقة من مجرد تعامل تجاري إلى صداقة حقيقية وولاء عميق للعلامة التجارية.",
      
      "<h2 className='text-2xl font-bold mt-12 mb-6'>كيف تمنحك خاصية \"الحملات التسويقية المخصصة\" من \"دراهم\" ميزة تنافسية؟</h2>",
      
      "<ul className='list-disc mr-8 my-6 space-y-3'>",
      "<li><strong>تهنئة شخصية في أعياد الميلاد:</strong> أرسل تهنئة رقيقة لعملائك في يوم ميلادهم مع هدية رمزية تعبر عن اهتمامك الخاص.</li>",
      
      "<li><strong>رسائل ود واهتمام بالعملاء الغائبين:</strong> أعد التواصل مع العملاء الذين لم يتفاعلوا مع علامتك التجارية لفترة، واسأل عنهم بلطف، وقدم لهم حافزًا بسيطًا للعودة.</li>",
      
      "<li><strong>دعوات حصرية وفعالة للفعاليات:</strong> قم بدعوة عملائك المميزين لحضور فعاليات خاصة مثل افتتاح فروع جديدة، وقدم لهم عروضًا حصرية تشجعهم على الحضور والمشاركة.</li>",
      
      "<li><strong>تعزيز ولاء العملاء:</strong> عندما يشعر العميل أنك تهتم به كفرد وليس مجرد رقم في قاعدة بياناتك، يزداد ارتباطه وولاؤه لعلامتك التجارية بشكل كبير.</li>",
      
      "<li><strong>زيادة التفاعل والمبيعات:</strong> الحملات التسويقية المخصصة تزيد من تفاعل العملاء مع علامتك التجارية وتشجعهم على زيارة متجرك وتكرار الشراء.</li>",
      "</ul>",
      
      "<div className='bg-primary/10 p-6 rounded-xl mt-10 shadow-sm'>",
      "<p>\"دراهم\" تجعل التواصل مع عملائك أكثر سهولة وفاعلية من أي وقت مضى. ابدأ اليوم في استخدام خاصية \"الحملات التسويقية المخصصة\" وشاهد كيف تنمو علاقاتك مع عملائك وتزدهر أعمالك! تواصل معنا الآن لمعرفة المزيد عن كيفية تفعيل هذه الخاصية القوية في تطبيق \"دراهم\" الخاص بك، وابدأ في بناء علاقات عملاء أقوى وأكثر ولاءً من اليوم.</p>",
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

export default NewsArticle6;
