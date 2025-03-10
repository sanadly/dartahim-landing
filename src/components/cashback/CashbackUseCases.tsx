
import { Store, Utensils, ShoppingCart, Briefcase } from "lucide-react";

const CashbackUseCases = () => {
  const useCases = [
    {
      icon: <Store />,
      title: "للمتاجر ومحلات التجزئة",
      description: "زيادة متوسط قيمة المشتريات وتردد العملاء من خلال تقديم كاشباك على كل عملية شراء، مع معدلات أعلى للمشتريات الأكبر."
    },
    {
      icon: <Utensils />,
      title: "للمطاعم والمقاهي",
      description: "تشجيع الزيارات المتكررة وزيادة حجم الطلبات من خلال برامج كاشباك مخصصة لأوقات الذروة والركود."
    },
    {
      icon: <ShoppingCart />,
      title: "للتجارة الإلكترونية",
      description: "تحسين معدلات التحويل وتقليل التخلي عن سلة التسوق من خلال عروض كاشباك جذابة على المشتريات المكتملة."
    },
    {
      icon: <Briefcase />,
      title: "للخدمات المهنية",
      description: "بناء علاقات طويلة الأمد مع العملاء من خلال برامج كاشباك تكافئ الولاء وتشجع على الإحالات."
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">حالات استخدام حلول الكاشباك</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="feature-card p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <div className="text-primary p-2 bg-primary/10 rounded-full">
                {useCase.icon}
              </div>
              {useCase.title}
            </h3>
            <p className="text-text/80 mb-4">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CashbackUseCases;
