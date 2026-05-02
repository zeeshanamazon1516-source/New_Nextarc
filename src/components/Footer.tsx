import { Link } from 'react-router-dom';
import { TrendingUp, Phone, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                Next<span className="text-brand-400">Arc</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Full-service ecommerce ad agency managing brands on Amazon, Noon, Trendyol, and Temu. Helping businesses expand globally into USA, UK, and beyond.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {['Marketplace Advertising', 'Account Management', 'International Expansion', 'Listing Optimization', 'Creative & A+ Content', 'Trendyol & Temu Ads', 'Data Analytics'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', to: '/about' },
                { label: 'Case Studies', to: '/case-studies' },
                { label: 'Pricing', to: '/pricing' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-slate-400 hover:text-brand-400 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <a href="tel:+971585142952" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">
                  +971 58 514 2952
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} NextArc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-brand-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-brand-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
