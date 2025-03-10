
import { Check } from "lucide-react";
import ImplementationTabs from "./ImplementationTabs";

const BusinessSolution = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
      <div className="order-2 md:order-1">
        {/* Interactive Business Implementation Showcase */}
        <ImplementationTabs />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-3xl font-bold mb-6">حلول كاشباك مخصصة لشركتك</h2>
        <p className="text-text/80 mb-4 leading-relaxed">
          في دراهم، نفهم أن كل شركة لديها احتياجات فريدة لبرامج الكاشباك الخاصة بها. لذلك، نقدم خدمات شاملة لتطوير وتنفيذ وإدارة أنظمة الكاشباك المخصصة التي تتناسب مع نموذج أعمالك وأهدافك.
        </p>
        <p className="text-text/80 mb-4 leading-relaxed">
          نحن لا نقدم فقط منصة جاهزة، بل نعمل معك كشريك استراتيجي لتصميم وتنفيذ حل متكامل يمكنك من تقديم برامج استرداد نقدي فعالة لعملائك، مع ضمان التكامل السلس مع أنظمتك الحالية.
        </p>
        <p className="text-text/80 leading-relaxed mb-6">
          من التحليل الأولي وحتى التنفيذ النهائي والدعم المستمر، سيعمل فريقنا من الخبراء معك في كل خطوة لضمان نجاح برنامج الكاشباك الخاص بك.
        </p>
        
        {/* Added Feature List */}
        <div className="mt-2">
          <h3 className="font-bold text-lg mb-3">ما يميز خدماتنا:</h3>
          <ul className="space-y-2">
            {[
              "فريق تطوير متخصص في أنظمة الكاشباك للشركات",
              "حلول مخصصة حسب احتياجات كل شركة ونموذج أعمالها",
              "تكامل مع أنظمة نقاط البيع والمتاجر الإلكترونية الحالية",
              "لوحات تحكم متطورة لإدارة برامج الكاشباك وتحليل النتائج",
              "دعم فني وتقني مستمر لضمان أداء النظام بكفاءة"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolution;
