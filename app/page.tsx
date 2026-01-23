import Link from "next/link";
import { ArrowRight, MapPin, Zap, Users, Smile, GraduationCap, Heart, Flame, BookOpen, UserCheck, Award, Star } from "lucide-react";

const standorte = [
  {
    id: "darmstadt",
    name: "Darmstadt",
    description: "Zentral gelegen, moderne Schwimmbäder",
  },
  {
    id: "dieburg",
    name: "Dieburg",
    description: "Familienfreundliche Atmosphäre",
  },
  {
    id: "mainz",
    name: "Mainz / Budenheim",
    description: "Flexible Kurse für die ganze Familie",
  },
  {
    id: "dresden",
    name: "Dresden",
    description: "Breite Palette an Schwimmkursen",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 text-ocean-deep py-20 md:py-32 overflow-hidden">
        {/* Wellen-Muster Hintergrund */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#0077b6"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sicher & mit Freude schwimmen lernen in deiner Region
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              Professionelle Kurse für Kinder und Erwachsene in Darmstadt, Dieburg, Mainz & Dresden. Kleine Gruppen, moderne Methoden, erfahrene Trainer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kurse"
                className="bg-ocean-turquoise text-white px-8 py-4 rounded-lg font-semibold hover:bg-ocean-deep transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                Jetzt Kurs finden
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/standorte"
                className="bg-transparent border-2 border-ocean-turquoise text-ocean-deep px-8 py-4 rounded-lg font-semibold hover:bg-ocean-turquoise hover:text-white transition-colors"
              >
                Über uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie & Standorte Sektion */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* USP-BAR */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-ocean-turquoise/10 p-4 rounded-full">
                    <Zap className="w-8 h-8 text-ocean-turquoise" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-ocean-deep mb-2">
                  Moderne Methoden
                </h3>
                <p className="text-gray-600 text-sm">
                  Effizientes Lernen nach neuesten Standards.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-ocean-turquoise/10 p-4 rounded-full">
                    <Users className="w-8 h-8 text-ocean-turquoise" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-ocean-deep mb-2">
                  Kleine Gruppen
                </h3>
                <p className="text-gray-600 text-sm">
                  Individuelle Betreuung & maximale Sicherheit.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-ocean-turquoise/10 p-4 rounded-full">
                    <Smile className="w-8 h-8 text-ocean-turquoise" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-ocean-deep mb-2">
                  Freude am Wasser
                </h3>
                <p className="text-gray-600 text-sm">
                  Mit Spaß und ohne Druck zum Ziel.
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT-BLOCK */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 md:mb-32 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-6">
                Professionelle Schwimmkurse für jedes Niveau
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Wir bieten hochwertige Trainingsprogramme in Mainz, Darmstadt, Dieburg und Dresden. Unsere erfahrenen Trainer vermitteln nicht nur die richtige Technik, sondern auch Sicherheit und ein gutes Gefühl im Wasser – für Kinder und Erwachsene.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Ob Seepferdchen, Techniktraining oder Fortgeschrittenenkurse – unsere Schwimmkurse in Mainz und den anderen Standorten sind auf die individuellen Bedürfnisse unserer Teilnehmer abgestimmt. Mit bewährten Methoden und viel Geduld führen wir jeden sicher ans Ziel.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-ocean-turquoise/20 to-ocean-deep/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-ocean-turquoise/30 rounded-full flex items-center justify-center">
                      <MapPin className="w-12 h-12 text-ocean-deep" />
                    </div>
                    <p className="text-ocean-deep font-semibold text-lg">
                      Schwimmschule Funk
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Platzhalter-Bild
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STANDORT-GRID */}
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-ocean-deep mb-8 text-center">
              Finde deinen Kurs in deiner Region
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standorte.map((standort) => (
                <div
                  key={standort.id}
                  className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-ocean-turquoise flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-ocean-turquoise/10 p-2 rounded-lg">
                      <MapPin className="w-6 h-6 text-ocean-turquoise" />
                    </div>
                    <h4 className="text-xl font-bold text-ocean-deep">
                      {standort.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm flex-grow">
                    {standort.description}
                  </p>
                  <Link
                    href={`/kurse?standort=${standort.id}`}
                    className="block w-full bg-ocean-turquoise text-white text-center py-2.5 rounded-lg font-medium hover:bg-ocean-deep transition-colors mt-auto"
                  >
                    Kurse in {standort.name.split(" / ")[0]} entdecken
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service-Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card Kinder */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col h-full">
              <div className="aspect-[4/3] bg-gradient-to-br from-ocean-turquoise/20 to-ocean-deep/20 rounded-t-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-ocean-turquoise/30 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-ocean-deep" />
                  </div>
                  <p className="text-ocean-deep font-semibold text-sm">Kinderschwimmkurse</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-ocean-deep mb-4">
                  Kinderschwimmkurse
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  Spielerisch und sicher schwimmen lernen. Wir unterstützen Ihr Kind individuell mit modernen Methoden vom Seepferdchen bis Bronze.
                </p>
                <Link
                  href="/kurse"
                  className="block w-full bg-ocean-turquoise text-white text-center py-3 rounded-lg font-semibold hover:bg-ocean-deep transition-colors mt-auto"
                >
                  Kurse entdecken
                </Link>
              </div>
            </div>

            {/* Card Erwachsene */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col h-full">
              <div className="aspect-[4/3] bg-gradient-to-br from-ocean-deep/20 to-ocean-turquoise/20 rounded-t-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-ocean-deep/30 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-ocean-turquoise" />
                  </div>
                  <p className="text-ocean-deep font-semibold text-sm">Erwachsenenkurse</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-ocean-deep mb-4">
                  Kurse für Erwachsene
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  Anfängerkurse, Kraultechnik oder Schmetterling. Wir bieten das passende Training für jedes Niveau in kleinen, entspannten Gruppen.
                </p>
                <Link
                  href="/kurse"
                  className="block w-full bg-ocean-turquoise text-white text-center py-3 rounded-lg font-semibold hover:bg-ocean-deep transition-colors mt-auto"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>

            {/* Card Einzeltraining */}
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col h-full">
              <div className="aspect-[4/3] bg-gradient-to-br from-ocean-turquoise/20 via-ocean-deep/20 to-ocean-turquoise/20 rounded-t-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-ocean-turquoise/30 rounded-full flex items-center justify-center">
                    <Heart className="w-10 h-10 text-ocean-deep" />
                  </div>
                  <p className="text-ocean-deep font-semibold text-sm">Einzeltraining</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-ocean-deep mb-4">
                  Individuelles Einzeltraining
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  Persönliches 1-zu-1 Coaching für maximale Fortschritte. Vom Nichtschwimmer bis zum ambitionierten Triathleten.
                </p>
                <Link
                  href="/kurse"
                  className="block w-full bg-ocean-turquoise text-white text-center py-3 rounded-lg font-semibold hover:bg-ocean-deep transition-colors mt-auto"
                >
                  Termin anfragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kundenstimmen Sektion */}
      <section className="py-24 md:py-32 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-12 text-center">
            Das sagen andere Eltern über uns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-4 right-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Tolle Atmosphäre und super Trainer in Dieburg. Mein Sohn hat in Rekordzeit sein Seepferdchen gemacht!"
              </p>
              <p className="text-sm font-semibold text-ocean-deep">
                Sarah M. aus Dieburg
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-4 right-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Besonders die kleinen Gruppen in Mainz haben uns überzeugt. Maik und sein Team sind mit Herz dabei."
              </p>
              <p className="text-sm font-semibold text-ocean-deep">
                Thomas K. aus Mainz
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-4 right-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Professionelles Techniktraining für Erwachsene in Dresden. Endlich klappt das Kraulschwimmen!"
              </p>
              <p className="text-sm font-semibold text-ocean-deep">
                Maria L. aus Dresden
              </p>
            </div>
          </div>
          
          {/* Button für Google-Bewertungen */}
          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/Schwimmschule+Funk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-ocean-turquoise text-ocean-deep px-6 py-3 rounded-lg font-semibold hover:bg-ocean-turquoise hover:text-white transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"/>
              </svg>
              Alle Google-Bewertungen lesen
            </a>
          </div>
        </div>
      </section>

      {/* Lernen mit Erfolg Sektion */}
      <section className="py-24 md:py-32 bg-ocean-deep text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Lernen mit Erfolg
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Moderne Methoden */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-white stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Moderne Methoden
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Wir arbeiten mit fortschrittlichen Methoden für einen besonderen Bezug zum Wasser.
              </p>
            </div>

            {/* Erfahrenes Trainerteam */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-white stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Erfahrenes Trainerteam
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Einzigartige Herangehensweise und Freude am Schwimmsport.
              </p>
            </div>

            {/* Leidenschaft */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Flame className="w-6 h-6 md:w-8 md:h-8 text-white stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Leidenschaft
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Wunsch, einen aktiven Lebensstil zu fördern.
              </p>
            </div>

            {/* Eigene Trainerausbildung */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-white stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Eigene Trainerausbildung
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Garantierte Qualität durch interne Schulungen.
              </p>
            </div>

            {/* Kleine Gruppen */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-white stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Kleine Gruppen
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Individuelle Betreuung für maximalen Lernerfolg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kundenbewertungen Sektion */}
      <section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-12 text-center">
            Das sagen unsere Kunden auf Google
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
            {/* Review 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute top-4 right-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Maik und sein Team sind klasse! Mein Sohn hatte erst Angst, aber jetzt springt er mutig ins Becken. Danke an das Team in Dieburg!"
              </p>
              <p className="text-sm font-semibold text-ocean-deep">
                Familie M. – Kurs in Dieburg
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute top-4 right-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Professionelles Training für Erwachsene. Ich habe in nur 5 Stunden Kraulen gelernt. Sehr empfehlenswert in Mainz."
              </p>
              <p className="text-sm font-semibold text-ocean-deep">
                Alex P. – Kurs in Mainz
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute top-4 right-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "Tolle Organisation und super schnelle Rückmeldung vom Backoffice. So macht Schwimmenlernen Spaß!"
              </p>
              <p className="text-sm font-semibold text-ocean-deep">
                Familie S. – Kurs in Darmstadt
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/Schwimmschule+Funk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-ocean-turquoise text-ocean-deep px-6 py-3 rounded-lg font-semibold hover:bg-ocean-turquoise hover:text-white transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
              </svg>
              Alle 150+ Bewertungen ansehen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
