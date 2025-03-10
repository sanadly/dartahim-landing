
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, TrendingUp, ShoppingBag, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CashbackSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-grow pt-24 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">حلول الكاشباك المتكاملة للشركات</h1>
                <p className="text-xl text-text/70 mb-8">
                  نطور وننفذ أنظمة كاشباك مخصصة لزيادة مبيعاتك وتعزيز ولاء عملائك بطريقة فعالة ومثبتة
                </p>
                <div className="flex gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">تواصل معنا</Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">اعرف المزيد</Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/437bcb72-d463-424b-bbd8-5fd4a7ae604f.png" 
                  alt="نظام كاشباك للشركات" 
                  className="rounded-lg shadow-lg border border-primary/20 w-full"
                />
              </div>
            </div>
          </section>
          
          {/* Key Results Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-2 text-center">النتائج المثبتة لأنظمة الكاشباك</h2>
            <p className="text-center text-text/70 mb-10 max-w-3xl mx-auto">
              أظهرت دراسات السوق أن الشركات التي تطبق أنظمة الكاشباك تحقق نتائج ملموسة في مؤشرات الأداء الرئيسية
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <TrendingUp className="h-8 w-8" />, value: "27%", label: "زيادة في المبيعات" },
                { icon: <ShoppingBag className="h-8 w-8" />, value: "18%", label: "ارتفاع متوسط قيمة السلة" },
                { icon: <Users className="h-8 w-8" />, value: "79%", label: "معدل الاحتفاظ بالعملاء" },
                { icon: <BarChart3 className="h-8 w-8" />, value: "31%", label: "زيادة في معدل تكرار الشراء" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/90 rounded-xl p-6 shadow border border-primary/10 text-center"
                >
                  <div className="mb-3 p-3 bg-primary/10 rounded-full inline-flex text-primary">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-1 text-primary">{stat.value}</h3>
                  <p className="font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Implementation Process Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6">عملية تنفيذ نظام الكاشباك</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "تحليل وتصميم",
                  description: "دراسة متطلبات عملك وتصميم نظام كاشباك يتناسب مع أهدافك",
                  points: [
                    "تحليل احتياجات العمل ومتطلبات العملاء",
                    "دراسة سير العمليات التجارية الحالية",
                    "تصميم هيكل البرنامج ومعدلات الاسترداد"
                  ]
                },
                {
                  title: "التطوير والتكامل",
                  description: "تطوير النظام وتكامله مع أنظمتك الحالية بسلاسة",
                  points: [
                    "تطوير واجهات المستخدم وقاعدة البيانات",
                    "التكامل مع أنظمة نقاط البيع والمتاجر الإلكترونية",
                    "إعداد لوحات التحكم والتقارير"
                  ]
                },
                {
                  title: "الإطلاق والدعم",
                  description: "إطلاق النظام ومتابعته وتقديم الدعم المستمر",
                  points: [
                    "الاختبار الشامل والإطلاق التدريجي",
                    "التدريب ونقل المعرفة لفريق العمل",
                    "الدعم الفني المستمر وتحديثات النظام"
                  ]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-primary/10 h-full"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                  <p className="mb-4 text-text/80">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Case Study Section */}
          <section className="mb-20 rounded-2xl overflow-hidden shadow-lg border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary/5 to-accent/10 p-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-full bg-white inline-flex px-4 py-1 text-sm font-medium mb-6 text-primary border border-primary/20">
                    حالة نجاح حقيقية
                  </div>
                  <h2 className="text-3xl font-bold mb-4">شركة "أطياف" للتجارة الإلكترونية</h2>
                  <p className="mb-6 text-text/80 leading-relaxed">
                    واجهت شركة أطياف للتجارة الإلكترونية تحديات في زيادة معدل تكرار الشراء والاحتفاظ بالعملاء. قمنا بتصميم وتنفيذ نظام كاشباك مخصص يتكامل مع منصتهم الحالية، مما أدى إلى نتائج ملموسة خلال فترة قصيرة.
                  </p>
                  
                  <div className="mb-6 p-4 bg-white/50 rounded-lg border border-primary/10">
                    <p className="italic text-text/70">
                      "نظام الكاشباك كان نقطة تحول في استراتيجيتنا للاحتفاظ بالعملاء. لقد لاحظنا زيادة كبيرة في معدل تكرار الشراء وقيمة الطلب منذ إطلاق البرنامج."
                    </p>
                    <div className="flex items-center mt-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        أ.س
                      </div>
                      <div className="mr-3">
                        <div className="font-semibold">أحمد سالم</div>
                        <div className="text-sm text-text/70">مدير التسويق - شركة أطياف</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3">النتائج المحققة:</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: <TrendingUp />, text: "زيادة المبيعات بنسبة 27% خلال الربع الأول" },
                      { icon: <ShoppingBag />, text: "ارتفاع متوسط قيمة السلة بنسبة 18%" },
                      { icon: <Users />, text: "زيادة معدل الاحتفاظ بالعملاء من 62% إلى 79%" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 p-1 bg-primary/10 rounded-full text-primary">
                          {item.icon}
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <div className="relative min-h-[400px]">
                <img 
                  src="/lovable-uploads/9b14e838-2969-48fd-be92-aa3e678c56d3.png" 
                  alt="تحليلات مبيعات بعد تطبيق نظام الكاشباك" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
                  <div className="text-white bg-black/50 p-4 rounded-lg backdrop-blur-sm">
                    <h4 className="font-bold mb-2">الأثر على المبيعات</h4>
                    <p className="text-sm">رسم بياني يوضح الزيادة في معدل تكرار الشراء وقيمة الطلبات بعد تطبيق نظام الكاشباك</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Our Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center">خدماتنا المتكاملة</h2>
            <p className="text-center text-text/70 mb-10 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات لتمكين شركتك من الاستفادة القصوى من برامج الكاشباك
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "تطوير أنظمة كاشباك مخصصة",
                  description: "تصميم وتطوير أنظمة كاشباك مخصصة تتناسب مع احتياجات شركتك ونموذج أعمالك وتتكامل مع أنظمتك الحالية."
                },
                {
                  title: "التكامل مع المنصات الحالية",
                  description: "دمج نظام الكاشباك مع منصات التجارة الإلكترونية وأنظمة نقاط البيع والتطبيقات المحمولة بسلاسة."
                },
                {
                  title: "واجهات تحكم متطورة",
                  description: "توفير لوحات تحكم متطورة للإدارة والتحليل، تمكنك من مراقبة أداء البرنامج واتخاذ قرارات مبنية على البيانات."
                },
                {
                  title: "خدمات الدعم المستمر",
                  description: "تقديم خدمات الدعم الفني والتحديثات المستمرة والتطوير المستقبلي لضمان استمرارية نجاح البرنامج."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow border border-primary/10"
                >
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-text/80">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="mb-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">استفد من حلول الكاشباك لتنمية أعمالك</h2>
              <p className="max-w-3xl mx-auto mb-8 text-text/80">
                تواصل معنا اليوم للحصول على استشارة مجانية حول كيفية تصميم وتنفيذ نظام كاشباك مخصص لشركتك
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg">احجز استشارة مجانية</Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-6 py-6 text-lg">اطلب عرض سعر</Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CashbackSolutions;
