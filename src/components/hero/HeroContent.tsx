
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import BookingButton from '../BookingButton';

const HeroContent = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div className="order-2 lg:order-1" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants} className="inline-block px-4 py-1 rounded-full bg-secondary/30 backdrop-blur-sm mb-4">
        <span className="text-xs md:text-sm font-medium">المتخصصون في برامج الولاء و حلول التسويق الرقمية #1 في ليبيا</span>
      </motion.div>
      
      <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-relaxed">
        حلول <span className="text-gradient">البطاقات الرقمية</span> وبرامج المكافآت والولاء
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-base md:text-lg mb-6 md:mb-8 text-text/80 max-w-xl">
        دراهم هي شركة ليبية رائدة في حلول البطاقات الرقمية وبرامج المكافآت والولاء.  نمكّن الأفراد، الشركات، والتجار من تعظيم الفائدة من القيمة الرقمية، مع تجربة سلسة واستثنائية باستخدام تقنيات مبتكرة.
      </motion.p>
      
      <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
        <BookingButton className="text-sm md:text-base py-2 md:py-3" />
        <a href="#why-us" className="button-outline text-sm md:text-base py-2 md:py-3">لماذا دراهم؟</a>
      </motion.div>
      
      <motion.div variants={itemVariants} className="flex justify-center items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm text-primary mt-6 w-fit mx-auto lg:mx-0">
        <Award size={16} className="text-primary" />
        <span>شركة مُسجلة في ليبيا</span>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
