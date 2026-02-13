import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How to Measure a Box for Custom Packaging | Box Dimensions Guide | Packify',
  description: 'Learn how to measure box dimensions correctly for custom packaging. Master internal measurements, L×W×H order, and accurate sizing for mailer boxes. Free sizing consultation available.',
  keywords: 'how to measure a box, box dimensions guide, custom box measurements, packaging sizing, internal dimensions, L×W×H, corrugated box measurements, custom mailer box size',
  openGraph: {
    title: 'How to Measure a Box for Custom Packaging | Complete Guide',
    description: 'Step-by-step guide to measuring box dimensions correctly. Learn internal vs external measurements for custom packaging.',
    type: 'article',
    url: 'https://www.packifycustomboxes.com/how-to-measure-box',
  },
  alternates: {
    canonical: 'https://www.packifycustomboxes.com/how-to-measure-box',
  },
}

export default function HowToMeasurePage() {
  // HowTo Schema for rich snippets
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Measure a Box for Custom Packaging",
    "description": "Learn the correct way to measure box dimensions using the standard L×W×H method. Includes tips for internal measurements and accurate sizing for custom packaging.",
    "image": "https://www.packifycustomboxes.com/images/how-to-measure-box.jpg",
    "totalTime": "PT10M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Tape measure or ruler"
      },
      {
        "@type": "HowToTool",
        "name": "Calculator"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Measure Internal Length",
        "text": "Measure the inside of the box from left to right along the longest side of the base. Record this as Length (L).",
        "url": "https://www.packifycustomboxes.com/how-to-measure-box#step1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Measure Internal Width",
        "text": "Measure the inside front to back along the shorter side of the base, perpendicular to length. Record as Width (W).",
        "url": "https://www.packifycustomboxes.com/how-to-measure-box#step2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Measure Internal Height",
        "text": "Measure vertically from the inside bottom to the top when box is assembled. Record as Height (H).",
        "url": "https://www.packifycustomboxes.com/how-to-measure-box#step3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Record in L×W×H Format",
        "text": "Write dimensions in order: Length × Width × Height. Always use internal dimensions for custom packaging orders.",
        "url": "https://www.packifycustomboxes.com/how-to-measure-box#step4"
      }
    ]
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should I measure the inside or outside of the box?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Always measure internal dimensions (inside the box) for custom packaging. External dimensions include material thickness which varies by cardboard type. Internal measurements ensure your product fits correctly with padding and inserts."
        }
      },
      {
        "@type": "Question",
        "name": "What is the correct order for box dimensions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard industry order is Length × Width × Height (L×W×H). Length is always the longest side of the base, width is the shorter base side, and height is the vertical dimension."
        }
      },
      {
        "@type": "Question",
        "name": "How do I account for padding and inserts in box measurements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Add extra space to your internal measurements: product dimension + padding thickness + insert clearance. For fragile items, add 1/2 to 1 inch of space for protective materials like bubble wrap or foam inserts."
        }
      }
    ]
  }

  return (
    <>
      {/* Schema.org Structured Data */}
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="max-w-5xl mx-auto px-4 py-10 pt-[8rem] text-lg leading-relaxed text-gray-600">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/resources" className="hover:text-orange-600">Resources</Link></li>
            <li>/</li>
            <li><span className="text-gray-800 font-medium">How to Measure a Box</span></li>
          </ol>
        </nav>

        {/* H1 - Critical SEO Addition */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          How to Measure a Box for <span className="text-orange-600">Custom Packaging</span>: 
          Complete Dimensions Guide
        </h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl leading-relaxed">
            Getting accurate <strong>box dimensions</strong> is essential for a perfect <strong>custom packaging fit</strong>. 
            At Packify, we ensure your products fit securely while minimizing shipping costs. Understanding 
            <strong> how to measure a box</strong> correctly—using <strong>internal dimensions</strong> and the proper 
            <strong> L×W×H order</strong>—prevents costly sizing errors and ensures your <strong>custom mailer boxes</strong> 
            arrive production-ready.
          </p>
        </div>

        <div className="space-y-12">
          {/* Visual Overview Section */}
          <section className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">📏 Standard Box Measurement Order</h2>
            <p className="mb-4">
              The correct order for <strong>box dimensions</strong> is always:
            </p>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                Length × Width × Height
              </div>
              <p className="text-gray-600 text-base">(L × W × H)</p>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl mb-1">📐</div>
                <div className="font-bold text-gray-800">Length (L)</div>
                <div className="text-sm text-gray-600">Longest base side</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl mb-1">📏</div>
                <div className="font-bold text-gray-800">Width (W)</div>
                <div className="text-sm text-gray-600">Shorter base side</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl mb-1">↕️</div>
                <div className="font-bold text-gray-800">Height (H)</div>
                <div className="text-sm text-gray-600">Vertical dimension</div>
              </div>
            </div>
          </section>

          {/* Step 1: Internal Dimensions */}
          <section id="step1" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">1</span>
              Measure Internal Dimensions (Inside the Box)
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-blue-800 font-semibold">Critical:</p>
              <p className="text-blue-700">
                Always measure <strong>inside the box</strong>, not outside. External dimensions include material thickness.
              </p>
            </div>
            <p className="mb-4">
              <strong>Why internal measurements matter for custom packaging:</strong>
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Ensures your <strong>product fits</strong> with padding and inserts</li>
              <li>Accounts for <strong>corrugated material thickness</strong> (varies by flute size)</li>
              <li>
                <strong>External dimensions</strong> can add 1/8" to 1/4" per side due to cardboard wall thickness
              </li>
              <li>Accurate internal sizing = perfect <strong>custom box fit</strong></li>
            </ul>
          </section>

          {/* Step 2: Length */}
          <section id="step2" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">2</span>
              Measure Length (Longest Base Side)
            </h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Place box open on flat surface</li>
              <li>Measure <strong>inside</strong> from left to right (longest span)</li>
              <li>Record as <strong>Length (L)</strong></li>
            </ul>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 text-base">
                <strong>Pro Tip:</strong> For <strong>e-commerce packaging</strong>, ensure length accommodates 
                your longest product dimension plus 1/2 inch for protective padding.
              </p>
            </div>
          </section>

          {/* Step 3: Width */}
          <section id="step3" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">3</span>
              Measure Width (Shorter Base Side)
            </h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Measure <strong>inside</strong> from front to back (shorter span of base)</li>
              <li>Keep perpendicular to length measurement</li>
              <li>Record as <strong>Width (W)</strong></li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <p className="text-yellow-800 text-base">
                <strong>Common mistake:</strong> Don't confuse width with height. Width is always a 
                <strong> base dimension</strong>, never vertical.
              </p>
            </div>
          </section>

          {/* Step 4: Height */}
          <section id="step4" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">4</span>
              Measure Height (Vertical Dimension)
            </h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Measure <strong>inside</strong> from bottom to top (vertical opening)</li>
              <li>With box assembled and flaps closed</li>
              <li>Record as <strong>Height (H)</strong></li>
            </ul>
            <p className="mt-4 text-base">
              <strong>Note:</strong> For custom dielines, height includes lid/flap closure area if applicable.
            </p>
          </section>

          {/* Tips Section */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">💡 Tips for Accurate Box Measuring</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Use precise measuring tools with 1/16" or 1mm increments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Measure twice, order once:</strong> Double-check all dimensions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Account for contents: Product + padding + insert thickness</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Consider material thickness: Corrugated adds 1/8"-1/4" per wall</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Round up: When unsure, add 1/4" for safety clearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Test first: Order 1-2 samples before bulk production</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Internal vs External */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Internal vs External Dimensions</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Measurement Type</th>
                    <th className="border p-3 text-left">When to Use</th>
                    <th className="border p-3 text-left">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-semibold">Internal</td>
                    <td className="border p-3">Product fit, inserts, packaging design</td>
                    <td className="border p-3">Product 6"×4"×2" → Box internal 6.5"×4.5"×2.5"</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3 font-semibold">External</td>
                    <td className="border p-3">Shipping calculations, palletizing</td>
                    <td className="border p-3">Box measures 12.25"×8.25"×4.25" with material</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions About Box Measurements</h2>
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                  Should I measure the inside or outside of the box?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Always measure <strong>internal dimensions</strong> (inside the box) for custom packaging. 
                    External dimensions include material thickness which varies by cardboard type (e.g., 1/16" for 
                    E-flute vs 1/8" for C-flute corrugated). Internal measurements ensure your product fits 
                    correctly with padding and inserts.
                  </p>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                  What is the correct order for box dimensions?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    The standard industry order is <strong>Length × Width × Height (L×W×H)</strong>. Length is 
                    always the longest side of the base, width is the shorter base side, and height is the 
                    vertical dimension. This standardization prevents confusion in manufacturing.
                  </p>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                  How do I account for padding and inserts in box measurements?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Add extra space to your internal measurements: <strong>product dimension + padding thickness + 
                    insert clearance</strong>. For fragile items, add 1/2 to 1 inch of space for protective 
                    materials like bubble wrap, foam inserts, or packing peanuts.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help with Box Sizing?</h2>
            <p className="mb-6 text-orange-100">
              Our <strong>packaging engineering team</strong> provides free sizing consultations. 
              Send us your product specs for optimal <strong>custom box dimensions</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@packifycustomboxes.com"
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
              >
                Email Product Dimensions
              </a>
              <Link
                href="/get-quote"
                className="inline-block bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
              >
                Get Custom Box Quote
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-gray-500">Last updated: January 29, 2025</p>
        </div>
      </main>
    </>
  )
}