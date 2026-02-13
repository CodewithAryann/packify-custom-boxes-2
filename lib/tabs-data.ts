export interface TabItem {
  name: string
  image: string
  description?: string
}

// Materials
export const materialsData: Record<string, TabItem[]> = {
  'mailer-boxes': [
    { name: 'Card Stock', image: '/images/thumbnail-card-stock.webp', description: 'Thinner and more flexible than corrugated board, card stock is ideal for lightweight custom mailer boxes or inserts. Supports high-resolution printing where detail and smoothness are key for branded packaging.' },
    { name: 'Natural Kraft Board', image: '/images/thumbnail-natural-kraft-board.webp', description: 'Made from a mix of virgin and recycled pulp, this unbleached board has a raw, earthy finish. Great for eco-conscious custom packaging and organic branding.' },
    { name: 'Oyster White Kraft Corrugated', image: '/images/thumbnail-oyster-white-kraft-corrugated.webp', description: 'Smooth, off-white linerboard great for sharp, detailed prints on wholesale mailer boxes. Offers a subtle background alternative to bright whites.' },
    { name: 'Bleached White Board', image: '/images/thumbnail-bleached-white-corrugated.webp', description: 'Bright, clean, and vivid for high-end printing on custom printed boxes. Ideal for sharp logos, retail packaging, and attention-grabbing visuals.' },
    { name: 'Kraft', image: '/images/thumbnail-kraft.webp', description: 'Tear-resistant and recyclable brown surface for eco-friendly shipping boxes. Best for brands going for a natural, raw, or minimalist style.' },
    { name: 'White Kraft', image: '/images/thumbnail-white-kraft.webp', description: 'Smooth white liner for crisp artwork on custom mailer boxes. Provides a balanced white look without harsh brightness.' },
  ],
  'tuck-boxes': [
    { name: 'Card Stock', image: '/images/thumbnail-card-stock.webp', description: 'Thinner and more flexible than corrugated board, card stock is ideal for lightweight custom tuck boxes or inserts. Supports high-resolution printing where detail and smoothness are key.' },
    { name: 'Natural Kraft Board', image: '/images/thumbnail-natural-kraft-board.webp', description: 'Made from a mix of virgin and recycled pulp, this unbleached board has a raw, earthy finish. Great for eco-conscious retail packaging and organic branding.' },
    { name: 'Oyster White Kraft Corrugated', image: '/images/thumbnail-oyster-white-kraft-corrugated.webp', description: 'Smooth, off-white linerboard great for sharp, detailed prints on wholesale tuck boxes. Offers a subtle background alternative to bright whites.' },
    { name: 'Bleached White Board', image: '/images/thumbnail-bleached-white-corrugated.webp', description: 'Bright, clean, and vivid for high-end printing on custom printed tuck boxes. Ideal for sharp logos, retail packaging, and attention-grabbing visuals.' },
    { name: 'Kraft', image: '/images/thumbnail-kraft.webp', description: 'Tear-resistant and recyclable brown surface for eco-friendly tuck end boxes. Best for brands going for a natural, raw, or minimalist style.' },
    { name: 'White Kraft', image: '/images/thumbnail-white-kraft.webp', description: 'Smooth white liner for crisp artwork on custom tuck boxes. Provides a balanced white look without harsh brightness.' },
  ],
  'rigid-boxes': [
    { name: 'Grey Chipboard', image: '/images/thumbnail-grey-chipboard.webp', description: 'Uncoated material that is thick, durable, and eco-friendly used as the base material for custom rigid boxes for premium construction and luxury packaging.' },
    { name: 'Card Stock', image: '/images/thumbnail-card-stock%20(1).webp', description: 'Premium material with smooth surface often used as inner liners or printed wraps for rigid gift boxes, promising excellent print quality. Ideal for high-resolution graphics and finishes like foil stamping or UV coating.' },
    { name: 'Black Kraft', image: '/images/thumbnail-black-kraft.webp', description: 'Great for luxury or eco-friendly packaging. Its deep color eliminates need for excessive ink coverage and adds sleek, minimal appeal. Often used in high-end sustainable product packaging.' },
    { name: 'Holographic', image: '/images/thumbnail-holographic.webp', description: 'Specialty paper used as outer wrap for creating striking, eye-catching rainbow effect on luxury rigid boxes. Popular in cosmetics, tech gadgets, and promotional packaging that needs to stand out on shelves.' },
    { name: 'Natural Brown Kraft', image: '/images/thumbnail-kraft%20(1).webp', description: 'Popular with eco-conscious brands and organic product packaging. This material offers rustic, earthy look for sustainable rigid boxes. Often used without lamination to highlight its natural porous texture.' },
    { name: 'Metallic', image: '/images/thumbnail-metallic.webp', description: 'Ideal for luxury and festive packaging, such as for cosmetics, perfumes, or seasonal gift boxes. This specialty paper comes with glossy or matte metallic finish that adds premium and celebratory feel to rigid gift boxes.' },
    { name: 'White Kraft', image: '/images/thumbnail-white-kraft%20(1).webp', description: 'Perfect blend between clean, natural look and strength of kraft. White Kraft is often used where brands want eco-friendly appearance but with bright, printable surface for custom rigid boxes.' },
    { name: 'Textured', image: '/images/thumbnail-textured-linen.webp', description: 'Primarily used for outer wraps to provide tactile, upscale experience on setup boxes. This specialty paper is common in premium retail packaging, jewelry boxes, and high-end electronics packaging.' },
  ],
  'dispenser-boxes': [
    { name: 'White', image: '/images/cardboard-paper.webp', description: 'Smooth, bright white paperboard that offers clean and professional appearance for retail dispenser boxes. Ideal for high-quality printing, vibrant colors, and detailed graphics on point-of-sale packaging.' },
    { name: 'Card Stock', image: '/images/64560be3b9c3f71ff4381e26-20sheets-glitter-cardstock-paper-10.webp', description: 'High-quality paper material used in premium packaging for its smooth finish, excellent printability, and structural integrity. Available in various finishes such as gloss, matte, or uncoated, it offers clean look and can be easily customized with vibrant colors, foil stamping, embossing, or coatings—making it ideal for retail display boxes.' },
    { name: 'Corrugated', image: '/images/what-is-corrugated-packaging-1.webp', description: 'Fluted inner layer sandwiched between two flat linerboards, offering superior strength, cushioning, and durability for countertop dispenser boxes. Ideal for shipping, storage, and heavy-duty packaging, it protects products during transit while allowing for full customization with prints, coatings, and branding.' },
    { name: 'Foil', image: '/images/7-411.webp', description: 'Foil is luxurious metallic finish applied to packaging surfaces to enhance visual appeal and highlight specific design elements on custom dispenser boxes. Available in various shades like gold, silver, rose gold, and holographic, foil stamping adds reflective, high-end touch to logos, text, or patterns.' },
    { name: 'Kraft', image: '/images/istockphoto-1375373998-612x612.webp', description: 'Eco-friendly packaging material made from recycled paper with natural brown finish for sustainable dispenser boxes. Known for its strength and rustic appeal, it is ideal for brands focused on sustainability and minimalism. Kraft is fully recyclable, biodegradable, and can be customized with simple or bold designs using eco-friendly inks.' },
    { name: 'Rigid', image: '/images/Duplex-Board.webp', description: 'Thick paperboard known for its superior durability, structure, and luxurious feel. Commonly used for high-end retail packaging like gift boxes, electronics, cosmetics, and luxury goods, rigid dispenser boxes offer solid, non-collapsible form that enhances product value and creates memorable unboxing experience.' },
  ],
  'magnetic-closure': [
    { name: 'White', image: '/images/cardboard-paper.webp', description: 'Smooth, bright white paperboard that offers clean and professional appearance for magnetic closure boxes. Ideal for high-quality printing, vibrant colors, and detailed graphics on luxury gift packaging.' },
    { name: 'Card Stock', image: '/images/64560be3b9c3f71ff4381e26-20sheets-glitter-cardstock-paper-10.webp', description: 'High-quality paper material used in premium packaging for its smooth finish, excellent printability, and structural integrity. Available in various finishes such as gloss, matte, or uncoated for custom magnetic boxes.' },
    { name: 'Corrugated', image: '/images/what-is-corrugated-packaging-1.webp', description: 'Fluted inner layer sandwiched between two flat linerboards, offering superior strength, cushioning, and durability for magnetic gift boxes. Ideal for shipping and protecting luxury products during transit.' },
    { name: 'Foil', image: '/images/7-411.webp', description: 'Foil is luxurious metallic finish applied to magnetic closure packaging surfaces to enhance visual appeal. Available in various shades like gold, silver, rose gold, and holographic for premium unboxing experiences.' },
    { name: 'Kraft', image: '/images/istockphoto-1375373998-612x612.webp', description: 'Eco-friendly packaging material made from recycled paper with natural brown finish for sustainable magnetic boxes. Fully recyclable, biodegradable, and customizable with eco-friendly inks.' },
    { name: 'Rigid', image: '/images/Duplex-Board.webp', description: 'Thick paperboard known for superior durability, structure, and luxurious feel for magnetic gift boxes. Offers solid, non-collapsible form that enhances product value and creates memorable unboxing experience with hidden magnet system.' },
  ],
}

