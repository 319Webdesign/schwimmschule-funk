import Link from "next/link";
import { Waves, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ocean-deep text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6" />
              <span className="font-bold text-xl">Schwimmschule Funk</span>
            </div>
            <p className="text-blue-100">
              Professionelle Schwimmkurse in Darmstadt, Dieburg, Dresden & Mainz
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/standorte" className="hover:text-white transition-colors">
                  Standorte
                </Link>
              </li>
              <li>
                <Link href="/kurse" className="hover:text-white transition-colors">
                  Kurse
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+49 (0) XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@schwimmschule-funk.de</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100 text-sm">
          <p>&copy; {new Date().getFullYear()} Schwimmschule Funk. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
