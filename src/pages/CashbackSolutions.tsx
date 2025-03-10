
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BusinessSolution from "@/components/cashback/BusinessSolution";
import CashbackBenefits from "@/components/cashback/CashbackBenefits";
import LoyaltyImageSection from "@/components/cashback/LoyaltyImageSection";
import CashbackFeatures from "@/components/cashback/CashbackFeatures";
import CashbackUseCases from "@/components/cashback/CashbackUseCases";
import CashbackCTA from "@/components/cashback/CashbackCTA";

const CashbackSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">حلول الكاشباك للشركات</h1>
            <p className="text-xl text-text/70 max-w-3xl mx-auto">
              نقدم حلولاً متكاملة ومخصصة لتنفيذ أنظمة الكاشباك التي تساعد شركتك على زيادة المبيعات وتعزيز ولاء العملاء
            </p>
          </div>
          
          {/* Business Implementation Process - New B2B Focused Component */}
          <BusinessSolution />
          
          {/* Benefits Section with image */}
          <CashbackBenefits />
          
          {/* Added image for engagement */}
          <LoyaltyImageSection />
          
          {/* Features Section */}
          <CashbackFeatures />
          
          {/* Use Cases with icons */}
          <CashbackUseCases />
          
          {/* CTA Section - Enhanced */}
          <CashbackCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CashbackSolutions;