// Printing
export const printingData: Record<string, TabItem[]> = {
  'mailer-boxes': [
    { name: 'Digital Printing', image: '/images/bf037986cf978e92147a49d08bdad316_larger_format_p.webp', description: 'High-end printing technique ideal for high-volume runs of custom mailer boxes with consistent color and sharp detail. Great for premium e-commerce packaging where precise branding is key for large volume of boxes.' },
    { name: 'Digital Print', image: '/images/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.webp', description: 'Best for short runs or personalized mailer box packaging, where printing speed is your concern. This technique offers quick turnaround and is cost-effective for small batches or packaging prototypes.' },
    { name: 'Water-base Ink', image: '/images/Water-based-screen-printing-inks-for-fabrics.webp', description: 'Eco-friendly ink option for printing custom shipping boxes, suitable for brands focusing on sustainability. Offers good print quality and sharp results with less environmental impact.' },
    { name: 'Soy / Vegetable Ink', image: '/images/images%20(1).webp', description: 'Another eco-conscious choice that provides vibrant colors and is easier to remove during recycling. This option is highly preferred by sustainable brands and is great for organic or green product lines on kraft mailer boxes.' },
    { name: 'Pantone', image: '/images/GP6102B-Pantone-Color-Bridge-Guide-Set-5_web-740x450.webp', description: 'Exceptional color model perfect for brand-specific colors on custom printed mailer boxes. Ensures that logos, icons, and key elements look exactly the same on every box. Great to use when accurate branding holds utmost importance.' },
    { name: 'Pantone Metallic', image: '/images/PANTONE_877_vs_PANTONE_Silver_10077_C.webp', description: 'Premium color model that adds luxury and shimmer to wholesale mailer boxes. This method is common in cosmetics, perfumes, and premium gifts to enhance shelf appeal by offering top-of-the-line feel with the colors.' },
  ],
  'tuck-boxes':[
    { name: 'Digital Printing', image: '/images/bf037986cf978e92147a49d08bdad316_larger_format_p.webp', description: 'High-end printing technique ideal for high-volume runs of custom tuck boxes with consistent color and sharp detail. Great for retail packaging where precise branding is key.' },
    { name: 'Digital Print', image: '/images/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.webp', description: 'Best for short runs or personalized tuck box packaging. This technique offers quick turnaround and is cost-effective for small batches or packaging prototypes.' },
    { name: 'Water-base Ink', image: '/images/Water-based-screen-printing-inks-for-fabrics.webp', description: 'Eco-friendly ink option for printing custom tuck end boxes, suitable for brands focusing on sustainability. Offers good print quality with less environmental impact.' },
    { name: 'Soy / Vegetable Ink', image: '/images/images%20(1).webp', description: 'Eco-conscious choice that provides vibrant colors and is easier to remove during recycling. Preferred by sustainable brands for organic product lines on paperboard boxes.' },
    { name: 'Pantone', image: '/images/GP6102B-Pantone-Color-Bridge-Guide-Set-5_web-740x450.webp', description: 'Exceptional color model perfect for brand-specific colors on custom printed tuck boxes. Ensures logos and key elements look exactly the same on every retail box.' },
    { name: 'Pantone Metallic', image: '/images/PANTONE_877_vs_PANTONE_Silver_10077_C.webp', description: 'Premium color model that adds luxury and shimmer to wholesale tuck boxes. Common in cosmetics and premium retail packaging to enhance shelf appeal.' },
  ],
  'rigid-boxes': [
    { name: 'Digital Printing', image: '/images/bf037986cf978e92147a49d08bdad316_larger_format_p.webp', description: 'High-end printing technique ideal for high-volume runs of luxury rigid boxes with consistent color and sharp detail. Great for premium packaging where precise branding is essential.' },
    { name: 'Digital Print', image: '/images/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.webp', description: 'Best for short runs or personalized rigid gift box packaging. Offers quick turnaround and is cost-effective for small batches or luxury packaging prototypes.' },
    { name: 'Water-base Ink', image: '/images/Water-based-screen-printing-inks-for-fabrics.webp', description: 'Eco-friendly ink option for printing custom rigid boxes, suitable for sustainable luxury brands. Offers excellent print quality with reduced environmental impact.' },
    { name: 'Soy / Vegetable Ink', image: '/images/images%20(1).webp', description: 'Eco-conscious choice providing vibrant colors for setup boxes. Easier to remove during recycling, preferred by brands focused on green packaging solutions.' },
    { name: 'Pantone', image: '/images/GP6102B-Pantone-Color-Bridge-Guide-Set-5_web-740x450.webp', description: 'Exceptional color model for brand-specific colors on premium rigid boxes. Ensures logos and design elements maintain consistency across all luxury packaging.' },
    { name: 'Pantone Metallic', image: '/images/PANTONE_877_vs_PANTONE_Silver_10077_C.webp', description: 'Premium color model adding luxury and shimmer to rigid gift boxes. Essential for high-end cosmetics, jewelry, and luxury gift packaging.' },
  ],
  'dispenser-boxes': [
    { name: 'Digital Printing', image: '/images/bf037986cf978e92147a49d08bdad316_larger_format_p.webp', description: 'High-end printing technique ideal for high-volume runs of custom dispenser boxes with consistent color and sharp detail. Great for retail display packaging.' },
    { name: 'Digital Print', image: '/images/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.webp', description: 'Best for short runs or personalized dispenser box packaging. Offers quick turnaround and cost-effective solutions for point-of-sale displays.' },
    { name: 'Water-base Ink', image: '/images/Water-based-screen-printing-inks-for-fabrics.webp', description: 'Eco-friendly ink option for retail dispenser boxes, suitable for brands focusing on sustainability. Good print quality with environmental responsibility.' },
    { name: 'Soy / Vegetable Ink', image: '/images/images%20(1).webp', description: 'Eco-conscious choice for food-safe dispenser packaging. Provides vibrant colors and is easier to remove during recycling process.' },
    { name: 'Pantone', image: '/images/GP6102B-Pantone-Color-Bridge-Guide-Set-5_web-740x450.webp', description: 'Exceptional color model for brand consistency on custom printed dispenser boxes. Ensures logos stand out on retail shelves.' },
    { name: 'Pantone Metallic', image: '/images/PANTONE_877_vs_PANTONE_Silver_10077_C.webp', description: 'Premium color model adding luxury shimmer to countertop dispenser boxes. Enhances brand visibility in competitive retail environments.' },
  ],
  'magnetic-closure': [
    { name: 'Digital Printing', image: '/images/bf037986cf978e92147a49d08bdad316_larger_format_p.webp', description: 'High-end printing technique ideal for high-volume runs of magnetic closure boxes with consistent color and sharp detail for luxury packaging.' },
    { name: 'Digital Print', image: '/images/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.webp', description: 'Best for short runs or personalized magnetic gift box packaging. Quick turnaround for premium unboxing experiences.' },
    { name: 'Water-base Ink', image: '/images/Water-based-screen-printing-inks-for-fabrics.webp', description: 'Eco-friendly ink for sustainable magnetic boxes. Excellent print quality for luxury brands focused on environmental responsibility.' },
    { name: 'Soy / Vegetable Ink', image: '/images/images%20(1).webp', description: 'Eco-conscious choice for reusable gift boxes. Vibrant colors with easy recycling for green packaging initiatives.' },
    { name: 'Pantone', image: '/images/GP6102B-Pantone-Color-Bridge-Guide-Set-5_web-740x450.webp', description: 'Exceptional color model ensuring brand consistency on custom magnetic boxes. Perfect for luxury brand recognition.' },
    { name: 'Pantone Metallic', image: '/images/PANTONE_877_vs_PANTONE_Silver_10077_C.webp', description: 'Premium metallic finishes for high-end magnetic closure packaging. Adds sophistication to jewelry and luxury gift boxes.' },
  ],
}

