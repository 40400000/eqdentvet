"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const closeMenu = () => setIsMenuOpen(false)
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative h-12 w-48 lg:h-14 lg:w-56">
              {/* Always show on all devices */}
              <Image
                src="/eqdent_donker.png"
                alt="EQDent Logo"
                fill
                className="object-contain cursor-pointer"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-6 text-primary text-base font-medium">
                <Link
                  href="/#about"
                  className="hover:opacity-70 transition-opacity"
                >
                  Over ons
                </Link>
                <Link
                  href="/#behandeling"
                  className="hover:opacity-70 transition-opacity"
                >
                  Periodieke zorg
                </Link>
                <Link
                  href="/#geavanceerde-ingrepen"
                  className="hover:opacity-70 transition-opacity"
                >
                  Expertise zorg
                </Link>
              </div>
              <div className="h-6 w-px bg-primary/30"></div>
              <div className="flex items-center gap-2 text-sm">
                <button className="text-primary font-semibold hover:opacity-70 transition-opacity">NL</button>
                <span className="text-primary/60">|</span>
                <button className="text-primary/70 hover:text-primary transition-colors">EN</button>
              </div>
              <Link
                href="/contact"
                className="text-primary font-medium hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-lg text-primary hover:bg-accent/50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full max-w-sm z-50 lg:hidden shadow-2xl"
              style={{backgroundColor: 'var(--eqdent-white-green)'}}
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b" style={{borderColor: 'var(--eqdent-light-grey)'}}>
                  <Link href="/" onClick={closeMenu} className="relative h-10 w-40">
                    <Image
                      src="/eqdent_donker.png"
                      alt="EQDent Logo"
                      fill
                      className="object-contain"
                    />
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg text-primary hover:bg-accent/50 transition-all duration-200"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {/* Menu Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/#about"
                      onClick={closeMenu}
                      className="text-base font-light text-foreground hover:text-primary transition-all duration-200 py-4 px-3 rounded-lg hover:bg-accent/50"
                    >
                      Over ons
                    </Link>
                    <Link
                      href="/#behandeling"
                      onClick={closeMenu}
                      className="text-base font-light text-foreground hover:text-primary transition-all duration-200 py-4 px-3 rounded-lg hover:bg-accent/50"
                    >
                      Periodieke zorg
                    </Link>
                    <Link
                      href="/#geavanceerde-ingrepen"
                      onClick={closeMenu}
                      className="text-base font-light text-foreground hover:text-primary transition-all duration-200 py-4 px-3 rounded-lg hover:bg-accent/50"
                    >
                      Expertise zorg
                    </Link>
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="text-base font-medium text-white py-4 px-6 rounded-lg text-center mt-6 transition-all duration-200 hover:opacity-90 shadow-sm"
                      style={{backgroundColor: 'var(--eqdent-green-dark)'}}
                    >
                      Inschrijven en afspraak maken
                    </Link>
                  </div>
                </nav>
                
                {/* Language Switcher */}
                <div className="px-6 pb-8 border-t pt-6" style={{borderColor: 'var(--eqdent-light-grey)'}}>
                  <div className="flex items-center gap-3 justify-center text-sm">
                    <button className="font-medium px-3 py-2 rounded-md" style={{color: 'var(--eqdent-green)', backgroundColor: 'var(--eqdent-green-light)'}}>NL</button>
                    <span className="text-muted-foreground">|</span>
                    <button className="text-muted-foreground hover:text-primary transition-all duration-200 px-3 py-2 rounded-md hover:bg-accent/30">EN</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}