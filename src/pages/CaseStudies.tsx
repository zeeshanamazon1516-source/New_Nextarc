import { MessageCircle, TrendingUp, Target, DollarSign, ArrowDown, ArrowUp, Globe, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '../lib/constants';
import { trackEvent } from '../lib/analytics';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { ProfessionalServiceSchema } from '../components/JsonLd';

const cases = [
  {
    title: 'Fashion Brand Scales to 3 Marketplaces',
    category: 'Amazon + Noon + Noon KSA',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600',
    challenge: 'A UAE-based fashion brand was only selling on Amazon UAE with stagnant sales. They wanted to expand regionally but lacked a multi-marketplace advertising strategy.',
    solution: 'We optimized their Amazon UAE ads, launched them on Noon UAE and Noon KSA with full catalog setup, and implemented cross-marketplace ad strategies for maximum visibility.',
    results: [
      { metric: '+120%', label: 'Total Sales Growth', icon: TrendingUp },
      { metric: '3', label: 'Marketplaces Active', icon: Globe },
      { metric: '+85%', label: 'Organic Traffic', icon: ArrowUp },
      { metric: '90 Days', label: 'Time to Results', icon: Target },
    ],
    accent: 'border-l-teal-400',
  },
  {
    title: 'Health Brand ACOS from 45% to 18% on Amazon',
    category: 'Amazon UAE + Amazon USA',
    image: 'https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=600',
    challenge: 'A health and beauty brand was overspending on Amazon ads (45% ACOS) in UAE and wanted to expand to the US market while improving ad efficiency across both regions.',
    solution: 'We restructured Amazon UAE campaigns, implemented aggressive negative keywords, and simultaneously launched their top sellers on Amazon USA with optimized PPC strategy tailored to the US audience.',
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
    category: 'Amazon USA + Amazon UK',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    title: 'UK Launch Generates $200K in 60 Days',
    category: 'Amazon UK',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600',
    challenge: 'A home & lifestyle brand wanted to enter the UK market via Amazon but had zero presence, no local knowledge, and needed end-to-end marketplace setup and compliance.',
    solution: 'We handled full Amazon UK onboarding, localized 50+ product listings for the British market, set up Sponsored Products and Brands campaigns, and managed pricing to be competitive.',
    results: [
      { metric: '$200K', label: 'Revenue in 60 Days', icon: DollarSign },
      { metric: '50+', label: 'Products Launched', icon: ArrowUp },
      { metric: '22%', label: 'ACOS Achieved', icon: ArrowDown },
      { metric: '60 Days', label: 'Time to Results', icon: Target },
    ],
    accent: 'border-l-orange-500',
  },
  {
    title: 'Supplements Brand Conquers Amazon USA',
    category: 'Amazon USA',
    image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=600',
    challenge: 'A supplements brand based in Dubai wanted to tap into the massive US market but faced challenges with FDA compliance, competitive keywords, and high CPCs on Amazon USA.',
    solution: 'We managed compliance documentation, built keyword-rich listings optimized for US search behavior, and launched a phased PPC strategy starting with long-tail keywords before scaling to competitive terms.',
    results: [
      { metric: '$350K', label: 'Monthly Revenue', icon: DollarSign },
      { metric: '15%', label: 'ACOS Maintained', icon: Target },
      { metric: '+200%', label: 'Organic Rank Growth', icon: ArrowUp },
      { metric: '90 Days', label: 'Time to Results', icon: Target },
    ],
    accent: 'border-l-teal-400',
  },
];

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies: Real Amazon & Noon Growth Results | NextArc"
        description="Real results from real brands: 120% sales growth, ACOS cut from 45% to 18%, $200K UK launch in 60 days. See how NextArc scales marketplace brands."
        path="/case-studies"
      />
      <ProfessionalServiceSchema />

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
                <div className="grid lg:grid-cols-[280px,1fr] gap-0">
                  <div className="hidden lg:block">
                    <img
                      src={cs.image}
                      alt={`${cs.title} - NextArc case study results`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="280"
                      height="400"
                    />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-4 lg:hidden">
                      <img
                        src={cs.image}
                        alt={`${cs.title} - NextArc case study`}
                        className="w-20 h-20 rounded-xl object-cover shrink-0"
                        loading="lazy"
                        width="80"
                        height="80"
                      />
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-navy-50 text-navy-600 mb-2">
                          {cs.category}
                        </span>
                        <h3 className="text-xl font-bold text-navy-900">{cs.title}</h3>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-navy-50 text-navy-600 mb-4">
                        {cs.category}
                      </span>
                      <h3 className="text-2xl font-bold text-navy-900 mb-6">{cs.title}</h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-2">Challenge</h4>
                        <p className="text-navy-500 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">Solution</h4>
                        <p className="text-navy-500 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    {/* Dashboard Screenshot Placeholder */}
                    <div className="mb-6 p-4 rounded-xl border-2 border-dashed border-navy-200 bg-navy-50/30 flex items-center justify-center gap-3">
                      <ImageIcon className="w-5 h-5 text-navy-300" />
                      <span className="text-navy-400 text-sm">Anonymized dashboard screenshot</span>
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-lg px-8 py-4"
                    onClick={() => trackEvent('whatsapp_click', { location: 'case_studies_cta' })}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Similar Results
                  </a>
                  <Link to="/contact#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-navy-900 bg-white hover:bg-navy-50 transition-all shadow-lg text-lg font-heading">
                    Get Free Consultation
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