// Finishes
export const finishesData: Record<string, TabItem[]> = {
  'mailer-boxes': [
    { name: 'Aqueous Coating', image: '/images/thumbnail-aqueous-coating.webp', description: 'Fast-drying, water-based finish that adds light protection and clean surface feel to custom mailer boxes. Available in gloss or matte, this eco-friendly coating is ideal for print-heavy shipping boxes and helps resist fingerprints.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-soft-touch-coating.webp', description: 'Adds velvet-like texture to your custom packaging, creating soft, matte surface that feels premium in hand. Ideal for brands that want more tactile, elegant unboxing experience without shine or glare.' },
    { name: 'Varnish', image: '/images/thumbnail-varnish.webp', description: 'Clear coating that adds shine, smoothness, and print protection for wholesale mailer boxes. Applied using CMYK presses and available in gloss, satin, or matte finishes. Best for enhancing colors while keeping costs low.' },
    { name: 'Spot Gloss UV', image: '/images/thumbnail-spot-gloss-uv.webp', description: 'Gloss coating applied to select areas of print on custom printed boxes, adding contrast and focus. Often used on logos or text to create shine that stands out against matte background. UV cured for durability.' },
    { name: 'Lamination', image: '/images/thumbnail-lamination.webp', description: 'Thin film layered over surface of e-commerce packaging boxes to increase durability and moisture resistance. Ideal for protecting full-color designs and maintaining box integrity during shipping.' },
    { name: 'Anti-Scratch Lamination', image: '/images/thumbnail-anti-scratch-lamination.webp', description: 'BOPP lamination that resists scuffs, scratches, and fingerprints on branded mailer boxes. Provides smooth finish with added protection for heavily handled shipping boxes.' },
  ],
  'tuck-boxes': [
    { name: 'Aqueous Coating', image: '/images/thumbnail-aqueous-coating.webp', description: 'Fast-drying, water-based finish for custom tuck boxes. Eco-friendly coating ideal for print-heavy retail packaging, helps resist fingerprints and minor scuffs.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-soft-touch-coating.webp', description: 'Velvet-like texture for premium tuck end boxes. Creates soft, matte surface for elegant retail presentation without shine.' },
    { name: 'Varnish', image: '/images/thumbnail-varnish.webp', description: 'Clear coating adding shine and protection for wholesale tuck boxes. Available in gloss, satin, or matte finishes for enhanced colors.' },
    { name: 'Spot Gloss UV', image: '/images/thumbnail-spot-gloss-uv.webp', description: 'Selective gloss coating for custom printed tuck boxes. Highlights logos and text with shine against matte backgrounds.' },
    { name: 'Lamination', image: '/images/thumbnail-lamination.webp', description: 'Protective film for retail packaging boxes. Increases durability and moisture resistance for shelf display.' },
    { name: 'Anti-Scratch Lamination', image: '/images/thumbnail-anti-scratch-lamination.webp', description: 'BOPP lamination resisting scuffs on paperboard boxes. Smooth finish with protection for retail handling.' },
  ],
  'rigid-boxes': [
    { name: 'Aqueous Coating', image: '/images/thumbnail-aqua-coating.webp', description: 'Add waterproof layer to your luxury rigid boxes with aqueous coating. Prevents moisture damage, smudges and fingerprints. Maintains luxury appeal and shiny look of premium packaging.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-soft-touch-coating%20(1).webp', description: 'Best for highlighting specific elements on rigid gift boxes. Adds shiny or dull effect to select design elements such as logo, image, text, or branding.' },
    { name: 'Varnish', image: '/images/thumbnail-varnish%20(1).webp', description: 'Add extra layer of protection to surface of custom rigid boxes. Various varnish options: gloss, matte, silk, and spot varnish. Offers protection while enhancing visual appeal of setup boxes.' },
    { name: 'Spot Gloss UV', image: '/images/thumbnail-spot-uv-gloss.webp', description: 'Add shiny UV effect to specific area on rigid boxes. Best technique for highlighting logos, text, images, or luxury branding elements.' },
    { name: 'Lamination', image: '/images/thumbnail-lamination%20(1).webp', description: 'Add protective film to rigid boxes for retail. Gloss and matte lamination options available per branding demands. Protects packaging surface and adds eye-catching appeal.' },
    { name: 'Anti-Scratch Lamination', image: '/images/thumbnail-anti-scratch-lamination%20(1).webp', description: 'Protect luxury packaging against scratches. Keeps rigid gift boxes looking new on store shelves or with customers.' },
    { name: 'Soft Touch / Silk Lamination', image: '/images/thumbnail-soft-touch-coating%20(1).webp', description: 'Multi-sensory experience with silk-like feel for premium unboxing. Can be applied to entire box or specific elements on high-end packaging.' },
    { name: 'Matte Lamination', image: '/images/thumbnail-matt-lamination.webp', description: 'Premium sleek appearance with matte lamination for luxury rigid boxes. Adds dull yet elegant look, best for limited edition items or gifts.' },
  ],
  'dispenser-boxes': [
    { name: 'Aqueous Coating', image: '/images/thumbnail-aqueous-coating.webp', description: 'Fast-drying, water-based finish for retail dispenser boxes. Eco-friendly coating ideal for print-heavy point-of-sale packaging.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-soft-touch-coating.webp', description: 'Velvet-like texture for premium countertop displays. Creates soft, matte surface for elegant retail presentation.' },
    { name: 'Varnish', image: '/images/thumbnail-varnish.webp', description: 'Clear coating adding shine to custom dispenser boxes. Available in gloss, satin, or matte finishes for food-safe packaging.' },
    { name: 'Spot Gloss UV', image: '/images/thumbnail-spot-gloss-uv.webp', description: 'Selective gloss coating for grab-and-go packaging. Highlights branding on retail display boxes.' },
    { name: 'Lamination', image: '/images/thumbnail-lamination.webp', description: 'Protective film for food service dispenser boxes. Increases durability and moisture resistance.' },
    { name: 'Anti-Scratch Lamination', image: '/images/thumbnail-anti-scratch-lamination.webp', description: 'BOPP lamination resisting scuffs on high-traffic retail dispenser packaging. Smooth finish for constant handling.' },
  ],
  'magnetic-closure': [
    { name: 'Aqueous Coating', image: '/images/thumbnail-aqueous-coating.webp', description: 'Fast-drying, water-based finish for magnetic closure boxes. Eco-friendly protection for luxury gift packaging.' },
    { name: 'Soft Touch Coating', image: '/images/thumbnail-soft-touch-coating.webp', description: 'Velvet-like texture for premium magnetic boxes. Creates soft, matte surface for elegant unboxing experiences.' },
    { name: 'Varnish', image: '/images/thumbnail-varnish.webp', description: 'Clear coating adding shine to reusable gift boxes. Gloss, satin, or matte finishes for brand enhancement.' },
    { name: 'Spot Gloss UV', image: '/images/thumbnail-spot-gloss-uv.webp', description: 'Selective gloss for magnetic gift boxes. Highlights logos with shine against matte backgrounds.' },
    { name: 'Lamination', image: '/images/thumbnail-lamination.webp', description: 'Protective film for high-end packaging. Increases durability of magnetic closure boxes during shipping.' },
    { name: 'Anti-Scratch Lamination', image: '/images/thumbnail-anti-scratch-lamination.webp', description: 'BOPP lamination protecting luxury magnetic boxes. Maintains pristine appearance through repeated use.' },
  ],
}

