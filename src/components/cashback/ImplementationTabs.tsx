
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Pen, 
  HelpCircle, 
  Briefcase, 
  PieChart, 
  FileCode, 
  Server, 
  ShoppingCart, 
  Layers, 
  Database,
  Wrench,
  Check,
  BookOpen,
  LineChart,
  Settings,
  Shield,
  ArrowRight,
  Code
} from "lucide-react";

type TabItem = {
  id: number;
  title: string;
  icon: JSX.Element;
  component: JSX.Element;
};

const ImplementationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Implementation process tabs
  const implementationTabs: TabItem[] = [
    {
      id: 0,
      title: "تحليل وتصميم",
      icon: <Pen className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <h3 className="font-bold mb-3">تحليل الاحتياجات وتصميم النظام</h3>
          
          <div className="mb-4 border-b border-dashed border-primary/20 pb-3">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <HelpCircle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">دراسة متطلبات العميل</h4>
                <p className="text-xs text-text/70">نقوم بتحليل احتياجات عملك ومتطلبات برنامج الكاشباك لتحديد أفضل الحلول التي تناسب أهدافك.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">تحليل العمليات التجارية</h4>
                <p className="text-xs text-text/70">دراسة سير العمليات التجارية وتحديد نقاط التكامل مع نظام الكاشباك للحصول على أفضل النتائج.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <PieChart className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">تصميم هيكل البرنامج</h4>
                <p className="text-xs text-text/70">تصميم هيكل برنامج الكاشباك بما في ذلك معدلات الاسترداد، آليات الاحتساب، وطرق الاسترداد.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 p-3 rounded-lg mb-3">
            <h5 className="text-xs font-medium mb-2">نتائج مرحلة التحليل والتصميم:</h5>
            <ul className="text-xs space-y-1">
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" /> وثيقة متطلبات مفصلة
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" /> مخطط هيكلي للنظام
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" /> جدول زمني للتنفيذ
              </li>
              <li className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" /> تقدير التكلفة التفصيلي
              </li>
            </ul>
          </div>
          
          <div className="flex justify-between items-center text-xs text-text/70">
            <div>متوسط مدة المرحلة: 1-2 أسبوع</div>
            <button className="text-primary font-medium hover:underline flex items-center gap-1">
              معرفة المزيد <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "التطوير والتكامل",
      icon: <Code className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <h3 className="font-bold mb-3">تطوير النظام والتكامل مع الأنظمة الحالية</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-primary/10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="h-4 w-4 text-primary" />
                <h5 className="text-sm font-medium">تطوير واجهات المستخدم</h5>
              </div>
              <p className="text-xs text-text/80">تطوير واجهات مستخدم سهلة الاستخدام للعملاء والمسؤولين، مع مراعاة متطلبات العلامة التجارية.</p>
            </div>
            <div className="bg-secondary/10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Server className="h-4 w-4 text-secondary" />
                <h5 className="text-sm font-medium">بناء البنية التحتية</h5>
              </div>
              <p className="text-xs text-text/80">إنشاء بنية تحتية قوية وآمنة تضمن موثوقية النظام وقدرته على التعامل مع حجم المعاملات المتوقع.</p>
            </div>
          </div>
          
          <div className="border border-dashed border-primary/20 rounded-lg p-3 mb-4">
            <h4 className="text-sm font-medium mb-2">خيارات التكامل مع الأنظمة الحالية</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Database className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">تكامل قواعد البيانات:</span> ربط نظام الكاشباك مع قواعد بيانات العملاء والمنتجات لضمان التحديث الآني للمعلومات.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShoppingCart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">تكامل نقاط البيع:</span> دمج نظام الكاشباك مع أنظمة نقاط البيع للتعرف التلقائي على المشتريات واحتساب المكافآت.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Layers className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">واجهة برمجة التطبيقات (API):</span> توفير واجهات برمجية تتيح التكامل السلس مع تطبيقات الهاتف المحمول أو المواقع الإلكترونية.
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-3 rounded-lg">
            <h5 className="text-xs font-medium mb-1">التقنيات المستخدمة:</h5>
            <div className="flex flex-wrap gap-2 text-[10px]">
              {["Node.js", "React", "MongoDB", "PostgreSQL", "REST API", "Webhook", "AWS", "Docker"].map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-white/60 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "الاختبار والإطلاق",
      icon: <Wrench className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <h3 className="font-bold mb-3">اختبار النظام وإطلاقه</h3>
          
          <div className="space-y-3 mb-4">
            <div className="border-b border-dashed border-primary/20 pb-2">
              <h4 className="text-sm font-medium mb-2">مراحل الاختبار الشاملة</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-primary/5 p-2 rounded-lg">
                  <div className="font-medium mb-1">اختبار الوظائف</div>
                  <p className="text-text/70">التحقق من عمل جميع وظائف النظام حسب المتطلبات.</p>
                </div>
                <div className="bg-primary/5 p-2 rounded-lg">
                  <div className="font-medium mb-1">اختبار الأداء</div>
                  <p className="text-text/70">قياس سرعة النظام وقدرته على تحمل الأحمال المختلفة.</p>
                </div>
                <div className="bg-primary/5 p-2 rounded-lg">
                  <div className="font-medium mb-1">اختبار الأمان</div>
                  <p className="text-text/70">فحص مستوى أمان النظام ضد الاختراقات المحتملة.</p>
                </div>
                <div className="bg-primary/5 p-2 rounded-lg">
                  <div className="font-medium mb-1">اختبار القبول</div>
                  <p className="text-text/70">مراجعة النظام مع العميل للتأكد من تلبية جميع المتطلبات.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">استراتيجية الإطلاق</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-secondary/10 p-2 rounded-lg flex items-start gap-2">
                  <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary font-medium">1</span>
                  </div>
                  <div>
                    <div className="font-medium">الإطلاق التجريبي</div>
                    <p className="text-text/70">إطلاق النظام لمجموعة محدودة من العملاء لاختبار الأداء في بيئة حقيقية.</p>
                  </div>
                </div>
                <div className="bg-secondary/10 p-2 rounded-lg flex items-start gap-2">
                  <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary font-medium">2</span>
                  </div>
                  <div>
                    <div className="font-medium">المراقبة والتحسين</div>
                    <p className="text-text/70">مراقبة أداء النظام وإجراء التحسينات اللازمة بناءً على التغذية الراجعة.</p>
                  </div>
                </div>
                <div className="bg-secondary/10 p-2 rounded-lg flex items-start gap-2">
                  <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary font-medium">3</span>
                  </div>
                  <div>
                    <div className="font-medium">الإطلاق الكامل</div>
                    <p className="text-text/70">إطلاق النظام بشكل كامل لجميع المستخدمين مع حملة ترويجية مناسبة.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <div className="text-green-600 font-medium flex items-center">
              <Check className="h-4 w-4 mr-1" /> معدل نجاح الإطلاق: 98%
            </div>
            <div className="text-primary font-medium hover:underline cursor-pointer flex items-center">
              طلب عرض تجريبي <ArrowRight className="h-3 w-3 mr-1" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "الدعم والتطوير",
      icon: <BookOpen className="h-4 w-4" />,
      component: (
        <div className="p-4 bg-white/90 rounded-2xl shadow-lg border border-primary/20">
          <h3 className="font-bold mb-3">خدمات الدعم والتطوير المستمر</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="col-span-2 bg-primary/10 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-2">باقات الدعم الفني</h4>
              <div className="flex flex-wrap gap-3 text-xs">
                <div className="flex-1 bg-white/80 p-2 rounded-lg border border-primary/10">
                  <div className="font-medium mb-1 text-primary">الباقة الأساسية</div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> دعم عبر البريد الإلكتروني
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> وقت استجابة خلال 24 ساعة
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> تحديثات النظام الدورية
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-white/80 p-2 rounded-lg border border-primary/10">
                  <div className="font-medium mb-1 text-secondary">الباقة المتقدمة</div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> دعم على مدار الساعة
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> وقت استجابة خلال 4 ساعات
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" /> مدير حساب مخصص
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-dashed border-primary/20 pt-3 mb-3">
            <h4 className="text-sm font-medium mb-2">خدمات التطوير المستمر</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <LineChart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">تحسين الأداء:</span> مراقبة وتحسين أداء النظام بشكل مستمر لضمان سرعة وكفاءة العمليات.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Settings className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">إضافة ميزات جديدة:</span> تطوير وإضافة ميزات جديدة حسب احتياجات السوق والتغذية الراجعة من العملاء.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium">تحديثات الأمان:</span> إجراء تحديثات أمان دورية لحماية النظام والبيانات من التهديدات المحتملة.
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/5 p-3 rounded-lg flex items-center justify-between">
            <div className="text-xs">
              <span className="font-medium">نسبة رضا العملاء عن خدمات الدعم:</span>
              <div className="w-32 bg-gray-200 rounded-full h-1.5 mt-1">
                <div className="bg-primary h-1.5 rounded-full" style={{width: "95%"}}></div>
              </div>
              <span className="text-[10px] text-primary font-medium">95%</span>
            </div>
            <button className="text-white bg-primary text-xs py-1 px-3 rounded-lg hover:bg-primary/90 transition-colors">
              اطلب استشارة مجانية
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 shadow-lg border border-primary/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/2 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute -z-10 bottom-0 left-1/4 w-20 h-20 bg-accent/10 rounded-full blur-lg"></div>
      
      {/* Tabs Navigation */}
      <div className="flex mb-6 bg-white/30 backdrop-blur-sm rounded-full p-1 border border-white/40 relative z-10">
        {implementationTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1 text-xs md:text-sm py-2 px-3 md:px-4 rounded-full transition-all flex-1 ${
              activeTab === tab.id 
                ? "bg-primary text-white shadow-md" 
                : "hover:bg-white/40 text-text/70"
            }`}
          >
            {tab.icon}
            <span className="hidden md:inline">{tab.title}</span>
          </button>
        ))}
      </div>
      
      {/* Active Tab Content with Animation */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {implementationTabs[activeTab].component}
      </motion.div>
      
      {/* Implementation Process Timeline */}
      <div className="mt-5 pt-4 border-t border-dashed border-primary/20">
        <div className="flex justify-between">
          {implementationTabs.map((tab, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center ${activeTab >= idx ? 'text-primary' : 'text-text/40'}`}
              style={{ width: `${100 / implementationTabs.length}%` }}
            >
              <div className={`w-3 h-3 rounded-full ${activeTab >= idx ? 'bg-primary' : 'bg-text/20'}`}></div>
              <div className="text-[9px] mt-1 text-center">
                {tab.title}
              </div>
            </div>
          ))}
        </div>
        <div className="relative h-0.5 bg-text/20 -mt-[9px] z-0">
          <div 
            className="absolute top-0 left-0 h-full bg-primary transition-all" 
            style={{ width: `${(activeTab / (implementationTabs.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationTabs;
