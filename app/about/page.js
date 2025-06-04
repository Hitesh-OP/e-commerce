'use client'
import React from 'react'
import { ShoppingBag, Users, Award, Truck, Shield, HeartHandshake, Star, ArrowRight } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { label: 'Happy Customers', value: '50,000+', icon: Users },
    { label: 'Products Sold', value: '1M+', icon: ShoppingBag },
    { label: 'Years of Excellence', value: '10+', icon: Award },
    { label: 'Countries Served', value: '25+', icon: Truck }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your privacy and security are our top priorities. We use industry-leading encryption and secure payment processing.'
    },
    {
      icon: HeartHandshake,
      title: 'Customer First',
      description: 'Every decision we make is centered around providing exceptional customer service and satisfaction.'
    },
    {
      icon: Star,
      title: 'Quality Products',
      description: 'We partner with trusted brands and carefully curate our selection to ensure you get the best products.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping with real-time tracking, because we know you want your products fast.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Visionary leader with 15+ years in e-commerce'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Tech innovator focused on seamless user experiences'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Success',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Passionate about creating amazing customer journeys'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About ShopHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in online shopping, delivering quality products and exceptional experiences since 2014.
          </p>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-white bg-opacity-50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {/* <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
                  alt="ShopHub team working" 
                  className="rounded-lg shadow-xl"
                /> */}
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  ShopHub was born from a simple idea: online shopping should be easy, trustworthy, and enjoyable. Founded in 2014 by a team of passionate entrepreneurs, we started as a small startup with big dreams.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  What began as a mission to connect customers with quality products has evolved into a comprehensive e-commerce platform serving millions of customers worldwide. We&apos;ve built our reputation on trust, innovation, and an unwavering commitment to customer satisfaction.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, ShopHub continues to grow, but our core values remain the same: putting our customers first and making online shopping a delightful experience for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do and shape the way we serve our customers every day.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The passionate people behind ShopHub who work tirelessly to make your shopping experience exceptional.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                /> */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-2xl leading-relaxed mb-8">
              &quot;To democratize commerce by making quality products accessible to everyone, while building lasting relationships based on trust, innovation, and exceptional service.&quot;
            </p>
            <div className="inline-block bg-white bg-opacity-20 px-8 py-4 rounded-full">
              <p className="text-lg font-medium">
                - The ShopHub Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers and discover why ShopHub is the preferred choice for online shopping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-colors hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage