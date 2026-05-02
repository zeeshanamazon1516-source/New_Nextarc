import { MessageCircle, ArrowRight, ShoppingCart, BarChart3, Search, Palette, Database, CheckCircle2, Lightbulb, Zap, Globe } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: BarChart3,
    title: 'Marketplace Advertising (PPC & Sponsored Ads)',
    desc: 'Performance-driven ad campaigns across Amazon, Noon, Trendyol, and Temu. We manage your entire ad strategy to maximize ROAS and scale profitably.',
    features: ['Amazon Sponsored Products & Brands & Display', 'Noon Ads campaign management', 'Trendyol promoted listings & ads', 'Temu advertising optimization', 'ACOS reduction & bid automation', 'Weekly performance reports & scaling'],
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace Account Management',
    desc: 'Full-service account management across Amazon, Noon, Trendyol, and Temu. From daily operations to growth strategy, we handle everything.',
    features: ['Multi-marketplace daily monitoring', 'Inventory & pricing strategy', 'Catalog management & compliance', 'Performance reporting', 'Competitor analysis', 'Account health maintenance'],
  },
  {
    icon: Globe,
    title: 'International Market Expansion (USA & UK)',
    desc: 'We help brands expand from local markets into the USA, UK, and Europe. Full market entry strategy, localized listings, compliant setup, and launch advertising.',
    features: ['USA Amazon FBA/FBM setup', 'UK marketplace launch strategy', 'Localized listing & keyword optimization', 'Cross-border logistics guidance', 'Market research & competitor mapping', 'Launch advertising campaigns'],
  },
  {
    icon: Search,
    title: 'Listing Optimization',
    desc: 'SEO-first approach to product listings optimized for each marketplace algorithm - Amazon A9, Noon, Trendyol, and Temu search ranking.',
    features: ['Platform-specific SEO optimization', 'Bullet point & description copywriting', 'Backend keyword research', 'Search term & attribute optimization', 'Category & browse node setup', 'A/B testing & conversion optimization'],
  },
  {
    icon: Palette,
    title: 'Creative & A+ Content',
    desc: 'High-converting visual content tailored for each marketplace. From product photography to enhanced brand content that drives clicks and conversions.',
    features: ['Product infographics', 'Lifestyle imagery', 'A+ / Enhanced brand content', 'Storefront & brand page design', 'Video content creation', 'Platform-specific creative formats'],
  },
  {
    icon: Lightbulb,
    title: 'Product Recommendation & Market Research',
    desc: 'Identify winning products for each marketplace based on demand, competition, and margin analysis. Know what to sell and where before you invest.',
    features: ['Marketplace-specific demand analysis', 'Cross-platform opportunity mapping', 'Competitor benchmarking', 'Profit margin estimation', 'Launch strategy by platform', 'Trend & seasonality insights'],
  },
  {
    icon: Zap,
    title: 'Quick Commerce Strategy',
    desc: 'Launch and scale on rapid-delivery platforms like Noon Minutes, Talabat Mart, and Amazon Fresh. Capture high-intent, impulse-driven demand in the UAE.',
    features: ['Platform onboarding & setup', 'Dark store inventory planning', 'Rapid-delivery listing optimization', 'Promotional calendar management', 'Real-time stock monitoring', 'Performance analytics & reporting'],
  },
  {
    icon: Database,
    title: 'Data Analytics & Cross-Platform Reporting',
    desc: 'Unified analytics dashboards tracking performance across all your marketplaces. One view for Amazon, Noon, Trendyol, and Temu metrics.',
    features: ['Cross-platform dashboards', 'ROAS & ACOS tracking by marketplace', 'Conversion analysis', 'Revenue attribution by channel', 'Trend forecasting', 'Monthly strategy reviews'],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-100/30 rounded-full blur-3xl" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-50 text-brand-600 border border-brand-100 mb-4">
                Our Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Marketplace Ads & Growth <span className="gradient-text">That Scales</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-500 leading-relaxed">
                Full-service advertising and management across Amazon, Noon, Trendyol, and Temu. Plus international expansion into USA, UK, and European markets.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto space-y-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 60}>
              <div className="card p-6 sm:p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr,auto] gap-8">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mt-1">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-72">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-slate-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
                <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
                  Every brand is different. Let's discuss a tailored strategy for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-all shadow-lg text-lg" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-brand-700 bg-white hover:bg-blue-50 transition-all shadow-lg text-lg" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                    View Pricing
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
