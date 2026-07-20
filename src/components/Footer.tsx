import { Link } from 'react-router-dom';
import { TrendingUp, Phone, MapPin, MessageCircle, Mail } from 'lucide-react';
import { WHATSAPP_URL, EMAIL } from '../lib/constants';
import { trackEvent } from '../lib/analytics';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}>
                Next<span className="text-teal-400">Arc</span>
              </span>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              Full-service ecommerce ad agency managing brands on Amazon, Noon, and Trendyol. Helping businesses expand globally into USA, UK, and beyond.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors"
                onClick={() => trackEvent('whatsapp_click', { location: 'footer' })}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Amazon PPC Management', to: '/services/amazon-ppc' },
                { label: 'Noon Advertising', to: '/services/noon-advertising' },
                { label: 'Trendyol Ads', to: '/services/trendyol-ads' },
                { label: 'USA & UK Expansion', to: '/services/usa-uk-expansion' },
                { label: 'Account Management', to: '/services' },
                { label: 'Listing Optimization', to: '/services' },
                { label: 'Creative & A+ Content', to: '/services' },
              ].map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="text-navy-300 hover:text-teal-400 text-sm transition-colors">
                    {s.label}
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
                  <Link to={item.to} className="text-navy-300 hover:text-teal-400 text-sm transition-colors">
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
                <Phone className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <a href="tel:+971585142952" className="text-navy-300 hover:text-teal-400 text-sm transition-colors">
                  +971 58 514 2952
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-navy-300 hover:text-teal-400 text-sm transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span className="text-navy-300 text-sm">Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-400 text-sm">
            &copy; {new Date().getFullYear()} NextArc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-navy-400 hover:text-teal-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-navy-400 hover:text-teal-400 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
