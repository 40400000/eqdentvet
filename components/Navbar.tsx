"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export function Navbar({ variant = "default" }: { variant?: "default" | "white" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const closeMenu = () => setIsMenuOpen(false)
  
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 50)
    })
    return unsubscribe
  }, [scrollY])

  // Transform values for smooth morphing
  const headerTop = useTransform(scrollY, [0, 50], [16, 12])
  const headerPadding = useTransform(scrollY, [0, 50], [16, 16])
  const headerWidth = useTransform(scrollY, [0, 50], ["100%", "100%"])
  const maxWidth = useTransform(scrollY, [0, 50], ["80rem", "64rem"])
  const borderRadius = useTransform(scrollY, [0, 50], [0, 24])
  const bgOpacity = useTransform(scrollY, [0, 50], [1, 0.05])
  const backdropBlur = useTransform(scrollY, [0, 50], [0, 12])
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.05])
  const shadowOpacity = useTransform(scrollY, [0, 50], [0, 0.05])
  const verticalPadding = useTransform(scrollY, [0, 50], [12, 4])
  
  return (
    <>
      <motion.header 
        className="fixed left-0 right-0 z-50"
        style={{
          top: headerTop,
          paddingLeft: headerPadding,
          paddingRight: headerPadding,
        }}
      >
        <motion.div 
          className="relative mx-auto container"
          style={{
            width: headerWidth,
            maxWidth: maxWidth,
          }}
        >
          <motion.div 
            className="border shadow-sm"
            style={{
              backgroundColor: useTransform(scrollY, [0, 50], 
                variant === "white" 
                  ? ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.95)'] 
                  : ['#F7FBF9', 'rgba(255, 255, 255, 0.05)']
              ),
              backdropFilter: useTransform(backdropBlur, (value) => `blur(${value}px)`),
              borderColor: useTransform(borderOpacity, (value) => `rgba(255, 255, 255, ${value})`),
              borderRadius: borderRadius,
              boxShadow: useTransform(shadowOpacity, (value) => 
                `0 1px 2px rgba(0, 0, 0, ${value * 0.1}), 0 1px 3px rgba(0, 0, 0, ${value * 0.1})`
              ),
            }}
          >
            <motion.div 
              className="px-8"
              style={{
                paddingTop: verticalPadding,
                paddingBottom: verticalPadding,
              }}
            >
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
              className="lg:hidden p-3 rounded-lg text-primary hover:bg-accent/50 transition-all duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.header>
      
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
                    className="p-2 rounded-lg text-primary hover:bg-accent/50 transition-all duration-200 cursor-pointer"
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}