// app/components/footer/Footer.js
'use client'
import Link from 'next/link'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
        { name: 'Affiliate Program', href: '/affiliate' },
      ]
    },
    customer: {
      title: 'Customer Service',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Shipping & Returns', href: '/shipping-returns' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Track Your Order', href: '/track-order' },
      ]
    },
    shop: {
      title: 'Shop',
      links: [
        { name: 'New Arrivals', href: '/new-arrivals' },
        { name: 'Best Sellers', href: '/best-sellers' },
        { name: 'Sale', href: '/sale' },
        { name: 'Gift Cards', href: '/gift-cards' },
        { name: 'Clearance', href: '/clearance' },
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'California Privacy Rights', href: '/california-privacy' },
      ]
    }
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/shophub' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/shophub' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/shophub' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/shophub' },
  ]

  const paymentMethods = [
    'Visa', 'Mastercard', 'American Express', 'PayPal', 'Apple Pay', 'Google Pay'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay in the Loop
            </h3>
            <p className="text-blue-100 mb-6">
              Get the latest deals, new arrivals, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-blue-100 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-bold">ShopHub</span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted destination for premium products at unbeatable prices. 
                We&#39;re committed to providing exceptional shopping experiences with 
                fast shipping and outstanding customer service.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>1-800-SHOPHUB (746-7482)</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>support@shophub.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>123 Commerce St, New York, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h5 className="font-semibold">Free Shipping</h5>
                <p className="text-gray-400 text-sm">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h5 className="font-semibold">Secure Payments</h5>
                <p className="text-gray-400 text-sm">SSL encrypted checkout</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <h5 className="font-semibold">Easy Returns</h5>
                <p className="text-gray-400 text-sm">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} ShopHub. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex items-center space-x-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method}
                    className="bg-white rounded px-2 py-1 text-xs text-gray-800 font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer