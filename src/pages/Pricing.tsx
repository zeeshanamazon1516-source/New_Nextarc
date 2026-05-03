import { MessageCircle, CheckCircle2, Zap, Flame, Crown } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    desc: 'Perfect for sellers on 1-2 marketplaces looking to optimize their ads and listings.',
    features: [
      'Ads management (1 marketplace)',
      'Basic listing optimization (up to 15)',
      'Keyword research & targeting',
      'Monthly performance report',
      'WhatsApp support',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    icon: Flame,
    desc: 'Best for brands scaling across multiple marketplaces with aggressive ad strategies.',
    features: [
      'Full Ads Management (Amazon, Noon, or Trendyol)',
      'Multi-marketplace listing optimization',
      'Weekly performance reports',
      'Keyword research & rank tracking',
      'Product recommendation & launch strategy',
      'Conversion rate optimization',
    ],
    highlight: true,
  },
  {
    name: 'Pro + Expansion',
    icon: Crown,
    desc: 'Complete growth solution including international expansion into USA, UK, and new markets.',
    features: [
      'Full account & ads management (all marketplaces)',
      'International expansion strategy (USA & UK)',
      'Dedicated account manager',
      'Cross-platform analytics dashboard',
      'Competitor & market intelligence',
      'A+ Content & creative strategy',
      'New market launch support',
      '90-day scaling roadmap',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <>
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden section-soft">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
                Pricing
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.1] mb-6">
                Plans That <span className="gradient-text">Grow</span> With You
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-navy-500 leading-relaxed">
                Flexible plans tailored to your stage of growth. All plans include a free consultation to understand your needs.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <div className={`card p-6 lg:p-8 h-full flex flex-col relative ${plan.highlight ? 'border-teal-300 bg-teal-50/30 shadow-card-hover' : ''}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-xs font-semibold text-white shadow-sm">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <plan.icon className={`w-8 h-8 mb-3 ${plan.highlight ? 'text-teal-600' : 'text-navy-400'}`} />
                    <h3 className="text-2xl font-bold text-navy-900">{plan.name}</h3>
                    <p className="text-navy-500 text-sm mt-2 leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-navy-100">
                    <span className="text-navy-500 text-sm">Custom pricing based on your needs</span>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-navy-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
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

      <section className="section-padding section-soft">
        <div className="container-max mx-auto">
          <SectionHeading tag="FAQ" title="Common Questions" />
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { q: 'How long until I see results?', a: 'Most clients see measurable improvements within 30-60 days, with significant growth by 90 days.' },
              { q: 'Do you require long-term contracts?', a: 'No. We offer flexible month-to-month agreements. Our 95% retention rate speaks for itself.' },
              { q: 'Which platforms do you support?', a: 'We manage Amazon (USA, UK, UAE, KSA), Noon, and Trendyol. Multi-platform and international expansion are available on Growth and Pro plans.' },
              { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or adjust your plan anytime as your business grows.' },
            ].map((faq) => (
              <ScrollReveal key={faq.q}>
                <div className="card p-6">
                  <h4 className="text-navy-800 font-semibold mb-2">{faq.q}</h4>
                  <p className="text-navy-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Not Sure Which Plan Is Right?</h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto mb-8">
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