// Box Styles
export const boxStylesData: Record<string, TabItem[]> = {
  'mailer-boxes': [
    { name: 'Roll Ends With Lid (C005)', image: '/images/thumbnail-roll-end-with-lid.webp', description: 'Classic style for custom mailer boxes with secure lid closure. Ideal for e-commerce shipping and subscription box packaging.' },
    { name: 'Roll End Tuck Front Corrugated Box (C003)', image: '/images/thumbnail-roll-end-tuck-front-corrugated-box.webp', description: 'Popular style for wholesale mailer boxes with tuck front closure. Great for retail presentation and shipping protection.' },
    { name: 'Roll End Tuck Top Corrugated Box (C002)', image: '/images/thumbnail-roll-end-tuck-top-corrugated-box.webp', description: 'Secure tuck top design for custom shipping boxes. Offers excellent protection for products during transit.' },
    { name: 'Roll End 3 Flap Lock Corrugated Box (C004)', image: '/images/thumbnail-roll-end-3-flap-lock-corrugated.webp', description: 'Enhanced security with 3-flap lock for branded mailer boxes. Ideal for heavy or valuable e-commerce products.' },
  ],
  'tuck-boxes': [
    { name: 'Roll Ends With Lid (C005)', image: '/images/thumbnail-roll-end-with-lid.webp', description: 'Versatile style for custom tuck boxes with secure closure. Perfect for retail packaging and product display.' },
    { name: 'Roll End Tuck Front Corrugated Box (C003)', image: '/images/thumbnail-roll-end-tuck-front-corrugated-box.webp', description: 'Front tuck design for easy access retail boxes. Popular for cosmetics and consumer goods packaging.' },
    { name: 'Roll End Tuck Top Corrugated Box (C002)', image: '/images/thumbnail-roll-end-tuck-top-corrugated-box.webp', description: 'Top tuck closure for secure paperboard boxes. Ideal for shelf display and organized storage.' },
    { name: 'Roll End 3 Flap Lock Corrugated Box (C004)', image: '/images/thumbnail-roll-end-3-flap-lock-corrugated.webp', description: 'Triple security flaps for wholesale tuck boxes. Best for protecting valuable retail products.' },
  ],
  'rigid-boxes': [
    { name: 'Magnetic Closure Boxes', image: '/images/thumbnail-magnetic-closure.webp', description: 'Premium unboxing experience with magnetic closure for luxury rigid boxes. Creates memorable brand moments.' },
    { name: 'Collapsible / Foldable Boxes', image: '/images/thumbnail-collapsible-foldable.webp', description: 'Space-saving collapsible rigid boxes shipped flat. Reduces shipping costs and storage space for wholesale orders.' },
    { name: 'Lift-Off / Detachable Lid', image: '/images/thumbnail-liftoff-detachable-lid.webp', description: 'Two-piece rigid gift boxes with removable lid. Gift-like unboxing for jewelry, watches, and luxury items.' },
    { name: 'Shoulder / Neck', image: '/images/thumbnail-shoulder-neck.webp', description: 'Luxury setup boxes with visible neck border. High-end packaging for apparel, jewelry, and premium products.' },
    { name: 'Sleeve and Tray', image: '/images/thumbnail-match-slide.webp', description: 'Match-box style sliding rigid boxes. Popular for candles, CBD products, and luxury retail packaging.' },
  ],
  'dispenser-boxes': [
    { name: 'Roll Ends With Lid (C005)', image: '/images/thumbnail-roll-end-with-lid.webp', description: 'Secure closure style for retail dispenser boxes. Ideal for countertop displays and point-of-sale packaging.' },
    { name: 'Roll End Tuck Front Corrugated Box (C003)', image: '/images/thumbnail-roll-end-tuck-front-corrugated-box.webp', description: 'Easy-access front design for grab-and-go packaging. Perfect for food service and retail environments.' },
    { name: 'Roll End Tuck Top Corrugated Box (C002)', image: '/images/thumbnail-roll-end-tuck-top-corrugated-box.webp', description: 'Top opening style for organized product dispensing. Great for tissues, wipes, and small retail items.' },
    { name: 'Roll End 3 Flap Lock Corrugated Box (C004)', image: '/images/thumbnail-roll-end-3-flap-lock-corrugated.webp', description: 'Secure locking for high-traffic retail dispenser boxes. Maintains product integrity during frequent access.' },
  ],
   'magnetic-closure': [
    { name: 'Hidden Magnet System', image: '/images/thumbnail-magnetic-closure.webp', description: 'Seamless magnetic closure with concealed magnets for elegant rigid gift boxes. No visible closures for premium look.' },
    { name: 'Ribbon Pull Tab', image: '/images/thumbnail-liftoff-detachable-lid.webp', description: 'Elegant ribbon pull for easy opening of luxury magnetic boxes. Enhances unboxing experience for high-end gifts.' },
    { name: 'Double Magnet Closure', image: '/images/thumbnail-shoulder-neck.webp', description: 'Extra-strong dual magnet system for secure closure on premium packaging. Ideal for heavy or valuable products.' },
    { name: 'Magnetic Flip Top', image: '/images/thumbnail-match-slide.webp', description: 'Hinged magnetic lid for convenient access to reusable gift boxes. Popular for cosmetics and tech accessories.' },
  ],
}