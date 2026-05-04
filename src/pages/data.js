import pentHouse3bd from "../assets/properties/3-BDD.jpg";
import pentHouse3bdwbq from "../assets/properties/3-BDDwBQ.jpg";
import pentHouse3bsd from "../assets/properties/3-BSD.jpg";
import pentHouse3bsd2 from "../assets/properties/3-BSD2.jpg";
import pentHouse4bd from "../assets/properties/4-BDD.jpg";
import pentHouse4bdwbq from "../assets/properties/4-BDDwBQ.jpg";

// Home Page
export const featuredProperties = [
  {
    id: 1,
    name: "3-Bedroom Detached Duplex",
    image: pentHouse3bd,
    location: "Abuja, Nigeria",
    price: "₦50M",
    beds: 3,
    sqft: "3,767 sqft",
    tag: "Exclusive",
  },
  {
    id: 2,
    name: "3-Bedroom Detached Duplex with BQ",
    image: pentHouse3bdwbq,
    location: "Abuja, Nigeria",
    price: "₦85M",
    beds: 3,
    sqft: "4,305 sqft",
    tag: "New Listing",
  },
  {
    id: 3,
    name: "4-Bedroom Detached Duplex",
    image: pentHouse4bd,
    location: "Abuja, Nigeria",
    price: "₦65M",
    beds: 4,
    sqft: "$4,300 sqft",
    tag: "Featured",
  },
];

export const penthouseStats = [
  { num: "100+", label: "Properties Sold" },
  { num: "₦15.35B", label: "In Total Sales" },
  { num: "10+", label: "Years of Excellence" },
];

// About Page
export const team = [
  {
    name: "Dr. Segun Olu Ibukun",
    role: "Managing Director & CEO",
    years: "25 years experience",
  },
  {
    name: "Isabelle Laurent",
    role: "Head of Acquisitions",
    years: "18 years experience",
  },
  {
    name: "Marcus Chinedu",
    role: "Chief Design Advisor",
    years: "15 years experience",
  },
  {
    name: "Sofia Martins",
    role: "Director of Luxury Sales",
    years: "20 years experience",
  },
];

export const cards = [
  {
    icon: "◈",
    title: "Discretion",
    text: "Privacy and confidentiality are the foundations of every client relationship we build.",
  },
  {
    icon: "◇",
    title: "Curation",
    text: "We select only properties that meet our exacting standards of quality, location, and exclusivity.",
  },
  {
    icon: "○",
    title: "Integrity",
    text: "Transparent advice, honest valuations, and principled representation — always.",
  },
  {
    icon: "△",
    title: "Excellence",
    text: "We pursue perfection in every detail, from the first meeting to the closing of every transaction.",
  },
];

//Contact Page
export const contacts = [
  {
    label: "Phone",
    value: "+234 803 311 2640",
    href: "tel:+234 803 311 2640",
  },
  {
    label: "Email",
    value: "penthouseproperties@gmail.com",
    href: "mailto:penthouseproperties@gmail.com",
  },
  {
    label: "Head Office",
    value: "One Luxury Tower, New York, NY 10001",
    href: null,
  },
  {
    label: "Hours",
    value: "Mon–Fri: 9:00 AM – 5:00 PM EST",
    href: null,
  },
];

//Properties
export const properties = [
  
  {
    id: 1,
    name: "3-Bedroom Detached Duplex with BQ",
    image: pentHouse3bdwbq,
    location: "Abuja, Nigeria",
    price: "₦85M",
    beds: 3,
    baths: 3,
    sqft: "4,306",
    type: "Detached",
    status: "For Sale",
    tag: "Exclusive",
  },
  {
    id: 2,
    name: "3-Bedroom Semi-Detached Duplex",
    image: pentHouse3bsd,
    location: "Abuja, Nigeria",
    price: "₦70M",
    beds: 3,
    baths: 3,
    sqft: "7,800",
    type: "Semi-Detached",
    status: "For Sale",
    tag: "New",
  },
  {
    id: 3,
    name: "3-Bedroom Semi-Detached Duplex",
    image: pentHouse3bsd2,
    location: "Abuja, Nigeria",
    price: "₦70M",
    beds: 3,
    baths: 3,
    sqft: "3,400",
    type: "Semi-Detached",
    status: "For Sale",
    tag: "Featured",
  },
  {
    id: 4,
    name: "4-Bedroom Detached Duplex with BQ",
    image: pentHouse4bdwbq,
    location: "Abuja, Nigeria",
    price: "₦100M",
    beds: 4,
    baths: 4,
    sqft: "5,382",
    type: "Detached",
    status: "For Sale",
    tag: "Exclusive",
  },
];

export const types = ["All", "Detached", "Semi-Detached"];
export const statuses = ["All", "For Sale", "For Lease"];


//Facility Managment page
export const services = [
  "Tenant Management",
  "Security",
  "Maintenance & Repairs",
];

export const whatWeManage = [
  {
    icon: "🤝",
    title: "Tenant Relations & Lease Management",
    text: "We handle tenant screening, lease agreements, rent collection, and dispute resolution.",
  },
  {
    icon: "🔐",
    title: "Security & Access Control",
    text: "24/7 security coordination, access systems, and visitor management for your property.",
  },
  {
    icon: "🔧",
    title: "Maintenance & Repairs",
    text: "Routine inspections, preventive maintenance, and prompt repairs by vetted contractors.",
  },
  {
    icon: "💡",
    title: "Utilities & Essential Services",
    text: "Water, electricity, waste management, and other utility coordination handled seamlessly.",
  },
  {
    icon: "📈",
    title: "Property Value Preservation",
    text: "Strategic upkeep and improvements that protect and grow your property's market value.",
  },
];

export const valuePoints = [
  { icon: "🛡️", label: "Prevents Costly Damage" },
  { icon: "📋", label: "Ensures Tenant Compliance" },
  { icon: "🔩", label: "Regular Maintenance" },
  { icon: "🏆", label: "Stays Desirable & Profitable" },
];