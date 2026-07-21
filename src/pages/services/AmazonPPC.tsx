import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../../lib/constants';
import { trackEvent } from '../../lib/analytics';
import ScrollReveal from '../../components/ScrollReveal';
import SEO from '../../components/SEO';
import { buildProfessionalServiceSchema, buildServiceSchema, buildFAQSchema } from '../../components/JsonLd';

const faqs = [
  { question: 'What Amazon ad types do you manage?', answer: 'We manage all Amazon ad formats including Sponsored Products, Sponsored Brands, Sponsored Brands Video, Sponsored Display, and DSP campaigns. We select the optimal mix based on your goals, competition, and budget.' },
  { question: 'How quickly can you reduce my ACOS?', answer: 'Most accounts see a 20-30% ACOS reduction within the first 30-60 days. We achieve this through campaign restructuring, aggressive negative keyword implementation, bid automation, and dayparting optimization.' },
  { question: 'Do you manage Amazon PPC for USA and UK markets specifically?', answer: 'Yes. We specialize in managing Amazon PPC for UAE brands expanding into the USA and UK. Each market requires different keyword strategies, bid levels, and competitive approaches that we tailor specifically.' },
];

export default function AmazonPPC() {
  return (
    <>
      <SEO
        title="Amazon PPC Management Agency UAE, USA & UK | NextArc"
        description="Expert Amazon PPC management reducing ACOS and scaling profitable ad campaigns across Sponsored Products, Brands, and Display for UAE, USA, and UK marketplaces."
        path="/services/amazon-ppc"
        schemas={[
          buildProfessionalServiceSchema(),
          buildServiceSchema('Amazon PPC Management', 'Performance-driven Amazon PPC management across Sponsored Products, Brands, and Display with proven ACOS reduction methodology.'),
          buildFAQSchema(faqs),
        ]}
      />

      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500 rounded-full blur-[120px]" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-navy-300 hover:text-teal-300 text-sm mb-6 transition-colors">
              &larr; All Services
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6 max-w-3xl">
              Amazon PPC & Sponsored Ads Management
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed max-w-2xl mb-8">
              We manage and optimize Amazon advertising campaigns that drive profitable growth. From Sponsored Products to DSP, our data-driven approach consistently reduces ACOS while scaling revenue.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Full-Spectrum Amazon Advertising</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Amazon advertising in 2026 requires a sophisticated, multi-format approach. We manage your entire Amazon advertising ecosystem — from keyword-targeted Sponsored Products that capture high-intent shoppers to Sponsored Brands campaigns that build awareness and drive category dominance.
              </p>
              <p className="text-navy-600 leading-relaxed mb-6">
                Our team manages campaigns across Amazon UAE, Amazon USA, Amazon UK, and Amazon KSA. Each marketplace has unique competitive dynamics, bid landscapes, and consumer behaviors. We tailor strategies specifically for each market rather than applying a one-size-fits-all approach.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                Sponsored Display and DSP campaigns extend your reach beyond Amazon search results, retargeting shoppers who viewed your products and conquesting competitor audiences. Combined with Sponsored Brands Video — which we've seen deliver 40% lower CPC than static formats — you get full-funnel advertising coverage.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Our ACOS Reduction Methodology</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Reducing ACOS while maintaining or growing sales volume is the central challenge of Amazon PPC. Our methodology focuses on four pillars: campaign architecture, negative keyword systems, bid automation, and search term harvesting.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Campaign restructuring with single-keyword and product-targeting ad groups for granular control',
                  'Systematic negative keyword implementation across exact, phrase, and broad match types',
                  'Dayparting and budget allocation based on hourly conversion data',
                  'Search term harvesting pipeline that graduates winning terms from auto to manual campaigns',
                  'Bid automation using rule-based systems adjusted for target ACOS by product lifecycle stage',
                  'Weekly reporting with transparent ACOS, ROAS, TACoS, and impression share metrics',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-navy-600 text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Bid Automation & Scaling</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Manual bidding cannot compete with systematic automation in 2026. We implement rule-based and AI-assisted bid management that adjusts hundreds of bids daily based on conversion data, competitive dynamics, and your profitability targets.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                Our clients typically see ACOS reductions of 25-40% within the first 60 days while simultaneously growing total ad-attributed revenue. We achieve this by eliminating wasteful spend and reinvesting it into proven converting keywords and audiences.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Ready to Lower Your ACOS?</h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto mb-8">
              Get a free PPC audit and see exactly where your ad spend is being wasted.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4" onClick={() => trackEvent('whatsapp_click', { location: 'amazon_ppc_cta' })}>
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
