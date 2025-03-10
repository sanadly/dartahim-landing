
import { Coins, RefreshCw, BarChart, TrendingUp, Database, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const CashbackBenefits = () => {
  const benefits = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: "زيادة معدل التحويل",
      description: "تحفيز المستخدمين لإتمام عمليات الشراء بفضل حوافز الكاشباك الفورية وزيادة معدل التحويل بنسبة تصل إلى 25%."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "تعزيز تكرار الشراء",
      description: "تشجيع العملاء على العودة مرة أخرى من خلال تراكم مكافآت الكاشباك، مما يزيد من معدل الشراء المتكرر بنسبة 30%."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "زيادة متوسط قيمة الطلب",
      description: "دفع العملاء لزيادة حجم مشترياتهم للحصول على مكافآت كاشباك أعلى، مما يؤدي إلى زيادة متوسط قيمة الطلب بنسبة 18%."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "تحليلات أعمق لسلوك العملاء",
      description: "الاستفادة من بيانات برنامج الكاشباك لفهم سلوك العملاء بشكل أفضل واتخاذ قرارات تسويقية أكثر ذكاءً."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "بناء قاعدة بيانات قيّمة",
      description: "جمع معلومات قيّمة عن عملائك من خلال برنامج الكاشباك، مما يمكنك من استهدافهم بشكل أفضل في الحملات المستقبلية."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "ميزة تنافسية في السوق",
      description: "التميز عن المنافسين من خلال تقديم برنامج كاشباك فعال يجذب العملاء ويحافظ على ولائهم لعلامتك التجارية."
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-4 text-center">فوائد حلول الكاشباك للأعمال</h2>
      <p className="text-center text-text/70 mb-10 max-w-3xl mx-auto">
        أظهرت الدراسات أن الشركات التي تطبق برامج الكاشباك بشكل صحيح تشهد تحسناً ملموساً في مؤشرات الأداء الرئيسية لأعمالها
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index} 
            className="feature-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-text/80">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CashbackBenefits;
