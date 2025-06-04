'use client'
import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, ChevronDown, X } from 'lucide-react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data
  const mockProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      category: "Electronics",
      brand: "TechSound",
      rating: 4.5,
      reviews: 234,
      isNew: true,
      isSale: true,
      description: "Premium wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "Electronics",
      brand: "FitTech",
      rating: 4.7,
      reviews: 156,
      isNew: false,
      isSale: true,
      description: "Advanced fitness tracking with heart rate monitor"
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      category: "Clothing",
      brand: "EcoWear",
      rating: 4.3,
      reviews: 89,
      isNew: false,
      isSale: false,
      description: "Comfortable organic cotton t-shirt in various colors"
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      price: 24.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      category: "Home & Garden",
      brand: "HydroLife",
      rating: 4.6,
      reviews: 312,
      isNew: true,
      isSale: false,
      description: "Insulated water bottle keeps drinks cold for 24 hours"
    },
    {
      id: 5,
      name: "Leather Messenger Bag",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      category: "Accessories",
      brand: "ClassicLeather",
      rating: 4.4,
      reviews: 67,
      isNew: false,
      isSale: true,
      description: "Handcrafted leather messenger bag for professionals"
    },
    {
      id: 6,
      name: "Wireless Phone Charger",
      price: 39.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
      category: "Electronics",
      brand: "ChargeTech",
      rating: 4.2,
      reviews: 198,
      isNew: true,
      isSale: false,
      description: "Fast wireless charging pad compatible with all devices"
    },
    {
      id: 7,
      name: "Running Shoes",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      category: "Sports",
      brand: "RunFast",
      rating: 4.8,
      reviews: 445,
      isNew: false,
      isSale: true,
      description: "Lightweight running shoes with superior cushioning"
    },
    {
      id: 8,
      name: "Coffee Maker",
      price: 149.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
      category: "Home & Garden",
      brand: "BrewMaster",
      rating: 4.5,
      reviews: 123,
      isNew: false,
      isSale: false,
      description: "Programmable coffee maker with built-in grinder"
    }
  ];

  const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Accessories', 'Sports'];
  const brands = ['TechSound', 'FitTech', 'EcoWear', 'HydroLife', 'ClassicLeather', 'ChargeTech', 'RunFast', 'BrewMaster'];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, sortBy, priceRange, selectedCategories, selectedBrands, searchQuery]);

  const filterProducts = () => {
    let filtered = products.filter(product => {
      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 1000]);
    setSearchQuery('');
  };

  const ProductCard = ({ product, viewMode }) => (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
      viewMode === 'list' ? 'flex' : ''
    }`}>
      <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full object-cover rounded-t-lg ${
            viewMode === 'list' ? 'h-full rounded-l-lg rounded-t-none' : 'h-48'
          }`}
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            New
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
        )}
        <button className="absolute bottom-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      
      <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
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
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
          <p className="text-gray-600">
            Discover our amazing collection of products
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Brands</h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    Showing {filteredProducts.length} of {products.length} products
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${
                        viewMode === 'grid'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${
                        viewMode === 'list'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Display */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-500 text-lg mb-4">No products found</p>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`${
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-6'
              }`}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                  Previous
                </button>
                <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded">
                  1
                </button>
                <button className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                  2
                </button>
                <button className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                  3
                </button>
                <button className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;