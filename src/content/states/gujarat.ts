import { Factory, FlaskConical, Gem, Landmark, Package, Shirt } from "lucide-react";
import { L } from "@/content/shared/helpers";
import { stateContent } from "@/content/shared/state-template";

export default stateContent(
  { updated: "2026-10-22", hubCities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Jamnagar", "Gandhinagar", "Bhavnagar", "Anand", "Morbi", "Bharuch"], moreCities: 15 },
  {
    slug: "gujarat",
    name: "Gujarat",
    title: "Gujarat Business Database | Ahmedabad, Surat, Rajkot B2B Contacts",
    metaDescription:
      "Gujarat B2B database for textiles, chemicals, ceramics, diamonds and engineering: Ahmedabad, Surat, Vadodara, Rajkot, Morbi and Vapi contacts by city and industry.",
    lead:
      "Gujarat is India's MSME manufacturing powerhouse. Reach textile mills in Surat, chemical units in Vapi and Ankleshwar, ceramic makers in Morbi and engineering firms in Rajkot, filtered by cluster.",
    segmentSummary:
      "Gujarat buyers cluster by product. Surat means synthetic textiles and diamond processing. Morbi produces most of India's ceramic tiles. The Golden Corridor of Vapi, Ankleshwar and Bharuch is chemicals and dyes, and Rajkot and Jamnagar make machine parts and brass components. Ahmedabad adds pharma, textiles and a large trading community. Choose your clusters, and the list follows them.",
    segmentCards: [
      { icon: Shirt, title: "Textiles & Diamonds", description: "Weaving, processing and trading units in Surat and Ahmedabad, plus diamond cutting and trading houses." },
      { icon: FlaskConical, title: "Chemicals & Pharma", description: "Dyes, specialty chemicals and API makers along Vapi, Ankleshwar, Bharuch and Ahmedabad." },
      { icon: Factory, title: "Ceramics & Engineering", description: "Morbi tile and sanitaryware makers, Rajkot engineering and Jamnagar brass-part manufacturers." },
    ],
    cities: [
      { city: "Ahmedabad", detail: "Textiles, pharma, trading, engineering" },
      { city: "Surat", detail: "Synthetic textiles, diamonds, embroidery" },
      { city: "Vadodara", detail: "Chemicals, engineering, power equipment" },
      { city: "Rajkot", detail: "Auto parts, castings, machine tools" },
      { city: "Morbi", detail: "Ceramic tiles, sanitaryware, clocks" },
      { city: "Vapi & Ankleshwar", detail: "Chemicals, dyes, pesticides" },
    ],
    useCases: [
      { icon: Gem, title: "Diamond & Jewellery Trade Services", description: "Offer software, insurance, logistics and finance to diamond processors and traders around Surat's Varachha and Mahidhar Pura." },
      { icon: FlaskConical, title: "Chemical Raw Materials & Services", description: "Pitch raw materials, effluent treatment and lab equipment to units across the Golden Corridor." },
      { icon: Shirt, title: "Textile Machinery & Yarn", description: "Reach weavers and processors in Surat and Ahmedabad with machinery, spares and yarn supply." },
      { icon: Package, title: "Packaging for Morbi Exporters", description: "Offer cartons, pallets and export logistics to tile manufacturers shipping overseas." },
      { icon: Landmark, title: "MSME Finance & Insurance", description: "Gujarat MSMEs borrow heavily for working capital. Approach owners directly with loan and insurance products." },
    ],
    faqs: [
      { question: "Do you cover GIDC industrial estates?", answer: "Yes. Units in GIDC estates such as Naroda, Vatva, Sachin, Ankleshwar, Vapi and Dahej are covered, and you can filter by estate or pincode." },
      { question: "Can I get Rajkot engineering and auto-part makers only?", answer: "Yes. Rajkot's casting, forging, machine-tool and auto-component makers can be bought on their own, with or without nearby Jamnagar brass-part units." },
      { question: "Can I target only Morbi ceramic manufacturers?", answer: "Yes. Filter by city and industry to get only tile, sanitaryware and ceramic businesses in Morbi and nearby Wankaner." },
      { question: "Do you cover the chemical belt from Vapi to Ankleshwar?", answer: "Yes. Chemical, dye and pharma units across Vapi, Ankleshwar, Bharuch, Dahej and Vadodara are covered and tagged by product category." },
      { question: "Is Surat data split between textiles and diamonds?", answer: "Yes. Surat businesses are tagged by industry, so you can buy textile weavers and traders separately from diamond processors." },
      { question: "Are Gujarati exporters included?", answer: "Yes. Exporters can be flagged where their records show export activity. For IEC-based lists, see our Importers & Exporters database." },
    ],
    related: [
      L("Chemical & Pharma Companies Database", "chemical-pharma-companies-database-india"),
      L("Manufacturer Database", "manufacturer-database-india"),
      L("Importers & Exporters Database", "importers-exporters-database-india"),
      L("Fabric & Clothing Stores Database", "fabric-clothing-stores-database-india"),
      L("Gems & Jewellery Shops Database", "gems-jewellery-shops-database-india"),
      L("Machinery Suppliers Database", "machinery-suppliers-services-database-india"),
    ],
    bands: [
      "Selling to one cluster only, such as Morbi ceramics or Surat textiles? Ask for a cluster sample.",
      "Need chemical plant heads along the Golden Corridor? We filter by GIDC estate.",
      "Get Gujarat sample rows for your exact clusters and roles.",
    ],
  }
);
