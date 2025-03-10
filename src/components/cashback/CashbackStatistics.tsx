
import { TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const CashbackStatistics = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      value: "23%",
      label: "زيادة في معدل تكرار الشراء",
      description: "وفقاً لدراسة لمنصات التجارة الإلكترونية"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      value: "19%",
      label: "زيادة في متوسط قيمة الطلب",
      description: "بعد تطبيق برامج الكاشباك لتجار التجزئة"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: "78%",
      label: "من العملاء يفضلون التسوق",
      description: "من المتاجر التي تقدم برامج الكاشباك"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      value: "31%",
      label: "تحسن في معدل الاحتفاظ بالعملاء",
      description: "للشركات التي تطبق حلول الكاشباك"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-4 text-center">إحصائيات فعالية برامج الكاشباك</h2>
      <p className="text-center text-text/70 mb-10 max-w-3xl mx-auto">
        تظهر الدراسات والإحصائيات مدى تأثير برامج الكاشباك على نمو الأعمال وتحسين الأداء التجاري للشركات
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="feature-card flex flex-col items-center text-center p-6"
          >
            <div className="mb-4 p-3 bg-primary/10 rounded-full">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold mb-1 text-primary">{stat.value}</h3>
            <p className="font-semibold mb-2">{stat.label}</p>
            <p className="text-text/60 text-sm">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CashbackStatistics;
