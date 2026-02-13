'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-orange-500 text-white px-6 md:px-12 py-16 rounded-t-[2.5rem]">
      {/* --- Main Footer --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 leading-tight">
            Packify <span className="font-light">CUSTOM BOXES</span>
          </h2>
          <p className="text-sm text-white/90 mb-3 max-w-xs">
            Leading custom packaging manufacturer in USA. Premium custom boxes, mailer boxes & eco-friendly packaging solutions.
          </p>
          <p className="text-xs text-white/80 mb-4">
            Serving all 50 states with free shipping
          </p>
          <div className="flex gap-5 text-2xl">
            <a href="https://www.instagram.com/packifycustomboxes" aria-label="Instagram" className="hover:text-gray-200 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="https://wa.me/+1XXXXXXXXXX" aria-label="WhatsApp" className="hover:text-gray-200 transition"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        {/* Products - SEO Optimized */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Custom Packaging USA</h3>
          <ul className="space-y-3 text-base">
            <li><Link href="/products/mailer-boxes" className="hover:underline">Custom Mailer Boxes</Link></li>
            <li><Link href="/products/rigid-boxes" className="hover:underline">Rigid Boxes Wholesale</Link></li>
            <li><Link href="/products/tuck-boxes" className="hover:underline">Tuck End Boxes</Link></li>
            <li><Link href="/products/burger-boxes" className="hover:underline">Food Packaging Boxes</Link></li>
            <li><Link href="/products/cosmetic-boxes" className="hover:underline">Cosmetic Packaging</Link></li>
            <li><Link href={pathname === '/' ? '#type' : '/#type'} onClick={(e) => handleSmoothScroll(e, '#type')} className="hover:underline">All Products →</Link></li>
          </ul>
        </div>

        {/* Contact USA */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Contact USA</h3>
          <ul className="space-y-3 text-base">
            <li><i className="fas fa-phone mr-2"></i> +1-800-XXX-XXXX</li>
            <li><i className="fas fa-envelope mr-2"></i><a href="mailto:info@packifycustomboxes.com" className="hover:underline">info@packifycustomboxes.com</a></li>
            <li><i className="fas fa-map-marker-alt mr-2"></i> United States</li>
            <li className="pt-2 text-sm text-white/80">
              <i className="fas fa-clock mr-2"></i> Mon-Sat: 9AM-6PM EST
            </li>
          </ul>
        </div>

        {/* Help */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Help & Resources</h3>
          <ul className="space-y-3 text-base">
            <li><Link href="/how-to-order" className="hover:underline">How to Order</Link></li>
            <li><Link href={pathname === '/' ? '#faqs' : '/#faqs'} onClick={(e) => handleSmoothScroll(e, '#faqs')} className="hover:underline">FAQ</Link></li>
            <li><Link href="/artwork-guidelines" className="hover:underline">Artwork Guidelines</Link></li>
            <li><Link href="/how-to-measure" className="hover:underline">How to Measure a Box</Link></li>
            <li><Link href="/shipping-policy" className="hover:underline">Free Shipping Policy</Link></li>
            <li><Link href="/blog" className="hover:underline">Packaging Blog</Link></li>
          </ul>
        </div>
      </div>

      {/* --- USA Keywords Section for SEO --- */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <p className="text-xs text-white/70 leading-relaxed">
          Custom packaging boxes USA | Custom printed boxes wholesale | Mailer boxes USA | Rigid boxes wholesale | 
          Custom box manufacturer USA | Cardboard boxes wholesale | Gift boxes USA | Luxury packaging boxes | 
          Ecommerce packaging USA | Sustainable packaging USA | Food packaging boxes | Custom shipping boxes | 
          Wholesale packaging supplies | Custom tuck boxes | Magnetic closure boxes | Custom cosmetic boxes | 
          Burger boxes wholesale | Cigarette packaging boxes | Dispenser boxes USA | Kraft boxes wholesale
        </p>
      </div>

      <div className="border-t border-white/30 my-8"></div>

      {/* --- Compact Bottom Section --- */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 text-sm text-white/90 text-center">
        
        {/* USA Operations */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium">Serving:</span>
          <Image
            src="https://flagcdn.com/us.svg"
            alt="USA"
            width={24}
            height={24}
            className="rounded-sm border border-white/30"
          />
          <span className="text-xs">All 50 States</span>
        </div>

        <div className="hidden md:block h-4 w-[1px] bg-white/40"></div>

        {/* Logistics */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium">Shipping:</span>
          <Image src="/images/DHL-Symbol.png" alt="DHL" width={50} height={20} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg" alt="FedEx" width={50} height={20} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/c/cc/UPS_logo.svg" alt="UPS" width={40} height={20} />
          <span className="text-xs">USPS</span>
        </div>

        <div className="hidden md:block h-4 w-[1px] bg-white/40"></div>

        {/* Payments */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium">Payments:</span>
          <Image src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" width={26} height={26} />
          <Image src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" width={26} height={26} />
          <Image src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" width={26} height={26} />
          <Image src="https://img.icons8.com/color/48/000000/american-express.png" alt="Amex" width={26} height={26} />
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="border-t border-white/30 mt-8 pt-6 text-center text-sm text-white/80">
        <p>© 2025 Packify Custom Boxes. All Rights Reserved.</p>
        <p className="text-xs mt-1">Custom Packaging Solutions Across the United States</p>
        <div className="flex justify-center gap-6 mt-3">
          <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/refund-returns" className="hover:underline">Returns</Link>
        </div>
      </div>
    </footer>
  )
}