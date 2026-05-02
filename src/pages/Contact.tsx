import { useState, type FormEvent } from 'react';
import { MessageCircle, Send, Phone, MapPin, ExternalLink, Loader2 } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_NUMBER } from '../lib/constants';
import { supabase } from '../lib/supabase';
import ScrollReveal from '../components/ScrollReveal';

function buildWhatsAppUrl(data: { name: string; email: string; phone: string; message: string }) {
  const text = [
    'Hi, I have submitted a form on the website.',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Message: ${data.message}`,
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'confirm' | 'redirecting' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('confirm');
  };

  const confirmAndSend = async () => {
    setStatus('loading');

    await supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      source: 'website',
    });

    setStatus('redirecting');

    const url = buildWhatsAppUrl(form);
    setTimeout(() => {
      window.open(url, '_blank');
    }, 1200);
  };

  const sendViaWhatsApp = () => {
    const url = buildWhatsAppUrl(form);
    if (!form.name || !form.email) return;

    supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      source: 'website-whatsapp-direct',
    });

    window.open(url, '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-500/8 rounded-full blur-3xl" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-4">
                Contact Us
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Let's <span className="gradient-text">Talk Growth</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-dark-300 leading-relaxed">
                Ready to scale your ecommerce business? Reach out and we'll get back to you within 24 hours.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-[1fr,auto] gap-12">
            <ScrollReveal>
              <div className="glass-card p-6 sm:p-8 lg:p-10">
                {/* Confirmation Dialog */}
                {status === 'confirm' && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Send via WhatsApp?</h3>
                    <p className="text-dark-300 mb-2 leading-relaxed">Your message will be sent directly to our team on WhatsApp.</p>
                    <div className="glass-card p-4 text-left text-sm space-y-1 mb-6 max-w-sm mx-auto">
                      <p className="text-dark-200"><span className="text-dark-400">Name:</span> {form.name}</p>
                      <p className="text-dark-200"><span className="text-dark-400">Email:</span> {form.email}</p>
                      {form.phone && <p className="text-dark-200"><span className="text-dark-400">Phone:</span> {form.phone}</p>}
                      {form.message && <p className="text-dark-200"><span className="text-dark-400">Message:</span> {form.message}</p>}
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button onClick={confirmAndSend} className="btn-whatsapp w-full sm:w-auto">
                        <MessageCircle className="w-4 h-4" />
                        Confirm & Send
                      </button>
                      <button onClick={() => setStatus('idle')} className="btn-secondary w-full sm:w-auto text-sm">
                        Edit Details
                      </button>
                    </div>
                  </div>
                )}

                {/* Loading / Redirecting */}
                {(status === 'loading' || status === 'redirecting') && (
                  <div className="text-center py-16">
                    <Loader2 className="w-10 h-10 text-green-400 mx-auto mb-4 animate-spin" />
                    <h3 className="text-xl font-bold text-white mb-2">
                      {status === 'loading' ? 'Saving your details...' : 'Redirecting to WhatsApp...'}
                    </h3>
                    <p className="text-dark-300 text-sm">
                      {status === 'redirecting' && 'A new tab will open shortly. If it doesn\'t, click the button below.'}
                    </p>
                    {status === 'redirecting' && (
                      <a
                        href={buildWhatsAppUrl(form)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp mt-6"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open WhatsApp Manually
                      </a>
                    )}
                  </div>
                )}

                {/* Form */}
                {(status === 'idle' || status === 'error') && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-1.5">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-1.5">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark-200 mb-1.5">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all"
                        placeholder="+971 5X XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-1.5">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all resize-none"
                        placeholder="Tell us about your business and goals..."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-sm">Something went wrong. Please try again or contact us on WhatsApp.</p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button type="submit" className="btn-primary flex-1">
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                      <button
                        type="button"
                        onClick={sendViaWhatsApp}
                        disabled={!form.name || !form.email}
                        className="btn-whatsapp flex-1 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Send via WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="lg:w-80 space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-white font-semibold mb-4">Prefer WhatsApp?</h3>
                  <p className="text-dark-300 text-sm mb-4">Get an instant response from our team.</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="glass-card p-6 space-y-4">
                  <h3 className="text-white font-semibold">Contact Details</h3>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                    <a href="tel:+971585142952" className="text-dark-300 hover:text-brand-400 text-sm transition-colors">
                      +971 58 514 2952
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                    <span className="text-dark-300 text-sm">Dubai, UAE</span>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-white font-semibold mb-2">Response Time</h3>
                  <p className="text-dark-300 text-sm">We respond to all inquiries within 24 hours. WhatsApp messages are typically answered within 1 hour during business hours.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
