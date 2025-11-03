"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface NavbarProps {
  showLogo?: boolean
}

export function Navbar({ showLogo = true }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const closeMenu = () => setIsMenuOpen(false)
  
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" style={{background: 'linear-gradient(135deg, var(--eqdent-green) 0%, var(--eqdent-green-dark) 100%)'}}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative h-12 w-48 lg:h-14 lg:w-56">
              {/* Always show on mobile */}
              <div className="lg:hidden">
                <Image
                  src="/eqdentlogo.png"
                  alt="EQDent Logo"
                  fill
                  className="object-contain cursor-pointer"
                />
              </div>
              {/* Conditional on desktop */}
              {showLogo && (
                <div className="hidden lg:block">
                  <Image
                    src="/eqdentlogo.png"
                    alt="EQDent Logo"
                    fill
                    className="object-contain cursor-pointer"
                  />
                </div>
              )}
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-6 text-white text-base">
                <Link
                  href="/#about"
                  className="hover:text-accent-foreground transition-colors"
                >
                  Over ons
                </Link>
                <Link
                  href="/#behandeling"
                  className="hover:text-accent-foreground transition-colors"
                >
                  Periodieke zorg
                </Link>
                <Link
                  href="/#geavanceerde-ingrepen"
                  className="hover:text-accent-foreground transition-colors"
                >
                  Expertise zorg
                </Link>
              </div>
              <div className="h-6 w-px bg-white/30"></div>
              <div className="flex items-center gap-2 text-sm">
                <button className="text-white font-semibold hover:text-accent-foreground transition-colors">NL</button>
                <span className="text-white/60">|</span>
                <button className="text-white/70 hover:text-white transition-colors">EN</button>
              </div>
              <Link
                href="/contact"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accent-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-4" style={{background: 'linear-gradient(135deg, var(--eqdent-green) 0%, var(--eqdent-green-dark) 100%)'}}>
                  <Link href="/" onClick={closeMenu} className="relative h-12 w-48">
                    <Image
                      src="/eqdentlogo.png"
                      alt="EQDent Logo"
                      fill
                      className="object-contain"
                    />
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-white hover:text-accent-foreground transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {/* Menu Links */}
                <nav className="flex-1 px-4 py-6">
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/#about"
                      onClick={closeMenu}
                      className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2"
                    >
                      Over ons
                    </Link>
                    <Link
                      href="/#behandeling"
                      onClick={closeMenu}
                      className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2"
                    >
                      Periodieke zorg
                    </Link>
                    <Link
                      href="/#geavanceerde-ingrepen"
                      onClick={closeMenu}
                      className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2"
                    >
                      Expertise zorg
                    </Link>
                    <Link
                      href="/contact"
                      onClick={closeMenu}
                      className="text-lg font-medium text-white py-3 px-4 rounded-lg text-center mt-4"
                      style={{backgroundColor: 'var(--eqdent-green)'}}
                    >
                      Contact
                    </Link>
                  </div>
                </nav>
                
                {/* Language Switcher */}
                <div className="px-4 pb-6 border-t pt-4">
                  <div className="flex items-center gap-2 justify-center text-sm">
                    <button className="font-semibold" style={{color: 'var(--eqdent-green)'}}>NL</button>
                    <span className="text-gray-400">|</span>
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">EN</button>
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