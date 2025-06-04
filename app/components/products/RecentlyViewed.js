// app/components/products/RecentlyViewed.js
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Mock recently viewed products - in real app, this would come from localStorage/cookies/user session
const mockRecentlyViewed = [
  {
    id: 'rv-1',
    name: 'Wireless Bluetooth Headphones',
    price: 129.99,
    originalPrice: 179.99,
    image: '/images/products/headphones-1.jpg',
    slug: 'wireless-bluetooth-headphones',
    rating: 4.5,
    reviews: 2847,
    inStock: true,
    category: 'Electronics',
    brand: 'AudioTech',
    viewedAt: '2025-06-01T10:30:00Z'
  },
  {
    id: 'rv-2',
    name: 'Smart Fitness Watch',
    price: 299.99,
    originalPrice: 399.99,
    image: '/images/products/smartwatch-1.jpg',
    slug: 'smart-fitness-watch',
    rating: 4.7,
    reviews: 1523,
    inStock: true,
    category: 'Wearables',
    brand: 'FitPro',
    viewedAt: '2025-06-01T09:15:00Z'
  },
  {
    id: 'rv-3',
    name: 'Organic Cotton T-Shirt',
    price: 24.99,
    originalPrice: 34.99,
    image: '/images/products/tshirt-1.jpg',
    slug: 'organic-cotton-tshirt',
    rating: 4.3,
    reviews: 892,
    inStock: true,
    category: 'Fashion',
    brand: 'EcoWear',
    viewedAt: '2025-05-31T16:45:00Z'
  },
  {
    id: 'rv-4',
    name: 'Stainless Steel Water Bottle',
    price: 19.99,
    originalPrice: 29.99,
    image: '/images/products/water-bottle-1.jpg',
    slug: 'stainless-steel-water-bottle',
    rating: 4.6,
    reviews: 3421,
    inStock: false,
    category: 'Home & Kitchen',
    brand: 'HydroMax',
    viewedAt: '2025-05-31T14:20:00Z'
  },
  {
    id: 'rv-5',
    name: 'Wireless Phone Charger',
    price: 39.99,
    originalPrice: 59.99,
    image: '/images/products/charger-1.jpg',
    slug: 'wireless-phone-charger',
    rating: 4.4,
    reviews: 1876,
    inStock: true,
    category: 'Electronics',
    brand: 'ChargeFast',
    viewedAt: '2025-05-30T11:10:00Z'
  },
  {
    id: 'rv-6',
    name: 'Gaming Mechanical Keyboard',
    price: 89.99,
    originalPrice: 129.99,
    image: '/images/products/keyboard-1.jpg',
    slug: 'gaming-mechanical-keyboard',
    rating: 4.8,
    reviews: 945,
    inStock: true,
    category: 'Electronics',
    brand: 'GamePro',
    viewedAt: '2025-05-30T08:30:00Z'
  }
]

export default function RecentlyViewed() {
  const [recentProducts, setRecentProducts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    // In a real app, you'd fetch from localStorage, cookies, or user session
    // For now, we'll simulate recently viewed products
    const loadRecentlyViewed = () => {
      // Sort by most recently viewed
      const sorted = [...mockRecentlyViewed].sort((a, b) => 
        new Date(b.viewedAt) - new Date(a.viewedAt)
      )
      setRecentProducts(sorted)
    }

    loadRecentlyViewed()

    // Update items per view based on screen size
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= recentProducts.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, recentProducts.length - itemsPerView) : prevIndex - 1
    )
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100)
  }

  const getTimeAgo = (dateString) => {
    const now = new Date()
    const viewed = new Date(dateString)
    const diffInHours = Math.floor((now - viewed) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }

  if (recentProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          No Recently Viewed Items
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Start browsing to see your recently viewed products here
        </p>
        <Link
          href="/categories"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      {recentProducts.length > itemsPerView && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            disabled={currentIndex === 0}
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white dark:bg-gray-800 shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            disabled={currentIndex + itemsPerView >= recentProducts.length}
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Products Grid */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(recentProducts.length / itemsPerView) * 100}%`
          }}
        >
          {recentProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / recentProducts.length}%` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgMTI1TDE3NSAxNzVNMTc1IDEyNUwxMjUgMTc1IiBzdHJva2U9IiM5Q0E0QUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBNEFGIiBmb250LXNpemU9IjE0cHgiPlByb2R1Y3Q8L3RleHQ+Cjwvc3ZnPg=='
                      }}
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.originalPrice > product.price && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          -{calculateDiscount(product.originalPrice, product.price)}%
                        </span>
                      )}
                      {!product.inStock && (
                        <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          Out of Stock
                        </span>
                      )}
                    </div>

                    {/* Recently Viewed Badge */}
                    <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {getTimeAgo(product.viewedAt)}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Brand & Category */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span>{product.brand}</span>
                    <span>{product.category}</span>
                  </div>

                  {/* Product Name */}
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : i < product.rating
                              ? 'text-yellow-200'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                      ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className={`w-full mt-3 py-2 px-4 rounded-lg text-sm font-semibold transition-colors duration-300 ${
                      product.inStock
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      {recentProducts.length > itemsPerView && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(recentProducts.length / itemsPerView) }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * itemsPerView)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                Math.floor(currentIndex / itemsPerView) === i
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      )}

      {/* CSS for line clamp */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}