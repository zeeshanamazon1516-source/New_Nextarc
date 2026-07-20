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
import NotFound from './pages/NotFound';
import { initGA4 } from './lib/analytics';

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

function Layout({ children }: { children: React.ReactNode }) {
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
  useEffect(() => {
    initGA4();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/amazon-ppc" element={<AmazonPPC />} />
                <Route path="/services/noon-advertising" element={<NoonAdvertising />} />
                <Route path="/services/trendyol-ads" element={<TrendyolAds />} />
                <Route path="/services/usa-uk-expansion" element={<UsaUkExpansion />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}
