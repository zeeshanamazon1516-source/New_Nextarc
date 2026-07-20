import { MessageCircle, CheckCircle2, Zap, Flame, Crown, ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';
import { ProfessionalServiceSchema, FAQSchema } from '../components/JsonLd';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 'Custom',
    desc: 'Perfect for sellers on 1-2 marketplaces looking to optimize their ads and listings.',
    features: [
      'Ads management (1 marketplace)',
      'Basic listing optimization (up to 15)',
      'Keyword research & targeting',
      'Monthly performance report',
      'WhatsApp support',
    ],
    highlight: false,
    gradient: 'from-navy-50 to-white',
    iconBg: 'bg-navy-100',
    iconColor: 'text-navy-600',
  },
  {
    name: 'Growth',
    icon: Flame,
    price: 'Custom',
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
    gradient: 'from-teal-50 to-white',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    name: 'Pro + Expansion',
    icon: Crown,
    price: 'Custom',
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
    gradient: 'from-orange-50 to-white',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
];

const faqs = [
  { question: 'How long until I see results?', answer: 'Most clients see measurable improvements within 30-60 days, with significant growth by 90 days.' },
  { question: 'Do you require long-term contracts?', answer: 'No. We offer flexible month-to-month agreements. Our 95% retention rate speaks for itself.' },
  { question: 'Which platforms do you support?', answer: 'We manage Amazon (USA, UK, UAE, KSA), Noon, and Trendyol. Multi-platform and international expansion are available on Growth and Pro plans.' },
  { question: 'Can I switch plans later?', answer: 'Absolutely. You can upgrade or adjust your plan anytime as your business grows.' },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing & Plans for Marketplace Management | NextArc"
        description="Flexible month-to-month plans for Amazon, Noon & Trendyol management. No long-term contracts. Book a free consultation and get a custom growth roadmap."
        path="/pricing"
      />
      <ProfessionalServiceSchema />
      <FAQSchema faqs={faqs} />

      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-[140px]" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-teal-300 border border-teal-400/30 mb-6">
                Transparent Pricing
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Plans That <span className="bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">Grow</span> With You
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-navy-200 leading-relaxed max-w-2xl mx-auto mb-10">
                Flexible plans tailored to your stage of growth. All plans include a free consultation to understand your needs and build your custom roadmap.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="section-padding section-light -mt-8">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 120}>
                <div className={`relative h-full flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover ${plan.highlight ? 'border-teal-300 shadow-glow-teal' : 'border-navy-100/60 shadow-card'}`}>
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-xs font-semibold text-white shadow-md">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-6 lg:p-8 rounded-t-2xl bg-gradient-to-b ${plan.gradient}`}>
                    <div className={`w-12 h-12 rounded-xl ${plan.iconBg} flex items-center justify-center mb-4`}>
                      <plan.icon className={`w-6 h-6 ${plan.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                    <p className="text-navy-500 text-sm leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="p-6 lg:p-8 flex flex-col flex-1">
                    <div className="mb-6 pb-6 border-b border-navy-100">
                      <span className="text-navy-900 text-lg font-bold">{plan.price}</span>
                      <p className="text-navy-400 text-xs mt-1">Custom pricing based on your needs.</p>
                    </div>

                    <ul className="space-y-3.5 flex-1 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-navy-600 text-sm">
                          <CheckCircle2 className="w-4.5 h-4.5 text-teal-500 mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact#book"
                      className={`group ${plan.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'}`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-soft overflow-hidden">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                  Your Growth Is Our Mission
                </h2>
                <p className="text-navy-500 leading-relaxed mb-6">
                  We take a data-driven approach to marketplace management. Every strategy is backed by real analytics, continuous optimization, and deep platform expertise across Amazon, Noon, and Trendyol.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-800">No Long-Term Contracts</div>
                      <div className="text-sm text-navy-500">Flexible month-to-month plans. Stay because of results, not obligations.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-800">Dedicated Account Manager</div>
                      <div className="text-sm text-navy-500">A single point of contact who understands your brand inside and out.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-800">Transparent Reporting</div>
                      <div className="text-sm text-navy-500">Clear, honest reports so you always know exactly where your investment is going.</div>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration on marketplace strategy and growth planning"
                  className="rounded-2xl shadow-card-hover w-full h-80 lg:h-96 object-cover"
                  loading="lazy"
                  width="800"
                  height="384"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          <SectionHeading tag="How It Works" title="Simple 3-Step Process" subtitle="Getting started is easy. We handle the complexity so you can focus on your business." />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { step: '01', title: 'Free Consultation', desc: 'We analyze your current marketplace performance and identify growth opportunities.', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { step: '02', title: 'Custom Strategy', desc: 'Our team builds a tailored roadmap with clear milestones and KPIs for your brand.', image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { step: '03', title: 'Launch & Scale', desc: 'We execute the strategy, continuously optimize, and scale your results month over month.', image: 'https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 120}>
                <div className="group relative rounded-2xl overflow-hidden border border-navy-100/60 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={`Step ${item.step}: ${item.title}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width="600" height="192" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-navy-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-soft">
        <div className="container-max mx-auto">
          <SectionHeading tag="FAQ" title="Common Questions" subtitle="Everything you need to know about our pricing and process." />
          <div className="max-w-2xl mx-auto space-y-4 mt-10">
            {faqs.map((faq) => (
              <ScrollReveal key={faq.question}>
                <div className="card p-6 hover:border-teal-200">
                  <h3 className="text-navy-800 font-semibold mb-2">{faq.question}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 right-20 w-64 h-64 bg-teal-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-500 rounded-full blur-[120px]" />
        </div>
        <div className="container-max mx-auto text-center relative">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Not Sure Which Plan Is Right?</h2>
            <p className="text-navy-200 text-lg max-w-xl mx-auto mb-8">
              Book a free consultation and we'll recommend the best plan based on your goals and budget.
            </p>
            <Link to="/contact#book" className="btn-whatsapp text-lg px-8 py-4 shadow-lg">
              <MessageCircle className="w-5 h-5" />
              Get a Custom Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
