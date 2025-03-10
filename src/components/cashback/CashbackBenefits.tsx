
import { Coins, RefreshCw, BarChart } from "lucide-react";

const CashbackBenefits = () => {
  const benefits = [
    {
      icon: <Coins className="h-6 w-6" />,
      title: "زيادة معدل التحويل",
      description: "تحفيز المستخدمين لإتمام عمليات الشراء بفضل حوافز الكاشباك الفورية."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "تعزيز تكرار الشراء",
      description: "تشجيع العملاء على العودة مرة أخرى من خلال تراكم مكافآت الكاشباك."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "زيادة متوسط قيمة الطلب",
      description: "دفع العملاء لزيادة حجم مشترياتهم للحصول على مكافآت كاشباك أعلى."
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">فوائد حلول الكاشباك</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="feature-card p-8">
            <div className="text-primary mb-4 inline-flex p-4 bg-primary/10 rounded-full">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-text/80">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CashbackBenefits;
