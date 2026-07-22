import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ExitPopup from './components/ExitPopup';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import AmazonPPC from './pages/services/AmazonPPC';
import NoonAdvertising from './pages/services/NoonAdvertising';
import TrendyolAds from './pages/services/TrendyolAds';
import UsaUkExpansion from './pages/services/UsaUkExpansion';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Emergency from './pages/Emergency';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function WithLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ExitPopup />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<WithLayout><Home /></WithLayout>} />
        <Route path="/about" element={<WithLayout><About /></WithLayout>} />
        <Route path="/services" element={<WithLayout><Services /></WithLayout>} />
        <Route path="/services/amazon-ppc" element={<WithLayout><AmazonPPC /></WithLayout>} />
        <Route path="/services/noon-advertising" element={<WithLayout><NoonAdvertising /></WithLayout>} />
        <Route path="/services/trendyol-ads" element={<WithLayout><TrendyolAds /></WithLayout>} />
        <Route path="/services/usa-uk-expansion" element={<WithLayout><UsaUkExpansion /></WithLayout>} />
        <Route path="/case-studies" element={<WithLayout><CaseStudies /></WithLayout>} />
        <Route path="/pricing" element={<WithLayout><Pricing /></WithLayout>} />
        <Route path="/blog" element={<WithLayout><Blog /></WithLayout>} />
        <Route path="/blog/:slug" element={<WithLayout><BlogPost /></WithLayout>} />
        <Route path="/contact" element={<WithLayout><Contact /></WithLayout>} />
        <Route path="/privacy-policy" element={<WithLayout><PrivacyPolicy /></WithLayout>} />
        <Route path="/terms-of-service" element={<WithLayout><TermsOfService /></WithLayout>} />
        <Route path="/emergency" element={<WithLayout><Emergency /></WithLayout>} />
        <Route path="*" element={<WithLayout><NotFound /></WithLayout>} />
      </Routes>
    </>
  );
}
