import { Link } from 'react-router-dom';
import {
  MessageCircle, ArrowRight, ShoppingCart, BarChart3, Search, Palette,
  TrendingUp, Database, Star, CheckCircle2, Users, DollarSign, Award, Lightbulb, Globe
} from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

const stats = [
  { value: '150+', label: 'Brands Managed', icon: Users },
  { value: '$25M+', label: 'Ad Spend Managed', icon: DollarSign },
  { value: '95%', label: 'Client Retention', icon: Award },
  { value: '5+', label: 'Marketplaces Covered', icon: TrendingUp },
];

const services = [
  { icon: ShoppingCart, title: 'Marketplace Account Management', desc: 'Full-service management across Amazon, Noon, Trendyol, and Temu with daily optimization and growth strategy.' },
  { icon: BarChart3, title: 'Marketplace Advertising', desc: 'Performance-driven ad campaigns across Amazon, Noon, Trendyol, and Temu that maximize ROAS and scale revenue.' },
  { icon: Globe, title: 'International Expansion', desc: 'Launch and scale your brand into USA, UK, and European markets with localized strategy and market entry planning.' },
  { icon: Search, title: 'Listing Optimization', desc: 'SEO-first titles, bullets, keywords, and backend search terms optimized for each marketplace algorithm.' },
  { icon: Palette, title: 'Creative & A+ Content', desc: 'Scroll-stopping infographics, product images, and enhanced brand content tailored to each platform.' },
  { icon: Lightbulb, title: 'Product Recommendation', desc: 'Identify winning products with market demand analysis, competitor benchmarking, and cross-marketplace data insights.' },
  { icon: Database, title: 'Data Analytics', desc: 'Custom dashboards tracking ROAS, ACOS, conversion rates, and revenue trends across all platforms.' },
];

const caseStudies = [
  { metric: '+120%', label: 'Sales Growth', desc: 'Fashion brand achieved 120% sales growth after launching on Trendyol and expanding Amazon ads.', color: 'from-brand-500 to-brand-600' },
  { metric: '18%', label: 'ACOS Achieved', desc: 'Reduced ACOS from 45% to 18% for a health & beauty brand across Amazon and Noon.', color: 'from-accent-500 to-accent-600' },
  { metric: '5X', label: 'Revenue via Expansion', desc: 'Electronics brand grew 5X revenue by expanding from UAE to USA and UK Amazon marketplaces.', color: 'from-brand-500 to-accent-500' },
];

const testimonials = [
  { name: 'Ahmed K.', role: 'Fashion Brand Owner', text: 'Sales doubled in 2 months across Amazon and Noon. Their marketplace ads expertise is unmatched.' },
  { name: 'Sara M.', role: 'Health & Beauty CEO', text: 'They launched us on Trendyol and Temu while optimizing our UAE ad spend. Revenue up 3X.' },
  { name: 'Omar R.', role: 'Electronics Brand, UK', text: 'NextArc helped us expand from UAE to Amazon UK and USA. Their international strategy delivered 5X growth.' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0f1a_70%)]" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-6">
                Full-Service Ecommerce Ad Agency
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] text-balance mb-6">
                Scale Your Brand on{' '}
                <span className="gradient-text">Every Marketplace, Globally</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                We manage and scale brands on Amazon, Noon, Trendyol, and Temu. Performance ads, marketplace optimization, and global expansion into USA, UK, and beyond.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="mt-12 flex items-center justify-center gap-2 text-dark-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
                <span>No commitment required</span>
                <span className="mx-2">|</span>
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
                <span>Free strategy call</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-t border-white/5">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="glass-card p-6 lg:p-8 text-center group">
                  <stat.icon className="w-8 h-8 text-brand-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-dark-300 text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="What We Do"
            title="Services That Drive Revenue"
            description="End-to-end marketplace advertising and management across Amazon, Noon, Trendyol, Temu, and international markets."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="glass-card p-6 lg:p-8 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-brand-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{service.desc}</p>
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

      {/* Case Studies */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="Results"
            title="Real Results for Real Brands"
            description="Our clients see measurable improvements in revenue, ad efficiency, and organic growth."
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.label} delay={i * 100}>
                <div className="glass-card p-8 text-center group hover:scale-[1.02] transition-transform">
                  <div className={`text-5xl lg:text-6xl font-extrabold bg-gradient-to-r ${cs.color} bg-clip-text text-transparent mb-2`}>
                    {cs.metric}
                  </div>
                  <div className="text-white font-semibold mb-3">{cs.label}</div>
                  <p className="text-dark-300 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary">
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="Testimonials"
            title="What Our Clients Say"
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="glass-card p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-dark-200 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-dark-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="glass-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                  Ready to Dominate Marketplaces Globally?
                </h2>
                <p className="text-dark-300 text-lg max-w-xl mx-auto mb-8">
                  Get a free strategy call. Whether you want to scale ads, launch on new platforms, or expand into USA and UK - we've got you.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
