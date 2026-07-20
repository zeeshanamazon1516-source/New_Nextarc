import { useState, useEffect, useRef, type FormEvent } from 'react';
import { MessageCircle, Send, Phone, MapPin, Mail, Loader2, Calendar, CheckCircle } from 'lucide-react';
import { WHATSAPP_URL, EMAIL, CALENDLY_URL, FORMSPREE_ENDPOINT } from '../lib/constants';
import { trackEvent } from '../lib/analytics';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { ProfessionalServiceSchema } from '../components/JsonLd';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const bookRef = useRef<HTMLDivElement>(null);
  const observerFired = useRef(false);

  useEffect(() => {
    if (!bookRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observerFired.current) {
          observerFired.current = true;
          trackEvent('calendly_view');
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(bookRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        trackEvent('form_submit');
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
        title="Contact NextArc | Free Marketplace Strategy Call"
        description="Talk to a marketplace growth expert. WhatsApp us or book a free strategy call — we respond within 24 hours."
        path="/contact"
      />
      <ProfessionalServiceSchema />

      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden section-soft">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
            <ScrollReveal delay={300}>
              <div className="hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern workspace communication and strategy planning"
                  className="w-full h-72 object-cover rounded-2xl shadow-card"
                  loading="lazy"
                  width="800"
                  height="288"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section id="book" ref={bookRef} className="section-padding section-light">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100 mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Book a Call</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-3">Book a Free Strategy Call</h2>
              <p className="text-navy-500 text-lg max-w-xl mx-auto">Choose a time that works for you. We will analyze your marketplace presence and share actionable growth insights.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto">
              <div className="card p-6 sm:p-8 text-center">
                <iframe
                  src={CALENDLY_URL}
                  className="w-full rounded-xl border-0"
                  style={{ minHeight: '650px' }}
                  title="Book a free strategy call with NextArc"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding section-soft">
        <div className="container-max mx-auto">
          <div className="grid lg:grid-cols-[1fr,auto] gap-12">
            <ScrollReveal>
              <div className="card p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h2>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">Message Sent!</h3>
                    <p className="text-navy-500 leading-relaxed">Thanks — we'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">Name *</label>
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
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">Email *</label>
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
                      <button type="submit" disabled={status === 'loading'} className="btn-primary flex-1 disabled:opacity-60">
                        {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                      </button>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp flex-1"
                        onClick={() => trackEvent('whatsapp_click', { location: 'contact_form' })}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp
                      </a>
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
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full"
                    onClick={() => trackEvent('whatsapp_click', { location: 'contact_sidebar' })}
                  >
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
                    <Mail className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                    <a href={`mailto:${EMAIL}`} className="text-navy-500 hover:text-teal-600 text-sm transition-colors">
                      {EMAIL}
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
