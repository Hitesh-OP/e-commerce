'use client'
import React, { useState } from 'react'
import { Search, Filter, Grid, List, ChevronRight, Star, Heart, ShoppingCart, Zap, Smartphone, Laptop, Headphones, Camera, Watch, Gamepad2, Shirt, Home, Coffee, Dumbbell, Book, Gift } from 'lucide-react'

const CategoriesPage = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const mainCategories = [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      count: '2,450',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
      subcategories: ['Smartphones', 'Laptops', 'Headphones', 'Cameras', 'Smart Watches', 'Gaming']
    },
    {
      id: 'fashion',
      name: 'Fashion & Apparel',
      icon: Shirt,
      color: 'from-pink-500 to-pink-600',
      count: '3,200',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Accessories', 'Bags', 'Jewelry']
    },
    {
      id: 'home',
      name: 'Home & Garden',
      icon: Home,
      color: 'from-green-500 to-green-600',
      count: '1,800',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      subcategories: ['Furniture', 'Decor', 'Kitchen', 'Bedding', 'Garden', 'Storage']
    },
    {
      id: 'health',
      name: 'Health & Fitness',
      icon: Dumbbell,
      color: 'from-red-500 to-red-600',
      count: '950',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      subcategories: ['Fitness Equipment', 'Supplements', 'Wellness', 'Sports Gear', 'Yoga', 'Running']
    },
    {
      id: 'books',
      name: 'Books & Media',
      icon: Book,
      color: 'from-purple-500 to-purple-600',
      count: '5,600',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      subcategories: ['Fiction', 'Non-Fiction', 'Educational', 'Children\'s Books', 'E-books', 'Audiobooks']
    },
    {
      id: 'gifts',
      name: 'Gifts & Special',
      icon: Gift,
      color: 'from-yellow-500 to-orange-500',
      count: '1,200',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      subcategories: ['Birthday Gifts', 'Holiday Gifts', 'Wedding Gifts', 'Baby Gifts', 'Corporate Gifts', 'Gift Cards']
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      category: 'Electronics',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Premium Cotton T-Shirt',
      category: 'Fashion',
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.3,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
      badge: 'Sale'
    },
    {
      id: 3,
      name: 'Smart Coffee Maker',
      category: 'Home',
      price: 149.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Yoga Mat Premium',
      category: 'Health',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
      badge: null
    }
  ]

  const quickCategories = [
    { name: 'Smartphones', icon: Smartphone, count: '340' },
    { name: 'Laptops', icon: Laptop, count: '180' },
    { name: 'Headphones', icon: Headphones, count: '220' },
    { name: 'Cameras', icon: Camera, count: '95' },
    { name: 'Smart Watches', icon: Watch, count: '150' },
    { name: 'Gaming', icon: Gamepad2, count: '280' },
    { name: 'Kitchen', icon: Coffee, count: '420' },
    { name: 'Gifts', icon: Gift, count: '350' }
  ]

  const filteredProducts = featuredProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           product.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop by Category
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover thousands of products organized into convenient categories for easy browsing
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search categories or products..."
                className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-lg text-lg focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Quick Browse
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {category.count} items
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Main Categories
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Browse our comprehensive selection of product categories
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {mainCategories.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              
              <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'} transition-colors`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'} transition-colors`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {mainCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.id} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={`relative ${viewMode === 'list' ? 'w-48' : 'h-48'}`}>
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-${viewMode === 'list' ? 'r' : 't'} ${category.color} opacity-80`}></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count} products</p>
                    </div>
                  </div>
                  
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Subcategories
                      </h4>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {category.subcategories.map((sub, index) => (
                        <div key={index} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">
                          {sub}
                        </div>
                      ))}
                    </div>
                    
                    <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                      Browse {category.name}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Handpicked products from various categories that our customers love most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.badge && (
                    <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full ${
                      product.badge === 'Sale' ? 'bg-red-500 text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute top-2 right-2 space-y-2">
                    <button className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                      <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No products found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can&#39;t Find What You&#39;re Looking For?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our customer service team and we&#39;ll help you find exactly what you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Browse All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CategoriesPage