import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle, ArrowRight, ShoppingCart, BarChart3, Search, Palette,
  TrendingUp, Database, Globe,
  ChevronLeft, ChevronRight, Package, PieChart, Target
} from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

const banners = [
  {
    image: '/account_management.png',
    headline: 'Scale Your Amazon & Noon Business',
    subheadline: 'Data-driven marketplace advertising that delivers measurable ROI across every platform.',
  },
  {
    image: '/adcampaign.png',
    headline: 'Performance Advertising That Converts',
    subheadline: 'Reduce ACOS from 50% to 15% with AI-powered campaign optimization.',
  },
  {
    image: '/BSR.png',
    headline: 'Dominate Best Seller Rankings',
    subheadline: 'Strategic listing optimization and advertising to win top positions on every marketplace.',
  },
  {
    image: '/invenrtory.png',
    headline: 'Smart Inventory. Zero Lost Sales.',
    subheadline: 'Predictive inventory management across Amazon, Noon, and Trendyol.',
  },
];

const services = [
  { icon: ShoppingCart, title: 'Account Management', desc: 'Full-service marketplace management across Amazon, Noon, and Trendyol.' },
  { icon: Search, title: 'Listing Optimization', desc: 'SEO-first titles, bullets, and keywords optimized for each marketplace algorithm.' },
  { icon: BarChart3, title: 'PPC Advertising', desc: 'Performance-driven ad campaigns that maximize ROAS across all platforms.' },
  { icon: Package, title: 'Inventory Planning', desc: 'Smart inventory management to maintain stock levels and avoid lost sales.' },
  { icon: PieChart, title: 'Reporting & Analytics', desc: 'Custom dashboards tracking sales, ads, conversion rates, and revenue trends.' },
  { icon: Palette, title: 'A+ Content & Brand Store', desc: 'Premium visual content that drives clicks and builds brand authority.' },
];

const whyUs = [
  { icon: Target, title: 'Marketplace Expertise', desc: 'Deep knowledge of Amazon, Noon & Trendyol algorithms and best practices.' },
  { icon: Database, title: 'Data-Driven Strategy', desc: 'Every decision backed by real marketplace data, not guesswork.' },
  { icon: TrendingUp, title: 'Conversion Focused', desc: 'We optimize for sales, not vanity metrics. Every action ties to revenue.' },
  { icon: Globe, title: 'UAE & GCC Experience', desc: '25+ brands managed in UAE, KSA, and international markets.' },
];

const metrics = [
  { value: '+35%', label: 'Avg. Sales Growth', sublabel: 'within first 90 days' },
  { value: '4.2%', label: 'Conversion Rate', sublabel: 'across managed accounts' },
  { value: '82%', label: 'Buy Box Win Rate', sublabel: 'sustained average' },
  { value: '3.8X', label: 'ROAS', sublabel: 'average ad return' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % banners.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 10000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <>
      {/* Hero Banner Carousel */}
      <section className="relative pt-16 lg:pt-[72px]">
        <div className="relative w-full overflow-hidden bg-white">
          <div className="relative w-full" style={{ aspectRatio: '16 / 6' }}>
            {banners.map((banner, i) => (
              <div
                key={banner.image}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.headline}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-navy-200 flex items-center justify-center text-navy-700 hover:bg-white transition-all shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-navy-200 flex items-center justify-center text-navy-700 hover:bg-white transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-orange-500 shadow-lg' : 'w-2.5 bg-navy-300 hover:bg-navy-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Below Banner */}
      <section className="py-8 sm:py-10 bg-white border-b border-navy-100">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
            </a>
            <Link to="/case-studies" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              See Results
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Strip */}
      <section className="py-8 border-b border-navy-100 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-navy-400 text-sm font-medium mb-6">Trusted by brands on:</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-7 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Noon_Website_Logo.svg" alt="Noon" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Trendyol_logo.svg" alt="Trendyol" className="h-7 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" className="h-7 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="What We Do"
            title="Full-Service Marketplace Growth"
            description="Everything you need to scale your ecommerce business across all major platforms."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="card p-6 lg:p-8 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{service.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose NextArc */}
      <section className="section-padding section-soft">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="Why NextArc"
            title="Why Brands Choose Us"
            description="We don't just manage accounts. We build revenue growth systems."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="glass-card p-6 text-center h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-base font-bold text-navy-800 mb-2">{item.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="Performance"
            title="Results That Speak"
            description="Average metrics across our managed marketplace accounts."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 100}>
                <div className="card p-6 lg:p-8 text-center group hover:border-teal-200">
                  <div className="text-3xl lg:text-4xl font-extrabold text-teal-600 mb-1">{m.value}</div>
                  <div className="text-navy-800 font-semibold text-sm mb-1">{m.label}</div>
                  <div className="text-navy-400 text-xs">{m.sublabel}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-soft">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="Testimonials"
            title="What Our Clients Say"
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Ahmed K.', role: 'Fashion Brand Owner', text: 'Sales doubled across Amazon and Noon. Their marketplace ads expertise is unmatched.' },
              { name: 'Sara M.', role: 'Health & Beauty CEO', text: 'They launched us on Amazon USA and UK while optimizing our UAE ad spend. Revenue up 3X.' },
              { name: 'Omar R.', role: 'Electronics Brand, UK', text: 'NextArc helped us expand from UAE to Amazon UK and USA. Their international strategy delivered 5X growth.' },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="glass-card p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-orange-400 fill-orange-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-navy-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                  <div>
                    <div className="text-navy-800 font-semibold text-sm">{t.name}</div>
                    <div className="text-navy-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                  Ready to grow your marketplace sales?
                </h2>
                <p className="text-navy-300 text-lg max-w-xl mx-auto mb-8">
                  Get a free strategy call. No commitment, just actionable insights for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-navy-900 bg-white hover:bg-navy-50 transition-all shadow-lg hover:-translate-y-0.5 text-lg" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                    Request Free Review
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
