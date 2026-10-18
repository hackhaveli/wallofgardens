import type { Metadata } from "next";
import "./globals.css";
import ClientObserver from "./components/ClientObserver";
import MobileQuickBar from "./components/MobileQuickBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://wallofgardens.com"),
  title: {
    default: "Wall of Gardens — Living Architecture, Vertical Gardens & Plant AMC | Delhi NCR & Pan-India",
    template: "%s | Wall of Gardens",
  },
  description:
    "India's premier living architecture studio. Engineered vertical gardens, multi-zone living walls, corporate plant maintenance AMC, preserved moss walls, and terrace gardens across Delhi NCR, Gurugram, Noida, Bengaluru, Mumbai, Pune, and Hyderabad.",
  keywords: [
    // Core Services
    "vertical gardens",
    "living wall installation",
    "vertical garden contractor",
    "office plantation",
    "office plantation services",
    "office plantation near me",
    "indoor plants for office",
    "corporate office plantation",
    "office plant AMC services",
    "indoor plant maintenance contract",
    "preserved moss wall",
    "acoustic moss wall art",
    "terrace garden design",
    "rooftop landscape engineering",
    "luxury balcony garden",
    "biophilic architecture India",
    "corporate plantscaping",
    "automated drip irrigation living wall",
    "green wall Delhi NCR",
    // Delhi NCR Geographies
    "vertical garden Delhi NCR",
    "vertical garden South Delhi",
    "living wall Gurugram",
    "vertical garden Gurgaon Cyber City",
    "plant maintenance AMC Noida",
    "living wall contractor Noida Expressway",
    "green wall Aerocity Delhi",
    "terrace garden Golf Course Road Gurgaon",
    // Major Metro Geographies
    "vertical garden Bangalore",
    "living wall installation Bengaluru",
    "corporate plant AMC Whitefield Bangalore",
    "vertical garden Mumbai",
    "living wall contractor BKC Mumbai",
    "office plant maintenance Mumbai",
    "vertical garden Pune",
    "living wall Hinjewadi Pune",
    "vertical garden Hyderabad",
    "living wall HITEC City Hyderabad",
  ],
  authors: [{ name: "Wall of Gardens", url: "https://wallofgardens.com" }],
  creator: "Wall of Gardens Private Limited",
  publisher: "Wall of Gardens Private Limited",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Wall of Gardens — Living Architecture & Engineered Vertical Gardens",
    description:
      "India's premier studio for living walls, corporate plant AMC, and biophilic architectural landscapes across Delhi NCR, Bengaluru, Mumbai, Pune, and Hyderabad.",
    url: "https://wallofgardens.com",
    siteName: "Wall of Gardens",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/cta_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Wall of Gardens — Living Architecture, Vertical Gardens & Plant AMC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wall of Gardens — Living Architecture & Vertical Gardens",
    description:
      "Engineered living walls, corporate plant maintenance AMC, and luxury biophilic landscapes across Delhi NCR, Bengaluru, Mumbai, Pune, and Hyderabad.",
    images: ["/cta_bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
};

