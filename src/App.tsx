import { useState } from 'react'
import { motion } from 'framer-motion'
import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'
import pic4 from './assets/pic4.jpg'
import pic5 from './assets/pic5.jpg'
import pic6 from './assets/pic6.jpg'
import star from './assets/star.png'
import { smoothScroll } from './utils/smoothScroll'
import bouquet from './assets/bouquet.png'
import bouquet2 from './assets/bouquet2.png'
import moon from './assets/moon.png'
import loveQuote from './assets/loveQuote.png'
import butterfly2 from './assets/rose-lip.png'
// Add more photo imports as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    smoothScroll(id)
    setIsOpen(false)
  }
  
  return (
    <nav className="fixed w-full bg-neutral-50/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-cinzel tracking-[0.2em] text-neutral-900">
              EKTA GHOSH
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  className="text-neutral-900 hover:text-neutral-800 px-3 py-2 rounded-md text-sm transition-all duration-300 hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-900"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-neutral-900 hover:text-neutral-800 block px-3 py-2 rounded-md text-base"
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

const Hero = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="home"
    className="min-h-screen flex items-center justify-center bg-neutral-100 relative overflow-hidden"
  >
    {/* Decorative Background Elements */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="absolute inset-0 pointer-events-none"
    >
      {/* Top left bouquet */}
      <img
        src={bouquet}
        alt=""
        className="absolute top-20 left-20 w-48 h-48 opacity-40"
      />
      
      {/* Bottom right bouquet */}
      <img
        src={bouquet2}
        alt=""
        className="absolute bottom-20 right-20 w-48 h-48 opacity-40"
      />
      
      {/* Moon decoration */}
      <motion.img
        src={moon}
        alt=""
        className="absolute top-32 right-32 w-24 h-24 opacity-30"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.img
        src={moon}
        alt=""
        className="absolute bottom-32 left-1/4 w-16 h-16 opacity-40"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 order-2 md:order-1 relative">
          {/* Love quote decoration - moved higher and more to the right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-32 -top-24 z-10 transform rotate-12"
          >
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src={loveQuote} 
                alt="" 
                className="w-40 h-40"
              />
            </div>
          </motion.div>

          {/* Main text content with better spacing */}
          <div className="space-y-6">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-cormorant tracking-[0.4em] text-neutral-500 uppercase"
            >
              You, yourself deserve your love and affection
            </motion.p>

            {/* Name container with proper alignment */}
            <div className="relative">
              {/* EKTA text */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-8xl font-italiana tracking-wide pl-1"
              >
                EKTA
              </motion.h1>

              {/* GHOSH text with butterfly */}
              <div className="relative mt-1">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <p className="text-7xl md:text-9xl font-cinzel text-rose-400 tracking-wider">
                    GHOSH
                  </p>
                  <motion.img 
                    src={butterfly2} 
                    alt="" 
                    className="absolute -right-32 -top-40 w-90 h-35 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom text closer to GHOSH */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 text-sm font-cormorant tracking-[0.3em] text-neutral-600 mt-8"
            >
              <span>music</span>
              <span>•</span>
              <span>drama</span>
              <span>•</span>
              <span>love</span>
              <span>•</span>
              <span>smile</span>
            </motion.div>

            <motion.img
              src={bouquet}
              alt=""
              className="absolute -bottom-20 -left-20 w-40 h-40 opacity-30"
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </div>

        {/* Image Layout */}
        <div className="order-1 md:order-2">
          <div className="relative">
            {/* Main Image */}
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden"
            >
              <img
                src={pic2}
                alt="Ekta Portrait"
                className="object-cover w-full h-full"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Decorative Frame */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -inset-4 border-2 border-rose-200 rounded-lg -z-10"
            />

            {/* Small Image Overlay */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -right-6 w-40 h-48 rounded-lg overflow-hidden border-4 border-white shadow-lg"
            >
              <img
                src={pic1}
                alt="Secondary Portrait"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
)

const Gallery = () => {
  const galleryPhotos = [
    {
      id: 1,
      src: pic1,
      alt: "Ekta Portrait 1",
      category: "portraits",
      size: "large"
    },
    {
      id: 2,
      src: pic2,
      alt: "Ekta Portrait 2",
      category: "portraits",
      size: "large"
    },
    {
      id: 3,
      src: pic3,
      alt: "Ekta christmas",
      category: "potraits",
      size: "large"
    },
    {
      id: 4,
      src: pic4,
      alt: "Ekta moments2",
      category: "moments",
      size: "large"
    },
    {
      id: 5,
      src: pic5,
      alt: "Ekta moments 2",
      category: "moments",
      size: "large"
    },
    {
      id: 6,
      src: pic6,
      alt: "Ekta moments 2",
      category: "moments",
      size: "small"
    },
    // Add more photos here as needed
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center space-y-2">
          <h2 className="text-3xl font-italiana tracking-wide">life's</h2>
          <p className="text-sm font-cormorant tracking-[0.3em] text-neutral-500 uppercase">beauty</p>
        </div>
        
        {/* Pinterest-style masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid group relative"
            >
              <div className="relative rounded-lg overflow-hidden bg-neutral-100">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Polaroid-style caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm tracking-wider">{photo.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <img
          src={bouquet2}
          alt=""
          className="absolute bottom-20 left-10 w-32 h-32 opacity-20 -rotate-12"
        />
      </div>
    </section>
  )
}

const About = () => (
  <section id="about" className="py-20 bg-neutral-50 relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 bg-[#FDF8F6] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Editorial Header */}
      <div className="text-center mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <h2 className="text-6xl font-cinzel tracking-wide text-neutral-800">Miss,</h2>
          <p className="text-xl font-italiana text-rose-400 mt-2">Ekta Ghosh.</p>
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Editorial Style Images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image */}
          <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
            <img
              src={pic3}
              alt="Ekta Portrait"
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Overlapping smaller image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-12 -right-12 w-48 h-64 rounded-lg overflow-hidden border-4 border-white shadow-lg"
          >
            <img
              src={pic4}
              alt="Secondary Portrait"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Decorative elements */}
          <img
            src={bouquet2}
            alt=""
            className="absolute -top-8 -left-8 w-24 h-24 opacity-40"
          />
        </motion.div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative date stamp */}
            <div className="absolute -top-8 right-0 text-sm font-cormorant tracking-[0.2em] text-neutral-400">
              28.03.24
            </div>
            
            {/* Content sections */}
            <div className="space-y-6 relative">
              <div className="space-y-2">
                <h3 className="text-2xl font-italiana text-rose-400">life's</h3>
                <p className="text-sm font-cormorant tracking-[0.2em] text-neutral-500 uppercase">beauty</p>
              </div>
              
              <p className="font-cormorant text-neutral-600 leading-relaxed text-lg">
                Crafting experiences that make an me happy. With music as my constant companion, I find rhythm in both code and melodies, embracing life with passion, compassion, and a heart full of dreams.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="space-y-2 relative">
                  <h4 className="text-xl font-light text-rose-400">Experience</h4>
                  <p className="text-neutral-600 font-cormorant">in looking beautiful, tech and music</p>
                  <img
                    src={star}
                    alt=""
                    className="absolute -top-4 -right-4 w-8 h-8 opacity-40"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-light text-rose-400">Based in</h4>
                  <p className="text-neutral-600 font-cormorant">Kolkata, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action buttons with artistic style 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-6 pt-6"
          >
            <button className="group relative px-8 py-3 bg-rose-400 text-white rounded-full overflow-hidden">
              <span className="relative z-10">Portfolio</span>
              <div className="absolute inset-0 bg-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button className="group relative px-8 py-3 border-2 border-rose-400 text-rose-400 rounded-full overflow-hidden hover:text-white transition-colors">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-rose-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </motion.div>*/}
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:ektaghosh45.me@gmail.com?subject=Get%20in%20Touch&body=Hello%20Ekta,%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding...';
  };

  return (
    <section id="contact" className="py-20 bg-rose-600 relative overflow-hidden">
      {/* Decorative elements */}
      <img
        src={bouquet2}
        alt=""
        className="absolute top-0 right-0 w-48 h-48 opacity-10"
      />
      
      <img
        src={moon}
        alt=""
        className="absolute bottom-20 left-20 w-32 h-32 opacity-20"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-cinzel text-center mb-4 text-white tracking-wide">Get in Touch</h2>
        <p className="text-center font-italiana text-rose-100 mb-12 max-w-2xl mx-auto text-2xl">
          Let's create something beautiful together
        </p>
        <div className="max-w-3xl mx-auto text-center">
          <button
            onClick={handleEmailClick}
            className="group relative px-12 py-4 bg-white text-rose-600 rounded-full overflow-hidden hover:bg-rose-50 transition-all duration-300 font-italiana text-xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ektaghosh45.me@gmail.com
            </span>
          </button>
          
          <div className="mt-12 flex justify-center space-x-8">
            {[
              { name: 'Instagram', url: 'https://www.instagram.com/wildat_heart_/?hl=en' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ekta-g-b102291b4/' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-coral-300 transition-colors duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  const handleFooterNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    smoothScroll(id)
  }

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-cinzel mb-4 text-coral-300">EKTA GHOSH</h3>
            <p className="text-neutral-400">
              Professional Model and Tech Girlie
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4 text-rose-300">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleFooterNavClick(e, item.toLowerCase())}
                    className="text-neutral-400 hover:text-coral-300 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4 text-rose-300">Connect</h4>
            <div className="space-y-2">
              <p className="text-neutral-400">Email: ektaghosh45.me@gmail.com</p>
              <p className="text-neutral-400">Based in Kolkata, India</p>
              <div className="flex space-x-4 mt-4">
                {[
                  { name: 'Instagram', url: 'https://www.instagram.com/wildat_heart_/?hl=en' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ekta-g-b102291b4/' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-coral-300 transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-500">
          <p>© {new Date().getFullYear()} Ekta Ghosh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
