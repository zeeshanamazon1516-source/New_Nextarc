import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { buildProfessionalServiceSchema, buildBlogPostingSchema } from '../components/JsonLd';
import { SITE_URL } from '../lib/constants';

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  dateISO: string;
  image: string;
  content: string;
}

export const posts: BlogPostData[] = [
  {
    slug: 'quick-commerce-uae-2026',
    title: 'Quick Commerce in the UAE: Why 30-Minute Delivery Is the New Standard',
    excerpt: 'From groceries to electronics, consumers now expect delivery in under an hour. Learn how brands are adapting to quick commerce platforms like Noon Minutes, Talabat Mart, and Amazon Fresh.',
    category: 'Quick Commerce',
    readTime: '8 min read',
    date: 'Apr 28, 2026',
    dateISO: '2026-04-28',
    image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `Quick commerce — the delivery of goods within 30 minutes or less — has exploded in the UAE during 2026. Platforms like Noon Minutes, Talabat Mart, and Amazon Fresh are reshaping consumer expectations. For brands, this represents a massive opportunity to capture high-intent, impulse-driven demand.\n\nThe shift is not limited to groceries. Electronics accessories, personal care products, and even fashion basics are now available for near-instant delivery. Consumers are willing to pay a premium for convenience, and brands that position themselves on these platforms early gain significant first-mover advantage.\n\nKey strategies for quick commerce success include: optimizing product listings for the smaller screen format these apps use, maintaining real-time inventory accuracy to avoid out-of-stocks (which tank rankings), and partnering with dark stores strategically located near your target customer base.\n\nPricing strategy matters too. Quick commerce shoppers are less price-sensitive but more time-sensitive. Brands that bundle products intelligently and offer competitive pricing within the platform ecosystem tend to see 2-3x higher basket sizes than traditional ecommerce.\n\nThe data shows that brands on quick commerce platforms in the UAE are growing 40-60% faster than those relying solely on traditional ecommerce. The window of opportunity is now — early adopters are building habits with consumers that will be difficult for latecomers to displace.`,
  },
  {
    slug: 'amazon-uae-algorithm-2026',
    title: 'Amazon UAE in 2026: Algorithm Changes Every Seller Must Know',
    excerpt: 'Amazon has rolled out major search and ranking updates for the UAE marketplace. Here is what changed, how it affects your listings, and the new optimization playbook to stay ahead.',
    category: 'Amazon',
    readTime: '9 min read',
    date: 'Jan 20, 2026',
    dateISO: '2026-01-20',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `Amazon UAE has undergone significant algorithm changes in 2026 that every seller needs to understand. The A10 algorithm update places more weight on external traffic sources, seller authority, and conversion rates than ever before.\n\nKey changes include: increased importance of click-through rates from search results, new weighting for video content in listings, and a stronger emphasis on brand registry benefits including A+ Content visibility in search.\n\nFor sellers in the UAE specifically, Amazon has introduced regional relevance signals that prioritize products with local fulfillment, Arabic keyword indexing, and UAE-specific pricing competitiveness. Sellers shipping from international warehouses now see reduced visibility compared to those using Amazon FBA or local logistics.\n\nThe optimization playbook for 2026 includes: refreshing all listing images with infographics and lifestyle shots, adding video to every listing, leveraging Posts and brand stories for organic visibility, and building external traffic through social media to improve organic ranking.\n\nBrands that adapted quickly to these changes in Q1 saw an average 35% improvement in organic rankings and a 20% reduction in ACOS as organic sales offset advertising dependency.`,
  },
  {
    slug: 'noon-express-fulfillment-2026',
    title: 'Noon Express 2026: How Fast Fulfillment Is Reshaping Sales',
    excerpt: 'Noon Express now delivers within two hours across the UAE. Learn how to leverage faster fulfillment tiers, win the buy box more often, and boost your conversion rates this year.',
    category: 'Noon',
    readTime: '7 min read',
    date: 'Feb 12, 2026',
    dateISO: '2026-02-12',
    image: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `Noon Express has expanded dramatically in 2026, offering two-hour delivery across the UAE and same-day delivery in KSA major cities. This evolution significantly impacts seller performance and visibility on the platform.\n\nSellers enrolled in Noon Express fulfillment are seeing 40-60% higher conversion rates compared to standard shipping options. The platform algorithm now heavily favors Express-eligible products in search rankings and promotional placements.\n\nTo leverage this, sellers need to maintain consistent stock levels at Noon warehouses, optimize their catalog for Express eligibility, and adjust pricing strategies to account for the fulfillment fees while remaining competitive.\n\nThe buy box algorithm on Noon now weights fulfillment speed as a primary factor, followed by price and seller rating. Brands that cannot offer Express delivery are increasingly losing visibility to competitors who can.\n\nOur recommendation: prioritize your top-performing 20% of products for Express enrollment, monitor stock levels daily, and use Noon's promotional calendar to maximize visibility during peak periods.`,
  },
  {
    slug: 'ai-powered-ecommerce-2026',
    title: 'AI-Powered Ecommerce: Tools Driving Growth in 2026',
    excerpt: 'From AI-generated product descriptions to predictive inventory management, discover the tools top GCC brands are using to cut costs and scale faster than ever.',
    category: 'Strategy',
    readTime: '10 min read',
    date: 'Mar 5, 2026',
    dateISO: '2026-03-05',
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `Artificial intelligence is no longer a future promise for ecommerce — it is the present competitive advantage. In 2026, GCC brands leveraging AI tools are outperforming their peers by significant margins.\n\nKey AI applications driving results include: automated keyword research that analyzes competitor listings and search trends in real-time, predictive inventory management that reduces stockouts by 70%, and AI-generated A+ Content that tests multiple variations simultaneously.\n\nFor PPC management specifically, AI-powered bid automation tools are reducing ACOS by 20-30% compared to manual management. These tools analyze hourly patterns, competitor bid behavior, and conversion probability to make micro-adjustments humans cannot.\n\nThe most impactful AI tool category for GCC sellers is multilingual content generation. Creating Arabic, English, and Turkish content for multi-marketplace sellers used to require multiple translation teams. AI now generates market-specific, culturally relevant product content that converts.\n\nOur advice: start with AI-powered PPC optimization (the fastest ROI), then expand to content generation and inventory forecasting. The brands that build AI into their operations now will have an insurmountable data advantage by 2027.`,
  },
  {
    slug: 'ppc-ai-bidding-2026',
    title: 'PPC in 2026: Bidding Smarter With AI-Assisted Campaigns',
    excerpt: 'Manual bidding is falling behind. Learn how AI-assisted campaign management is lowering ACOS by up to 30 percent and how to implement it for your Amazon and Noon ad spend.',
    category: 'PPC',
    readTime: '8 min read',
    date: 'Mar 22, 2026',
    dateISO: '2026-03-22',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `Manual PPC bidding on Amazon and Noon is increasingly becoming a competitive disadvantage in 2026. AI-assisted bid management tools now process thousands of data points per keyword per hour — a frequency impossible for human campaign managers.\n\nThe key advantage of AI bidding is not just efficiency but pattern recognition. These systems identify micro-trends in consumer behavior: time-of-day conversion spikes, day-of-week patterns, seasonal shifts, and competitor bid changes that create opportunity windows.\n\nImplementing AI-assisted bidding requires a phased approach. Start with your highest-spend campaigns where small ACOS improvements translate to significant dollar savings. Feed the algorithm at least 30 days of historical data, set guardrails on maximum bids, and monitor for the first two weeks before expanding.\n\nResults across our managed accounts show an average 27% ACOS reduction within 60 days of implementing AI-assisted bidding, with some accounts seeing improvements of up to 40%. The key is proper campaign structure — AI tools perform best with well-organized campaigns that have clear keyword targeting intent.\n\nFor Noon specifically, the platform's native bidding tools remain limited. External AI solutions that connect via API offer significantly better performance than the in-platform automation options available today.`,
  },
  {
    slug: 'shopify-markets-pro-uae',
    title: 'Shopify Markets Pro: Selling Cross-Border From the UAE',
    excerpt: 'Shopify Markets Pro now supports UAE-based merchants selling globally with localized checkout, duties calculation, and multi-currency pricing. Here is how to set it up right.',
    category: 'Shopify',
    readTime: '9 min read',
    date: 'Apr 8, 2026',
    dateISO: '2026-04-08',
    image: 'https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `Shopify Markets Pro has expanded its support for UAE-based merchants in 2026, enabling seamless cross-border selling with localized checkouts, automatic duties calculation, and multi-currency pricing. This is a game-changer for DTC brands wanting to sell globally from the Gulf.\n\nThe setup process involves configuring your target markets (USA, UK, EU are the most common for UAE brands), enabling automatic currency conversion with markup strategies, and setting up localized shipping rates through Shopify's carrier network.\n\nCritical success factors include: understanding VAT implications for each target market, setting up proper returns processes for international orders, and creating market-specific product descriptions that resonate culturally.\n\nFor UAE brands, the biggest opportunity is the USA market where Middle Eastern products (dates, Arabic coffee, oud fragrances, modest fashion) have growing demand but limited competition on DTC channels. Shopify Markets Pro makes reaching these customers operationally simple.\n\nOur recommendation: start with one market, perfect your fulfillment and customer service for that geography, then expand. Brands that try to launch in five markets simultaneously often deliver poor customer experiences everywhere.`,
  },
  {
    slug: 'ecommerce-kpis-dashboard-2026',
    title: 'The 2026 Ecommerce Dashboard: KPIs That Actually Move the Needle',
    excerpt: 'Vanity metrics are out. Learn which performance indicators top-performing UAE ecommerce brands track daily and how to build a real-time dashboard that drives decisions.',
    category: 'Analytics',
    readTime: '7 min read',
    date: 'Apr 24, 2026',
    dateISO: '2026-04-24',
    image: 'https://images.pexels.com/photos/7681070/pexels-photo-7681070.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: `Most ecommerce dashboards are cluttered with vanity metrics that look impressive but do not drive decisions. In 2026, the top-performing UAE brands track a focused set of KPIs that directly correlate with revenue growth.\n\nThe essential daily metrics include: TACOS (Total Advertising Cost of Sales — not just ACOS), unit session percentage by product, buy box win rate, and inventory health score. Weekly metrics should include organic rank velocity, review acquisition rate, and customer lifetime value trends.\n\nThe shift from ACOS to TACOS is critical. ACOS only measures ad efficiency, while TACOS reveals the total impact of advertising on your business including organic sales lift. A rising ACOS with falling TACOS often means your ads are driving organic growth — a healthy sign.\n\nFor multi-marketplace sellers, the dashboard must aggregate across platforms. Seeing your total revenue, profitability, and growth rate across Amazon, Noon, and Trendyol in one view prevents siloed decision-making.\n\nBuild your dashboard with real-time data connections. Static weekly reports are too slow in today's marketplace environment. The brands winning in 2026 make pricing, inventory, and bidding decisions daily based on live data.`,
  },
];

const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Ecommerce & Marketplace Growth Blog | NextArc"
        description="Practical guides on Amazon UAE, Noon, Trendyol, quick commerce, and international expansion for GCC ecommerce brands."
        path="/blog"
        schemas={[
          buildProfessionalServiceSchema(),
          ...posts.map((post) => buildBlogPostingSchema({
            headline: post.title,
            description: post.excerpt,
            datePublished: post.dateISO,
            url: `${SITE_URL}/blog/${post.slug}`,
          })),
        ]}
      />

      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden section-soft">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
                Blog
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.1] mb-6">
                Ecommerce <span className="gradient-text">Insights</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-navy-500 leading-relaxed">
                Expert guides, tips, and strategies to help you grow your ecommerce business in the UAE and beyond.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-max mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <article className="card overflow-hidden h-full flex flex-col group">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={`${post.title} - NextArc blog article`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width="400"
                        height="250"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-teal-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-navy-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-navy-400 text-xs">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                        Read article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
