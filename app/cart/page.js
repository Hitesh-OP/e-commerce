'use client'

import { useState, useEffect } from 'react'
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, Heart, Star, Truck, Shield, RotateCcw } from 'lucide-react'

const CartPage = () => {
  // Mock cart data - in real app, this would come from context/state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&crop=center",
      brand: "TechSound",
      color: "Black",
      size: "One Size",
      inStock: true,
      rating: 4.5,
      reviews: 1247
    },
    {
      id: 2,
      name: "Premium Cotton T-Shirt",
      price: 24.99,
      originalPrice: 34.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop&crop=center",
      brand: "StyleCo",
      color: "Navy Blue",
      size: "Medium",
      inStock: true,
      rating: 4.3,
      reviews: 892
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&crop=center",
      brand: "FitTech",
      color: "Silver",
      size: "42mm",
      inStock: false,
      rating: 4.7,
      reviews: 2156
    }
  ])

  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [promoError, setPromoError] = useState('')

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const totalSavings = cartItems.reduce((sum, item) => 
    sum + ((item.originalPrice - item.price) * item.quantity), 0
  )
  const promoDiscount = appliedPromo ? (subtotal * appliedPromo.discount) : 0
  const shipping = subtotal >= 50 || (appliedPromo && appliedPromo.freeShipping) ? 0 : 5.99
  const tax = (subtotal - promoDiscount) * 0.08875 // NY tax rate example
  const total = subtotal - promoDiscount + shipping + tax

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  // Remove item
  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  // Apply promo code
  const applyPromoCode = () => {
    if (!promoCode.trim()) {
      setPromoError('Please enter a promo code')
      return
    }

    // Mock promo codes
    const validCodes = {
      'SAVE10': { discount: 0.1, description: '10% off your order' },
      'WELCOME20': { discount: 0.2, description: '20% off for new customers' },
      'FREESHIP': { discount: 0, description: 'Free shipping', freeShipping: true }
    }

    const upperPromoCode = promoCode.toUpperCase()
    if (validCodes[upperPromoCode]) {
      setAppliedPromo({
        code: upperPromoCode,
        ...validCodes[upperPromoCode]
      })
      setPromoError('')
      setPromoCode('')
    } else {
      setPromoError('Invalid promo code. Try SAVE10, WELCOME20, or FREESHIP')
    }
  }

  // Remove promo code
  const removePromoCode = () => {
    setAppliedPromo(null)
    setPromoError('')
  }

  // Move to wishlist
  const moveToWishlist = (id) => {
    // In real app, this would add to wishlist and remove from cart
    console.log(`Moving item ${id} to wishlist`)
    removeItem(id)
  }

  // Navigation handlers
  const handleContinueShopping = () => {
    console.log('Navigate to shop page')
    // In real app: router.push('/shop') or navigate('/shop')
  }

  const handleGoBack = () => {
    console.log('Go back')
    // In real app: router.back() or navigate(-1)
  }

  const handleCheckout = () => {
    console.log('Navigate to checkout')
    // In real app: router.push('/checkout') or navigate('/checkout')
  }

  // Handle Enter key for promo code
  const handlePromoKeyPress = (e) => {
    if (e.key === 'Enter') {
      applyPromoCode()
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Looks like you haven&#39;t added any items to your cart yet. Start shopping to fill it up!
            </p>
            <button
              onClick={handleContinueShopping}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Continue Shopping</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Continue Shopping</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              {/* Free Shipping Progress */}
              {subtotal < 50 && !(appliedPromo && appliedPromo.freeShipping) && (
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Truck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Add ${(50 - subtotal).toFixed(2)} more for FREE shipping!
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        {/* <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwTDEwMCA5MEwxMTAgOTBMMTEwIDEwMEwxMDAgMTAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
                          }}
                        /> */}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              by {item.brand}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-gray-400 hover:text-red-500 transition-colors ml-4"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>

                        {/* Product Options */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <span>Color: {item.color}</span>
                          <span>Size: {item.size}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(item.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300 dark:text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {item.rating} ({item.reviews.toLocaleString()} reviews)
                          </span>
                        </div>

                        {/* Stock Status */}
                        <div className="mb-4">
                          {item.inStock ? (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              In Stock
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                              Out of Stock
                            </span>
                          )}
                        </div>

                        {/* Price and Quantity */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={item.quantity <= 1 || !item.inStock}
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4 py-2 text-center min-w-[3rem] border-x border-gray-300 dark:border-gray-600">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!item.inStock}
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            {/* Actions */}
                            <button
                              onClick={() => moveToWishlist(item.id)}
                              className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                            >
                              <Heart className="h-4 w-4" />
                              <span>Move to Wishlist</span>
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            {item.originalPrice > item.price && (
                              <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                                ${(item.originalPrice * item.quantity).toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo Code */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Promo Code
              </h3>
              {appliedPromo ? (
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div>
                    <div className="font-medium text-green-800 dark:text-green-200">
                      {appliedPromo.code} Applied!
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400">
                      {appliedPromo.description}
                    </div>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200"
                    aria-label="Remove promo code"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value)
                        if (promoError) setPromoError('')
                      }}
                      onKeyPress={handlePromoKeyPress}
                      placeholder="Enter promo code"
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-red-500 text-sm">{promoError}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                {totalSavings > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>You save</span>
                    <span>-${totalSavings.toFixed(2)}</span>
                  </div>
                )}

                {appliedPromo && promoDiscount > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>{appliedPromo.code}</span>
                    <span>-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                <div className="flex flex-col items-center text-xs text-gray-500 dark:text-gray-400">
                  <Shield className="h-5 w-5 mb-1" />
                  <span>Secure</span>
                </div>
                <div className="flex flex-col items-center text-xs text-gray-500 dark:text-gray-400">
                  <Truck className="h-5 w-5 mb-1" />
                  <span>Fast Ship</span>
                </div>
                <div className="flex flex-col items-center text-xs text-gray-500 dark:text-gray-400">
                  <RotateCcw className="h-5 w-5 mb-1" />
                  <span>Easy Returns</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
              >
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <button
                  onClick={handleContinueShopping}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm bg-transparent border-none cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage