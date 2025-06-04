// app/components/hero/HeroSection.js
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ShoppingBag, Star, Play } from 'lucide-react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Up to 70% Off",
      description: "Discover the latest trends in fashion with our exclusive summer collection. Premium quality at unbeatable prices.",
      image: "/images/hero/hero-1.jpg",
      ctaText: "Shop Now",
      ctaLink: "/collections/summer-2024",
      bgColor: "from-blue-600 to-purple-700",
      badge: "New Arrival"
    },
    {
      id: 2,
      title: "Tech Gadgets & Electronics",
      subtitle: "Starting at $29",
      description: "Upgrade your lifestyle with cutting-edge technology. From smartphones to smart home devices.",
      image: "/images/hero/hero-2.jpg",
      ctaText: "Explore Tech",
      ctaLink: "/categories/electronics",
      bgColor: "from-gray-900 to-gray-700",
      badge: "Best Seller"
    },
    {
      id: 3,
      title: "Home & Living Essentials",
      subtitle: "Transform Your Space",
      description: "Create your perfect home with our curated collection of furniture, decor, and lifestyle products.",
      image: "/images/hero/hero-3.jpg",
      ctaText: "Shop Home",
      ctaLink: "/categories/home-living",
      bgColor: "from-green-600 to-teal-600",
      badge: "Limited Time"
    }
  ]

  // Auto-play functionality with cleanup
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  // Safely get current slide data
  const currentSlideData = slides[currentSlide] || slides[0]

  // Split title safely
  const titleWords = currentSlideData.title?.split(' ') || []
  const titleStart = titleWords.slice(0, -1).join(' ')
  const titleEnd = titleWords.slice(-1)[0] || ''

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.bgColor} transition-all duration-1000`} />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title || 'Hero image'}
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik01ODUgMzc1SDYxNVY0MjVINTg1VjM3NVoiIGZpbGw9IiM5Q0E0QUYiLz4KPC9zdmc+'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  {currentSlideData.badge}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm ml-2">4.9/5 (2,847 reviews)</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {titleWords.length > 1 ? (
                  <>
                    <span className="block">{titleStart}</span>
                    <span className="text-yellow-400">{titleEnd}</span>
                  </>
                ) : (
                  <span className="text-yellow-400">{currentSlideData.title}</span>
                )}
              </h1>

              {/* Subtitle */}
              <h2 className="text-2xl lg:text-3xl font-semibold text-yellow-400">
                {currentSlideData.subtitle}
              </h2>

              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed">
                {currentSlideData.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={currentSlideData.ctaLink}
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  {currentSlideData.ctaText}
                </Link>
                <button 
                  type="button"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Video
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-gray-300">Customer Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-sm text-gray-300">Shipping & Returns</div>
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <Image
                  src={currentSlideData.image}
                  alt={currentSlideData.title || 'Product showcase'}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMjUgMjI1SDI3NVYyNzVIMjI1VjIyNVoiIGZpbGw9IiM5Q0E0QUYiLz4KPC9zdmc+'
                  }}
                />
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="text-sm font-medium">Limited Time</div>
                  <div className="text-2xl font-bold">70% OFF</div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">In Stock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          type="button"
          onClick={prevSlide}
          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          type="button"
          onClick={nextSlide}
          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="text-white text-sm text-center">
          <div className="mb-2">Scroll Down</div>
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection