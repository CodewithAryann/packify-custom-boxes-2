'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto">
        {/* SEO-Optimized H2 with Commercial Modifiers */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">
          <span className="text-black">USA</span> <span className="text-orange-500">Custom Packaging Manufacturer</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">Premium Mailer Boxes & Wholesale Solutions</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-gray-700">
              We're more than just a <strong>custom packaging manufacturer</strong> — we're your strategic 
              <strong> packaging partner</strong>. Based in the USA, we specialize in 
              <strong> premium custom mailer boxes</strong> for e-commerce brands, retail packaging, 
              <strong> subscription box solutions</strong>, and product launches.
            </p>
            <p className="text-gray-700">
              Whether you need <strong>sustainable kraft mailer boxes</strong> for eco-conscious brands or 
              <strong> luxury rigid presentation boxes</strong> for high-end unboxing experiences, our team crafts 
              <strong> branded packaging</strong> that reflects your identity, builds customer trust, and drives repeat purchases.
            </p>
            
            {/* Schema.org ListItem Structured Data for SEO */}
            <ul className="space-y-2 text-gray-700" itemScope itemType="https://schema.org/ItemList">
              <meta itemProp="itemListOrder" content="https://schema.org/ItemListOrderAscending" />
              <meta itemProp="name" content="Packify Custom Packaging Features" />
              
              <li className="flex items-start" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content="1" />
                <span className="text-orange-500 mr-2">✓</span>
                <span itemProp="name">High-quality, fully printed custom boxes with vivid graphics</span>
              </li>
              <li className="flex items-start" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content="2" />
                <span className="text-orange-500 mr-2">✓</span>
                <span itemProp="name">Eco-conscious packaging — 100% recyclable & biodegradable options</span>
              </li>
              <li className="flex items-start" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content="3" />
                <span className="text-orange-500 mr-2">✓</span>
                <span itemProp="name">No MOQ, perfect for startups & scaling brands</span>
              </li>
              <li className="flex items-start" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content="4" />
                <span className="text-orange-500 mr-2">✓</span>
                <span itemProp="name">Fast wholesale shipping — Free U.S. delivery + worldwide export</span>
              </li>
            </ul>
            
            <div className="mt-4 flex flex-nowrap items-center gap-4 overflow-x-auto text-sm text-gray-700">
              <span className="font-medium">Global Operations:</span>
              {['us','cn','sa','gb','ae'].map(code => (
                <Image 
                  key={code} 
                  src={`https://flagcdn.com/${code}.svg`} 
                  alt={`${code.toUpperCase()} packaging manufacturing facility`} 
                  width={24} 
                  height={24} 
                  className="rounded-sm border border-gray-300"
                />
              ))}
              <span className="font-medium ml-6">Logistics Partners:</span>
              <Image src="/images/images-removebg-preview.png" alt="USPS shipping partner" width={50} height={20}/>
              <Image src="/images/DHL-Symbol.png" alt="DHL express shipping" width={50} height={20}/>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg" alt="FedEx priority shipping" width={50} height={20}/>
            </div>
          </div>
          
          <div className="relative w-full h-[18rem] md:h-[26rem] group overflow-hidden rounded-[10px] shadow-lg">
            <Image
              src="/images/WhatsApp Image 2025-08-05 at 11.11.00 PM.webp"
              alt="Custom corrugated mailer boxes manufacturing facility"
              fill
              className="hidden md:block object-cover rounded-[10px] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
            />
            <Image
              src="/images/WhatsApp Image 2025-08-05 at 11.14.19 PM.webp"
              alt="Premium custom printed packaging boxes in production"
              fill
              className="block md:absolute object-cover rounded-[10px] transition-opacity duration-500 ease-in-out opacity-100 md:opacity-0 md:group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}