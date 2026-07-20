import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <>
      <SEO title="Terms of Service | NextArc" description="Terms of service for NextArc marketing and advertising services." path="/terms-of-service" />
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 section-soft">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-8">Terms of Service</h1>
          <div className="prose max-w-3xl text-navy-600 leading-relaxed space-y-6">
            <p className="text-sm text-navy-400">Last updated: July 2026</p>

            <h2 className="text-xl font-bold text-navy-800 mt-8">1. Agreement</h2>
            <p>By accessing and using the NextArc website (www.nextarc.me) and services, you agree to be bound by these Terms of Service. NextArc is a marketing agency registered and operating in Dubai, UAE.</p>

            <h2 className="text-xl font-bold text-navy-800 mt-8">2. Services</h2>
            <p>NextArc provides ecommerce marketing, advertising management, marketplace optimization, and consulting services. Specific service terms, deliverables, and timelines are defined in individual client agreements.</p>

            <h2 className="text-xl font-bold text-navy-800 mt-8">3. Client Obligations</h2>
            <p>Clients are responsible for providing accurate information, timely feedback, and necessary access to marketplace accounts. You retain ownership of your intellectual property and brand assets.</p>

            <h2 className="text-xl font-bold text-navy-800 mt-8">4. Payment Terms</h2>
            <p>Payment terms are specified in individual service agreements. Unless otherwise stated, all services are billed monthly. Late payments may result in service suspension after written notice.</p>

            <h2 className="text-xl font-bold text-navy-800 mt-8">5. Confidentiality</h2>
            <p>Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This includes business strategies, campaign data, pricing, and performance metrics.</p>

            <h2 className="text-xl font-bold text-navy-800 mt-8">6. Limitation of Liability</h2>
            <p>NextArc provides services on a best-effort basis. We are not liable for marketplace algorithm changes, platform policy updates, or other factors outside our control that may affect campaign performance. Our total liability shall not exceed fees paid in the preceding three months.</p>

            <h2 className="text-xl font-bold text-navy-800 mt-8">7. Termination</h2>
            <p>Either party may terminate the engagement with 30 days written notice unless otherwise specified in the service agreement. All outstanding fees become due upon termination.</p>

            <h2 className="text-xl font-bold text-navy-800 mt-8">8. Governing Law</h2>
            <p>These terms are governed by the laws of the Emirate of Dubai and the applicable federal laws of the United Arab Emirates. Any disputes shall be resolved through the courts of Dubai.</p>

            <h2 className="text-xl font-bold text-navy-800 mt-8">9. Contact</h2>
            <p>For questions regarding these terms, contact us at: Dubai, UAE | Phone: +971 58 514 2952</p>
          </div>
        </div>
      </section>
    </>
  );
}
