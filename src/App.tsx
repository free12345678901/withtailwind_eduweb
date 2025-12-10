import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CTAPage from "./pages/CTAPage";
import CourseDetail from "./pages/CourseDetail";
import { StudentSuccessPage } from "./pages/StudentSuccessPage";
import { FAQPage } from "./pages/FAQPage";
import { HelmetProvider } from "react-helmet-async";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login";
import Signup from "@/pages/Signup";
import Admin from "@/pages/Admin";
import Student from "@/pages/Student";
import ForgotPassword from "./pages/ForgotPassword";

const ScrollToTopOnRouteChange = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup") {
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return null;
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cta" element={<CTAPage />} />
          <Route path="/course/:slug" element={<CourseDetail />} />
          <Route path="/student-success" element={<StudentSuccessPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/admin" element={<Admin />} />
           <Route path="/student" element={<Student />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </TooltipProvider>
);

export default App;
