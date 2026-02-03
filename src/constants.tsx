
import React from 'react';
import { Founder, Establishment, Project, Service } from './types';

export interface Testimonial {
  name: string;
  image: string;
  text: string;
  location?: string;
  investment?: string;
  rating?: number;
}

export const DETAILED_FOUNDERS = [
  {
    slug: "tapas-nigam",
    name: "Tapas Nigam",
    designation: "Founder",
    shortDesc: "The visionary leader behind Grih Lakshmi, dedicated to ethical real estate and long-term value creation.",
    role: "Strategic Vision & Community Growth",
    vision: "To make quality real estate accessible and affordable without compromising on legal safety or future potential.",
    achievements: [
      "10+ Years of real estate excellence",
      "Founded Grih Lakshmi Residency in 2022",
      "Pioneer in Sambhar corridor development",
      "Trusted advisor to 800+ families"
    ],
    bio: "The journey of Grih Lakshmi Residency is deeply rooted in the vision and leadership of our founder, Mr. Tapas Nigam. With a forward-thinking approach and an unwavering dedication to ethical business practices, he has built the company on the pillars of trust, transparency, and long-term value creation. Mr. Nigam began his entrepreneurial journey with a clear mission — to make quality real estate accessible and affordable without compromising on legal safety or future potential. Under his leadership, Grih Lakshmi Residency has developed government-approved projects near key hubs like the DMIC and Mahindra World City. Beyond business, Mr. Nigam is a firm believer in empowering people through informed investments. He personally oversees every project detail — from planning and approvals to infrastructure development — to guarantee that customers receive exactly what they are promised.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "badal-shrivastava",
    name: "Badal Shrivastava",
    designation: "Co-Founder",
    shortDesc: "A dynamic entrepreneur focusing on strategic planning, operations, and customer-centric development.",
    role: "Operations & Infrastructure Planning",
    vision: "Transforming land into thriving, sustainable communities while maintaining the highest standards of quality.",
    achievements: [
      "Expert in DMIC strategic planning",
      "Streamlined legal compliance systems",
      "Led infrastructure delivery for 5+ townships",
      "Advocate for sustainable development"
    ],
    bio: "At the heart of Grih Lakshmi Residency’s growth story stands Mr. Badal Shrivastava, a dynamic entrepreneur and visionary leader with a strong focus on strategic planning, operations, and customer-centric development. As the co-founder, he plays a pivotal role in ensuring that every project meets the highest standards of quality, legality, and value creation. Mr. Shrivastava’s journey in real estate began with a passion for transforming land into thriving, sustainable communities. Known for his meticulous attention to detail and commitment to timely delivery, Mr. Shrivastava oversees critical aspects of the business, including infrastructure planning, legal compliance, and vendor coordination.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "rahul-vig",
    name: "Rahul Vig",
    designation: "Director - Market Strategy",
    shortDesc: "Expert in sales strategy and client relationships, ensuring that customer expectations are always exceeded.",
    role: "Sales Strategy & Market Expansion",
    vision: "Bridging the gap between high-quality development and investors who value location and future growth.",
    achievements: [
      "Architect of the Delhi-NCR expansion",
      "Specialist in project marketing",
      "Managed high-yield investor portfolios",
      "Leader in customer experience excellence"
    ],
    bio: "Mr. Rahul Vig is the third pillar of strength behind Grih Lakshmi Residency, bringing with him a wealth of expertise in sales strategy, client relationship management, and market expansion. With an innate ability to understand investor needs and market trends, he ensures that the company not only meets but exceeds customer expectations. Mr. Vig’s professional journey has been defined by his strong networking skills, result-driven approach, and deep understanding of real estate dynamics. His focus lies in bridging the gap between high-quality development and the right audience, ensuring that every property under the Grih Lakshmi banner reaches investors who truly value location and legality.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  }
];

export const STRATEGIC_LOCATIONS = [
  {
    title: "Mahindra World City",
    description: "Strategically located near Mahindra World City, our plots offer unmatched connectivity and high-growth investment potential.",
    tagline: "Jaipur’s fastest-growing hub for smart living and high-return opportunities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sambhar Lake",
    description: "Sambhar Lake, Rajasthan’s largest saltwater lake, is a scenic and historic destination near Jaipur—ideal for tourism and smart plot investment.",
    tagline: "Sambhar Lake – Rajasthan's largest saltwater lake, a scenic gem near Jaipur perfect for investment & tourism.",
    image: "https://images.unsplash.com/photo-1545324418-f1d3ac1ef730?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Film City",
    description: "Jaipur Film City near Sambhar is a booming hotspot for entertainment and investment—ideal for plot buyers seeking high ROI and future growth.",
    tagline: "Jaipur Film City near Sambhar is a prime spot for real estate investment with huge growth and tourism potential.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Devyani Kund",
    description: "Devyani Kund, a sacred stepwell near Sambhar Lake, is rich in history and spiritual charm—attracting tourists, pilgrims, and boosting the area's real estate value.",
    tagline: "Devyani Kund, a holy stepwell near Sambhar, is a historic site adding spiritual and tourism value to the region.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
  }
];

export const WORKING_PROJECTS = [
  {
    title: "Grih Lakshmi Residency",
    description: "Grih Lakshmi Residency offers affordable, govt.-approved plots near Sambhar Lake, close to DMIC & Film City—ideal for secure investment with high ROI.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Grih Lakshmi Greens",
    description: "Discover Govt. Approved Plots Near Sambhar Lake! Invest Smartly in Jaipur’s Rapid Growth Corridor with Premium Amenities, High ROI & Trusted Real Estate Experts.",
    image: "https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=800"
  }
];

export const SOLD_OUT_PROJECTS = [
  {
    title: "Aashirwad Greens",
    description: "Aashirwad Greens offers govt. approved plots in Phulera – a rising smart city zone with cultural roots and high-return investment potential.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Samridhi Greens",
    description: "Samridhi Greens offers govt.-approved residential plots near Sambhar Lake, close to DMIC & Mahindra World City. Ideal for investment with high ROI and full legal documentation.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Udyog Nagar",
    description: "Udyog Nagar, Sambhar – Our sold-out project reflects strong demand and investor trust. Prime location with high ROI and smart connectivity near key Jaipur corridors.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sagar City",
    description: "Sagar City, Jewar – Strategically located near Noida International Airport, offering govt. approved plots with high ROI in a rapidly developing smart city zone.",
    image: "https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Grih Lakshmi Residency",
    description: "Grih Lakshmi Residency offers affordable, govt.-approved plots near Sambhar Lake, close to DMIC & Film City—ideal for secure investment with high ROI.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  }
];

export const FOUNDERS: Founder[] = []; 
export const ESTABLISHMENTS: Establishment[] = [
  { name: "Grih Lakshmi Residency", year: "2022", location: "Noida" },
  { name: "ABR Greens Infrastructure", year: "2020", location: "Ghaziabad" },
  { name: "Investors Inn Realty Services Pvt Ltd", year: "2013", location: "Noida Extension" },
  { name: "SOP Sports Management Pvt Ltd", year: "2019", location: "Noida Sector 135" }
];

export const PROJECTS: Project[] = []; 

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Pranshu Bhatnagar",
    image: "https://i.pravatar.cc/150?u=1",
    text: "I have invested in a few properties before, but my experience with Grih Lakshmi Greens has been the smoothest. The team guided me from day one, arranged a site visit, explained documents, and made the booking process hassle-free. What impressed me the most was the location near Sambhar Lake—it is not only scenic but also has excellent growth potential. I feel secure knowing my money is invested in a government-approved project at an affordable ₹6.40 Lakh."
  },
  {
    name: "Monish Garg",
    image: "https://i.pravatar.cc/150?u=2",
    text: "When I heard about Grih Lakshmi Greens, I was a bit skeptical at first, but after visiting the site and meeting the team, my doubts vanished. The location is peaceful yet strategically connected to future growth hubs like DMIC and DFC. The legal approval and transparent process gave me confidence to go ahead. At ₹6.40 Lakh, I booked my first plot, and I'm already considering buying a second one. I believe this project has a bright future."
  },
  {
    name: "Harshit bhatt",
    image: "https://i.pravatar.cc/150?u=3",
    text: "I had always dreamt of owning a plot near Jaipur, but most projects I visited were either overpriced or lacked basic infrastructure. At Grih Lakshmi Greens, I found the perfect balance of affordability and planning. The township has wide roads, green parks, and proper demarcation. The fact that it is near Sambhar Lake makes it even more attractive. With prices starting at ₹6.40 Lakh, this is not just an investment for me—it's a step towards building my dream home in the future."
  },
  {
    name: "Hemant Tyagi",
    image: "https://i.pravatar.cc/150?u=4",
    text: "What impressed me most about Grih Lakshmi Greens was the combination of affordability, legal security, and long-term potential. Many projects claim to offer returns, but very few provide clear approvals and planned infrastructure. Here, I saw everything first-hand—plots are well-demarcated, roads are being developed, and the township layout looks promising. At ₹6.40 Lakh, it's a small price to pay for a future that promises both peace of living and strong appreciation."
  }
];

export const SERVICES: Service[] = [
  { title: "Real-estate Sales & Development", description: "Comprehensive lifecycle management from plot acquisition to premium township delivery.", icon: "Building2" },
  { title: "Smart City Analysis", description: "In-depth master plan evaluation for high-potential investment zones like Phulera.", icon: "Map" },
  { title: "Land Acquisition & Approvals", description: "Streamlined government liaison for layout approvals and allotment processes.", icon: "ClipboardCheck" },
  { title: "Corporate Sports Management", description: "Leveraging SOP Sports for elite event handling and community engagement infrastructure.", icon: "Trophy" }
];
