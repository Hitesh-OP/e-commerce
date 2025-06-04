// app/components/products/FeaturedProducts.js
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react'
// Remove Badge import as it's not being used properly
// import { useCart } from '@/context/CartContext'
// import { useWishlist } from '@/context/WishlistContext'

const FeaturedProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')
  const [wishlist, setWishlist] = useState(new Set())
  const [cart, setCart] = useState([])

  // Mock context functions - replace with actual context when available
  const addToCart = (product) => {
    setCart(prev => [...prev, product])
    console.log('Added to cart:', product)
  }

  const addToWishlist = (product) => {
    setWishlist(prev => new Set([...prev, product.id]))
    console.log('Added to wishlist:', product)
  }

  const removeFromWishlist = (productId) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev)
      newWishlist.delete(productId)
      return newWishlist
    })
    console.log('Removed from wishlist:', productId)
  }

  const isInWishlist = (productId) => {
    return wishlist.has(productId)
  }

  // Mock data - replace with actual API call
  const mockProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.8,
      reviews: 234,
      image: "/images/products/headphones-1.jpg",
      category: "electronics",
      badge: "Best Seller",
      colors: ["black", "white", "blue"],
      inStock: true,
      discount: 33
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.6,
      reviews: 189,
      image: "/images/products/watch-1.jpg",
      category: "electronics",
      badge: "New",
      colors: ["black", "silver", "gold"],
      inStock: true,
      discount: 25
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.9,
      reviews: 342,
      image: "/images/products/tshirt-1.jpg",
      category: "fashion",
      badge: "Eco-Friendly",
      colors: ["white", "black", "navy", "gray"],
      inStock: true,
      discount: 40
    },
    {
      id: 4,
      name: "Professional Camera Lens",
      price: 599.99,
      originalPrice: 799.99,
      rating: 4.7,
      reviews: 156,
      image: "/images/products/lens-1.jpg",
      category: "electronics",
      badge: "Pro Choice",
      colors: ["black"],
      inStock: true,
      discount: 25
    },
    {
      id: 5,
      name: "Minimalist Desk Lamp",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviews: 198,
      image: "/images/products/lamp-1.jpg",
      category: "home",
      badge: "Design Award",
      colors: ["white", "black", "wood"],
      inStock: true,
      discount: 31
    },
    {
      id: 6,
      name: "Leather Crossbody Bag",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 267,
      image: "/images/products/bag-1.jpg",
      category: "fashion",
      badge: "Handcrafted",
      colors: ["brown", "black", "tan"],
      inStock: true,
      discount: 25
    },
    {
      id: 7,
      name: "Wireless Charging Station",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.4,
      reviews: 123,
      image: "/images/products/charger-1.jpg",
      category: "electronics",
      badge: "Fast Charge",
      colors: ["white", "black"],
      inStock: true,
      discount: 20
    },
    {
      id: 8,
      name: "Ceramic Coffee Mug Set",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.7,
      reviews: 301,
      image: "/images/products/mugs-1.jpg",
      category: "home",
      badge: "Bestseller",
      colors: ["white", "blue", "green", "pink"],
      inStock: true,
      discount: 33
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Living' }
  ]

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setProducts(mockProducts)
      setLoading(false)
    }
    
    fetchProducts()
  }, []) // Remove mockProducts dependency to avoid infinite re-renders

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter)

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
  }

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  // Fallback image generator
  const generateFallbackImage = (productName) => {
    const colors = ['#3B82F6', '#EC4899', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444']
    const color = colors[Math.floor(Math.random() * colors.length)]
    const initials = productName.split(' ').map(word => word[0]).join('').slice(0, 2)
    
    return `data:image/svg+xml;charset=UTF-8,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='${encodeURIComponent(color)}'/%3E%3Ctext x='200' y='200' font-family='Arial,sans-serif' font-size='48' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3E${initials}%3C/text%3E%3C/svg%3E`
  }

  const ProductCard = ({ product }) => {
    const [imageError, setImageError] = useState(false)

    return (
      <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imageError ? generateFallbackImage(product.name) : product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.discount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -{product.discount}%
              </span>
            )}
            {product.badge && (
              <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => handleWishlistToggle(product)}
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

          {/* Color Options */}
          {product.colors && product.colors.length > 1 && (
            <div className="absolute bottom-3 left-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {product.colors.slice(0, 4).map((color, index) => {
                const getColorClass = (color) => {
                  const colorMap = {
                    'black': 'bg-black',
                    'white': 'bg-gray-100',
                    'blue': 'bg-blue-500',
                    'navy': 'bg-blue-800',
                    'gray': 'bg-gray-500',
                    'silver': 'bg-gray-400',
                    'gold': 'bg-yellow-400',
                    'brown': 'bg-amber-800',
                    'tan': 'bg-amber-600',
                    'wood': 'bg-amber-700',
                    'green': 'bg-green-500',
                    'pink': 'bg-pink-500'
                  }
                  return colorMap[color] || 'bg-gray-300'
                }

                return (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full border-2 border-white shadow-sm ${getColorClass(color)}`}
                  />
                )
              })}
              {product.colors.length > 4 && (
                <div className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white text-xs flex items-center justify-center">
                  +
                </div>
              )}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Rating & Reviews */}
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
            {!product.inStock && (
              <span className="text-red-500 text-xs font-medium">Out of Stock</span>
            )}
          </div>

          {/* Product Name */}
          <Link
            href={`/products/${product.id}`}
            className="block font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
          >
            {product.name}
          </Link>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(product)}
            disabled={!product.inStock}
            className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
              product.inStock
                ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
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
    )
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === category.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link
          href="/products"
          className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          View All Products
        </Link>
      </div>
    </div>
  )
}

export default FeaturedProducts