
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import News from "./pages/News";
import NewsArticle4 from "./pages/NewsArticle4";
import NewsArticle5 from "./pages/NewsArticle5";
import NewsArticle6 from "./pages/NewsArticle6";
import NewsArticle7 from "./pages/NewsArticle7";
import NewsArticle8 from "./pages/NewsArticle8";
import Team from "./pages/Team";
import WhoAreWe from "./pages/WhoAreWe";
import HelpCenter from "./pages/HelpCenter";
import FAQ from "./pages/FAQ";
import LoyaltyCards from "./pages/LoyaltyCards";
import CashbackSolutions from "./pages/CashbackSolutions";
import MarketingPlatforms from "./pages/MarketingPlatforms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/4" element={<NewsArticle4 />} />
          <Route path="/news/5" element={<NewsArticle5 />} />
          <Route path="/news/6" element={<NewsArticle6 />} />
          <Route path="/news/7" element={<NewsArticle7 />} />
          <Route path="/news/8" element={<NewsArticle8 />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/who-are-we" element={<WhoAreWe />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/loyalty-cards" element={<LoyaltyCards />} />
          <Route path="/cashback-solutions" element={<CashbackSolutions />} />
          <Route path="/marketing-platforms" element={<MarketingPlatforms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
