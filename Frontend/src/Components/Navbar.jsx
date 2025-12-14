'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Banner from './banner.jsx'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Charger les polices Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=Barlow:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <>
    <header className="bg-gray-900 border-b-2 border-orange-600/30">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">BBQ Géant 2025</span>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔥</span>
              <span 
                className="text-2xl font-bold text-orange-500 uppercase tracking-wider"
                style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.1em' }}
              >
                BBQ Géant
              </span>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-orange-400 hover:text-orange-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a 
            href="/" 
            className="text-base font-semibold text-white hover:text-orange-400 transition-colors uppercase tracking-wide"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Accueil
          </a>
          <a 
            href="#APropos" 
            className="text-base font-semibold text-white hover:text-orange-400 transition-colors uppercase tracking-wide"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            À Propos
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/inscription">
            <button 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-6 py-3 rounded-md transition-all shadow-lg uppercase tracking-widest text-white font-bold"
              style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.15em' }}
            >
              🔥 S'INSCRIRE 🔥
            </button>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-orange-600/20 border-l-2 border-orange-600/50">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">BBQ Géant 2025</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <span 
                  className="text-xl font-bold text-orange-500 uppercase tracking-wider"
                  style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.1em' }}
                >
                  BBQ Géant
                </span>
              </div>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-orange-400 hover:text-orange-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-orange-600/20">
              <div className="space-y-2 py-6">
                <a 
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-orange-600/10 uppercase tracking-wide transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Accueil
                </a>
                <a
                  href="#APropos"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-orange-600/10 uppercase tracking-wide transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  À Propos
                </a>
              </div>
              <div className="py-6">
                <a 
                  href="/inscription"
                  className="-mx-3 block rounded-lg"
                >
                  <button 
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-4 py-3 w-full rounded-md transition-all shadow-lg uppercase tracking-widest text-white font-bold"
                    style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.15em' }}
                  >
                    🔥 S'INSCRIRE 🔥
                  </button>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <Banner />
    </>
  )
}