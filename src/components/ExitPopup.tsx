import { useState, useEffect } from 'react';
import { X, Gift, MessageCircle } from 'lucide-react';
import { WHATSAPP_AUDIT_URL } from '../lib/constants';
import { trackEvent } from '../lib/analytics';

export default function ExitPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('exit-popup-dismissed');
    if (dismissed) return;

    // Only activate on desktop (no mouse-leave event on touch devices)
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
    if (isMobile) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        document.removeEventListener('mouseout', handleMouseLeave);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseout', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem('exit-popup-dismissed', 'true');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={dismiss}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white border border-navy-100 rounded-2xl p-8 max-w-md w-full animate-scale-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-navy-400 hover:text-navy-600 hover:bg-navy-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-3">Wait! Get a Free Store Audit</h3>
          <p className="text-navy-500 mb-6 leading-relaxed">
            Before you go, let our experts analyze your store and share a custom growth plan -- completely free.
          </p>
          <ul className="text-left space-y-2 mb-6">
            {['Full account review', 'Ad performance analysis', 'Custom growth plan'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-navy-600 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full text-base"
            onClick={() => {
              trackEvent('audit_popup_click');
              dismiss();
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Get Free Audit on WhatsApp
          </a>
          <button onClick={dismiss} className="mt-3 text-navy-400 text-sm hover:text-navy-600 transition-colors">
            No thanks, I'll pass
          </button>
        </div>
      </div>
    </div>
  );
}
