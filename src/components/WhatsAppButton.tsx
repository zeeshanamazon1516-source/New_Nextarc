import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';
import { trackEvent } from '../lib/analytics';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
      aria-label="Chat on WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
