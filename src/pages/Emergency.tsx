import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ShoppingCart, TrendingDown, FileWarning, MessageCircle, ArrowRight, Loader2, CheckCircle, Clock, Zap, Send } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';

const WHATSAPP_EMERGENCY_URL = 'https://wa.me/971585142952?text=Hi%20NextArc%2C%20I%20have%20a%20marketplace%20emergency%20%E2%80%94%20need%20urgent%20help.';

const emergencies = [
  {
    icon: ShieldAlert,
    title: 'Account Suspended / Deactivated',
    desc: 'Your listings are down and revenue stopped. We handle the appeal, root-cause documentation, and reinstatement plan.',
  },
  {
    icon: ShoppingCart,
    title: 'Buy Box Lost',
    desc: 'Competitors took your Buy Box and sales fell off a cliff. We diagnose pricing, stock, and account health issues fast.',
  },
  {
    icon: TrendingDown,
    title: 'ACOS / Ad Spend Spike',
    desc: 'Your ad costs suddenly doubled with no results. We pause the bleeding and rebuild the campaign structure.',
  },
  {
    icon: FileWarning,
    title: 'Listing Removed / Flagged',
    desc: 'IP complaint, policy violation, or listing takedown. We identify the cause and get you back live.',
  },
];

const steps = [
  { num: '01', title: 'Tell us what happened', desc: 'WhatsApp or the form below, no long questionnaire.' },
  { num: '02', title: 'We assess within 4 hours', desc: 'Real diagnosis, not a generic response.' },
  { num: '03', title: 'We act', desc: 'Appeal writing, campaign fixes, or account recovery steps start immediately.' },
];

export default function Emergency() {
  const [form, setForm] = useState({ name: '', whatsapp: '', marketplace: 'Amazon', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.whatsapp.trim()) return;

    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xkodzkgr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: '[EMERGENCY] Marketplace Emergency Intake',
          name: form.name,
          whatsapp: form.whatsapp,
          marketplace: form.marketplace,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', whatsapp: '', marketplace: 'Amazon', message: '' });
        trackEvent('emergency_form_submit');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <SEO
        title="Amazon & Noon Account Suspended? Emergency Help | NextArc"
        description="Account suspended, Buy Box lost, or ACOS spiked overnight? NextArc's emergency marketplace response team helps UAE & GCC sellers recover fast. WhatsApp us now."
        path="/emergency"
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-red-500/20 text-red-300 border border-red-500/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                EMERGENCY RESPONSE
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Amazon or Noon Emergency?{' '}
                <span className="text-teal-400">We Respond Fast.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
                Account suspended. Buy Box gone. ACOS spiked overnight. Whatever broke, our team has fixed it before — for real UAE and GCC sellers. Tell us what happened and we'll respond within 4 hours.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={WHATSAPP_EMERGENCY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                  onClick={() => trackEvent('whatsapp_click', { location: 'emergency_hero' })}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Now
                </a>
                <a
                  href="#intake"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
                >
                  Tell Us What Happened
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-sm text-navy-300 flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-teal-400" /> Response within 4 hours</span>
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-teal-400" /> No long-term contract required</span>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What counts as an emergency */}
      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">What Counts as an Emergency</h2>
              <p className="text-navy-500 text-lg max-w-2xl mx-auto">If any of these hit your account, don't wait — reach out now.</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {emergencies.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="card p-6 sm:p-8 h-full border-l-4 border-l-red-400/60 hover:border-l-red-500 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-navy-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding section-soft">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">How It Works</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 150}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-teal-50 border-2 border-teal-200 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-teal-600">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intake form */}
      <section id="intake" className="section-padding section-light">
        <div className="container-max mx-auto">
          <div className="max-w-xl mx-auto">
            <ScrollReveal>
              <div className="card p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-navy-900 mb-2">Tell Us What Happened</h2>
                <p className="text-navy-500 text-sm mb-6">We'll respond within 4 hours — usually faster on WhatsApp.</p>

                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">Received!</h3>
                    <p className="text-navy-500 leading-relaxed">We're reviewing your case now. Expect a reply within 4 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="emer-name" className="block text-sm font-medium text-navy-700 mb-1.5">Name *</label>
                      <input
                        id="emer-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-200 text-navy-800 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="emer-whatsapp" className="block text-sm font-medium text-navy-700 mb-1.5">WhatsApp Number *</label>
                      <input
                        id="emer-whatsapp"
                        type="tel"
                        required
                        value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-200 text-navy-800 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                        placeholder="+971 5X XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="emer-marketplace" className="block text-sm font-medium text-navy-700 mb-1.5">Marketplace</label>
                      <select
                        id="emer-marketplace"
                        value={form.marketplace}
                        onChange={(e) => setForm({ ...form, marketplace: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-200 text-navy-800 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                      >
                        <option value="Amazon">Amazon</option>
                        <option value="Noon">Noon</option>
                        <option value="Trendyol">Trendyol</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="emer-message" className="block text-sm font-medium text-navy-700 mb-1.5">What happened?</label>
                      <textarea
                        id="emer-message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-200 text-navy-800 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all resize-none"
                        placeholder="e.g. Account suspended for authenticity complaint on July 20"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
                    )}

                    <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60">
                      {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      {status === 'loading' ? 'Sending...' : "Send — We'll Respond Fast"}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section-padding section-soft">
        <div className="container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4 max-w-2xl mx-auto">
              This isn't our only service — but when something breaks, it's the fastest way to reach us.
            </h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
            >
              Looking for ongoing marketplace management instead? See our full services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
