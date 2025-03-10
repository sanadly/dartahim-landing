
import { motion } from "framer-motion";
import { Check, ShoppingBag, TrendingUp, Users } from "lucide-react";

const CaseStudyShowcase = () => {
  const results = [
    { icon: <TrendingUp className="h-5 w-5" />, text: "زيادة المبيعات بنسبة 27% خلال الربع الأول من تطبيق البرنامج" },
    { icon: <ShoppingBag className="h-5 w-5" />, text: "ارتفاع متوسط قيمة السلة بنسبة 18% عند العملاء المسجلين في برنامج الكاشباك" },
    { icon: <Users className="h-5 w-5" />, text: "زيادة معدل الاحتفاظ بالعملاء من 62% إلى 79% خلال 6 أشهر" }
  ];

  return (
    <div className="mb-20 overflow-hidden rounded-2xl shadow-lg border border-primary/20">
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
              واجهت شركة أطياف للتجارة الإلكترونية تحديات في زيادة معدل تكرار الشراء والاحتفاظ بالعملاء. قمنا بتصميم وتنفيذ نظام كاشباك مخصص يتكامل مع منصتهم الحالية، مما أدى إلى نتائج مذهلة خلال فترة قصيرة.
            </p>
            
            <div className="mb-6 p-4 bg-white/50 rounded-lg border border-primary/10">
              <p className="italic text-text/70">
                "نظام الكاشباك من دراهم كان نقطة تحول في استراتيجيتنا للاحتفاظ بالعملاء. لقد لاحظنا زيادة كبيرة في معدل تكرار الشراء وقيمة الطلب منذ إطلاق البرنامج."
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
              {results.map((item, index) => (
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
    </div>
  );
};

export default CaseStudyShowcase;
