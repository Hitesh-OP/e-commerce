'use client'
import React, { useState, useEffect } from 'react';
import { Clock, Star, ShoppingCart, Heart, Filter, Grid, List, ChevronDown, Tag, Zap, Gift, Percent } from 'lucide-react';

const DealsPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const featuredDeals = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      originalPrice: 199.99,
      salePrice: 99.99,
      discount: 50,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 1234,
      category: "electronics",
      badge: "Flash Deal",
      timeLeft: "2h 15m"
    },
    {
      id: 2,
      name: "Designer Leather Jacket",
      originalPrice: 299.99,
      salePrice: 149.99,
      discount: 50,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 856,
      category: "fashion",
      badge: "Limited Time",
      timeLeft: "1d 8h"
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      originalPrice: 249.99,
      salePrice: 179.99,
      discount: 28,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 2103,
      category: "electronics",
      badge: "Best Seller",
      timeLeft: "3h 42m"
    },
    {
      id: 4,
      name: "Professional Coffee Maker",
      originalPrice: 159.99,
      salePrice: 89.99,
      discount: 44,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 432,
      category: "home",
      badge: "Hot Deal",
      timeLeft: "5h 20m"
    }
  ];

  const dailyDeals = [
    {
      id: 5,
      name: "Bluetooth Speaker",
      originalPrice: 79.99,
      salePrice: 39.99,
      discount: 50,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 567,
      category: "electronics"
    },
    {
      id: 6,
      name: "Yoga Mat Premium",
      originalPrice: 49.99,
      salePrice: 24.99,
      discount: 50,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 234,
      category: "sports"
    },
    {
      id: 7,
      name: "Kitchen Knife Set",
      originalPrice: 129.99,
      salePrice: 69.99,
      discount: 46,
      image: "https://images.unsplash.com/photo-1594736797933-d0700c3c6766?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 445,
      category: "home"
    },
    {
      id: 8,
      name: "Casual Sneakers",
      originalPrice: 89.99,
      salePrice: 54.99,
      discount: 39,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 678,
      category: "fashion"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: 8 },
    { id: 'electronics', name: 'Electronics', count: 3 },
    { id: 'fashion', name: 'Fashion', count: 2 },
    { id: 'home', name: 'Home & Kitchen', count: 2 },
    { id: 'sports', name: 'Sports', count: 1 }
  ];

  const allDeals = [...featuredDeals, ...dailyDeals];
  const filteredDeals = filterCategory === 'all' 
    ? allDeals 
    : allDeals.filter(deal => deal.category === filterCategory);

  const DealCard = ({ deal, featured = false }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${featured ? 'border-2 border-yellow-400' : ''}`}>
      {featured && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-1 text-sm font-semibold">
          ⚡ Featured Deal
        </div>
      )}
      
      <div className="relative">
        <img
          src={deal.image}
          alt={deal.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {deal.badge && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {deal.badge}
            </span>
          )}
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{deal.discount}%
          </span>
        </div>
        <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-colors">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>
        {deal.timeLeft && (
          <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {deal.timeLeft}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {deal.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
              {deal.rating} ({deal.reviews})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${deal.salePrice}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              ${deal.originalPrice}
            </span>
          </div>
          <span className="text-sm text-green-600 dark:text-green-400 font-semibold">
            Save ${(deal.originalPrice - deal.salePrice).toFixed(2)}
          </span>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              🔥 Hot Deals & Offers
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Limited time offers - Don&#39;t miss out on incredible savings!
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <h3 className="text-lg font-semibold mb-4">⏰ Flash Sale Ends In:</h3>
              <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold">
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm mt-1 opacity-80">Hours</div>
                </div>
                <div className="text-4xl">:</div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm mt-1 opacity-80">Minutes</div>
                </div>
                <div className="text-4xl">:</div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm mt-1 opacity-80">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Promotional Banners */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl p-6 text-center">
            <Gift className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-bold text-lg mb-1">Free Shipping</h3>
            <p className="text-sm opacity-90">On orders over $50</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 text-center">
            <Percent className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-bold text-lg mb-1">Up to 70% Off</h3>
            <p className="text-sm opacity-90">Selected items</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-6 text-center">
            <Zap className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-bold text-lg mb-1">Lightning Deals</h3>
            <p className="text-sm opacity-90">Limited time only</p>
          </div>
        </div>

        {/* Featured Deals Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Zap className="h-8 w-8 text-yellow-500" />
              Featured Flash Deals
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDeals.map(deal => (
              <DealCard key={deal.id} deal={deal} featured={true} />
            ))}
          </div>
        </section>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Highest Discount</option>
              <option value="rating">Highest Rated</option>
            </select>

            <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* All Deals Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Tag className="h-6 w-6 text-blue-500" />
            All Deals ({filteredDeals.length})
          </h2>
          
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {filteredDeals.map(deal => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Never Miss a Deal!</h3>
          <p className="mb-6 opacity-90">Subscribe to get exclusive deals and early access to sales</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;