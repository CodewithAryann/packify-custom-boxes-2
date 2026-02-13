'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Amazon Seller, Texas',
    image: '/images/photo-1595514191830-3e96a518989b.avif',
    quote: 'Okay so I was skeptical at first because we have tried like 3 different packaging companies before. But Packify actually delivered on time and the boxes were exactly what we wanted. No weird color differences or flimsy corners. Our customers actually noticed the upgrade and we got way fewer "my package arrived damaged" emails. Worth every penny.',
  },
  {
    name: 'Omar Khalid',
    role: 'Small Business Owner, California',
    image: '/images/mark-farias-dt60oksDTx8-unsplash.webp',
    quote: 'Real talk - I run a small skincare brand from my garage and packaging was eating up my budget. Found these guys through a Reddit thread and decided to try them out. The quality is legit and they did not ghost me when I had questions about the design. Already placed my second order.',
  },
  {
    name: 'Emily Carter',
    role: 'E-commerce Manager, New York',
    image: '/images/marie-michele-bouchard-3U9BCWHMhUw-unsplash.webp',
    quote: 'We needed eco-friendly packaging that did not look cheap for our sustainable fashion line. These boxes hit the sweet spot - our customers literally post unboxing videos now. The kraft mailers with our logo printed on them? Chef is kiss. Plus no minimum order meant we could test different sizes without committing to thousands of units.',
  },
  {
    name: 'Liam Patel',
    role: 'Retailer, Florida',
    image: '/images/jonas-kakaroto-KIPqvvTOC1s-unsplash.webp',
    quote: 'Look I have been burned by packaging companies promising "premium quality" and sending me stuff that falls apart in humidity. These boxes actually hold up in Florida weather which is saying something. The magnetic closure boxes we ordered for our gift sets are gorgeous and customers keep asking where we got them.',
  },
  {
    name: 'Jessica Martinez',
    role: 'Subscription Box Owner, Illinois',
    image: '/images/photo-1494790108377-be9c29b29330.avif',
    quote: 'Running a monthly subscription box means I need consistent quality every single month. Packify has been our supplier for 8 months now and every batch looks identical. No weird surprises, no "oh we ran out of that material" nonsense. They just deliver solid work on time.',
  },
  {
    name: 'David Chen',
    role: 'Food Truck Owner, Seattle',
    image: '/images/photo-1507003211169-0a1dd7228f2d.avif',
    quote: 'Needed burger boxes that would not turn into a soggy mess during delivery. These actually have a grease-resistant coating that works - my customers stopped complaining about sauce leaking through. Plus the custom printing makes our little food truck look way more professional than we actually are lol.',
  },
]

export default function Testimonials() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay],
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      })
    }
  }, [])

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What Real Business Owners <span className="text-orange-500">Actually Say</span>
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          No fake reviews or paid endorsements. Just honest feedback from people who use our boxes every day.
        </p>

        {/* Swiper Container */}
        <div ref={swiperRef} className="swiper mySwiper pb-12">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative w-20 h-20 rounded-full mb-4 border-4 border-[#f97316] shadow-lg mx-auto overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4 flex-grow">"{testimonial.quote}"</p>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="swiper-pagination mt-6"></div>
        </div>
      </div>
    </section>
  )
}