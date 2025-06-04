// app/components/products/TrendingProducts.js
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Heart, ShoppingCart, Eye, TrendingUp, Flame, Clock } from 'lucide-react'

const TrendingProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('trending')
  const [wishlist, setWishlist] = useState(new Set())

  // Mock trending products data
  const mockTrendingProducts = [
    {
      id: 101,
      name: "Wireless AirPods Pro",
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.9,
      reviews: 1247,
      image: "/images/products/airpods-pro.jpg",
      category: "electronics",
      badge: "Trending",
      trendingRank: 1,
      trendingScore: 98,
      salesIncrease: 45,
      colors: ["white", "black"],
      inStock: true,
      discount: 17,
      timeOnTrending: "2 days"
    },
    {
      id: 102,
      name: "Gaming Mechanical Keyboard",
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.7,
      reviews: 892,
      image: "/images/products/gaming-keyboard.jpg",
      category: "electronics",
      badge: "Hot",
      trendingRank: 2,
      trendingScore: 94,
      salesIncrease: 38,
      colors: ["black", "white", "rgb"],
      inStock: true,
      discount: 28,
      timeOnTrending: "5 days"
    },
    {
      id: 103,
      name: "Sustainable Water Bottle",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.8,
      reviews: 567,
      image: "/images/products/water-bottle.jpg",
      category: "lifestyle",
      badge: "Eco-Trend",
      trendingRank: 3,
      trendingScore: 91,
      salesIncrease: 52,
      colors: ["blue", "green", "pink", "black"],
      inStock: true,
      discount: 30,
      timeOnTrending: "1 week"
    },
    {
      id: 104,
      name: "Smart Home Hub",
      price: 199.99,
      originalPrice: 279.99,
      rating: 4.6,
      reviews: 445,
      image: "/images/products/smart-hub.jpg",
      category: "electronics",
      badge: "Rising",
      trendingRank: 4,
      trendingScore: 88,
      salesIncrease: 67,
      colors: ["white", "black"],
      inStock: true,
      discount: 29,
      timeOnTrending: "3 days"
    },
    {
      id: 105,
      name: "Minimalist Backpack",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 723,
      image: "/images/products/backpack.jpg",
      category: "fashion",
      badge: "Viral",
      trendingRank: 5,
      trendingScore: 85,
      salesIncrease: 41,
      colors: ["black", "gray", "navy", "brown"],
      inStock: true,
      discount: 25,
      timeOnTrending: "4 days"
    },
    {
      id: 106,
      name: "LED Strip Lights",
      price: 24.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 1156,
      image: "/images/products/led-strips.jpg",
      category: "home",
      badge: "Popular",
      trendingRank: 6,
      trendingScore: 82,
      salesIncrease: 73,
      colors: ["rgb", "white", "warm"],
      inStock: true,
      discount: 38,
      timeOnTrending: "1 week"
    },
    {
      id: 107,
      name: "Protein Powder Premium",
      price: 64.99,
      originalPrice: 84.99,
      rating: 4.8,
      reviews: 634,
      image: "/images/products/protein-powder.jpg",
      category: "health",
      badge: "Fitness Trend",
      trendingRank: 7,
      trendingScore: 79,
      salesIncrease: 29,
      colors: ["vanilla", "chocolate", "strawberry"],
      inStock: true,
      discount: 24,
      timeOnTrending: "6 days"
    },
    {
      id: 108,
      name: "Wireless Phone Charger",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.6,
      reviews: 445,
      image: "/images/products/wireless-charger.jpg",
      category: "electronics",
      badge: "Fast Rising",
      trendingRank: 8,
      trendingScore: 76,
      salesIncrease: 81,
      colors: ["black", "white"],
      inStock: true,
      discount: 33,
      timeOnTrending: "2 days"
    }
  ]

  const tabs = [
    { id: 'trending', name: 'Trending Now', icon: TrendingUp },
    { id: 'hot', name: 'Hot Deals', icon: Flame },
    { id: 'new', name: 'New & Rising', icon: Clock }
  ]

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 800))
      setProducts(mockTrendingProducts)
      setLoading(false)
    }
    
    fetchTrendingProducts()
  }, [])

  const filteredProducts = products.filter(product => {
    if (activeTab === 'hot') return product.discount >= 25
    if (activeTab === 'new') return product.timeOnTrending.includes('days') && parseInt(product.timeOnTrending) <= 3
    return true // trending - show all
  }).slice(0, 8)

  // Mock context functions
  const addToCart = (product) => {
    console.log('Added to cart:', product)
  }

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev)
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId)
      } else {
        newWishlist.add(productId)
      }
      return newWishlist
    })
  }

  const isInWishlist = (productId) => wishlist.has(productId)

  // Fallback image generator
  const generateFallbackImage = (productName) => {
    const colors = ['#3B82F6', '#EC4899', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444']
    const color = colors[Math.floor(Math.random() * colors.length)]
    const initials = productName.split(' ').map(word => word[0]).join('').slice(0, 2)
    
    return `data:image/svg+xml;charset=UTF-8,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='${encodeURIComponent(color)}'/%3E%3Ctext x='200' y='200' font-family='Arial,sans-serif' font-size='48' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3E${initials}%3C/text%3E%3C/svg%3E`
  }

  const getBadgeColor = (badge) => {
    const colorMap = {
      'Trending': 'bg-gradient-to-r from-purple-500 to-pink-500',
      'Hot': 'bg-gradient-to-r from-red-500 to-orange-500',
      'Rising': 'bg-gradient-to-r from-green-500 to-blue-500',
      'Viral': 'bg-gradient-to-r from-pink-500 to-purple-500',
      'Popular': 'bg-gradient-to-r from-blue-500 to-indigo-500',
      'Fitness Trend': 'bg-gradient-to-r from-emerald-500 to-teal-500',
      'Fast Rising': 'bg-gradient-to-r from-orange-500 to-red-500',
      'Eco-Trend': 'bg-gradient-to-r from-green-500 to-emerald-500'
    }
    return colorMap[badge] || 'bg-gradient-to-r from-gray-500 to-gray-600'
  }

  const TrendingCard = ({ product, index }) => {
    const [imageError, setImageError] = useState(false)

    return (
      <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
        {/* Trending Rank */}
        <div className="absolute top-3 left-3 z-10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black bg-opacity-70 text-white rounded-full flex items-center justify-center text-sm font-bold">
              #{product.trendingRank}
            </div>
            <div className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
              +{product.salesIncrease}%
            </div>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          {/* <Image
            src={imageError ? generateFallbackImage(product.name) : product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          /> */}
          
          {/* Trending Badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className={`${getBadgeColor(product.badge)} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
              {product.badge}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`p-2 rounded-full shadow-lg transition-colors ${
                isInWishlist(product.id)
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
              }`}
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4" />
            </button>
            <Link
              href={`/products/${product.id}`}
              className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors"
              aria-label="Quick view"
            >
              <Eye className="h-4 w-4" />
            </Link>
          </div>

          {/* Trending Score Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-20">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
              style={{ width: `${product.trendingScore}%` }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Rating & Time on Trending */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({product.reviews})
              </span>
            </div>
            <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
              {product.timeOnTrending}
            </span>
          </div>

          {/* Product Name */}
          <Link
            href={`/products/${product.id}`}
            className="block font-semibold text-gray-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors line-clamp-2"
          >
            {product.name}
          </Link>

          {/* Price & Discount */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            {product.discount > 0 && (
              <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Color Options */}
          {product.colors && product.colors.length > 1 && (
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-xs text-gray-500 dark:text-gray-400">Colors:</span>
              {product.colors.slice(0, 3).map((color, index) => {
                const getColorClass = (color) => {
                  const colorMap = {
                    'black': 'bg-black',
                    'white': 'bg-gray-100 border-gray-300',
                    'blue': 'bg-blue-500',
                    'green': 'bg-green-500',
                    'pink': 'bg-pink-500',
                    'rgb': 'bg-gradient-to-r from-red-500 via-green-500 to-blue-500',
                    'gray': 'bg-gray-500',
                    'navy': 'bg-blue-800',
                    'brown': 'bg-amber-800'
                  }
                  return colorMap[color] || 'bg-gray-300'
                }

                return (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full border ${getColorClass(color)}`}
                  />
                )
              })}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
              )}
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 transform hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div>
        {/* Skeleton Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 w-32 bg-gray-300 rounded-full animate-pulse" />
          ))}
        </div>
        
        {/* Skeleton Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-300 aspect-square rounded-2xl mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.name}</span>
            </button>
          )
        })}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <TrendingCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <Link
          href="/trending"
          className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <TrendingUp className="h-5 w-5 mr-2" />
          View All Trending Products
        </Link>
      </div>
    </div>
  )
}

export default TrendingProducts