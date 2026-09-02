import hammer from './hammer.jpg'
import hammer2 from './hammer2.jpg'
import hand1 from './hand1.jpg'
import hand2 from './hand2.jpg'
import hand3 from './hand3.jpg'
import knife from './knife.jpg'
import knife1 from './Knife1.jpg'
import paint from './paint.jpg'
import paint1 from './paint1.jpg'
import paint2 from './paint2.jpg'
import paint3 from './paint3.jpg'
import paint4 from './paint4.jpg'
import power1 from './power1.jpg'
import power2 from './power2.jpg'
import power3 from './power3.jpg'
import screw_driver from './screw_driver.jpg'
import screw_driver1 from './screw_driver1.jpg'
import screw_driver2 from './screw_driver2.jpg'
import screw from './screw.jpg'
import screw1 from './screw1.jpg'
import screw2 from './screw2.jpg'
import screw3 from './screw3.jpg'

import bin from './bin.png'
import search from './search.png'
import cart from './cart.png'
import about from './about.png'
import menu from './menu.png'
import profile from './profile.png'
import support from './support.png'
import contact from './contact.png'
import star from './star.png'
import quality from './quality.png'
import exchange from './exchange.png'
import pay from './pay.png'
import logo from './logo.png'
import back from './back.png'
import outPic from './outPic.webp'
import cross from './cross.png'
import dropdown from './dropdown.png'
import whatsapp_icon from "./whatsapp_icon.jpg";
import Return from './Return.png'
import replacement from './replacement.png'




export const assets = {
  Return,
  replacement,
  whatsapp_icon,
    cross,
    dropdown,
    back,
    logo,
    bin,
    search,
    cart,
    about,
    menu,
    profile,
    support,
    contact,
    star,
    quality,
    exchange,
    outPic,
    pay
}

