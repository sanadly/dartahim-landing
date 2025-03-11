import React, { useState } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Search, PlusIcon, MinusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  category: string;
  isOpen?: boolean;
}
const FAQ = () => {
  // Mock data for FAQs
  const faqCategories = [{
    id: 'loyalty-programs',
    name: '🏆 برامج الولاء'
  }, {
    id: 'digital-payments',
    name: '💳 المدفوعات الرقمية'
  }, {
    id: 'app-usage',
    name: '📱 استخدام التطبيق'
  }, {
    id: 'customer-data',
    name: '📊 بيانات العملاء'
  }, {
    id: 'technical',
    name: '🛠️ المسائل التقنية'
  }, {
    id: 'pricing',
    name: '💰 الأسعار والاشتراكات'
  }];
  const initialFAQs: FAQItem[] = [{
    question: 'ما هي التكلفة الحقيقية لبرنامج الولاء؟',
    answer: 'تختلف تكلفة برنامج الولاء حسب حجم عملك واحتياجاتك. يمكن أن تشمل التكاليف: رسوم الاشتراك في المنصة، تكلفة المكافآت، تكاليف التسويق. لمعرفة المزيد، يمكنك الاطلاع على <a href="/news/7" class="text-primary hover:underline">دليلنا الشامل لتقدير تكلفة برنامج الولاء</a>.',
    category: 'pricing'
  }, {
    question: 'كيف يمكنني إطلاق برنامج ولاء ناجح لعملائي؟',
    answer: 'لإطلاق برنامج ولاء ناجح، يجب عليك أولاً تحديد أهدافك، ثم اختيار نوع البرنامج المناسب (نقاط، مستويات، إلخ)، وتصميم مكافآت جذابة، واختيار منصة تقنية موثوقة مثل دراهم، والترويج للبرنامج بين عملائك. نحن نوفر لك الدعم الكامل في كل هذه الخطوات.',
    category: 'loyalty-programs'
  }, {
    question: 'ما هي ميزات تطبيق "دراهم" التي تميزه عن الحلول الأخرى؟',
    answer: 'يتميز تطبيق "دراهم" بعدة مزايا: (١) مصمم خصيصًا للسوق الليبي (٢) سهولة الاستخدام للتجار والعملاء (٣) إمكانيات تحليل متقدمة (٤) حملات تسويقية مخصصة (٥) تكامل سلس مع أنظمة نقاط البيع (٦) دعم فني على مدار الساعة (٧) تحديثات مستمرة بناءً على احتياجات السوق.',
    category: 'app-usage'
  }, {
    question: 'كيف أضمن أمان بيانات عملائي في تطبيق "دراهم"؟',
    answer: 'تلتزم "دراهم" بأعلى معايير الأمان لحماية بيانات عملائك. نستخدم تقنيات تشفير متقدمة، ونطبق سياسات صارمة للوصول إلى البيانات، ونقوم بنسخ احتياطي منتظم، ونلتزم بأفضل الممارسات العالمية في مجال أمن المعلومات. يمكنك الاطلاع على سياسة الخصوصية الخاصة بنا للمزيد من التفاصيل.',
    category: 'customer-data'
  }, {
    question: 'هل يمكن ربط تطبيق "دراهم" مع نظام نقاط البيع الخاص بي؟',
    answer: 'نعم، تم تصميم "دراهم" ليتكامل بسلاسة مع معظم أنظمة نقاط البيع الشائعة في ليبيا. لدينا واجهات برمجة (APIs) مفتوحة تسمح بالتكامل مع أنظمة نقاط البيع المختلفة. يمكن لفريقنا التقني مساعدتك في عملية التكامل والتأكد من أنها تعمل بكفاءة.',
    category: 'technical'
  }, {
    question: 'ما هي طرق الدفع المتاحة في نظام دراهم؟',
    answer: 'يدعم نظام دراهم مجموعة متنوعة من طرق الدفع تشمل: الدفع النقدي، البطاقات المصرفية، المحافظ الإلكترونية، وحلول الدفع الرقمي المحلية في ليبيا. نحن نعمل باستمرار على إضافة المزيد من خيارات الدفع لتلبية احتياجات السوق المتطورة.',
    category: 'digital-payments'
  }, {
    question: 'كيف يمكنني متابعة أداء برنامج الولاء الخاص بي؟',
    answer: 'توفر منصة "دراهم" لوحة تحكم متطورة تتيح لك متابعة جميع مؤشرات الأداء الرئيسية لبرنامج الولاء في الوقت الفعلي. يمكنك مراقبة نشاط العملاء، ومعدلات المشاركة، والمكافآت المستردة، والإيرادات المولدة، وغيرها من المقاييس الهامة. كما يمكنك إنشاء تقارير مخصصة وجدولتها.',
    category: 'loyalty-programs'
  }, {
    question: 'ما هي مدة عقد الاشتراك مع "دراهم"؟',
    answer: 'نقدم خيارات مرنة للاشتراك تشمل عقودًا شهرية وسنوية. يمكنك اختيار الخطة التي تناسب احتياجات عملك. العقود السنوية عادةً ما توفر خصومات كبيرة مقارنة بالاشتراكات الشهرية. اتصل بفريق المبيعات لدينا للحصول على عرض سعر مخصص.',
    category: 'pricing'
  }, {
    question: 'كيف يمكنني إنشاء حملات تسويقية مخصصة في تطبيق "دراهم"؟',
    answer: 'يمكنك إنشاء حملات تسويقية مخصصة من خلال لوحة تحكم "دراهم" باتباع هذه الخطوات: (١) اختر نوع الحملة (٢) حدد الجمهور المستهدف (٣) صمم العرض والمكافأة (٤) حدد فترة الحملة (٥) أضف محتوى الرسالة (٦) أطلق الحملة وتابع النتائج. لمزيد من المعلومات، يمكنك الاطلاع على <a href="/news/6" class="text-primary hover:underline">مقالنا حول الحملات التسويقية المخصصة</a>.',
    category: 'loyalty-programs'
  }, {
    question: 'هل يمكنني تصدير بيانات العملاء من نظام "دراهم"؟',
    answer: 'نعم، يمكنك تصدير بيانات العملاء من نظام "دراهم" بسهولة. توفر المنصة خيارات متعددة للتصدير بتنسيقات مختلفة مثل CSV وExcel وJSON. يمكنك أيضًا جدولة عمليات تصدير تلقائية منتظمة. جميع عمليات التصدير تخضع لسياسات الأمان وتتطلب صلاحيات مناسبة.',
    category: 'customer-data'
  }, {
    question: 'ما هي متطلبات النظام لتشغيل تطبيق "دراهم"؟',
    answer: 'تطبيق "دراهم" متوافق مع معظم الأجهزة الحديثة. للمستخدمين النهائيين (العملاء)، يعمل التطبيق على iOS 11+ وAndroid 5.0+. للتجار والمشرفين، تعمل لوحة التحكم على أي متصفح حديث (Chrome، Firefox، Safari، Edge). لا توجد متطلبات خاصة للأجهزة، لكن يُنصح باتصال إنترنت مستقر.',
    category: 'technical'
  }, {
    question: 'كيف يمكنني الاستفادة من بيانات العملاء لتحسين استراتيجية أعمالي؟',
    answer: 'توفر منصة "دراهم" تحليلات متقدمة تساعدك على فهم سلوك العملاء واتخاذ قرارات أفضل. يمكنك استخدام هذه البيانات لتحديد العملاء الأكثر قيمة، واكتشاف أنماط الشراء، وتحسين المخزون، وتخصيص العروض، وتحسين تجربة العملاء. نقدم أيضًا تقارير دورية وتوصيات مخصصة بناءً على بيانات عملك.',
    category: 'customer-data'
  }];
  const [faqs, setFaqs] = useState<FAQItem[]>(initialFAQs);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        return {
          ...faq,
          isOpen: !faq.isOpen
        };
      }
      return faq;
    }));
  };

  // Filter FAQs based on active category and search query
  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = !searchQuery || faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 pb-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">الأسئلة الشائعة</h1>
              <p className="text-text/70">إجابات على الأسئلة الأكثر شيوعًا حول خدمات ومنتجات دراهم</p>
            </div>
            
            {/* Search bar */}
            <div className="relative mb-10 max-w-2xl mx-auto">
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-muted-foreground">
                <Search size={18} />
              </div>
              <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="ابحث عن سؤال..." className="w-full rounded-full py-3 pr-12 pl-6 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
            </div>
            
            {/* Categories */}
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              <button onClick={() => setActiveCategory('all')} className={`px-4 py-2 rounded-full text-sm transition-colors ${activeCategory === 'all' ? 'bg-primary text-white' : 'bg-primary/10 hover:bg-primary/20'}`}>
                الكل
              </button>
              
              {faqCategories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full text-sm transition-colors ${activeCategory === category.id ? 'bg-primary text-white' : 'bg-primary/10 hover:bg-primary/20'}`}>
                  {category.name}
                </button>)}
            </div>
            
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? filteredFAQs.map((faq, index) => <div key={index} className="border border-border rounded-lg overflow-hidden">
                    <button onClick={() => toggleFAQ(index)} className="w-full flex justify-start items-right p-5 bg-background hover:bg-primary/5 transition-colors text-right">
                      <span className={faq.isOpen ? "text-primary" : ""}>
                        {faq.isOpen ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
                      </span>
                      <h3 className="font-bold text-lg">{faq.question}</h3>
                    </button>
                    
                    {faq.isOpen && <div className="p-5 bg-card border-t border-border">
                        {typeof faq.answer === 'string' ? <p dangerouslySetInnerHTML={{
                  __html: faq.answer
                }} className="leading-relaxed" /> : faq.answer}
                      </div>}
                  </div>) : <div className="text-center py-10">
                  <p className="text-lg text-text/70">لم يتم العثور على نتائج مطابقة للبحث.</p>
                  <p className="mt-2">حاول استخدام كلمات مفتاحية مختلفة أو <Link to="/help-center" className="text-primary hover:underline">تواصل معنا</Link> للمساعدة.</p>
                </div>}
            </div>
            
            {/* Still need help section */}
            <div className="mt-16 bg-primary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">لم تجد ما تبحث عنه؟</h2>
              <p className="mb-6">فريق الدعم لدينا جاهز للإجابة على جميع استفساراتك</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/help-center" className="bg-white px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/5 transition-colors">
                  مركز المساعدة
                </Link>
                <Link to="/help-center#contact" className="bg-primary px-6 py-3 rounded-md text-white hover:bg-primary/90 transition-colors">
                  اتصل بنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default FAQ;