'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubscribed(true)
      setEmail('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubscribeAnother = () => {
    setIsSubscribed(false)
  }

  const handleButtonClick = (e) => {
    e.preventDefault()
    handleSubmit(e)
  }

  if (isSubscribed) {
    return (
      <div className="text-center max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
          <p className="text-purple-100 mb-6">
            You have successfully subscribed to our newsletter. Get ready for exclusive deals and updates!
          </p>
          <button
            onClick={handleSubscribeAnother}
            className="text-purple-200 hover:text-white transition-colors duration-200 underline"
          >
            Subscribe another email
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-4">
        Stay in the Loop
      </h2>
      <p className="text-purple-100 mb-8 text-lg">
        Subscribe to our newsletter and be the first to know about exclusive deals, new products, and special offers.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleButtonClick}
          disabled={isLoading}
          className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </div>
          ) : (
            'Subscribe'
          )}
        </button>
      </div>

      {error && (
        <p className="text-red-300 mt-4 text-sm">{error}</p>
      )}

      <div className="mt-8 flex items-center justify-center space-x-6 text-purple-200 text-sm">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Weekly updates
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          No spam, ever
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Join 10,000+ subscribers
        </div>
      </div>
    </div>
  )
}