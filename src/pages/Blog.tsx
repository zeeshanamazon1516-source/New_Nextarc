import { Clock, Calendar } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const posts = [
  {
    title: 'Amazon UAE in 2026: Algorithm Changes Every Seller Must Know',
    excerpt: 'Amazon has rolled out major search and ranking updates for the UAE marketplace. Here is what changed, how it affects your listings, and the new optimization playbook to stay ahead.',
    category: 'Amazon',
    readTime: '9 min read',
    date: 'Jan 20, 2026',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Noon Express 2026: How Fast Fulfillment Is Reshaping Sales',
    excerpt: 'Noon Express now delivers within two hours across the UAE. Learn how to leverage faster fulfillment tiers, win the buy box more often, and boost your conversion rates this year.',
    category: 'Noon',
    readTime: '7 min read',
    date: 'Feb 12, 2026',
    image: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'AI-Powered Ecommerce: Tools Driving Growth in 2026',
    excerpt: 'From AI-generated product descriptions to predictive inventory management, discover the tools top GCC brands are using to cut costs and scale faster than ever.',
    category: 'Strategy',
    readTime: '10 min read',
    date: 'Mar 5, 2026',
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'PPC in 2026: Bidding Smarter With AI-Assisted Campaigns',
    excerpt: 'Manual bidding is falling behind. Learn how AI-assisted campaign management is lowering ACOS by up to 30 percent and how to implement it for your Amazon and Noon ad spend.',
    category: 'PPC',
    readTime: '8 min read',
    date: 'Mar 22, 2026',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Shopify Markets Pro: Selling Cross-Border From the UAE',
    excerpt: 'Shopify Markets Pro now supports UAE-based merchants selling globally with localized checkout, duties calculation, and multi-currency pricing. Here is how to set it up right.',
    category: 'Shopify',
    readTime: '9 min read',
    date: 'Apr 8, 2026',
    image: 'https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'The 2026 Ecommerce Dashboard: KPIs That Actually Move the Needle',
    excerpt: 'Vanity metrics are out. Learn which performance indicators top-performing UAE ecommerce brands track daily and how to build a real-time dashboard that drives decisions.',
    category: 'Analytics',
    readTime: '7 min read',
    date: 'Apr 24, 2026',
    image: 'https://images.pexels.com/photos/7681070/pexels-photo-7681070.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Quick Commerce in the UAE: Why 30-Minute Delivery Is the New Standard',
    excerpt: 'From groceries to electronics, consumers now expect delivery in under an hour. Learn how brands are adapting to quick commerce platforms like Noon Minutes, Talabat Mart, and Amazon Fresh.',
    category: 'Quick Commerce',
    readTime: '8 min read',
    date: 'Apr 28, 2026',
    image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-100/30 rounded-full blur-3xl" />
        </div>
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-50 text-brand-600 border border-brand-100 mb-4">
                Blog
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Ecommerce <span className="gradient-text">Insights</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-slate-500 leading-relaxed">
                Expert guides, tips, and strategies to help you grow your ecommerce business in the UAE and beyond.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 80}>
                <article className="card overflow-hidden h-full flex flex-col group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-medium bg-brand-50 text-brand-600 mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-brand-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-slate-400 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
