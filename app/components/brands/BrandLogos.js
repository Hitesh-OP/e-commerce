// app/components/brands/BrandLogos.js
'use client'

import Image from 'next/image'

const brands = [
  {
    id: 1,
    name: 'Apple',
    logo: '/images/brands/apple-logo.png',
    alt: 'Apple Logo'
  },
  {
    id: 2,
    name: 'Samsung',
    logo: '/images/brands/samsung-logo.png',
    alt: 'Samsung Logo'
  },
  {
    id: 3,
    name: 'Nike',
    logo: '/images/brands/nike-logo.png',
    alt: 'Nike Logo'
  },
  {
    id: 4,
    name: 'Sony',
    logo: '/images/brands/sony-logo.png',
    alt: 'Sony Logo'
  },
  {
    id: 5,
    name: 'Microsoft',
    logo: '/images/brands/microsoft-logo.png',
    alt: 'Microsoft Logo'
  },
  {
    id: 6,
    name: 'Canon',
    logo: '/images/brands/canon-logo.png',
    alt: 'Canon Logo'
  },
  {
    id: 7,
    name: 'Adidas',
    logo: '/images/brands/adidas-logo.png',
    alt: 'Adidas Logo'
  },
  {
    id: 8,
    name: 'LG',
    logo: '/images/brands/lg-logo.png',
    alt: 'LG Logo'
  }
]

export default function BrandLogos() {
  return (
    <div className="overflow-hidden">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="group relative w-24 h-16 flex items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            {/* <Image
              src={brand.logo}
              alt={brand.alt}
              width={80}
              height={40}
              className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            /> */}
            <div className="hidden text-gray-600 dark:text-gray-300 font-semibold text-sm">
              {brand.name}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="flex animate-scroll gap-6 py-4">
          {/* First set of brands */}
          {brands.map((brand) => (
            <div
              key={`first-${brand.id}`}
              className="flex-shrink-0 w-20 h-12 flex items-center justify-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
            >
              {/* <Image
                src={brand.logo}
                alt={brand.alt}
                width={60}
                height={30}
                className="max-w-full max-h-full object-contain filter grayscale"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'block'
                }}
              /> */}
              <div className="hidden text-gray-600 dark:text-gray-300 font-semibold text-xs">
                {brand.name}
              </div>
            </div>
          ))}
          {/* Duplicate set for infinite scroll effect */}
          {brands.map((brand) => (
            <div
              key={`second-${brand.id}`}
              className="flex-shrink-0 w-20 h-12 flex items-center justify-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
            >
              {/* <Image
                src={brand.logo}
                alt={brand.alt}
                width={60}
                height={30}
                className="max-w-full max-h-full object-contain filter grayscale"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'block'
                }}
              /> */}
              <div className="hidden text-gray-600 dark:text-gray-300 font-semibold text-xs">
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}