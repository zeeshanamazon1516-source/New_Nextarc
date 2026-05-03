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
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden section-soft">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
                Contact Us
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.1] mb-6">
                Let's <span className="gradient-text">Talk Growth</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-navy-500 leading-relaxed">
                Ready to scale your ecommerce business? Reach out and we'll get back to you within 24 hours.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-[1fr,auto] gap-12">
            <ScrollReveal>
              <div className="card p-6 sm:p-8 lg:p-10">
                {status === 'confirm' && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">Send via WhatsApp?</h3>
                    <p className="text-navy-500 mb-2 leading-relaxed">Your message will be sent directly to our team on WhatsApp.</p>
                    <div className="card p-4 text-left text-sm space-y-1 mb-6 max-w-sm mx-auto">
                      <p className="text-navy-600"><span className="text-navy-400">Name:</span> {form.name}</p>
                      <p className="text-navy-600"><span className="text-navy-400">Email:</span> {form.email}</p>
                      {form.phone && <p className="text-navy-600"><span className="text-navy-400">Phone:</span> {form.phone}</p>}
                      {form.message && <p className="text-navy-600"><span className="text-navy-400">Message:</span> {form.message}</p>}
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

                {(status === 'loading' || status === 'redirecting') && (
                  <div className="text-center py-16">
                    <Loader2 className="w-10 h-10 text-teal-500 mx-auto mb-4 animate-spin" />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      {status === 'loading' ? 'Saving your details...' : 'Redirecting to WhatsApp...'}
                    </h3>
                    <p className="text-navy-500 text-sm">
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

                {(status === 'idle' || status === 'error') && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-200 text-navy-800 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-200 text-navy-800 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1.5">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-200 text-navy-800 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all"
                        placeholder="+971 5X XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-50/50 border border-navy-200 text-navy-800 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 transition-all resize-none"
                        placeholder="Tell us about your business and goals..."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-sm">Something went wrong. Please try again or contact us on WhatsApp.</p>
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
                  <h3 className="text-navy-800 font-semibold mb-4">Prefer WhatsApp?</h3>
                  <p className="text-navy-500 text-sm mb-4">Get an instant response from our team.</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="glass-card p-6 space-y-4">
                  <h3 className="text-navy-800 font-semibold">Contact Details</h3>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                    <a href="tel:+971585142952" className="text-navy-500 hover:text-teal-600 text-sm transition-colors">
                      +971 58 514 2952
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                    <span className="text-navy-500 text-sm">Dubai, UAE</span>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-navy-800 font-semibold mb-2">Response Time</h3>
                  <p className="text-navy-500 text-sm">We respond to all inquiries within 24 hours. WhatsApp messages are typically answered within 1 hour during business hours.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
