import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle, ArrowRight, ShoppingCart, BarChart3, Search, Palette,
  TrendingUp, Database, Globe,
  ChevronLeft, ChevronRight, Package, Truck, PieChart, Target
} from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

const slides = [
  {
    headline: 'Grow Your Amazon & Noon Sales',
    subtext: 'Data-driven marketplace growth for UAE & KSA brands',
    cta: 'Get Free Account Review',
    ctaLink: '/contact',
  },
  {
    headline: 'Marketplace Growth Made Simple',
    subtext: 'Listings, PPC, pricing & inventory — all optimized',
    cta: 'View Services',
    ctaLink: '/services',
  },
  {
    headline: 'Turn Traffic Into Sales',
    subtext: 'Improve conversion, Buy Box %, and profitability',
    cta: 'Contact Us',
    ctaLink: '/contact',
  },
];

const services = [
  { icon: ShoppingCart, title: 'Account Management', desc: 'Full-service marketplace management across Amazon, Noon, Trendyol, and Temu.' },
  { icon: Search, title: 'Listing Optimization', desc: 'SEO-first titles, bullets, and keywords optimized for each marketplace algorithm.' },
  { icon: BarChart3, title: 'PPC Advertising', desc: 'Performance-driven ad campaigns that maximize ROAS across all platforms.' },
  { icon: Package, title: 'Inventory Planning', desc: 'Smart inventory management to maintain stock levels and avoid lost sales.' },
  { icon: PieChart, title: 'Reporting & Analytics', desc: 'Custom dashboards tracking sales, ads, conversion rates, and revenue trends.' },
  { icon: Palette, title: 'A+ Content & Brand Store', desc: 'Premium visual content that drives clicks and builds brand authority.' },
];

const whyUs = [
  { icon: Target, title: 'Marketplace Expertise', desc: 'Deep knowledge of Amazon, Noon, Trendyol & Temu algorithms and best practices.' },
  { icon: Database, title: 'Data-Driven Strategy', desc: 'Every decision backed by real marketplace data, not guesswork.' },
  { icon: TrendingUp, title: 'Conversion Focused', desc: 'We optimize for sales, not vanity metrics. Every action ties to revenue.' },
  { icon: Globe, title: 'UAE & GCC Experience', desc: '150+ brands managed in UAE, KSA, and international markets.' },
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
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <>
      {/* Hero Carousel */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[480px]">
            {/* Slide Content */}
            <div className="relative">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === current ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-50 text-brand-600 border border-brand-100 mb-5">
                    Ecommerce Ad Agency
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-5">
                    {slide.headline}
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-500 mb-8 max-w-lg leading-relaxed">
                    {slide.subtext}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <Link to={slide.ctaLink} className="btn-primary text-base px-7 py-3.5">
                      {slide.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-7 py-3.5">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
              {/* Carousel Controls */}
              <div className="flex items-center gap-3 mt-10">
                <button onClick={prev} className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-300 hover:text-brand-600 transition-colors bg-white">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current ? 'w-8 bg-brand-500' : 'w-2 bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <button onClick={next} className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-300 hover:text-brand-600 transition-colors bg-white">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual - Dashboard Mockup */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="bg-white rounded-2xl shadow-card-hover border border-slate-100 p-6 relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-sm font-semibold text-slate-700">Sales Overview</h3>
                    <span className="text-xs text-slate-400">Last 30 days</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-slate-800">$48.2K</div>
                      <div className="text-xs text-slate-400">Revenue</div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-emerald-600">+28%</div>
                      <div className="text-xs text-slate-400">Growth</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-brand-600">3.9X</div>
                      <div className="text-xs text-slate-400">ROAS</div>
                    </div>
                  </div>
                  {/* Chart bars */}
                  <div className="flex items-end gap-2 h-24">
                    {[40, 55, 45, 65, 50, 75, 60, 85, 70, 90, 78, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand-500 to-brand-300 opacity-80" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>

                {/* Floating Card - Orders */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-card border border-slate-100 p-3 z-20 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <Truck className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-700">324 Orders</div>
                      <div className="text-xs text-emerald-500">+12% today</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card - Conversion */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card border border-slate-100 p-3 z-20" style={{ animation: 'float 3s ease-in-out 1s infinite' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-brand-500" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-700">4.2% CVR</div>
                      <div className="text-xs text-brand-500">+0.8% this week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Strip */}
      <section className="py-8 border-y border-slate-100 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-400 text-sm font-medium">
            <span className="text-slate-300">Trusted by brands on:</span>
            <span className="text-slate-600 font-semibold">Amazon</span>
            <span className="text-slate-600 font-semibold">Noon</span>
            <span className="text-slate-600 font-semibold">Trendyol</span>
            <span className="text-slate-600 font-semibold">Temu</span>
            <span className="text-slate-600 font-semibold">Shopify</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
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
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
                    <service.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
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
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="Why NextArc"
            title="Why Brands Choose Us"
            description="We don't just manage accounts. We build revenue growth systems."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="card p-6 text-center h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-100 transition-colors">
                    <item.icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="Performance"
            title="Results That Speak"
            description="Average metrics across our managed marketplace accounts."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 100}>
                <div className="card p-6 lg:p-8 text-center group">
                  <div className="text-3xl lg:text-4xl font-extrabold text-brand-600 mb-1">{m.value}</div>
                  <div className="text-slate-800 font-semibold text-sm mb-1">{m.label}</div>
                  <div className="text-slate-400 text-xs">{m.sublabel}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-slate-50">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="Testimonials"
            title="What Our Clients Say"
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: 'Ahmed K.', role: 'Fashion Brand Owner', text: 'Sales doubled across Amazon and Noon. Their marketplace ads expertise is unmatched.' },
              { name: 'Sara M.', role: 'Health & Beauty CEO', text: 'They launched us on Trendyol and Temu while optimizing our UAE ad spend. Revenue up 3X.' },
              { name: 'Omar R.', role: 'Electronics Brand, UK', text: 'NextArc helped us expand from UAE to Amazon UK and USA. Their international strategy delivered 5X growth.' },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="card p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                  <div>
                    <div className="text-slate-800 font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                  Ready to grow your marketplace sales?
                </h2>
                <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
                  Get a free strategy call. No commitment, just actionable insights for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 text-lg" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-brand-700 bg-white hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5 text-lg" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
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
