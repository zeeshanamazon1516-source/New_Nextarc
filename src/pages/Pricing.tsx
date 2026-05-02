import { MessageCircle, CheckCircle2, Zap, Flame, Crown } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    desc: 'Perfect for new sellers looking to set up and optimize their marketplace presence.',
    features: [
      'Account setup & configuration',
      'Basic listing optimization (up to 10)',
      'Keyword research',
      'Monthly performance report',
      'WhatsApp support',
    ],
    highlight: false,
    color: 'border-dark-600',
  },
  {
    name: 'Growth',
    icon: Flame,
    desc: 'Best for scaling brands ready to dominate with ads and data-driven optimization.',
    features: [
      'Full Ads Management (Amazon & Noon)',
      'Listing Optimization (SEO + Content)',
      'Weekly Performance Reports',
      'Keyword Research & Tracking',
      'Product Recommendation',
      'Conversion Rate Optimization',
    ],
    highlight: true,
    color: 'border-brand-500',
  },
  {
    name: 'Pro',
    icon: Crown,
    desc: 'Complete ecommerce growth solution with dedicated support and advanced strategy.',
    features: [
      'Full Account Management',
      'Advanced Ads Strategy (Low ACOS / High ROAS)',
      'Dedicated Account Manager',
      'Weekly + Monthly Reports',
      'Competitor Analysis',
      'Product Recommendation',
      'A+ Content & Creative Strategy',
      'Scaling Strategy (90-day growth plan)',
    ],
    highlight: false,
    color: 'border-accent-500',
  },
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-brand-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
                Pricing
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Plans That <span className="gradient-text">Grow</span> With You
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-dark-300 leading-relaxed">
                Flexible plans tailored to your stage of growth. All plans include a free consultation to understand your needs.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <div className={`glass-card p-6 lg:p-8 h-full flex flex-col relative ${plan.highlight ? 'border-brand-500/50 bg-brand-500/5' : ''}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full text-xs font-semibold text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <plan.icon className={`w-8 h-8 mb-3 ${plan.highlight ? 'text-brand-400' : 'text-dark-300'}`} />
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-dark-300 text-sm mt-2 leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className="text-dark-300 text-sm">Custom pricing based on your needs</span>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-dark-200 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={plan.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-max mx-auto">
          <SectionHeading tag="FAQ" title="Common Questions" />
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: 'How long until I see results?', a: 'Most clients see measurable improvements within 30-60 days, with significant growth by 90 days.' },
              { q: 'Do you require long-term contracts?', a: 'No. We offer flexible month-to-month agreements. Our 95% retention rate speaks for itself.' },
              { q: 'Which platforms do you support?', a: 'We manage Amazon UAE/KSA, Noon, and Shopify stores. Multi-platform management is available on Growth and Pro plans.' },
              { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or adjust your plan anytime as your business grows.' },
            ].map((faq) => (
              <ScrollReveal key={faq.q}>
                <div className="glass-card p-6">
                  <h4 className="text-white font-semibold mb-2">{faq.q}</h4>
                  <p className="text-dark-300 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Not Sure Which Plan Is Right?</h2>
            <p className="text-dark-300 text-lg max-w-xl mx-auto mb-8">
              Book a free consultation and we'll recommend the best plan based on your goals.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5" />
              Get a Custom Quote
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
