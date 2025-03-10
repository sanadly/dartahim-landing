
import React from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { Search, HeadphonesIcon, MessageCircleQuestionIcon, BookOpenIcon, InboxIcon } from 'lucide-react';

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 pb-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">مركز المساعدة</h1>
            <p className="text-text/70 text-center mb-8">نحن هنا لمساعدتك. اختر من بين الخيارات أدناه أو ابحث عن إجابة لسؤالك</p>
            
            {/* Search bar */}
            <div className="relative mb-12 max-w-2xl mx-auto">
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-muted-foreground">
                <Search size={18} />
              </div>
              <input 
                type="text"
                placeholder="ابحث عن سؤال أو موضوع..." 
                className="w-full rounded-full py-3 pr-12 pl-6 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            
            {/* Main help sections */}
            <Tabs defaultValue="faq" className="mb-12">
              <TabsList className="mb-8 grid grid-cols-2 md:grid-cols-4 h-auto p-1 w-full max-w-3xl mx-auto">
                <TabsTrigger value="faq" className="py-3 data-[state=active]:bg-primary/10">
                  <div className="flex flex-col items-center gap-2">
                    <MessageCircleQuestionIcon size={20} className="text-primary" />
                    <span>الأسئلة الشائعة</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="guides" className="py-3 data-[state=active]:bg-primary/10">
                  <div className="flex flex-col items-center gap-2">
                    <BookOpenIcon size={20} className="text-primary" />
                    <span>أدلة الاستخدام</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="contact" className="py-3 data-[state=active]:bg-primary/10">
                  <div className="flex flex-col items-center gap-2">
                    <HeadphonesIcon size={20} className="text-primary" />
                    <span>اتصل بنا</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="submit" className="py-3 data-[state=active]:bg-primary/10">
                  <div className="flex flex-col items-center gap-2">
                    <InboxIcon size={20} className="text-primary" />
                    <span>إرسال طلب</span>
                  </div>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="faq" className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-6 border-b pb-2 border-border">الأسئلة الشائعة</h2>
                <p className="mb-4">تصفح الأقسام الشائعة أدناه أو انتقل إلى <Link to="/faq" className="text-primary hover:underline">صفحة الأسئلة الشائعة الكاملة</Link>.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <Link to="/faq#loyalty-programs" className="block bg-background hover:bg-primary/5 transition-colors rounded-lg p-4 border border-border">
                    <h3 className="font-bold">🏆 برامج الولاء</h3>
                    <p className="text-sm text-text/70 mt-1">أسئلة حول تنفيذ وإدارة برامج الولاء</p>
                  </Link>
                  
                  <Link to="/faq#digital-payments" className="block bg-background hover:bg-primary/5 transition-colors rounded-lg p-4 border border-border">
                    <h3 className="font-bold">💳 المدفوعات الرقمية</h3>
                    <p className="text-sm text-text/70 mt-1">معلومات حول أنظمة الدفع وطرق التسوية</p>
                  </Link>
                  
                  <Link to="/faq#app-usage" className="block bg-background hover:bg-primary/5 transition-colors rounded-lg p-4 border border-border">
                    <h3 className="font-bold">📱 استخدام التطبيق</h3>
                    <p className="text-sm text-text/70 mt-1">مساعدة في استخدام تطبيق دراهم</p>
                  </Link>
                  
                  <Link to="/faq#customer-data" className="block bg-background hover:bg-primary/5 transition-colors rounded-lg p-4 border border-border">
                    <h3 className="font-bold">📊 بيانات العملاء</h3>
                    <p className="text-sm text-text/70 mt-1">أسئلة حول إدارة وتحليل بيانات العملاء</p>
                  </Link>
                </div>
              </TabsContent>
              
              <TabsContent value="guides" className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-6 border-b pb-2 border-border">أدلة الاستخدام</h2>
                <p className="mb-8">مجموعة من الأدلة التوضيحية لمساعدتك في استخدام منصة دراهم بكفاءة</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold">🚀 البدء السريع</h3>
                    <p className="text-sm text-text/70 mt-1 mb-3">دليل خطوة بخطوة لبدء استخدام النظام</p>
                    <Link to="#" className="text-primary text-sm hover:underline">اقرأ الدليل</Link>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold">📊 لوحة التحكم</h3>
                    <p className="text-sm text-text/70 mt-1 mb-3">شرح مفصل لاستخدام لوحة تحكم المشرف</p>
                    <Link to="#" className="text-primary text-sm hover:underline">اقرأ الدليل</Link>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold">💼 إعداد الحملات</h3>
                    <p className="text-sm text-text/70 mt-1 mb-3">كيفية إنشاء وإدارة الحملات الترويجية</p>
                    <Link to="#" className="text-primary text-sm hover:underline">اقرأ الدليل</Link>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold">📱 دليل التطبيق</h3>
                    <p className="text-sm text-text/70 mt-1 mb-3">استخدام تطبيق العملاء على الهاتف المحمول</p>
                    <Link to="#" className="text-primary text-sm hover:underline">اقرأ الدليل</Link>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="contact" className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-6 border-b pb-2 border-border">اتصل بنا</h2>
                <p className="mb-8">يسعدنا الرد على استفساراتك. اختر طريقة الاتصال المناسبة لك</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background rounded-lg p-5 border border-border">
                    <h3 className="font-bold">📞 الدعم الفني</h3>
                    <p className="text-sm text-text/70 mt-1 mb-3">متاح على مدار الساعة لمساعدتك في حل المشكلات التقنية</p>
                    <p className="font-medium">+218 91-234-5678</p>
                    <p className="font-medium">support@darahem.ly</p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-5 border border-border">
                    <h3 className="font-bold">💬 المبيعات والاستفسارات</h3>
                    <p className="text-sm text-text/70 mt-1 mb-3">استفسر عن الخدمات والباقات والأسعار</p>
                    <p className="font-medium">+218 92-345-6789</p>
                    <p className="font-medium">sales@darahem.ly</p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-5 border border-border col-span-1 md:col-span-2">
                    <h3 className="font-bold">🏢 المكتب الرئيسي</h3>
                    <p className="text-sm text-text/70 mt-1 mb-3">ساعات العمل: الأحد - الخميس، 9:00 ص - 5:00 م</p>
                    <p className="font-medium">طرابلس، ليبيا</p>
                    <p className="font-medium">info@darahem.ly</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="submit" className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-6 border-b pb-2 border-border">إرسال طلب</h2>
                <p className="mb-8">أرسل طلبك وسيقوم فريق الدعم لدينا بالرد عليك في أقرب وقت ممكن</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium">الاسم</label>
                      <input 
                        type="text" 
                        className="w-full rounded-md border border-border p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        className="w-full rounded-md border border-border p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium">نوع الطلب</label>
                    <select className="w-full rounded-md border border-border p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-primary/30">
                      <option>استفسار عام</option>
                      <option>مشكلة تقنية</option>
                      <option>طلب ميزة</option>
                      <option>استفسار عن الأسعار</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium">تفاصيل الطلب</label>
                    <textarea 
                      rows={5}
                      className="w-full rounded-md border border-border p-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-primary text-white py-2.5 px-5 rounded-md hover:bg-primary/90 transition-colors w-full md:w-auto"
                  >
                    إرسال الطلب
                  </button>
                </form>
              </TabsContent>
            </Tabs>
            
            {/* Popular articles */}
            <div className="border-t border-border pt-8 mt-12">
              <h2 className="text-xl font-bold mb-6">المقالات الشائعة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="#" className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-bold">كيفية إعداد برنامج الولاء للمرة الأولى</h3>
                  <p className="text-sm text-text/70 mt-2">دليل شامل للمبتدئين لإعداد برنامج ولاء فعّال</p>
                </Link>
                
                <Link to="#" className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-bold">استيراد بيانات العملاء من أنظمة أخرى</h3>
                  <p className="text-sm text-text/70 mt-2">خطوات نقل البيانات من نظام آخر إلى منصة دراهم</p>
                </Link>
                
                <Link to="#" className="block p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-bold">حل مشكلات تسجيل الدخول الشائعة</h3>
                  <p className="text-sm text-text/70 mt-2">إصلاح المشكلات المتعلقة بتسجيل الدخول والحسابات</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;
