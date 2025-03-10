
import { Percent } from "lucide-react";

const CashbackFeatures = () => {
  const features = [
    {
      title: "معدلات كاشباك مرنة",
      description: "تحديد نسب الكاشباك بناءً على فئات المنتجات، حجم الطلب، أو فترات زمنية محددة."
    },
    {
      title: "استرداد متعدد الخيارات",
      description: "تقديم خيارات متنوعة لاسترداد الكاشباك سواء كرصيد للطلبات المستقبلية أو تحويل نقدي."
    },
    {
      title: "حملات موجهة",
      description: "إنشاء عروض كاشباك مخصصة لشرائح عملاء محددة أو لتعزيز مبيعات منتجات معينة."
    },
    {
      title: "إشعارات فورية",
      description: "إبلاغ العملاء في الوقت الفعلي عن الكاشباك المكتسب لتعزيز تجربة التسوق الإيجابية."
    },
    {
      title: "تكامل سلس",
      description: "دمج حلول الكاشباك بسهولة مع أنظمة المدفوعات ومنصات التجارة الإلكترونية الحالية."
    },
    {
      title: "تقارير وتحليلات شاملة",
      description: "متابعة أداء برامج الكاشباك وتأثيرها على سلوك العملاء والمبيعات."
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">مميزات حلول الكاشباك من دراهم</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="feature-card p-6">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Percent size={18} className="text-primary" />
              {feature.title}
            </h3>
            <p className="text-text/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CashbackFeatures;
