import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle, ArrowRight,
  TrendingUp, Database, Globe,
  ChevronLeft, ChevronRight, Target
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
  { image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=200', title: 'Account Management', desc: 'Full-service marketplace management across Amazon, Noon, and Trendyol.' },
  { image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=200', title: 'Listing Optimization', desc: 'SEO-first titles, bullets, and keywords optimized for each marketplace algorithm.' },
  { image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200', title: 'PPC Advertising', desc: 'Performance-driven ad campaigns that maximize ROAS across all platforms.' },
  { image: 'https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=200', title: 'Return & Reimbursement Management', desc: 'We recover lost revenue from returned items by filing and tracking reimbursement claims on your behalf.' },
  { image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=200', title: 'Inventory Planning', desc: 'Smart inventory management to maintain stock levels and avoid lost sales.' },
  { image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=200', title: 'Reporting & Analytics', desc: 'Custom dashboards tracking sales, ads, conversion rates, and revenue trends.' },
  { image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200', title: 'A+ Content & Brand Store', desc: 'Premium visual content that drives clicks and builds brand authority.' },
  { image: 'https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=200', title: 'Social Media Management', desc: 'Meta Ads, Instagram posts, and Facebook page management to drive traffic and brand awareness.' },
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
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const next = useCallback(() => {
    setDirection('next');
    setCurrent((c) => (c + 1) % banners.length);
  }, []);

  const prev = useCallback(() => {
    setDirection('prev');
    setCurrent((c) => (c - 1 + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 10000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-16 lg:pt-[76px] overflow-hidden">
        <div className="relative w-full bg-navy-950">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-navy-950/90 via-navy-900/60 to-transparent" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/40" />

          {/* Carousel images */}
          <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[620px]">
            {banners.map((banner, i) => (
              <div
                key={banner.image}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === current
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 z-0'
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.headline}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}

            {/* Text overlay */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container-max mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                  {banners.map((banner, i) => (
                    <div
                      key={banner.headline}
                      className={`absolute transition-all duration-500 ease-out ${
                        i === current
                          ? 'opacity-100 translate-y-0'
                          : direction === 'next'
                          ? 'opacity-0 translate-y-8'
                          : 'opacity-0 -translate-y-8'
                      }`}
                      style={{ transitionDelay: i === current ? '200ms' : '0ms' }}
                    >
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-4 sm:mb-6 font-heading drop-shadow-lg">
                        {banner.headline}
                      </h1>
                      <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-lg drop-shadow-md">
                        {banner.subheadline}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-20">
              <div className="container-max mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0 text-[15px] font-heading"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Free Consultation
                  </a>
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-[15px] font-heading"
                  >
                    See Results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? 'w-10 bg-white shadow-lg'
                      : 'w-3 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Strip */}
      <section className="py-8 border-b border-navy-100 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-navy-400 text-sm font-medium mb-6">Trusted by brands on:</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-7 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Noon_Website_Logo.svg" alt="Noon" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Trendyol_logo.svg" alt="Trendyol" className="h-7 opacity-80 hover:opacity-100 transition-opacity" />
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
                  <div className="w-14 h-14 rounded-xl overflow-hidden mb-5 group-hover:scale-110 transition-transform shadow-sm">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
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
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-navy-900 bg-white hover:bg-navy-50 transition-all shadow-lg hover:-translate-y-0.5 text-lg font-heading">
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
