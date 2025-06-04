// app/components/categories/CategoryGrid.js
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const categories = [
  {
    id: 1,
    name: 'Electronics',
    slug: 'electronics',
    image: '/images/categories/electronics.jpg',
    productCount: 1245,
    description: 'Latest gadgets and tech'
  },
  {
    id: 2,
    name: 'Fashion',
    slug: 'fashion',
    image: '/images/categories/fashion.jpg',
    productCount: 2156,
    description: 'Trendy clothing and accessories'
  },
  {
    id: 3,
    name: 'Home & Garden',
    slug: 'home-garden',
    image: '/images/categories/home-garden.jpg',
    productCount: 987,
    description: 'Everything for your home'
  },
  {
    id: 4,
    name: 'Sports & Fitness',
    slug: 'sports-fitness',
    image: '/images/categories/sports.jpg',
    productCount: 654,
    description: 'Gear for active lifestyle'
  },
  {
    id: 5,
    name: 'Beauty & Health',
    slug: 'beauty-health',
    image: '/images/categories/beauty.jpg',
    productCount: 789,
    description: 'Wellness and beauty products'
  },
  {
    id: 6,
    name: 'Books & Media',
    slug: 'books-media',
    image: '/images/categories/books.jpg',
    productCount: 432,
    description: 'Knowledge and entertainment'
  }
]

// Fallback image generator
const generateFallbackImage = (categoryName) => {
  const colors = {
    'Electronics': '#3B82F6',
    'Fashion': '#EC4899',
    'Home & Garden': '#10B981',
    'Sports & Fitness': '#F59E0B',
    'Beauty & Health': '#8B5CF6',
    'Books & Media': '#EF4444'
  }
  
  const color = colors[categoryName] || '#6B7280'
  const initials = categoryName.split(' ').map(word => word[0]).join('')
  
  return `data:image/svg+xml;charset=UTF-8,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='${encodeURIComponent(color)}'/%3E%3Ctext x='200' y='150' font-family='Arial,sans-serif' font-size='48' font-weight='bold' text-anchor='middle' dy='0.3em' fill='white'%3E${initials}%3C/text%3E%3C/svg%3E`
}

export default function CategoryGrid() {
  const [failedImages, setFailedImages] = useState(new Set())

  const handleImageError = (categoryId, categoryName) => {
    setFailedImages(prev => new Set([...prev, categoryId]))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="relative h-48 w-full">
            <Image
              src={failedImages.has(category.id) ? generateFallbackImage(category.name) : category.image}
              alt={`${category.name} category`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => handleImageError(category.id, category.name)}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Category info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1 line-clamp-1">
                {category.name}
              </h3>
              <p className="text-sm opacity-90 mb-2 line-clamp-2">
                {category.description}
              </p>
              <span className="inline-block text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                {category.productCount?.toLocaleString() || '0'} products
              </span>
            </div>
          </div>
          
          {/* Arrow icon */}
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
              <svg 
                className="w-4 h-4 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      ))}
    </div>
  )
}