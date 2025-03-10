
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusinessSolution from "@/components/cashback/BusinessSolution";
import CashbackBenefits from "@/components/cashback/CashbackBenefits";
import LoyaltyImageSection from "@/components/cashback/LoyaltyImageSection";
import CashbackFeatures from "@/components/cashback/CashbackFeatures";
import CashbackUseCases from "@/components/cashback/CashbackUseCases";
import CashbackCTA from "@/components/cashback/CashbackCTA";
import CashbackStatistics from "@/components/cashback/CashbackStatistics";
import CaseStudyShowcase from "@/components/cashback/CaseStudyShowcase";
import ImplementationTabs from "@/components/cashback/ImplementationTabs";

const CashbackSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">حلول الكاشباك للشركات</h1>
            <p className="text-base md:text-xl text-text/70 max-w-3xl mx-auto">
              نقدم حلولاً متكاملة ومخصصة لتنفيذ أنظمة الكاشباك التي تساعد شركتك على زيادة المبيعات وتعزيز ولاء العملاء
            </p>
          </div>
          
          {/* Add Statistics Section - New Component */}
          <CashbackStatistics />
          
          {/* Implementation Process - Improved Component */}
          <div className="my-10 md:my-16">
            <ImplementationTabs />
          </div>
          
          {/* Benefits Section with enhanced business benefits */}
          <CashbackBenefits />
          
          {/* Loyalty Image Section */}
          <LoyaltyImageSection />
          
          {/* CTA Section */}
          <CashbackCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CashbackSolutions;