export const products = [
 {
  _id: "0",
  name: "Steel Hammer",
  image: [hammer,hammer2,hammer,hammer2],
  price: 12.99,
  description: "Durable steel hammer for construction and home use",
  category: "Hand Tools",
  subCategory: "Hammers",
  brand: "Stanley",
  countInStock: 25,
  material: "Steel",
  weight: "1.1kg",
  powerType: "Manual",
  rating: 4.5,
  numReviews: 18,
  sizes: ['big','small'],
  isFeatured: true,
  bestseller:true
},

 {
    _id: "1",
    name: "Electric Drill",
    image: [power3,power2],
    price: 79.99,
    description: "Powerful electric drill suitable for home and professional use.",
    category: "Power Tools",
    subCategory: "Drills",
    brand: "Bosch",
    countInStock: 15,
    material: "Metal",
    weight: "2.5kg",
    powerType: "Electric",
    rating: 4.6,
    numReviews: 22,
    sizes: ['big','small'],
    isFeatured: true,
    bestseller:true

  },
  {
    _id: "2",
    name: "Orbital Sander",
    image: [power1],
    price: 65.0,
    description: "Smooth sanding tool for wood and metal surfaces.",
    category: "Power Tools",
    subCategory: "Drills",
    brand: "Makita",
    countInStock: 10,
    material: "Plastic",
    weight: "2kg",
    powerType: "Electric",
    rating: 4.4,
    numReviews: 15,
    sizes: ['big','small'],
    isFeatured: false,
    bestseller:false

  },
  {
    _id: "3",
    name: "Paint Brush Set",
    image: [paint3, paint4],
    price: 12.5,
    description: "Set of high-quality paint brushes for smooth finishes.",
    category: "Painting Tools",
    subCategory: "Brushes",
    brand: "Total",
    countInStock: 40,
    material: "Wood & Fiber",
    weight: "0.4kg",
    powerType: "Manual",
    rating: 4.2,
    numReviews: 12,
    sizes: ['big','small'],
    isFeatured: false,
      bestseller:true

  },
  {
    _id: "4",
    name: "Paint Roller",
    image: [paint1, paint2],
    price: 8.99,
    description: "Durable paint roller for walls and ceilings.",
    category: "Painting Tools",
    subCategory: "Rollers",
    brand: "Ingco",
    countInStock: 35,
    material: "Plastic & Fiber",
    weight: "0.6kg",
    powerType: "Manual",
    rating: 4.1,
    numReviews: 10,
    sizes: ['big','small'],
    isFeatured: false,
      bestseller:true

  },
  {
    _id: "5",
    name: "Screw",
    image: [screw1, screw3],
    price: 6.5,
    description: "High-strength steel screws for multiple uses.",
    category: "Fasteners",
    subCategory: "Screws",
    brand: "Generic",
    countInStock: 100,
    material: "Steel",
    weight: "1kg",
    powerType: "Manual",
    rating: 4.3,
    numReviews: 20,
    sizes: ['big','small'],
    isFeatured: false,
      bestseller:true

  },
  {
    _id: "6",
    name: "Screwdriver Set",
    image: [screw_driver, screw_driver1],
    price: 14.99,
    description: "Multi-size screwdriver set for daily tasks.",
    category: "Hand Tools",
    subCategory: "Screwdrivers",
    brand: "Stanley",
    countInStock: 25,
    material: "Steel",
    weight: "1.3kg",
    powerType: "Manual",
    rating: 4.5,
    numReviews: 18,
    sizes: ['big','small'],
    isFeatured: true,
      bestseller:true

  },
  {
    _id: "7",
    name: "Chainsaw",
    image: [power2, power1],
    price: 199.0,
    description: "Heavy-duty chainsaw for cutting wood efficiently.",
    category: "Power Tools",
    subCategory: "Chainsaws",
    brand: "Husqvarna",
    countInStock: 5,
    material: "Metal",
    weight: "6kg",
    powerType: "Electric",
    rating: 4.7,
    numReviews: 9,
    sizes: ['big','small'],
    isFeatured: true,
    bestseller:false

  },
  {
    _id: "8",
    name: "Adjustable Screw",
    image: [screw2],
    price: 11.99,
    description: "Adjustable wrench for nuts and bolts.",
    category: "Hand Tools",
    subCategory: "Wrenches",
    brand: "Ingco",
    countInStock: 30,
    material: "Steel",
    weight: "0.9kg",
    powerType: "Manual",
    rating: 4.4,
    numReviews: 14,
    sizes: ['big','small'],
    isFeatured: false,
    bestseller:false
  },
  {
    _id: "9",
    name: "Hand Saw",
    image: [knife, paint4],
    price: 13.5,
    description: "Sharp hand saw for cutting wood accurately.",
    category: "Hand Tools",
    subCategory: "knives",
    brand: "Total",
    countInStock: 20,
    material: "Steel",
    weight: "1.1kg",
    powerType: "Manual",
    rating: 4.2,
    numReviews: 11,
    sizes: ['big','small'],
    isFeatured: false,
    bestseller:false
  },
  {
    _id: "10",
    name: "Utility Knife",
    image: [knife, paint4],
    price: 5.99,
    description: "Sharp utility knife for cutting materials safely.",
    category: "Hand Tools",
    subCategory: "Knives",
    brand: "Stanley",
    countInStock: 45,
    material: "Steel",
    weight: "0.3kg",
    powerType: "Manual",
    rating: 4.3,
    numReviews: 19,
    sizes: ['big','small'],
    isFeatured: false,
    bestseller:false
  },
  {
    _id: "11",
    name: "Wire Stripper",
    image: [hand1, hand2],
    price: 9.99,
    description: "Tool for stripping electrical wires accurately.",
    category: "Electrical Tools",
    subCategory: "Strippers",
    brand: "Ingco",
    countInStock: 18,
    material: "Steel",
    weight: "0.5kg",
    powerType: "Manual",
    rating: 4.5,
    numReviews: 13,
    sizes: ['big','small'],
    isFeatured: false,
    bestseller:false
  },
  {
    _id: "12",
    name: "Steel Shovel",
    image: [ paint],
    price: 18.99,
    description: "Durable steel shovel for digging and construction.",
    category: "Garden Tools",
    subCategory: "Shovels",
    brand: "Total",
    countInStock: 12,
    material: "Steel",
    weight: "2.8kg",
    powerType: "Manual",
    rating: 4.4,
    numReviews: 8,
    sizes: ['big','small'],
    isFeatured: false,
    bestseller:false
  }


]











