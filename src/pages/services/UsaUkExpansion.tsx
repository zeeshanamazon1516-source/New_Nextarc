import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../../lib/constants';
import { trackEvent } from '../../lib/analytics';
import ScrollReveal from '../../components/ScrollReveal';
import SEO from '../../components/SEO';
import { buildProfessionalServiceSchema, buildServiceSchema, buildFAQSchema } from '../../components/JsonLd';

const faqs = [
  { question: 'How long does it take to launch on Amazon USA or UK from the UAE?', answer: 'A typical launch takes 45-60 days from initial setup to live products with active advertising. This includes account verification, brand registry, listing creation, FBA inbound shipments, and initial PPC campaign launch. We handle every step.' },
  { question: 'Do I need a US or UK business entity?', answer: 'No. You can sell on Amazon USA and UK using your UAE entity. However, you will need to complete tax registration (EIN for USA, VAT for UK). We guide you through the entire compliance process and connect you with specialist advisors when needed.' },
  { question: 'What is the typical investment needed for a USA/UK launch?', answer: 'Initial investment varies by product quantity and category, but typically includes inventory ($5K-$20K), advertising budget ($3K-$5K for first 90 days), and management fees. We provide a detailed cost projection during your free consultation based on your specific products.' },
];

export default function UsaUkExpansion() {
  return (
    <>
      <SEO
        title="Amazon USA & UK Expansion for UAE Brands | NextArc"
        description="End-to-end Amazon USA and UK market entry for UAE brands. FBA setup, compliance, localized listings, and launch advertising with proven $200K+ results."
        path="/services/usa-uk-expansion"
        schemas={[
          buildProfessionalServiceSchema(),
          buildServiceSchema('International Expansion: Amazon USA & UK', 'Complete market entry service for UAE brands expanding to Amazon USA and UK, including FBA setup, compliance, and launch advertising.'),
          buildFAQSchema(faqs),
        ]}
      />

      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-teal-500 rounded-full blur-[100px]" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-navy-300 hover:text-teal-300 text-sm mb-6 transition-colors">
              &larr; All Services
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6 max-w-3xl">
              International Expansion: Launch on Amazon USA & UK
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed max-w-2xl mb-8">
              Take your brand global. We provide end-to-end market entry services for UAE brands expanding into Amazon USA and UK — from compliance and logistics to localized listings and launch advertising.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Why Expand to USA & UK Markets</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Amazon USA processes over $500 billion in annual gross merchandise volume. Amazon UK is Europe's largest marketplace. For UAE brands that have proven product-market fit locally, these markets represent massive growth opportunities — often 10x the addressable market compared to the GCC alone.
              </p>
              <p className="text-navy-600 leading-relaxed mb-6">
                Our track record speaks clearly: we have helped brands generate $200K in revenue within 60 days of their UK launch, and achieve 5X total revenue growth by adding USA and UK to their marketplace portfolio. These are not theoretical projections — they are documented results from brands we manage today.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                The key to successful international expansion is not just listing products in a new market. It requires localized keyword research, culturally adapted content, competitive pricing analysis, compliant product setup, and a phased advertising strategy that builds momentum without burning budget.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">FBA Setup & Compliance</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                We handle the complete operational setup: Amazon FBA account configuration, product compliance documentation (FDA, CE marking, UKCA as required), shipping plan creation, and initial inventory inbound coordination. For UK specifically, we guide VAT registration and ensure HMRC compliance from day one.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Amazon USA/UK seller account setup and verification',
                  'Tax registration support (US EIN, UK VAT)',
                  'Product compliance assessment and documentation',
                  'Brand Registry transfer and intellectual property protection',
                  'FBA shipping plan creation and initial inbound logistics',
                  'Pricing strategy calibrated for each market\'s competitive landscape',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-navy-600 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Localized Listings & Launch Advertising</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Your UAE listings will not work in the USA or UK. Consumer search behavior, competitive keywords, and product expectations differ significantly. We create entirely new listing content optimized for each market — researching local keywords, analyzing top competitors, and crafting copy that converts American and British shoppers.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                Our launch advertising strategy follows a proven three-phase approach: Phase 1 focuses on long-tail keywords with lower competition to build initial sales velocity and reviews. Phase 2 expands to mid-funnel keywords as organic ranking improves. Phase 3 targets high-volume head terms once the listing has sufficient conversion history to compete profitably.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Ready to Go Global?</h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto mb-8">
              Get a free expansion assessment. We will analyze your product range for USA/UK market potential and build your launch roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4" onClick={() => trackEvent('whatsapp_click', { location: 'expansion_cta' })}>
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
