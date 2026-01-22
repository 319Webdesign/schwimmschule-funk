"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Waves, MapPin, ChevronDown } from "lucide-react";

const standorte = [
  { slug: "darmstadt", name: "Darmstadt" },
  { slug: "dieburg", name: "Dieburg" },
  { slug: "mainz", name: "Mainz/Budenheim" },
  { slug: "dresden", name: "Dresden" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStandorteOpen, setIsStandorteOpen] = useState(false);
  const [isMobileStandorteOpen, setIsMobileStandorteOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-ocean-deep font-bold text-xl">
            <Waves className="w-6 h-6" />
            <span>Schwimmschule Funk</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-ocean-deep hover:text-ocean-turquoise transition-colors">
              Home
            </Link>
            
            {/* Standorte Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsStandorteOpen(true)}
              onMouseLeave={() => setIsStandorteOpen(false)}
            >
              <button className="flex items-center gap-1 text-ocean-deep hover:text-ocean-turquoise transition-colors py-2">
                Standorte
                <ChevronDown className={`w-4 h-4 transition-transform ${isStandorteOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isStandorteOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    {standorte.map((standort) => (
                      <Link
                        key={standort.slug}
                        href={`/standorte/${standort.slug}`}
                        className="flex items-center gap-2 px-4 py-2 text-ocean-deep hover:bg-ocean-turquoise/10 hover:text-ocean-turquoise transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>{standort.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/kurse" className="text-ocean-deep hover:text-ocean-turquoise transition-colors">
              Kurse
            </Link>
            <Link href="/admin" className="text-ocean-turquoise hover:text-ocean-deep transition-colors font-semibold">
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ocean-deep"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-ocean-deep hover:text-ocean-turquoise transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Standorte Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileStandorteOpen(!isMobileStandorteOpen)}
                className="flex items-center justify-between w-full py-2 text-ocean-deep hover:text-ocean-turquoise transition-colors"
              >
                <span>Standorte</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileStandorteOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileStandorteOpen && (
                <div className="pl-4">
                  {standorte.map((standort) => (
                    <Link
                      key={standort.slug}
                      href={`/standorte/${standort.slug}`}
                      className="flex items-center gap-2 py-2 text-ocean-deep hover:text-ocean-turquoise transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileStandorteOpen(false);
                      }}
                    >
                      <MapPin className="w-4 h-4" />
                      <span>{standort.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/kurse"
              className="block py-2 text-ocean-deep hover:text-ocean-turquoise transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kurse
            </Link>
            <Link
              href="/admin"
              className="block py-2 text-ocean-turquoise font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
