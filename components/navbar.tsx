"use client"

import { useState } from "react"
import Link from "next/link"
import { HardHat, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <HardHat className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="font-barlow font-bold text-xl">PROJECT LIFELINE</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Home
              </Link>
              <Link
                href="/problem"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Problem
              </Link>
              <Link
                href="/solution"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Solution
              </Link>
              <Link
                href="/build-test"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Build & Test
              </Link>
              <Link
                href="/presentation"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Presentation
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/problem"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Problem
            </Link>
            <Link
              href="/solution"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Solution
            </Link>
            <Link
              href="/build-test"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Build & Test
            </Link>
            <Link
              href="/presentation"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
            >
              Presentation
            </Link>
          </div>
        </div>
      )}

      <div className="h-2 warning-stripe"></div>
    </nav>
  )
}
