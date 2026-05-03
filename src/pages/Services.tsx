import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const services = [
  {
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'Marketplace Advertising (PPC & Sponsored Ads)',
    desc: 'Performance-driven ad campaigns across Amazon, Noon, and Trendyol. We manage your entire ad strategy to maximize ROAS and scale profitably.',
    features: ['Amazon Sponsored Products & Brands & Display', 'Noon Ads campaign management', 'Trendyol promoted listings & ads', 'Amazon USA & UK PPC strategy', 'ACOS reduction & bid automation', 'Weekly performance reports & scaling'],
  },
  {
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'Marketplace Account Management',
    desc: 'Full-service account management across Amazon, Noon, and Trendyol. From daily operations to growth strategy, we handle everything.',
    features: ['Multi-marketplace daily monitoring', 'Inventory & pricing strategy', 'Catalog management & compliance', 'Performance reporting', 'Competitor analysis', 'Account health maintenance'],
  },
  {
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'International Market Expansion (USA & UK)',
    desc: 'We help brands expand from local markets into the USA, UK, and Europe. Full market entry strategy, localized listings, compliant setup, and launch advertising.',
    features: ['USA Amazon FBA/FBM setup', 'UK marketplace launch strategy', 'Localized listing & keyword optimization', 'Cross-border logistics guidance', 'Market research & competitor mapping', 'Launch advertising campaigns'],
  },
  {
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'Listing Optimization',
    desc: 'SEO-first approach to product listings optimized for each marketplace algorithm - Amazon A9, Noon, and Trendyol search ranking.',
    features: ['Platform-specific SEO optimization', 'Bullet point & description copywriting', 'Backend keyword research', 'Search term & attribute optimization', 'Category & browse node setup', 'A/B testing & conversion optimization'],
  },
  {
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'Creative & A+ Content',
    desc: 'High-converting visual content tailored for each marketplace. From product photography to enhanced brand content that drives clicks and conversions.',
    features: ['Product infographics', 'Lifestyle imagery', 'A+ / Enhanced brand content', 'Storefront & brand page design', 'Video content creation', 'Platform-specific creative formats'],
  },
  {
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'Product Recommendation & Market Research',
    desc: 'Identify winning products for each marketplace based on demand, competition, and margin analysis. Know what to sell and where before you invest.',
    features: ['Marketplace-specific demand analysis', 'Cross-platform opportunity mapping', 'Competitor benchmarking', 'Profit margin estimation', 'Launch strategy by platform', 'Trend & seasonality insights'],
  },
  {
    image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'Return & Reimbursement Management',
    desc: 'Recovering revenue from returned, damaged, or lost inventory is one of the most challenging tasks for sellers. We handle the entire reimbursement claim process so you get back what you\'re owed.',
    features: ['FBA lost & damaged inventory claims', 'Return discrepancy identification', 'Reimbursement filing & follow-up', 'Customer return abuse detection', 'Inventory reconciliation audits', 'Monthly recovery reporting'],
  },
  {
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'Quick Commerce Strategy',
    desc: 'Launch and scale on rapid-delivery platforms like Noon Minutes, Talabat Mart, and Amazon Fresh. Capture high-intent, impulse-driven demand in the UAE.',
    features: ['Platform onboarding & setup', 'Dark store inventory planning', 'Rapid-delivery listing optimization', 'Promotional calendar management', 'Real-time stock monitoring', 'Performance analytics & reporting'],
  },
  {
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'Data Analytics & Cross-Platform Reporting',
    desc: 'Unified analytics dashboards tracking performance across all your marketplaces. One view for Amazon, Noon, and Trendyol metrics.',
    features: ['Cross-platform dashboards', 'ROAS & ACOS tracking by marketplace', 'Conversion analysis', 'Revenue attribution by channel', 'Trend forecasting', 'Monthly strategy reviews'],
  },
  {
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=200',
    title: 'Social Media Management',
    desc: 'Drive traffic and build brand awareness through Meta Ads, Instagram content, and Facebook page management that converts followers into customers.',
    features: ['Meta Ads campaign setup & optimization', 'Instagram post & Reels creation', 'Facebook page management', 'Audience targeting & retargeting', 'Ad creative & copywriting', 'Performance tracking & reporting'],
  },
];

export default function Services() {
  return (
    <>
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden section-soft">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
                  Our Services
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.1] mb-6">
                  Marketplace Ads & Growth <span className="gradient-text">That Scales</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-navy-500 leading-relaxed">
                  Full-service advertising and management across Amazon, Noon, and Trendyol. Plus international expansion into USA, UK, and European markets.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={300}>
              <div className="hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ecommerce analytics and growth"
                  className="w-full h-80 object-cover rounded-2xl shadow-card"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto space-y-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 60}>
              <div className="card p-6 sm:p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr,auto] gap-8">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-sm">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-800">{service.title}</h3>
                        <p className="text-navy-500 text-sm leading-relaxed mt-1">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-72">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-navy-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
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

      <section className="section-padding section-soft">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
                <p className="text-navy-300 text-lg max-w-xl mx-auto mb-8">
                  Every brand is different. Let's discuss a tailored strategy for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-navy-900 bg-white hover:bg-navy-50 transition-all shadow-lg text-lg" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
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
