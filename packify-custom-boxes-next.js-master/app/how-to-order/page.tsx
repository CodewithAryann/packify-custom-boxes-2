import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function HowToOrder() {
  // JSON-LD Structured Data for HowTo (Rich Snippets)
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Order Custom Packaging Boxes from Packify",
    "description": "Learn how to order custom boxes and wholesale packaging in 5 simple steps. Get custom printed packaging with fast turnaround and no minimums.",
    "image": "https://www.packifycustomboxes.com/images/how-to-order-custom-packaging.jpg",
    "totalTime": "P10D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Box Specifications (dimensions, material, quantity)"
      },
      {
        "@type": "HowToSupply",
        "name": "Artwork Files (logo, designs, brand assets)"
      },
      {
        "@type": "HowToSupply",
        "name": "Payment Method (credit card, PayPal)"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Quote Request Form"
      },
      {
        "@type": "HowToTool",
        "name": "Secure Checkout System"
      },
      {
        "@type": "HowToTool",
        "name": "Digital Proof Approval System"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Request a Custom Packaging Quote",
        "text": "Fill out our quote request form with your custom box specifications, including dimensions, material (corrugated, kraft, or rigid), quantity, printing type, and features. Receive detailed wholesale pricing within 24 hours.",
        "url": "https://www.packifycustomboxes.com/how-to-order#step1",
        "image": "https://www.packifycustomboxes.com/images/step1-request-quote.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Approve Pricing & Place Your Order",
        "text": "Review your custom packaging quote and confirm your order through our secure checkout. We accept major credit cards, PayPal, and bank transfers for wholesale packaging orders.",
        "url": "https://www.packifycustomboxes.com/how-to-order#step2",
        "image": "https://www.packifycustomboxes.com/images/step2-approve-order.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Submit Packaging Artwork",
        "text": "Upload your logo, designs, and custom packaging artwork. Our design team provides complimentary file preparation to ensure your custom printed boxes meet exact printing guidelines.",
        "url": "https://www.packifycustomboxes.com/how-to-order#step3",
        "image": "https://www.packifycustomboxes.com/images/step3-submit-artwork.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Review & Approve Digital Proof",
        "text": "Receive a digital 3D mockup or PDF proof of your custom box design. Review branding placement and colors, request unlimited revisions, and approve the final design before production.",
        "url": "https://www.packifycustomboxes.com/how-to-order#step4",
        "image": "https://www.packifycustomboxes.com/images/step4-digital-proof.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Production & Fast Shipping",
        "text": "We begin custom packaging production with 7-10 business day turnaround. Your custom boxes are securely packaged and shipped via free U.S. shipping or worldwide export with tracking.",
        "url": "https://www.packifycustomboxes.com/how-to-order#step5",
        "image": "https://www.packifycustomboxes.com/images/step5-shipping.jpg"
      }
    ]
  };

  // FAQ Schema for the Need Help section
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to get a quote for custom packaging?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team provides detailed custom packaging quotes within 24 hours of receiving your specifications. For urgent requests, contact us directly at info@packifycustomboxes.com."
        }
      },
      {
        "@type": "Question",
        "name": "What file formats do you accept for packaging artwork?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept AI, PDF, PSD, and EPS files for custom packaging artwork. If you need assistance preparing print-ready files, our design team offers complimentary file preparation services."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a minimum order quantity for custom boxes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! Packify specializes in no minimum order custom boxes. Whether you need 1 box or 10,000, we accommodate all order sizes with the same quality and attention to detail."
        }
      },
      {
        "@type": "Question",
        "name": "How long does custom packaging production take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard custom packaging production takes 7-10 business days after digital proof approval. Rush orders are available for faster turnaround. Shipping time is additional and depends on your location."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Enhanced Meta Tags */}
        <title>How to Order Custom Packaging Boxes | 5-Step Process | Packify</title>
        <meta name="description" content="Learn how to order custom boxes in 5 simple steps. Request a quote, submit artwork, approve your digital proof, and receive wholesale custom packaging with free U.S. shipping. No minimums. Fast 7-10 day turnaround." />
        <meta name="keywords" content="how to order custom boxes, custom packaging ordering process, wholesale packaging quote, submit packaging artwork, custom box design approval, order custom printed boxes, packaging manufacturing process, custom mailer boxes order" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How to Order Custom Packaging Boxes | 5-Step Process | Packify" />
        <meta property="og:description" content="Simple 5-step guide to ordering custom packaging: Quote → Artwork → Proof → Production → Shipping. No minimums. Free U.S. shipping. Start your custom box order today!" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.packifycustomboxes.com/how-to-order" />
        <meta property="article:published_time" content="2025-01-29" />
        <meta property="article:modified_time" content="2025-01-29" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Order Custom Packaging | 5-Step Guide" />
        <meta name="twitter:description" content="Order custom boxes in 5 easy steps. Quote, artwork, proof, production & shipping. No minimums!" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.packifycustomboxes.com/how-to-order" />
      </Head>

      {/* Schema.org JSON-LD */}
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="max-w-5xl mx-auto px-4 py-10 pt-[6rem] text-lg leading-relaxed space-y-10 text-gray-600">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li>/</li>
            <li><span className="text-gray-800 font-medium">How to Order</span></li>
          </ol>
        </nav>

        {/* H1 - Main Heading (SEO Critical - was missing!) */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How to Order Custom Packaging Boxes: <span className="text-orange-600">Simple 5-Step Process</span>
        </h1>

        <p className="text-xl text-gray-700 mb-8">
          Ordering your <strong>custom boxes and wholesale packaging</strong> with Packify is quick, easy, and stress-free. Our streamlined process ensures you get premium <strong>custom printed packaging</strong> tailored to your exact specifications. Follow these steps to get your <strong>branded packaging</strong> delivered with fast turnaround and <strong>no minimum order requirements</strong>.
        </p>

        {/* Step 1 */}
        <section id="step1" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">1</span>
            Request a Custom Packaging Quote
          </h2>
          <p>
            Fill out our{' '}
            <Link href="/get-quote" className="text-orange-600 underline font-semibold hover:text-orange-800 transition">
              Quote Request Form
            </Link>{' '}
            with your <strong>custom box specifications</strong>, including dimensions, material (<strong>corrugated</strong>, <strong>kraft</strong>, or <strong>rigid</strong>), quantity, printing type (<strong>full-color</strong>, <strong>spot UV</strong>, <strong>foil stamping</strong>), and any special features. Our <strong>packaging specialists</strong> will respond within <strong>24 hours</strong> with detailed <strong>wholesale pricing</strong>.
          </p>
        </section>

        {/* Step 2 */}
        <section id="step2" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">2</span>
            Approve Pricing & Place Your Order
          </h2>
          <p>
            Once you're satisfied with your <strong>custom packaging quote</strong>, confirm your order and complete payment through our secure checkout. We accept all major credit cards, PayPal, and bank transfers for <strong>wholesale packaging orders</strong>. Your order confirmation includes detailed production timelines and shipping estimates.
          </p>
        </section>

        {/* Step 3 */}
        <section id="step3" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">3</span>
            Submit Packaging Artwork
          </h2>
          <p>
            Upload your brand logo, design files, and <strong>custom packaging artwork</strong>. Need help? Our <strong>professional packaging designers</strong> provide complimentary file preparation services to ensure your <strong>custom printed boxes</strong> meet exact printing guidelines, color specifications, and <strong>die-line requirements</strong>. We accept AI, PDF, PSD, and EPS formats.
          </p>
        </section>

        {/* Step 4 */}
        <section id="step4" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">4</span>
            Review & Approve Digital Proof
          </h2>
          <p>
            We'll send you a <strong>digital 3D mockup</strong> or PDF proof for approval. Carefully review your <strong>custom box design</strong>, branding placement, colors, and text. Request <strong>unlimited revisions</strong> until your <strong>packaging design</strong> is perfect before production begins. This ensures your <strong>branded packaging</strong> matches your vision exactly.
          </p>
        </section>

        {/* Step 5 */}
        <section id="step5" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">5</span>
            Production & Fast Shipping
          </h2>
          <p>
            Once approved, we begin <strong>custom packaging production</strong>. Standard turnaround is <strong>7-10 business days</strong> depending on box type and order volume. Your <strong>custom boxes</strong> are securely packed and shipped via <strong>free U.S. shipping</strong> (or worldwide export). Receive tracking information via email to monitor your <strong>packaging delivery</strong> every step of the way.
          </p>
        </section>

        {/* FAQ Section - Schema Marked Up */}
        <section className="bg-orange-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions About Ordering</h2>
          
          <div className="space-y-6">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                How long does it take to get a quote for custom packaging?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-600" itemProp="text">
                  Our team provides detailed <strong>custom packaging quotes</strong> within <strong>24 hours</strong> of receiving your specifications. For urgent requests, contact us directly at <a href="mailto:info@packifycustomboxes.com" className="text-orange-600 underline">info@packifycustomboxes.com</a>.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                What file formats do you accept for packaging artwork?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-600" itemProp="text">
                  We accept <strong>AI, PDF, PSD, and EPS</strong> files for custom packaging artwork. If you need assistance preparing print-ready files, our design team offers complimentary file preparation services.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                Is there a minimum order quantity for custom boxes?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-600" itemProp="text">
                  No! Packify specializes in <strong>no minimum order custom boxes</strong>. Whether you need 1 box or 10,000, we accommodate all order sizes with the same quality and attention to detail.
                </p>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                How long does custom packaging production take?
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-600" itemProp="text">
                  Standard <strong>custom packaging production</strong> takes <strong>7-10 business days</strong> after digital proof approval. Rush orders are available for faster turnaround. Shipping time is additional and depends on your location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Order Your Custom Packaging?</h2>
          <p className="text-gray-600 mb-6">Get started with your custom boxes today. No minimums. Free shipping.</p>
          <Link 
            href="/get-quote" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Request Your Free Quote
          </Link>
        </section>

        <p className="text-sm text-gray-500 mt-8 border-t pt-4">Last updated: January 29, 2025</p>
      </main>
    </>
  );
}