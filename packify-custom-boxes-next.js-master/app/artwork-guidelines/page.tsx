import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Artwork Preparation Guidelines for Custom Packaging | Print-Ready Design Guide | Packify',
  description:
    "Ensure perfect print quality with Packify's professional artwork guidelines. Learn about CMYK color modes, 300 DPI resolution, dieline templates, bleed areas, and file formats (AI, PDF, EPS) for custom box printing. Free file checks available.",
  keywords:
    'artwork preparation guidelines, custom packaging artwork, print-ready files, dieline template, CMYK color mode, 300 DPI resolution, custom box design, packaging printing requirements, vector files, bleed area, safe zone',
  openGraph: {
    title: 'Artwork Preparation Guidelines for Custom Packaging | Packify',
    description: 'Professional guidelines for preparing print-ready packaging artwork. Learn about file formats, color modes, dielines, and resolution requirements.',
    type: 'article',
    url: 'https://www.packifycustomboxes.com/artwork-guidelines',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packaging Artwork Guidelines | Print-Ready Design Tips',
    description: 'Learn how to prepare custom packaging artwork for perfect printing results.',
  },
  alternates: {
    canonical: 'https://www.packifycustomboxes.com/artwork-guidelines',
  },
}

export default function ArtworkGuidelinesPage() {
  // HowTo Schema for rich snippets
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Prepare Artwork for Custom Packaging Printing",
    "description": "Step-by-step guide to preparing print-ready artwork files for custom box manufacturing. Includes file formats, color modes, dieline specifications, and resolution requirements.",
    "image": "https://www.packifycustomboxes.com/images/artwork-guidelines-og.jpg",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Choose the Correct File Format",
        "text": "Use vector formats (AI, EPS, PDF) for best results. Raster images (PSD, PNG, JPEG) must be 300 DPI minimum. Convert all text to outlines.",
        "url": "https://www.packifycustomboxes.com/artwork-guidelines#file-format"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Set Color Mode to CMYK",
        "text": "Use CMYK color mode for all packaging artwork. RGB files will be converted, causing potential color shifts.",
        "url": "https://www.packifycustomboxes.com/artwork-guidelines#color-mode"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Add Bleed and Safe Zones",
        "text": "Include 0.125 inch bleed on all sides. Keep critical elements 0.125 inches from the trim edge in the safe zone.",
        "url": "https://www.packifycustomboxes.com/artwork-guidelines#bleed-safe-zone"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Prepare Dieline Template",
        "text": "Place artwork within dieline layers. Use magenta for cut lines, cyan dashed lines for folds, and keep dieline on separate layer.",
        "url": "https://www.packifycustomboxes.com/artwork-guidelines#dielines"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Outline Fonts and Embed Images",
        "text": "Outline all fonts or embed them. Ensure linked images are embedded or included. Maintain 300 DPI resolution.",
        "url": "https://www.packifycustomboxes.com/artwork-guidelines#fonts-images"
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
        "name": "What is the minimum resolution for packaging artwork?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All images and raster graphics should be at least 300 DPI (dots per inch) at full print size. Lower resolution files (72 DPI web graphics) will appear pixelated and blurry when printed on custom packaging boxes."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use RGB colors for my packaging design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While we accept RGB files, we strongly recommend converting your artwork to CMYK color mode before submission. RGB has a wider color gamut than CMYK, and automatic conversion may cause color shifts. Designing in CMYK from the start ensures color accuracy on your custom printed boxes."
        }
      },
      {
        "@type": "Question",
        "name": "What is a dieline in packaging design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A dieline is the flat template that shows where your custom box will be cut, folded, and glued. It includes cut lines (magenta), fold lines (cyan dashed), bleed area, and safe zones. Proper dieline setup ensures your packaging folds correctly and maintains structural integrity."
        }
      },
      {
        "@type": "Question",
        "name": "How do I outline fonts in Adobe Illustrator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Select all text in your document, then go to Type > Create Outlines (or use keyboard shortcut Shift+Ctrl+O / Shift+Cmd+O). This converts text to vector shapes, ensuring your fonts appear correctly even if the printing facility doesn't have your specific typeface installed."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between vector and raster files for packaging?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vector files (AI, EPS, PDF) use mathematical paths and scale infinitely without quality loss, making them ideal for logos and text on custom packaging. Raster files (PSD, PNG, JPEG) are pixel-based and can become blurry if scaled up, but are suitable for photographs at 300 DPI or higher."
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
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/resources" className="hover:text-orange-600">Resources</Link></li>
            <li>/</li>
            <li><span className="text-gray-800 font-medium">Artwork Guidelines</span></li>
          </ol>
        </nav>

        {/* H1 - Critical SEO Fix (was missing!) */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Artwork Preparation Guidelines for <span className="text-orange-600">Custom Packaging</span>
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 mb-12">
          <p className="text-xl leading-relaxed">
            To ensure the highest print quality for your <strong>custom packaging boxes</strong>, please
            follow these professional <strong>artwork preparation guidelines</strong> when submitting your design files
            to Packify. Proper <strong>file setup</strong>, <strong>color modes</strong>, and <strong>dieline specifications</strong> ensure your 
            <strong> custom printed packaging</strong> matches your brand vision exactly—delivering vibrant colors, crisp graphics, and professional results.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1 - File Format */}
          <section id="file-format" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">1</span>
              File Format Requirements
            </h2>
            <div className="bg-orange-50 rounded-lg p-6 mb-4">
              <p className="font-semibold text-orange-800 mb-2">Preferred for Custom Packaging:</p>
              <p className="text-orange-900">
                <strong>AI, EPS, PDF</strong> (vector files) - Best for logos, text, and graphics on <strong>corrugated boxes</strong>
              </p>
            </div>
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Vector formats recommended:</strong> AI (Adobe Illustrator), EPS, or PDF with vector graphics ensure infinite scalability without quality loss on your <strong>custom printed boxes</strong>
              </li>
              <li>
                <strong>Raster images accepted:</strong> High-resolution PSD, PNG, or JPEG at <strong>minimum 300 DPI</strong> at final print size
              </li>
              <li>
                <strong>Critical:</strong> Convert all text to outlines or curves to prevent font substitution issues during <strong>packaging production</strong>
              </li>
              <li>
                <strong>Embedded files:</strong> Ensure all linked images are embedded within the file or provided separately
              </li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-800 text-base">
                <strong>Pro Tip:</strong> Vector files produce the sharpest results for text and logos on <strong>custom mailer boxes</strong>. Use raster images only for photographs.
              </p>
            </div>
          </section>

          {/* Section 2 - Color Mode */}
          <section id="color-mode" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">2</span>
              CMYK Color Mode for Printing
            </h2>
            <p className="mb-4">
              Use <strong>CMYK color mode</strong> for all <strong>packaging artwork</strong>. RGB files will
              be converted to CMYK during preflight, which may cause unexpected color shifts in your final <strong>custom boxes</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50">
                <p className="font-semibold text-green-800">✓ Correct: CMYK</p>
                <p className="text-green-700 text-base">Professional printing standard. Colors appear as intended on physical packaging.</p>
              </div>
              <div className="p-4 border-2 border-red-200 rounded-lg bg-red-50">
                <p className="font-semibold text-red-800">✗ Avoid: RGB</p>
                <p className="text-red-700 text-base">Screen display mode. Conversion to CMYK may darken colors or shift hues.</p>
              </div>
            </div>
            <p className="text-base">
              <strong>Recommendation:</strong> Design in CMYK from the start for color-critical brand packaging. Print physical color proofs for critical brand colors to ensure accuracy on your <strong>corrugated packaging</strong>.
            </p>
          </section>

          {/* Section 3 - Bleed & Safe Zone */}
          <section id="bleed-safe-zone" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">3</span>
              Bleed Area and Safe Zones
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-xl">↔</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Bleed: 0.125" (3mm) Minimum</h3>
                  <p className="text-base">Extend background colors and images beyond the trim line by at least 0.125 inches on all sides. This prevents white edges if cutting varies slightly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-xl">⊡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Safe Zone: 0.125" from Edge</h3>
                  <p className="text-base">Keep important text, logos, barcodes, and critical design elements at least 0.125 inches from the cut edge to prevent them from being trimmed off.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Dielines */}
          <section id="dielines" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">4</span>
              Dieline Template Specifications
            </h2>
            <p className="mb-4">
              If using our <strong>custom box dieline templates</strong>, place your artwork within the provided layers. Your <strong>dieline file</strong> must include:
            </p>
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Cut lines:</strong> 100% magenta (C:0 M:100 Y:0 K:0), no stroke weight
              </li>
              <li>
                <strong>Fold lines:</strong> 100% cyan dashed lines (C:100 M:0 Y:0 K:0)
              </li>
              <li>
                <strong>Layer organization:</strong> Keep dieline on a separate layer named exactly <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">"Dieline"</code> and lock it
              </li>
              <li>
                <strong>Artwork placement:</strong> Design within the dieline boundaries, respecting bleed and safe zones
              </li>
            </ul>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-orange-800 font-semibold mb-2">Need a Dieline Template?</p>
              <p className="text-orange-700 text-base mb-3">
                Download our free templates for mailer boxes, tuck boxes, and rigid boxes to ensure perfect structural design.
              </p>
              <Link 
                href="/resources/dieline-templates" 
                className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition text-base font-semibold"
              >
                Download Dieline Templates
              </Link>
            </div>
          </section>

          {/* Section 5 - Fonts and Images */}
          <section id="fonts-images" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">5</span>
              Font Outlining and Image Resolution
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Typography Requirements</h3>
                <ul className="list-disc ml-5 space-y-2 text-base">
                  <li>All fonts must be <strong>outlined</strong> (converted to shapes) or <strong>embedded</strong></li>
                  <li>To outline in Illustrator: Select text → Type → Create Outlines (Shift+Ctrl+O)</li>
                  <li>Minimum font size: 6pt for positive text, 8pt for reversed (white on dark)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Image Specifications</h3>
                <ul className="list-disc ml-5 space-y-2 text-base">
                  <li><strong>Resolution:</strong> Minimum 300 DPI at 100% print size</li>
                  <li><strong>Linked images:</strong> Must be embedded or provided separately</li>
                  <li><strong>Color profile:</strong> CMYK for all raster images</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <p className="text-yellow-800 text-base">
                <strong>Warning:</strong> Low-resolution web images (72 DPI) will appear pixelated and blurry on your <strong>premium packaging</strong>. Always use high-resolution assets.
              </p>
            </div>
          </section>

          {/* Section 6 - File Naming */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">6</span>
              File Naming Convention
            </h2>
            <p className="mb-4">
              Name your <strong>packaging design files</strong> clearly using this format to avoid confusion:
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-base mb-4">
              CompanyName_BoxType_Version.pdf
            </div>
            <p className="mb-2 text-base">Examples:</p>
            <ul className="list-disc ml-6 space-y-1 text-base">
              <li><code className="bg-gray-100 px-2 py-1 rounded">AcmeCo_MailerBox_v1.pdf</code></li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">BrandName_TuckBox_Front.pdf</code></li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">Company_RigidBox_Inside.pdf</code></li>
            </ul>
          </section>

          {/* Section 7 - Help */}
          <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Need Help with Artwork Preparation?</h2>
            <p className="mb-6 text-orange-100">
              We offer <strong>complimentary file checks</strong> and affordable <strong>packaging design services</strong> if needed. Our design team specializes in <strong>custom box design</strong>, <strong>dieline layout</strong>, and <strong>structural packaging engineering</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@packifycustomboxes.com"
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition text-center"
              >
                Email Your Files for Review
              </a>
              <Link
                href="/get-quote"
                className="inline-block bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition text-center"
              >
                Get Design Support Quote
              </Link>
            </div>
          </section>

          {/* FAQ Section with Schema */}
          <section className="border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions About Artwork Preparation</h2>
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                  What is the minimum resolution for packaging artwork?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    All images and raster graphics should be at least <strong>300 DPI (dots per inch)</strong> at full print size. For example, if your box is 10" wide, the image should be 3000 pixels wide. Lower resolution files (72 DPI web graphics) will appear pixelated and blurry when printed on <strong>custom packaging boxes</strong>.
                  </p>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                  Can I use RGB colors for my packaging design?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    While we accept RGB files, we strongly recommend converting your artwork to <strong>CMYK color mode</strong> before submission. RGB has a wider color gamut than CMYK (the standard for commercial printing), and automatic conversion may cause color shifts—typically making blues appear purplish and bright greens duller.
                  </p>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                  What is a dieline in packaging design?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    A <strong>dieline</strong> is the flat template that shows where your custom box will be cut, folded, and glued. It includes cut lines (magenta), fold lines (cyan dashed), bleed area, and safe zones. Proper dieline setup ensures your <strong>custom packaging</strong> folds correctly and maintains structural integrity during shipping and handling.
                  </p>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                  How do I outline fonts in Adobe Illustrator?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    Select all text in your document, then go to <strong>Type → Create Outlines</strong> (or use keyboard shortcut Shift+Ctrl+O on Windows, Shift+Cmd+O on Mac). This converts text to vector shapes, ensuring your fonts appear correctly even if our printing facility doesn't have your specific typeface installed. Remember to save a copy before outlining in case you need to edit text later.
                  </p>
                </div>
              </div>

              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2" itemProp="name">
                  What is the difference between vector and raster files for packaging?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">
                    <strong>Vector files</strong> (AI, EPS, PDF) use mathematical paths and scale infinitely without quality loss, making them ideal for logos, text, and graphics on custom packaging. <strong>Raster files</strong> (PSD, PNG, JPEG) are pixel-based and can become blurry if scaled up, but are suitable for photographs at 300 DPI or higher resolution.
                  </p>
                </div>
              </div>

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