import { MessageCircle, ArrowRight, ShoppingCart, BarChart3, Search, Palette, TrendingUp, Database, CheckCircle2, Lightbulb, Zap } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: ShoppingCart,
    title: 'Ecommerce Account Management',
    desc: 'Complete store management from inventory and pricing to daily optimization and reporting. We handle the operations so you can focus on growing your brand.',
    features: ['Daily account monitoring', 'Inventory management', 'Pricing strategy', 'Performance reporting', 'Competitor analysis', 'Account health maintenance'],
  },
  {
    icon: BarChart3,
    title: 'Amazon & Noon Ads Management',
    desc: 'Data-driven advertising campaigns that maximize your return on ad spend while systematically reducing your ACOS across all marketplace platforms.',
    features: ['Sponsored Products & Brands', 'Campaign structure optimization', 'Bid management & automation', 'Keyword research & targeting', 'ACOS reduction strategy', 'Weekly performance reports'],
  },
  {
    icon: Search,
    title: 'Listing Optimization',
    desc: 'SEO-first approach to product listings that improves organic ranking, click-through rates, and conversion rates across Amazon, Noon, and Shopify.',
    features: ['SEO title optimization', 'Bullet point copywriting', 'Backend keyword research', 'Search term optimization', 'Category & browse node setup', 'A/B testing'],
  },
  {
    icon: Palette,
    title: 'Creative & A+ Content',
    desc: 'High-converting visual content that stops the scroll and turns browsers into buyers. From product photography to enhanced brand content.',
    features: ['Product infographics', 'Lifestyle imagery', 'A+ / Enhanced content', 'Storefront design', 'Brand story content', 'Video content'],
  },
  {
    icon: TrendingUp,
    title: 'SEO & Organic Growth',
    desc: 'Long-term organic growth strategies that reduce ad dependency and build sustainable traffic through search engine and marketplace optimization.',
    features: ['Keyword ranking strategy', 'Content optimization', 'Review management', 'Organic rank tracking', 'Competitor gap analysis', 'Authority building'],
  },
  {
    icon: Lightbulb,
    title: 'Product Recommendation & Market Research',
    desc: 'We help you identify winning products based on market demand, competition analysis, and data insights to maximize your success before you even launch.',
    features: ['Trending product research', 'Market demand analysis', 'Competitor benchmarking', 'Profit margin estimation', 'Launch strategy guidance'],
  },
  {
    icon: Zap,
    title: 'Quick Commerce Strategy',
    desc: 'Tap into the fastest-growing channel in UAE retail. We help brands launch and scale on rapid-delivery platforms like Noon Minutes, Talabat Mart, and Amazon Fresh to capture high-intent, impulse-driven demand.',
    features: ['Platform onboarding & setup', 'Dark store inventory planning', 'Rapid-delivery listing optimization', 'Promotional calendar management', 'Real-time stock monitoring', 'Performance analytics & reporting'],
  },
  {
    icon: Database,
    title: 'Data Analytics & Reporting',
    desc: 'Custom analytics dashboards and regular reporting that give you complete visibility into your ecommerce performance and growth metrics.',
    features: ['Custom dashboards', 'ROAS & ACOS tracking', 'Conversion analysis', 'Revenue attribution', 'Trend forecasting', 'Monthly strategy reviews'],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
                Our Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Everything You Need to <span className="gradient-text">Scale</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-dark-300 leading-relaxed">
                End-to-end ecommerce growth services built for measurable results. From account management to analytics, we cover every aspect of your marketplace success.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-max mx-auto space-y-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="glass-card p-6 sm:p-8 lg:p-10">
                <div className="grid lg:grid-cols-[1fr,auto] gap-8">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-brand-500/20 flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6 text-brand-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <p className="text-dark-300 text-sm leading-relaxed mt-1">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-72">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-dark-200 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
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
      <section className="section-padding">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="glass-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
                <p className="text-dark-300 text-lg max-w-xl mx-auto mb-8">
                  Every brand is different. Let's discuss a tailored strategy for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                  <Link to="/pricing" className="btn-secondary text-lg px-8 py-4">
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
