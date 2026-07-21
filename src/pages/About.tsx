import { useState } from 'react';
import { MessageCircle, ArrowRight, Target, BarChart3, ShieldCheck, TrendingUp, Users, Globe, Crosshair, ShoppingCart, Receipt, Search, PackageX, RotateCcw, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { buildProfessionalServiceSchema } from '../components/JsonLd';

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

const leaks = [
  { icon: Crosshair, name: 'Bleeding Ad Keywords', desc: 'Broad keywords silently eating 30%+ of ad spend with zero sales attached.' },
  { icon: ShoppingCart, name: 'Lost Buy Box Hours', desc: 'Pricing and stock gaps handing your sales to competitors for hours every day.' },
  { icon: Receipt, name: 'Unclaimed Reimbursements', desc: 'Damaged, lost, and returned inventory that Amazon and Noon owe you money for.' },
  { icon: Search, name: 'Invisible Listings', desc: "Titles and backend keywords that don't match how customers actually search." },
  { icon: PackageX, name: 'Stockout Blind Spots', desc: 'Running out of stock on best-sellers and losing ranking that takes months to rebuild.' },
  { icon: RotateCcw, name: 'Untracked Returns', desc: 'Return rates quietly destroying margins with no root-cause analysis.' },
];

function RevenueLeaks() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  const count = checked.size;

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {leaks.map((leak, i) => {
          const isChecked = checked.has(i);
          return (
            <ScrollReveal key={leak.name} delay={i * 80}>
              <button
                type="button"
                onClick={() => toggle(i)}
                className={`card p-6 lg:p-8 h-full w-full text-left group transition-all duration-200 cursor-pointer ${
                  isChecked
                    ? 'border-teal-400 ring-2 ring-teal-100 shadow-glow-teal'
                    : 'hover:border-navy-200 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isChecked
                      ? 'bg-teal-100 border border-teal-200'
                      : 'bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200/50'
                  }`}>
                    <leak.icon className={`w-6 h-6 ${isChecked ? 'text-teal-600' : 'text-orange-500'}`} />
                  </div>
                  {isChecked && (
                    <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                  )}
                </div>
                <h3 className="text-base font-bold text-navy-800 mb-2">{leak.name}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{leak.desc}</p>
              </button>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="text-center mt-10 space-y-4">
        <p className="text-navy-600 font-medium">
          {count > 0
            ? `You've spotted ${count} possible leak${count > 1 ? 's' : ''} in your account.`
            : 'Tap any leak you suspect in your account.'}
        </p>
        <Link
          to="/contact"
          className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:-translate-y-0.5 ${
            count > 0
              ? 'bg-teal-600 hover:bg-teal-700 text-white'
              : 'bg-navy-100 hover:bg-navy-200 text-navy-700'
          }`}
        >
          {count > 0
            ? "Find Out What They're Costing You \u2014 Free Audit"
            : 'Get a Free 6-Point Leak Check'}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </>
  );
}

export default function About() {
  return (
    <>
      <SEO
        title="About NextArc | Marketplace Advertising Experts in Dubai, UAE"
        description="Meet NextArc — performance advertising specialists managing 25+ brands across Amazon, Noon, and Trendyol, with proven USA & UK market expansion experience."
        path="/about"
        schemas={[buildProfessionalServiceSchema()]}
      />

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
                  alt="NextArc team collaborating on ecommerce strategy"
                  className="w-full h-80 object-cover rounded-2xl shadow-card"
                  loading="lazy"
                  width="800"
                  height="320"
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
                  { val: '45% → 18%', label: 'ACOS Reduced' },
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

      {/* Revenue Leaks Section */}
      <section className="section-padding section-soft">
        <div className="container-max mx-auto">
          <SectionHeading tag="Free Audit" title="The Revenue Leaks We Find in Almost Every Account" />
          <p className="text-center text-navy-500 text-lg max-w-2xl mx-auto -mt-8 mb-10">
            Most marketplace brands lose 10-20% of potential revenue without knowing it. These are the six leaks we check first.
          </p>
          <RevenueLeaks />
        </div>
      </section>

      <section className="section-padding section-light">
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

      <section className="section-padding section-soft">
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

      <section className="section-padding section-light">
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
              <Link to="/contact#book" className="btn-secondary text-lg px-8 py-4">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
