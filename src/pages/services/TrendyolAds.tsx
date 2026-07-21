import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../../lib/constants';
import { trackEvent } from '../../lib/analytics';
import ScrollReveal from '../../components/ScrollReveal';
import SEO from '../../components/SEO';
import { buildProfessionalServiceSchema, buildServiceSchema, buildFAQSchema } from '../../components/JsonLd';

const faqs = [
  { question: 'Do I need a Turkish entity to sell on Trendyol?', answer: 'Trendyol now supports international sellers without requiring a Turkish entity, though having local representation can speed up certain processes. We guide you through the exact requirements based on your product category and business structure.' },
  { question: 'How does Trendyol advertising work?', answer: 'Trendyol offers promoted listings, sponsored product placements, and banner advertising. The auction system is CPC-based with category-level bidding. We manage all campaign types and optimize based on performance data specific to the Turkish market.' },
  { question: 'What categories perform best on Trendyol for international sellers?', answer: 'Fashion, beauty, home goods, and electronics accessories perform exceptionally well. Turkish consumers are brand-conscious and responsive to quality products at competitive prices. We help you identify the highest-opportunity categories for your specific product range.' },
];

export default function TrendyolAds() {
  return (
    <>
      <SEO
        title="Trendyol Agency for International Sellers | NextArc"
        description="Expert Trendyol marketplace management and advertising for international sellers entering the Turkish market. Promoted listings, localization, and growth strategy."
        path="/services/trendyol-ads"
        schemas={[
          buildProfessionalServiceSchema(),
          buildServiceSchema('Trendyol Advertising & Marketplace Management', 'Complete Trendyol marketplace management for international sellers including advertising, localization, and Turkish market entry.'),
          buildFAQSchema(faqs),
        ]}
      />

      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-teal-500 rounded-full blur-[120px]" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-navy-300 hover:text-teal-300 text-sm mb-6 transition-colors">
              &larr; All Services
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6 max-w-3xl">
              Trendyol Advertising & Marketplace Management
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed max-w-2xl mb-8">
              Enter Turkey's largest marketplace with confidence. We handle everything from account setup and product localization to promoted listings and growth optimization on Trendyol.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact#book" className="btn-primary text-lg px-8 py-4">Get Free Consultation</Link>
              <Link to="/case-studies" className="btn-secondary !bg-transparent !text-white !border-white/30 hover:!bg-white/10 text-lg px-8 py-4">
                See Results <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Turkey's Largest Marketplace Opportunity</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Trendyol is Turkey's dominant ecommerce platform with over 30 million active buyers and $10 billion in annual gross merchandise volume. For brands in the GCC and Middle East, Turkey represents a natural expansion market with cultural proximity, strong demand for quality products, and growing purchasing power.
              </p>
              <p className="text-navy-600 leading-relaxed mb-6">
                However, succeeding on Trendyol requires deep understanding of the Turkish consumer, local language optimization, competitive pricing strategies in Turkish Lira, and navigation of the platform's unique seller requirements. This is where our expertise makes the difference.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                We have helped multiple GCC-based brands establish profitable Trendyol operations, from initial account approval through to sustained advertising campaigns generating consistent monthly revenue in the Turkish market.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Promoted Listings & Campaign Management</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Trendyol's advertising system centers on promoted listings — paying for premium placement within search results and category pages. Unlike Amazon's complex multi-format system, Trendyol advertising success depends on selecting the right products to promote, competitive bidding at the category level, and maintaining strong conversion rates to keep costs efficient.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Promoted listing campaign setup and ongoing optimization',
                  'Category-level bid strategy tailored to Turkish market competition',
                  'Product selection for promotion based on margin and demand data',
                  'Trendyol Flash Sale and campaign calendar participation',
                  'Performance monitoring with Turkish market benchmarking',
                  'Budget allocation across product categories for maximum ROI',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-navy-600 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Turkish Market Entry & Localization</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Localization is not just translation. We create Turkish product listings that resonate with local buyers — using the terms and phrases Turkish consumers actually search for, adapting product descriptions to local preferences, and ensuring pricing is competitive within the Turkish market context.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                Our market entry service covers: product catalog analysis for Turkish market fit, native Turkish content creation, compliance and documentation requirements, logistics and fulfillment setup, and initial advertising launch to build sales velocity and organic ranking.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-soft">
        <div className="container-max mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="max-w-2xl space-y-4">
            {faqs.map((faq) => (
              <ScrollReveal key={faq.question}>
                <div className="card p-6 hover:border-teal-200">
                  <h3 className="text-navy-800 font-semibold mb-2">{faq.question}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Ready to Enter the Turkish Market?</h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto mb-8">
              Let us assess your product range for Trendyol market fit and build your launch strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4" onClick={() => trackEvent('whatsapp_click', { location: 'trendyol_cta' })}>
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
              <Link to="/contact#book" className="btn-secondary text-lg px-8 py-4">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
