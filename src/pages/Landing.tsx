import {
  MessageCircle, ArrowRight, AlertTriangle, CheckCircle2, Star,
  TrendingUp, Target, DollarSign, BarChart3, Search, Palette, Globe,
  Clock, Shield
} from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_AUDIT_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';

const problems = [
  { icon: AlertTriangle, text: 'Low sales and stagnant revenue across marketplaces' },
  { icon: TrendingUp, text: 'High ACOS eating into your margins on ads' },
  { icon: Search, text: 'Poor visibility on Amazon, Noon, or Trendyol' },
  { icon: Target, text: 'No clear strategy for international expansion' },
];

const solutions = [
  { title: 'Marketplace Advertising', desc: 'Performance ads across Amazon, Noon, and Trendyol that maximize ROAS.' },
  { title: 'Global Expansion', desc: 'Launch your brand in USA, UK, and Europe with localized strategy and ads.' },
  { title: 'Data-Driven Optimization', desc: 'Cross-platform analytics that reveal exactly where your growth opportunities are.' },
];

const results = [
  { metric: '+120%', label: 'Sales Growth', icon: TrendingUp },
  { metric: '45% to 18%', label: 'ACOS Reduced', icon: Target },
  { metric: '5X', label: 'Growth via Expansion', icon: DollarSign },
];

const testimonials = [
  { name: 'Ahmed K.', text: 'Sales doubled across Amazon and Noon. They also launched us on Trendyol seamlessly.' },
  { name: 'Sara M.', text: 'Expanded to Amazon UK and USA with their help. Revenue up 5X in 6 months.' },
];

const servicesShort = [
  { icon: BarChart3, title: 'Marketplace Ads' },
  { icon: Globe, title: 'Global Expansion' },
  { icon: Search, title: 'Listing Optimization' },
  { icon: Palette, title: 'Creative & A+ Content' },
];

const auditIncludes = [
  'Full account health review',
  'Ad campaign performance analysis',
  'Listing optimization audit',
  'Custom growth plan with action items',
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-navy-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-navy-900" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
              Next<span className="text-teal-600">Arc</span>
            </span>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-2.5">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center overflow-hidden section-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-6">
                Ecommerce Ad Agency
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy-900 leading-[1.1] text-balance mb-6">
                Scale on Amazon, Noon & Trendyol in{' '}
                <span className="gradient-text">90 Days</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl text-navy-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                We manage marketplace ads, optimize listings, and expand brands into USA, UK, and global markets.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a href={WHATSAPP_AUDIT_URL} target="_blank" rel="noopener noreferrer" className="btn-orange text-lg px-8 py-4 w-full sm:w-auto">
                  Get Free Audit
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Sound Familiar?</h2>
              <p className="text-navy-500 text-lg">Most ecommerce brands face these challenges.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {problems.map((p, i) => (
              <ScrollReveal key={p.text} delay={i * 100}>
                <div className="card p-6 flex items-start gap-4 border-l-4 border-orange-300">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <p className="text-navy-700 font-medium">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                We Fix Growth Issues with <span className="gradient-text">Data</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <div className="glass-card p-6 lg:p-8 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{s.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Talk to an Expert
              <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding section-soft">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Real Results</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <ScrollReveal key={r.label} delay={i * 100}>
                <div className="card p-8 text-center group hover:scale-[1.02] transition-transform">
                  <r.icon className="w-8 h-8 text-teal-500 mx-auto mb-3" />
                  <div className="text-4xl lg:text-5xl font-extrabold text-teal-600 mb-2">{r.metric}</div>
                  <div className="text-navy-600 font-medium">{r.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">What Clients Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="glass-card p-6 lg:p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                  <div className="text-navy-800 font-semibold text-sm">{t.name}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">What We Do</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesShort.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="glass-card p-6 text-center group">
                  <s.icon className="w-8 h-8 text-teal-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-navy-700 font-semibold text-sm">{s.title}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="card p-8 sm:p-12 lg:p-16 relative overflow-hidden border-teal-100">
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-6 h-6 text-teal-600" />
                    <span className="text-teal-600 font-semibold">Free Store Audit</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                    Get a Complete Store Analysis
                  </h2>
                  <p className="text-navy-500 leading-relaxed mb-6">
                    Our experts will review your entire ecommerce presence and deliver a custom growth plan with actionable recommendations.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {auditIncludes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-navy-600">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP_AUDIT_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                    <MessageCircle className="w-5 h-5" />
                    Get Free Audit
                  </a>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-teal-50 to-orange-50 border border-teal-100 flex items-center justify-center animate-float">
                    <div className="text-center">
                      <div className="text-5xl font-extrabold text-teal-600">Free</div>
                      <div className="text-navy-500 mt-1">No Obligation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="card p-6 sm:p-8 text-center border-l-4 border-orange-400 bg-orange-50/30">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="text-orange-600 font-semibold">Limited Availability</span>
              </div>
              <p className="text-navy-700 font-medium mb-1">We only take on a limited number of new clients each week.</p>
              <p className="text-navy-500 text-sm">Book your free consultation before our calendar fills up.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Ready to Scale?
            </h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto mb-8">
              Join 25+ brands that scale across global marketplaces with NextArc.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-xl px-10 py-5 animate-pulse-glow">
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t border-navy-200 py-8 px-4 text-center bg-navy-50">
        <p className="text-navy-500 text-sm">&copy; {new Date().getFullYear()} NextArc. All rights reserved.</p>
      </footer>
    </div>
  );
}
