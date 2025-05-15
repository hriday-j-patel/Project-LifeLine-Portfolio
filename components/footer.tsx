import Link from "next/link"
import { HardHat, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="h-2 warning-stripe"></div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <HardHat className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="font-barlow font-bold text-xl">PROJECT LIFELINE</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Maximize safety with a biometric wearable that works as hard as you do.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/problem" className="text-gray-400 hover:text-white transition-colors">
                  Problem
                </Link>
              </li>
              <li>
                <Link href="/solution" className="text-gray-400 hover:text-white transition-colors">
                  Solution
                </Link>
              </li>
              <li>
                <Link href="/build-test" className="text-gray-400 hover:text-white transition-colors">
                  Build & Test
                </Link>
              </li>
              <li>
                <Link href="/presentation" className="text-gray-400 hover:text-white transition-colors">
                  Presentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Contact</h3>
            <form className="mt-4">
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2 bg-yellow-500 text-black font-medium rounded-md hover:bg-yellow-600 transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe for Updates
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Project Lifeline. All rights reserved. CTE Advanced Studies.
          </p>
        </div>
      </div>
    </footer>
  )
}
