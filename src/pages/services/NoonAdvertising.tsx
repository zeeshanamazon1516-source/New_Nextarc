import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../../lib/constants';
import { trackEvent } from '../../lib/analytics';
import ScrollReveal from '../../components/ScrollReveal';
import SEO from '../../components/SEO';
import { ProfessionalServiceSchema, ServiceSchema, FAQSchema } from '../../components/JsonLd';

const faqs = [
  { question: 'How does Noon advertising differ from Amazon PPC?', answer: 'Noon uses a different auction system with fewer ad placements and less granular targeting. Success on Noon depends heavily on catalog completeness, pricing competitiveness, and fulfillment speed alongside advertising. We optimize all three levers simultaneously.' },
  { question: 'Do you manage both Noon UAE and Noon KSA?', answer: 'Yes. We manage advertising and accounts across both Noon UAE and Noon KSA. Each market has different competitive dynamics, consumer preferences, and pricing strategies that we address separately.' },
  { question: 'What results can I expect from Noon advertising?', answer: 'Brands we manage on Noon typically see 30-50% visibility improvement within 30 days, with sales growth of 40-80% over 90 days. Exact results depend on your category, pricing, and fulfillment setup.' },
];

export default function NoonAdvertising() {
  return (
    <>
      <SEO
        title="Noon Ads Agency | Noon Advertising Management UAE & KSA | NextArc"
        description="Expert Noon advertising management for UAE and KSA. Campaign optimization, catalog management, and marketplace growth strategies for the Noon platform."
        path="/services/noon-advertising"
      />
      <ProfessionalServiceSchema />
      <ServiceSchema name="Noon Advertising Management" description="Full-service Noon advertising and account management for brands selling on Noon UAE and Noon KSA." />
      <FAQSchema faqs={faqs} />

      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-[120px]" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-navy-300 hover:text-teal-300 text-sm mb-6 transition-colors">
              &larr; All Services
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6 max-w-3xl">
              Noon Advertising & Account Management
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed max-w-2xl mb-8">
              Maximize your visibility and sales on Noon UAE and KSA with data-driven advertising campaigns, optimized catalogs, and strategic account management built for the Noon ecosystem.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Why Noon Requires a Specialized Approach</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Noon is not Amazon. The advertising system, ranking algorithm, and buyer behavior on Noon are fundamentally different. Brands that copy-paste their Amazon strategy onto Noon consistently underperform. We build Noon-native strategies that leverage the platform's unique mechanics.
              </p>
              <p className="text-navy-600 leading-relaxed mb-6">
                Noon's ranking algorithm weighs several factors differently than Amazon: fulfillment speed (Noon Express eligibility), pricing relative to competitors, catalog completeness including all attributes and images, and seller rating. Advertising alone cannot overcome deficiencies in these areas — which is why we take a holistic approach.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                In the UAE, Noon captures approximately 35% of marketplace shoppers — particularly strong in electronics, fashion, and home categories. In KSA, Noon has even higher market share. Brands serious about GCC ecommerce cannot ignore this platform.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Noon Campaign Management</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Our Noon advertising service covers the complete campaign lifecycle: keyword research specific to Noon's search behavior, campaign creation and structure, bid management, and ongoing optimization. We run both sponsored product campaigns and promotional placements to maximize visibility.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Noon-specific keyword research using search volume and competition data',
                  'Campaign structure optimized for Noon\'s auction and placement system',
                  'Promotional calendar alignment with Noon mega sales and flash events',
                  'Pricing strategy that wins the buy box while maintaining margins',
                  'Noon Express enrollment strategy for priority placement',
                  'Daily monitoring and bid adjustments during promotional periods',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-navy-600 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Catalog Setup & Ranking Optimization</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                On Noon, catalog quality directly impacts your organic ranking and ad quality scores. We ensure every product listing is fully optimized: complete attribute sets, all image slots filled with high-quality visuals, competitive pricing, and proper categorization.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                Our catalog optimization process typically improves organic visibility by 30-50% within the first month — reducing your dependency on paid advertising and improving overall profitability. We handle bulk uploads, catalog maintenance, and content updates as part of our management service.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Ready to Grow on Noon?</h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto mb-8">
              Get a free Noon account audit and discover untapped growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4" onClick={() => trackEvent('whatsapp_click', { location: 'noon_cta' })}>
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
