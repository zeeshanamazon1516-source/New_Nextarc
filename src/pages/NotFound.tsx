import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | NextArc" description="The page you are looking for does not exist." path="/404" />
      <section className="relative pt-36 pb-24 overflow-hidden section-soft">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-navy-200 mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">Page Not Found</h2>
          <p className="text-navy-500 text-lg max-w-md mx-auto mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn-primary text-lg px-8 py-4">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
