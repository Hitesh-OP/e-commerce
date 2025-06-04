// app/components/testimonials/Testimonials.js
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    company: 'Tech Solutions Inc.',
    image: '/images/testimonials/sarah.jpg',
    rating: 5,
    content: 'ShopHub has completely transformed my online shopping experience. The quality of products and fast delivery is unmatched. I\'ve been a loyal customer for over 2 years now!',
    purchasedItem: 'Wireless Headphones'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Developer',
    company: 'StartupXYZ',
    image: '/images/testimonials/michael.jpg',
    rating: 5,
    content: 'The customer service is exceptional. When I had an issue with my order, they resolved it within hours. The product selection is amazing and prices are very competitive.',
    purchasedItem: 'Gaming Mouse'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    company: 'Creative Spaces',
    image: '/images/testimonials/emily.jpg',
    rating: 5,
    content: 'I love how easy it is to find exactly what I\'m looking for. The website is intuitive, and the product descriptions are detailed and accurate. Highly recommended!',
    purchasedItem: 'Home Decor Set'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Fitness Enthusiast',
    company: 'Personal Trainer',
    image: '/images/testimonials/david.jpg',
    rating: 5,
    content: 'Great selection of fitness equipment at unbeatable prices. The quality is top-notch and shipping was incredibly fast. Will definitely shop here again!',
    purchasedItem: 'Exercise Equipment'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Fashion Blogger',
    company: 'Style Maven',
    image: '/images/testimonials/lisa.jpg',
    rating: 5,
    content: 'The fashion collection is always on-trend and affordable. I\'ve found so many unique pieces that I can\'t find anywhere else. ShopHub is my go-to for fashion!',
    purchasedItem: 'Designer Dress'
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Tech Executive',
    company: 'Innovation Corp',
    image: '/images/testimonials/robert.jpg',
    rating: 5,
    content: 'Excellent platform with a wide variety of high-quality products. The checkout process is smooth, and I appreciate the detailed tracking information for my orders.',
    purchasedItem: 'Smart Watch'
  }
]

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="relative">
      {/* Main testimonials grid */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Header with avatar and info */}
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial content */}
                    <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                      &quot;{testimonial.content}&quot;
                    </blockquote>

                    {/* Purchased item */}
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      Purchased: {testimonial.purchasedItem}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="Previous testimonials"
      >
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="Next testimonials"
      >
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentSlide === index
                ? 'bg-blue-600 dark:bg-blue-400'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Trust indicators */}
      <div className="mt-12 text-center">
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Verified Reviews
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9/5 Average Rating
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            50,000+ Happy Customers
          </div>
        </div>
      </div>
    </div>
  )
}

// Also keep the default export for backward compatibility
export default Testimonials