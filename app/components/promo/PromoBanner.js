// app/components/promo/PromoBanner.js
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const promoOffers = [
  {
    id: 1,
    text: "🔥 Summer Sale: Up to 70% OFF on Electronics",
    cta: "Shop Now",
    link: "/categories/electronics",
    bgGradient: "from-red-500 to-pink-500"
  },
  {
    id: 2,
    text: "⚡ Flash Deal: Free Shipping on Orders Over $50",
    cta: "Order Now",
    link: "/deals",
    bgGradient: "from-blue-500 to-purple-500"
  },
  {
    id: 3,
    text: "🎁 New Customer Special: Extra 15% OFF First Purchase",
    cta: "Get Code",
    link: "/signup",
    bgGradient: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    text: "🛍️ Weekend Special: Buy 2 Get 1 FREE on Fashion",
    cta: "Browse",
    link: "/categories/fashion",
    bgGradient: "from-purple-500 to-indigo-500"
  }
]

export default function PromoBanner() {
  const [currentPromo, setCurrentPromo] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-rotate promos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPromo((prev) => (prev + 1) % promoOffers.length)
        setIsAnimating(false)
      }, 150) // Small delay for animation effect
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Handle banner dismiss
  const handleDismiss = () => {
    setIsVisible(false)
  }

  // Handle manual promo change
  const handlePromoChange = (index) => {
    if (index !== currentPromo) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPromo(index)
        setIsAnimating(false)
      }, 150)
    }
  }

  if (!isVisible) return null

  const currentOffer = promoOffers[currentPromo] || promoOffers[0]

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r ${currentOffer.bgGradient} transition-all duration-500`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-repeat animate-pulse" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} 
        />
      </div>

      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-between">
          {/* Left side - Promo indicators */}
          <div className="hidden sm:flex space-x-2">
            {promoOffers.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handlePromoChange(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPromo 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Show promo ${index + 1}`}
              />
            ))}
          </div>

          {/* Center - Promo content */}
          <div className="flex-1 text-center mx-4">
            <div className="flex items-center justify-center space-x-4">
              <p className={`text-white font-medium text-sm sm:text-base transition-all duration-300 ${
                isAnimating ? 'opacity-0 transform -translate-y-1' : 'opacity-100 transform translate-y-0'
              }`}>
                {currentOffer.text}
              </p>
              <Link
                href={currentOffer.link}
                className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-lg"
              >
                {currentOffer.cta}
              </Link>
            </div>
          </div>

          {/* Right side - Close button */}
          <button
            type="button"
            onClick={handleDismiss}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors duration-300"
            aria-label="Dismiss banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile indicators */}
        <div className="sm:hidden flex justify-center mt-2 space-x-2">
          {promoOffers.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handlePromoChange(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentPromo 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50'
              }`}
              aria-label={`Show promo ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Moving shimmer effect - using only Tailwind classes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-x-10 inset-y-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse" />
      </div>
    </div>
  )
}