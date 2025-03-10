import { ChevronRight } from "lucide-react";
const LoyaltyImageSection = () => {
  return <div className="mb-20 bg-primary/5 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-4">عزز ولاء العملاء من خلال الكاشباك</h2>
          <p className="text-text/80 mb-6">
            يعد الكاشباك من أقوى الأدوات التي تساعدك على بناء علاقات طويلة المدى مع عملائك. كلما زادت مشترياتهم، زادت المكافآت، مما يخلق حلقة إيجابية من الولاء والإنفاق المتكرر.
          </p>
          <ul className="space-y-2">
            {[1, 2, 3].map((_, index) => <li key={index} className="flex items-center gap-2">
                <div className="text-primary">
                  <ChevronRight className="h-5 w-5" />
                </div>
                <span className="text-text/80">
                  {index === 0 ? "زيادة معدل الاحتفاظ بالعملاء بنسبة تصل إلى 30%" : index === 1 ? "زيادة متوسط قيمة الطلب بنسبة 25%" : "الاستفادة من بيانات سلوك العملاء لتحسين العروض"}
                </span>
              </li>)}
          </ul>
        </div>
        <div className="md:h-full">
          <img alt="كاشباك دراهم" src="/lovable-uploads/9d3431e8-f0b4-4b0c-a766-c4ba1bd2505d.jpg" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>;
};
export default LoyaltyImageSection;