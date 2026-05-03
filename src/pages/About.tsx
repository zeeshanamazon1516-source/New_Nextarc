import { MessageCircle, ArrowRight, Target, BarChart3, ShieldCheck, TrendingUp, Users, Globe } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

const reasons = [
  { icon: BarChart3, title: 'Performance Advertising Experts', desc: 'Certified marketplace ads specialists managing $25M+ in annual ad spend across Amazon, Noon, and Trendyol.' },
  { icon: ShieldCheck, title: 'Full Account Management', desc: 'From listings to ads to strategy, we handle every aspect of your marketplace presence across all platforms.' },
  { icon: Globe, title: 'Global Marketplace Coverage', desc: 'Deep expertise in Amazon (USA, UK, UAE, KSA), Noon, and Trendyol. We know each algorithm inside out.' },
  { icon: TrendingUp, title: 'International Expansion', desc: 'Proven track record of helping brands expand from local markets into USA, UK, and European marketplaces.' },
];

const values = [
  { icon: Globe, title: 'Global Mindset', desc: 'We think globally - helping brands go from one marketplace to dominating multiple regions.' },
  { icon: Users, title: 'Partnership', desc: 'We treat your business as our own. Your revenue growth is our success metric.' },
  { icon: Target, title: 'Precision', desc: 'No wasted ad spend. Every dollar is optimized across every marketplace for maximum return.' },
];

export default function About() {
  return (
    <>
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden section-soft">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
                  About Us
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.1] mb-6">
                  We Are a <span className="gradient-text">Global Ecommerce</span> Ad Agency
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-navy-500 leading-relaxed">
                  We manage and scale brands on Amazon, Noon, and Trendyol using performance advertising, data strategy, and international expansion expertise. From UAE to USA, UK, and beyond.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={300}>
              <div className="hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional team collaboration"
                  className="w-full h-80 object-cover rounded-2xl shadow-card"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="card p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h2>
                <p className="text-navy-500 leading-relaxed mb-6">
                  Help brands scale globally through marketplace advertising. We believe every ecommerce brand deserves enterprise-level ad management and market expansion support, regardless of size.
                </p>
                <p className="text-navy-500 leading-relaxed">
                  We combine deep expertise in Amazon, Noon, and Trendyol with proven international expansion frameworks to unlock growth in USA, UK, and new markets.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '25+', label: 'Brands Managed' },
                  { val: '5+', label: 'Marketplaces' },
                  { val: '50% → 15%', label: 'ACOS Reduced' },
                  { val: '$25M+', label: 'Ad Spend Managed' },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-6 text-center">
                    <div className="text-2xl font-extrabold text-teal-600 mb-1">{item.val}</div>
                    <div className="text-navy-500 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-soft">
        <div className="container-max mx-auto">
          <SectionHeading
            tag="Why Us"
            title="Why Brands Choose NextArc"
            description="We don't just manage ads. We scale brands across marketplaces and into new international markets."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 100}>
                <div className="card p-6 lg:p-8 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{reason.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          <SectionHeading tag="Our Values" title="What We Stand For" />
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="glass-card p-6 lg:p-8 text-center h-full">
                  <v.icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{v.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-soft">
        <div className="container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Ready to Partner with Us?</h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto mb-8">
              Let's discuss how we can help scale your ecommerce business globally.
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
