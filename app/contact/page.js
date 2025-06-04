'use client'
import { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  Headphones, 
  ShoppingBag,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: 'general',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We&#39;re here to help! Reach out to us for any questions, concerns, or feedback.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Send className="h-6 w-6 mr-2 text-blue-600" />
                Send us a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <p className="text-green-800 dark:text-green-200">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <p className="text-red-800 dark:text-red-200">
                    Sorry, there was an error. Please try again.
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="technical">Technical Support</option>
                      <option value="returns">Returns & Refunds</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Store Location */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Visit Our Store
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">123 Commerce Street</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Shopping District, City 12345</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-green-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Call Us
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Customer Service: 1-800-SHOPHUB</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Sales: 1-800-SHOP-NOW</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Mon-Fri: 9AM-8PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-purple-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Email Us
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">General: support@shophub.com</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Sales: sales@shophub.com</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Returns: returns@shophub.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-orange-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Business Hours
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Sunday: 12:00 PM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Need Quick Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors cursor-pointer">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">General Inquiry</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors cursor-pointer">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="text-sm">Order Support</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors cursor-pointer">
                  <Headphones className="h-4 w-4" />
                  <span className="text-sm">Technical Support</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors cursor-pointer">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">Returns & Refunds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                What is your return policy?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We offer a 30-day return policy on most items. Items must be in original condition with tags attached.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                How long does shipping take?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Do you offer international shipping?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by location.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                How can I track my order?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                You can track your order using the tracking number sent to your email, or visit our Track Order page.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Visit Our Store
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Come see us in person at our flagship location.
              </p>
            </div>
            <div className="h-64 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Interactive map would be integrated here
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  123 Commerce Street, Shopping District, City 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage