// app/components/blog/BlogPosts.js
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "10 Tech Gadgets That Will Transform Your Home in 2025",
    excerpt: "Discover the latest smart home devices that are revolutionizing how we live, work, and relax at home.",
    image: "/images/blog/smart-home-tech.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/authors/sarah.jpg"
    },
    category: "Technology",
    readTime: "5 min read",
    publishDate: "2025-05-28",
    slug: "tech-gadgets-transform-home-2025",
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Fashion: How to Build an Eco-Friendly Wardrobe",
    excerpt: "Learn practical tips for creating a sustainable wardrobe that's both stylish and environmentally conscious.",
    image: "/images/blog/sustainable-fashion.jpg",
    author: {
      name: "Maya Chen",
      avatar: "/images/authors/maya.jpg"
    },
    category: "Fashion",
    readTime: "7 min read",
    publishDate: "2025-05-25",
    slug: "sustainable-fashion-eco-friendly-wardrobe"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Home Workout Equipment",
    excerpt: "Create your perfect home gym with our comprehensive guide to the best fitness equipment for every budget.",
    image: "/images/blog/home-workout.jpg",
    author: {
      name: "Mike Rodriguez",
      avatar: "/images/authors/mike.jpg"
    },
    category: "Fitness",
    readTime: "8 min read",
    publishDate: "2025-05-22",
    slug: "ultimate-guide-home-workout-equipment"
  },
  {
    id: 4,
    title: "Kitchen Essentials: Must-Have Tools for Home Chefs",
    excerpt: "Upgrade your culinary game with these essential kitchen tools that every home chef needs in their arsenal.",
    image: "/images/blog/kitchen-essentials.jpg",
    author: {
      name: "Emily Davis",
      avatar: "/images/authors/emily.jpg"
    },
    category: "Home & Kitchen",
    readTime: "6 min read",
    publishDate: "2025-05-20",
    slug: "kitchen-essentials-home-chefs"
  },
  {
    id: 5,
    title: "Summer Beauty Must-Haves: Skincare for Hot Weather",
    excerpt: "Protect and nourish your skin this summer with our curated selection of seasonal beauty products.",
    image: "/images/blog/summer-beauty.jpg",
    author: {
      name: "Lisa Park",
      avatar: "/images/authors/lisa.jpg"
    },
    category: "Beauty",
    readTime: "4 min read",
    publishDate: "2025-05-18",
    slug: "summer-beauty-skincare-hot-weather"
  },
  {
    id: 6,
    title: "Smart Shopping: How to Find the Best Deals Online",
    excerpt: "Master the art of online shopping with insider tips for finding genuine deals and avoiding common pitfalls.",
    image: "/images/blog/smart-shopping.jpg",
    author: {
      name: "David Kim",
      avatar: "/images/authors/david.jpg"
    },
    category: "Shopping Tips",
    readTime: "5 min read",
    publishDate: "2025-05-15",
    slug: "smart-shopping-best-deals-online"
  }
]

const categories = ["All", "Technology", "Fashion", "Fitness", "Home & Kitchen", "Beauty", "Shopping Tips"]

function BlogPosts() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visiblePosts, setVisiblePosts] = useState(6)

  // Filter posts by category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  // Get posts to display
  const displayedPosts = filteredPosts.slice(0, visiblePosts)
  const hasMorePosts = filteredPosts.length > visiblePosts

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 3)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setVisiblePosts(6)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.map((post, index) => (
          <article
            key={post.id}
            className={`group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 ${
              post.featured && index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            {/* Post Image */}
            <div className="relative overflow-hidden">
              <div className={`relative ${post.featured && index === 0 ? 'h-64' : 'h-48'}`}>
                {/* <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTUwTDI1MCAyNTBNMjUwIDE1MEwxNTAgMjUwIiBzdHJva2U9IiM5Q0E0QUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUNBNEFGIiBmb250LXNpemU9IjE0cHgiPkJsb2cgUG9zdDwvdGV4dD4KPC9zdmc+'
                  }}
                /> */}
                {post.featured && index === 0 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold">
                {post.category}
              </div>
            </div>

            {/* Post Content */}
            <div className="p-6">
              {/* Meta Info */}
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                    {/* <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    /> */}
                    <div className="hidden w-full h-full bg-gray-400 dark:bg-gray-500 items-center justify-center text-xs text-white font-semibold">
                      {post.author.name.charAt(0)}
                    </div>
                  </div>
                  <span>{post.author.name}</span>
                </div>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
                <span className="mx-2">•</span>
                <span>{formatDate(post.publishDate)}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-300"
              >
                Read More
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      {hasMorePosts && (
        <div className="text-center mt-12">
          <button
            onClick={loadMorePosts}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
          >
            Load More Posts
          </button>
        </div>
      )}

      {/* No Posts Message */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No posts found in the &quot;{selectedCategory}&quot; category.
          </p>
        </div>
      )}

      {/* CSS for line clamp */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

// Named export
export { BlogPosts }

// Default export
export default BlogPosts