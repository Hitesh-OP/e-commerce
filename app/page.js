// Component imports with proper paths
import HeroSection from './components/hero/HeroSection'
import FeaturedProducts from './components/products/FeaturedProducts'
import CategoryGrid from './components/categories/CategoryGrid'
import Newsletter from './components/newsletter/Newsletter'
import Testimonials from './components/testimonials/Testimonials'
import BrandLogos from './components/brands/BrandLogos'
import PromoBanner from './components/promo/PromoBanner'
import BlogPosts from './components/blog/BlogPosts'
import RecentlyViewed from './components/products/RecentlyViewed'
import TrendingProducts from './components/products/TrendingProducts'

// Metadata for the homepage
export const metadata = {
  title: 'ShopHub - Your Premium Shopping Destination',
  description: 'Discover amazing products at unbeatable prices. Shop electronics, fashion, home & garden, and more with fast shipping and excellent customer service.',
  keywords: ['ecommerce', 'online shopping', 'electronics', 'fashion', 'home decor', 'deals'],
  openGraph: {
    title: 'ShopHub - Your Premium Shopping Destination',
    description: 'Discover amazing products at unbeatable prices with fast shipping.',
    url: 'https://shophub.com',
    siteName: 'ShopHub',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'ShopHub Homepage',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShopHub - Your Premium Shopping Destination',
    description: 'Discover amazing products at unbeatable prices with fast shipping.',
    images: ['/images/twitter-homepage.jpg'],
  },
  alternates: {
    canonical: 'https://shophub.com',
  },
}

// Structured data for homepage
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ShopHub Homepage",
  "description": "Your Premium Shopping Destination",
  "url": "https://shophub.com",
  "mainEntity": {
    "@type": "WebSite",
    "name": "ShopHub",
    "url": "https://shophub.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://shophub.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}

export default async function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Hero Section */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* Promotional Banner */}
      <section className="py-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <PromoBanner />
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you&apos;re looking for
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Handpicked products just for you
            </p>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Trending Now
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What everyone&apos;s talking about
            </p>
          </div>
          <TrendingProducts />
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted Brands
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We partner with the world&apos;s leading brands
            </p>
          </div>
          <BrandLogos />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real reviews from real customers
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Recently Viewed Products */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Recently Viewed
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Continue where you left off
            </p>
          </div>
          <RecentlyViewed />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tips, trends, and insights
            </p>
          </div>
          <BlogPosts />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose ShopHub?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast Shipping</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Free shipping on orders over $50. Express delivery available.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality Guarantee</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  30-day money-back guarantee on all products.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Round-the-clock customer support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}