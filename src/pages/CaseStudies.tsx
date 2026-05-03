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
      { metric: '+120%', label: 'Total Sales Growth', icon: TrendingUp },
      { metric: '3', label: 'Marketplaces Active', icon: Globe },
      { metric: '+85%', label: 'Organic Traffic', icon: ArrowUp },
      { metric: '90 Days', label: 'Time to Results', icon: Target },
    ],
    accent: 'border-l-teal-400',
  },
  {
    title: 'Health Brand ACOS from 45% to 18% on Amazon & Temu',
    category: 'Amazon UAE + Temu',
    challenge: 'A health and beauty brand was overspending on Amazon ads (45% ACOS) and wanted to diversify to Temu but didn\'t know how to structure ads on both platforms.',
    solution: 'We restructured Amazon campaigns, implemented aggressive negative keywords, and simultaneously launched their top sellers on Temu with optimized promotional strategy.',
    results: [
      { metric: '18%', label: 'Amazon ACOS', icon: Target },
      { metric: '+60%', label: 'Revenue Growth', icon: DollarSign },
      { metric: '2.5X', label: 'ROAS Improvement', icon: TrendingUp },
      { metric: '60 Days', label: 'Time to Results', icon: Target },
    ],
    accent: 'border-l-orange-400',
  },
  {
    title: '5X Growth via USA & UK Expansion',
    category: 'International Expansion',
    challenge: 'An electronics brand was doing well in UAE but had plateaued. They wanted to enter the US and UK markets but lacked the knowledge of FBA logistics, compliance, and local ad strategy.',
    solution: 'We handled full market entry for Amazon USA and UK - from FBA setup and localized listings to launch advertising campaigns. Simultaneously maintained their UAE marketplace presence.',
    results: [
      { metric: '5X', label: 'Total Revenue Growth', icon: DollarSign },
      { metric: '3 Markets', label: 'UAE + USA + UK', icon: Globe },
      { metric: '+300%', label: 'Ad Revenue', icon: TrendingUp },
      { metric: '120 Days', label: 'Time to Results', icon: Target },
    ],
    accent: 'border-l-teal-500',
  },
  {
    title: 'Trendyol Launch Generates $200K in 60 Days',
    category: 'Trendyol',
    challenge: 'A home & lifestyle brand wanted to enter the Turkish market via Trendyol but had zero presence, no local knowledge, and needed end-to-end marketplace setup.',
    solution: 'We handled full Trendyol onboarding, localized 50+ product listings, set up promoted listings strategy, and managed pricing to be competitive in the Turkish market.',
    results: [
      { metric: '$200K', label: 'Revenue in 60 Days', icon: DollarSign },
      { metric: '50+', label: 'Products Launched', icon: ArrowUp },
      { metric: '22%', label: 'ACOS Achieved', icon: ArrowDown },
      { metric: '60 Days', label: 'Time to Results', icon: Target },
    ],
    accent: 'border-l-orange-500',
  },
];

export default function CaseStudies() {
  return (
    <>
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden section-soft">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
                Case Studies
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.1] mb-6">
                Proven <span className="gradient-text">Results</span> That Speak
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-navy-500 leading-relaxed">
                Real brands, real numbers, real growth. See how we've helped businesses like yours achieve breakthrough results.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto space-y-8">
          {cases.map((cs, i) => (
            <ScrollReveal key={cs.title} delay={i * 100}>
              <div className={`card overflow-hidden border-l-4 ${cs.accent}`}>
                <div className="p-6 sm:p-8 lg:p-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-navy-50 text-navy-600 mb-4">
                    {cs.category}
                  </span>
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">{cs.title}</h3>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-2">Challenge</h4>
                      <p className="text-navy-500 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-navy-500 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="bg-navy-50/50 rounded-xl p-4 text-center">
                        <r.icon className="w-5 h-5 text-teal-500 mx-auto mb-2" />
                        <div className="text-xl font-bold text-navy-800">{r.metric}</div>
                        <div className="text-navy-400 text-xs mt-1">{r.label}</div>
                      </div>
                    ))}
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
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want Similar Results?</h2>
                <p className="text-navy-300 text-lg max-w-xl mx-auto mb-8">
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
