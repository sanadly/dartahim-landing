
import { ArrowRight, ChevronLeft, Code, Server, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

const CashbackCTA = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-10 text-center mb-16 overflow-hidden">
      {/* Background circles for visual interest */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent/20 rounded-full blur-xl translate-x-1/4 translate-y-1/4"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-3xl font-bold mb-4">جاهز لتنفيذ برنامج كاشباك فعال لشركتك؟</h2>
        <p className="text-lg text-text/70 max-w-3xl mx-auto mb-8">
          تواصل معنا اليوم لمعرفة كيف يمكن لحلول الكاشباك المخصصة من دراهم أن تساعد في نمو أعمالك وزيادة ولاء عملائك.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="button-primary flex items-center justify-center gap-2">
            أحجز موعد <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/#contact" className="button-outline flex items-center justify-center gap-2">
            تواصل معنا <ChevronLeft className="h-4 w-4" />
          </a>
        </div>
        
        {/* Added feature highlights */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            { icon: <Code className="h-4 w-4" />, text: "حلول مخصصة" },
            { icon: <Server className="h-4 w-4" />, text: "تكامل مع أنظمتك" },
            { icon: <Shield className="h-4 w-4" />, text: "أمان البيانات" },
            { icon: <Users className="h-4 w-4" />, text: "دعم مستمر" }
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full py-2 px-4 text-sm border border-white/40">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                {feature.icon}
              </div>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CashbackCTA;
