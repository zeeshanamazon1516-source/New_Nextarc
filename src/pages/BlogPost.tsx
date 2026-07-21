import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { posts } from './Blog';
import SEO from '../components/SEO';
import { buildProfessionalServiceSchema, buildBlogPostingSchema } from '../components/JsonLd';
import { SITE_URL } from '../lib/constants';
import ScrollReveal from '../components/ScrollReveal';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <SEO title="Post Not Found | NextArc Blog" description="This blog post could not be found." path={`/blog/${slug}`} />
        <section className="pt-36 pb-20 section-soft">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-navy-900 mb-4">Post Not Found</h1>
            <Link to="/blog" className="btn-primary">Back to Blog</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | NextArc Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        schemas={[
          buildProfessionalServiceSchema(),
          buildBlogPostingSchema({
            headline: post.title,
            description: post.excerpt,
            datePublished: post.dateISO,
            url: `${SITE_URL}/blog/${post.slug}`,
          }),
        ]}
      />

      <section className="relative pt-28 pb-8 sm:pt-36 sm:pb-12 overflow-hidden section-soft">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-navy-500 hover:text-teal-600 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <ScrollReveal>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-[1.15] mb-4 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-navy-400 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-card mb-10"
                width="800"
                height="320"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="prose max-w-none">
                {post.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-navy-600 leading-relaxed mb-5">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* CTA Banner */}
          <ScrollReveal delay={200}>
            <div className="mt-12 max-w-3xl bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Need help with {post.category}?
              </h3>
              <p className="text-navy-300 mb-6">Book a free call and get expert guidance for your brand.</p>
              <Link to="/contact#book" className="btn-primary">
                Book a Free Call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