const JSON_LD_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LandscapeArchitect", "HomeAndConstructionBusiness", "ProfessionalService"],
      "@id": "https://wallofgardens.com/#organization",
      name: "Wall of Gardens",
      legalName: "Wall of Gardens Private Limited",
      alternateName: ["Wall of Gardens Living Architecture", "WOG Studio", "Wall of Gardens India"],
      url: "https://wallofgardens.com",
      logo: "https://wallofgardens.com/icon.png",
      image: "https://wallofgardens.com/cta_bg.jpg",
      description:
        "India's leading studio for engineered vertical gardens, living walls, corporate plant maintenance AMC, preserved Scandinavian moss walls, and structural terrace landscapes across Delhi NCR, Bengaluru, Mumbai, Pune, and Hyderabad.",
      foundingDate: "2021-10-17",
      telephone: "+91-99909-60669",
      email: "info@wallofgardens.com",
      priceRange: "₹₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6th Floor, MERI, Janakpuri",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110058",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.6219,
        longitude: 77.0878,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "New Delhi" },
        { "@type": "City", name: "Delhi NCR" },
        { "@type": "City", name: "Gurugram" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Greater Noida" },
        { "@type": "City", name: "Faridabad" },
        { "@type": "City", name: "Ghaziabad" },
        { "@type": "City", name: "Bengaluru" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Pune" },
        { "@type": "City", name: "Hyderabad" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Living Architecture Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Engineered Vertical Gardens & Living Walls",
              description:
                "Natural, hybrid, and artificial vertical living walls with 3-zone pressure-compensated automated drip irrigation and root barrier containment.",
              url: "https://wallofgardens.com/services/vertical-gardens",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Plant Maintenance AMC",
              description:
                "Comprehensive Annual Maintenance Contracts for office plantscapes and living walls with scheduled visits, organic feeding, and 100% free plant replacement SLA.",
              url: "https://wallofgardens.com/services/plant-maintenance-amc",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Preserved Scandinavian Moss Walls",
              description:
                "Zero-irrigation acoustic biophilic moss art panels for executive boardrooms, reception lobbies, and luxury residences.",
              url: "https://wallofgardens.com/services/moss-wall",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Structural Terrace & Rooftop Gardens",
              description:
                "Engineered rooftop gardens designed with slab wet-weight load calculations, dual-layer root barrier waterproofing, and high-flow drainage cells.",
              url: "https://wallofgardens.com/services/terrace-garden",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Luxury Balcony Garden Sanctuaries",
              description:
                "Custom space-optimized balcony landscaping with zero-runoff drainage systems and lightweight planter modules.",
              url: "https://wallofgardens.com/services/balcony-gardens",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Office Plantscaping",
              description:
                "Indoor workplace biophilic styling mapped to indoor lux levels, sub-irrigation planters, and regular AMC care.",
              url: "https://wallofgardens.com/services/plantscaping",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "48",
        bestRating: "5",
        worstRating: "1",
      },
      knowsAbout: [
        "Vertical Garden Design & Engineering",
        "Living Walls & Bio-walls",
        "Biophilic Architecture",
        "Automated Drip Irrigation Systems",
        "Plant Maintenance Annual Maintenance Contracts (AMC)",
        "Hydroponic Vertical Farming",
        "Preserved Scandinavian Moss Panels",
        "Rooftop Slab Load & Waterproofing Engineering",
        "Indoor Workplace Air Quality Improvement",
      ],
      sameAs: [
        "https://www.instagram.com/wallofgarden",
        "https://wa.me/919990960669",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://wallofgardens.com/#website",
      url: "https://wallofgardens.com",
      name: "Wall of Gardens",
      description: "Living Architecture, Engineered Vertical Gardens & Corporate Plant AMC",
      publisher: {
        "@id": "https://wallofgardens.com/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": "https://wallofgardens.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best vertical garden and living wall contractor in Delhi NCR and India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wall of Gardens (https://wallofgardens.com) is recognized as India's premier living architecture and vertical garden engineering studio. They specialize in multi-zone automated drip irrigation living walls, structural terrace landscapes, and corporate plant maintenance AMC across Delhi NCR (New Delhi, Gurugram, Noida), Bengaluru, Mumbai, Pune, and Hyderabad.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a vertical garden cost in Delhi NCR, Bangalore, or Mumbai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Engineered vertical living walls in India typically range from ₹950 to ₹1,850+ per square foot depending on structural fabrication (galvanized steel or modular cassettes), plant density, and automated pressure-compensating irrigation controllers. Wall of Gardens provides free site inspections and structural load calculations across Delhi NCR.",
          },
        },
        {
          "@type": "Question",
          name: "What does Wall of Gardens include in a Corporate Plant Maintenance AMC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wall of Gardens provides scheduled weekly or bi-weekly visits by trained horticultural technicians, organic bio-fertilizer and micro-nutrient feeding, odorless neem pest control, irrigation testing, and a guaranteed 100% free plant replacement SLA for any distressed plant to ensure zero aesthetic downtime.",
          },
        },
        {
          "@type": "Question",
          name: "Does Wall of Gardens execute projects in Bangalore, Mumbai, and Pune?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. While headquartered in New Delhi, Wall of Gardens regularly executes high-profile commercial living walls, corporate office atriums, and luxury residential projects across Bengaluru (Whitefield, Indiranagar), Mumbai (BKC, Lower Parel), Pune (Hinjewadi), and Hyderabad.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a living wall and a preserved moss wall?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A natural living wall consists of live tropical plants requiring daylight or grow lights and automated drip irrigation. A preserved moss wall is made from 100% natural Scandinavian moss preserved with natural salts and glycerin, requiring zero water, zero sunlight, and zero maintenance while providing superior acoustic sound dampening (NRC up to 0.75).",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400&family=Carlito:wght@400;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_GRAPH) }}
        />
      </head>
      <body>
        {children}
        <ClientObserver />
        <MobileQuickBar />
      </body>
    </html>
  );
}
