import { MessageCircle, ArrowRight, Target, BarChart3, ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

const reasons = [
  { icon: BarChart3, title: 'Data-Driven Decisions', desc: 'Every strategy is backed by real marketplace data, not guesswork. We track and optimize daily.' },
  { icon: ShieldCheck, title: 'Full Account Management', desc: 'From listings to ads to customer service, we handle every aspect of your marketplace presence.' },
  { icon: Target, title: 'Marketplace Expertise', desc: 'Deep knowledge of Amazon UAE, Noon, and Shopify ecosystems, algorithms, and best practices.' },
  { icon: TrendingUp, title: 'Revenue Focused', desc: 'We measure success by your bottom line. Every action we take is tied to revenue growth.' },
];

const values = [
  { icon: Zap, title: 'Speed', desc: 'We move fast and deliver results in weeks, not months.' },
  { icon: Users, title: 'Partnership', desc: 'We treat your business as our own. Your success is our success.' },
  { icon: Target, title: 'Precision', desc: 'No wasted spend. Every dirham is optimized for maximum return.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
                About Us
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                We Are a <span className="gradient-text">Performance-Driven</span> Ecommerce Agency
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-dark-300 leading-relaxed max-w-2xl">
                We help brands scale on Amazon, Noon, and Shopify using data, strategy, and relentless execution. Our team combines marketplace expertise with cutting-edge analytics to deliver measurable growth.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="glass-card p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-dark-300 leading-relaxed mb-6">
                  Help brands grow faster with measurable results. We believe that every ecommerce brand deserves access to enterprise-level growth strategies, regardless of size.
                </p>
                <p className="text-dark-300 leading-relaxed">
                  We combine deep marketplace knowledge with performance marketing expertise to create sustainable growth engines for our partners.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '100+', label: 'Brands Served' },
                  { val: '6+', label: 'Years Experience' },
                  { val: '95%', label: 'Retention Rate' },
                  { val: '10M+', label: 'AED Generated' },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-6 text-center">
                    <div className="text-2xl font-extrabold text-white mb-1">{item.val}</div>
                    <div className="text-dark-400 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="Why Us"
            title="Why Brands Choose NextArc"
            description="We don't just manage accounts. We build growth systems that compound over time."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 100}>
                <div className="glass-card p-6 lg:p-8 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-brand-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-max mx-auto">
          <SectionHeading tag="Our Values" title="What We Stand For" />
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="glass-card p-6 lg:p-8 text-center h-full">
                  <v.icon className="w-8 h-8 text-brand-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{v.desc}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
            <p className="text-dark-300 text-lg max-w-xl mx-auto mb-8">
              Let's discuss how we can help scale your ecommerce business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
