import { MessageCircle, TrendingUp, Target, DollarSign, ArrowDown, ArrowUp, Globe } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';

const cases = [
  {
    title: 'Fashion Brand Scales to 3 Marketplaces',
    category: 'Amazon + Noon + Trendyol',
    challenge: 'A UAE-based fashion brand was only selling on Amazon UAE with stagnant sales. They wanted to expand but had no strategy for Trendyol or multi-marketplace advertising.',
    solution: 'We optimized their Amazon UAE ads, launched them on Noon with full catalog setup, and expanded to Trendyol with localized listings and promoted ads strategy.',
    results: [
      { metric: '+120%', label: 'Total Sales Growth', icon: TrendingUp, positive: true },
      { metric: '3', label: 'Marketplaces Active', icon: Globe, positive: true },
      { metric: '+85%', label: 'Organic Traffic', icon: ArrowUp, positive: true },
      { metric: '90 Days', label: 'Time to Results', icon: Target, positive: true },
    ],
    color: 'from-brand-500 to-brand-600',
  },
  {
    title: 'Health Brand ACOS from 45% to 18% on Amazon & Temu',
    category: 'Amazon UAE + Temu',
    challenge: 'A health and beauty brand was overspending on Amazon ads (45% ACOS) and wanted to diversify to Temu but didn\'t know how to structure ads on both platforms.',
    solution: 'We restructured Amazon campaigns, implemented aggressive negative keywords, and simultaneously launched their top sellers on Temu with optimized promotional strategy.',
    results: [
      { metric: '18%', label: 'Amazon ACOS', icon: Target, positive: true },
      { metric: '+60%', label: 'Revenue Growth', icon: DollarSign, positive: true },
      { metric: '2.5X', label: 'ROAS Improvement', icon: TrendingUp, positive: true },
      { metric: '60 Days', label: 'Time to Results', icon: Target, positive: true },
    ],
    color: 'from-accent-500 to-accent-600',
  },
  {
    title: '5X Growth via USA & UK Expansion',
    category: 'International Expansion',
    challenge: 'An electronics brand was doing well in UAE but had plateaued. They wanted to enter the US and UK markets but lacked the knowledge of FBA logistics, compliance, and local ad strategy.',
    solution: 'We handled full market entry for Amazon USA and UK - from FBA setup and localized listings to launch advertising campaigns. Simultaneously maintained their UAE marketplace presence.',
    results: [
      { metric: '5X', label: 'Total Revenue Growth', icon: DollarSign, positive: true },
      { metric: '3 Markets', label: 'UAE + USA + UK', icon: Globe, positive: true },
      { metric: '+300%', label: 'Ad Revenue', icon: TrendingUp, positive: true },
      { metric: '120 Days', label: 'Time to Results', icon: Target, positive: true },
    ],
    color: 'from-brand-500 to-accent-500',
  },
  {
    title: 'Trendyol Launch Generates $200K in 60 Days',
    category: 'Trendyol',
    challenge: 'A home & lifestyle brand wanted to enter the Turkish market via Trendyol but had zero presence, no local knowledge, and needed end-to-end marketplace setup.',
    solution: 'We handled full Trendyol onboarding, localized 50+ product listings, set up promoted listings strategy, and managed pricing to be competitive in the Turkish market.',
    results: [
      { metric: '$200K', label: 'Revenue in 60 Days', icon: DollarSign, positive: true },
      { metric: '50+', label: 'Products Launched', icon: ArrowUp, positive: true },
      { metric: '22%', label: 'ACOS Achieved', icon: ArrowDown, positive: true },
      { metric: '60 Days', label: 'Time to Results', icon: Target, positive: true },
    ],
    color: 'from-brand-600 to-brand-500',
  },
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
                Case Studies
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Proven <span className="gradient-text">Results</span> That Speak
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-dark-300 leading-relaxed">
                Real brands, real numbers, real growth. See how we've helped businesses like yours achieve breakthrough results.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section-padding">
        <div className="container-max mx-auto space-y-12">
          {cases.map((cs, i) => (
            <ScrollReveal key={cs.title} delay={i * 100}>
              <div className="glass-card overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${cs.color}`} />
                <div className="p-6 sm:p-8 lg:p-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-dark-200 mb-4">
                    {cs.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-6">{cs.title}</h3>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-2">Challenge</h4>
                      <p className="text-dark-300 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-dark-300 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="bg-white/5 rounded-xl p-4 text-center">
                        <r.icon className="w-5 h-5 text-brand-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{r.metric}</div>
                        <div className="text-dark-400 text-xs mt-1">{r.label}</div>
                      </div>
                    ))}
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want Similar Results?</h2>
                <p className="text-dark-300 text-lg max-w-xl mx-auto mb-8">
                  Let's create the next success story together. Book a free strategy call today.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                  <MessageCircle className="w-5 h-5" />
                  Get Similar Results
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
