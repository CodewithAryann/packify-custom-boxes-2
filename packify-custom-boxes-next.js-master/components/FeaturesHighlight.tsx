'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WhyChoosePackify() {
  const highlights = [
    {
      title: '100% Recyclable Eco-Friendly Materials',
      desc: 'Made from sustainable corrugated cardboard and biodegradable materials — better for your brand and the planet.',
      icon: '/images/svg-2.webp',
    },
    {
      title: 'No Minimum Order Quantity (No MOQ)',
      desc: 'Order as few as 1 custom box or 10,000 — no restrictions, no hidden fees. Perfect for startups and wholesale buyers.',
      icon: '/images/svg.webp',
    },
    {
      title: 'Free Professional Design Support',
      desc: 'Our packaging designers help you create stunning, print-ready custom box artwork — at no additional cost.',
      icon: '/images/svg-3.webp',
    },
    {
      title: 'Fast 10-Day Delivery & Free U.S. Shipping',
      desc: 'Lightning-fast packaging production with free USA shipping and reliable worldwide export you can rely on.',
      icon: '/images/svg-3.webp',
    },
    {
      title: '3,000+ Happy Clients Worldwide',
      desc: 'Trusted by e-commerce brands across the USA and globe for quality custom packaging, reliability, and creativity.',
      icon: '/images/svg-2.webp',
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50" id="why-packify">
      <div className="max-w-6xl mx-auto text-center">
        {/* SEO-Optimized H2 with Keywords */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Why Choose <span className="text-[#f97316]">Packify for Custom Boxes?</span>
        </h2>
        
        {/* SEO-Enhanced Introduction */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          At Packify, we help brands grow through beautiful, durable, and <strong>eco-conscious packaging solutions</strong>. 
          From concept to doorstep, every <strong>custom printed box</strong> is designed with care — 
          <strong> no minimum order requirements</strong>, fast 7-10 day turnarounds, and full creative freedom 
          for your <strong>branded packaging</strong>.
        </p>

        {/* Highlights Grid with Schema.org Structured Data */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10" 
          itemScope 
          itemType="https://schema.org/ItemList"
        >
          <meta itemProp="itemListOrder" content="https://schema.org/ItemListUnordered" />
          <meta itemProp="name" content="Why Choose Packify - Custom Packaging Benefits" />
          
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Image 
                  src={item.icon} 
                  alt={`${item.title} icon`} 
                  width={50} 
                  height={50}
                  itemProp="image"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2" itemProp="name">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm" itemProp="description">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing CTA with LSI Keywords */}
        <div className="mt-14">
          <p className="text-gray-700 text-base max-w-2xl mx-auto mb-6">
            Every <strong>Packify box</strong> is designed to impress — with stunning full-color printing,
            perfect sizing to reduce <strong>shipping costs</strong>, and a 100% satisfaction guarantee 
            on all <strong>custom packaging orders</strong>.
          </p>
          <Link
            href="/get-quote"
            aria-label="Request a quote for custom packaging boxes"
            className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-lg py-4 px-10 rounded-full shadow-lg transition-all duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}