import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const standorte = [
  {
    id: "darmstadt",
    name: "Darmstadt",
    description: "Unsere Schwimmschule in Darmstadt bietet Kurse für alle Altersgruppen in modernen Schwimmbädern mit professioneller Ausstattung.",
    seoText: "Die Schwimmschule Funk in Darmstadt ist Ihr kompetenter Partner für Schwimmkurse in der Region. Wir bieten Anfänger- und Fortgeschrittenenkurse für Kinder und Erwachsene. Unsere erfahrenen Schwimmlehrer vermitteln nicht nur die richtige Technik, sondern auch die Freude am Schwimmen. Die Kurse finden in zentral gelegenen Schwimmbädern statt und sind optimal auf die Bedürfnisse unserer Teilnehmer abgestimmt.",
  },
  {
    id: "dieburg",
    name: "Dieburg",
    description: "In Dieburg finden regelmäßig Schwimmkurse statt, die von qualifizierten Trainern geleitet werden.",
    seoText: "Schwimmen lernen in Dieburg - Die Schwimmschule Funk bietet Ihnen professionelle Schwimmkurse in Dieburg an. Ob Seepferdchen, Bronze, Silber oder Gold, wir begleiten Ihr Kind auf dem Weg zum sicheren Schwimmer. Unsere Kurse zeichnen sich durch kleine Gruppen, individuelle Betreuung und eine spielerische Lernatmosphäre aus. Melden Sie sich noch heute für einen Kurs in Dieburg an.",
  },
  {
    id: "dresden",
    name: "Dresden",
    description: "Unsere Standort in Dresden bietet eine breite Palette an Schwimmkursen für verschiedene Leistungsniveaus.",
    seoText: "Schwimmschule Funk Dresden - Professionelle Schwimmkurse in der sächsischen Landeshauptstadt. Wir bieten Kurse für Kinder ab 4 Jahren sowie Erwachsenenkurse an. Unsere Schwimmlehrer sind ausgebildete Fachkräfte, die mit viel Geduld und Einfühlungsvermögen arbeiten. Die Kurse finden in modernen Schwimmbädern statt und sind optimal auf die Bedürfnisse der Teilnehmer abgestimmt. Buchen Sie jetzt Ihren Schwimmkurs in Dresden.",
  },
  {
    id: "mainz",
    name: "Mainz / Budenheim",
    description: "In Mainz und Budenheim bieten wir flexible Schwimmkurse für die ganze Familie an.",
    seoText: "Schwimmschule Funk Mainz und Budenheim - Ihr Partner für Schwimmkurse in der Region Mainz. Wir bieten sowohl Kurse für Anfänger als auch für Fortgeschrittene an. Unsere Standorte in Mainz und Budenheim sind gut erreichbar und bieten optimale Bedingungen für das Schwimmenlernen. Die Kurse werden von erfahrenen Trainern geleitet, die auf eine individuelle Betreuung großen Wert legen. Informieren Sie sich über unsere aktuellen Kursangebote in Mainz und Budenheim.",
  },
];

export default function StandortePage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4 text-center">
            Unsere Standorte
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Schwimmen lernen an vier Standorten in Deutschland
          </p>

          <div className="space-y-8">
            {standorte.map((standort) => (
              <div
                key={standort.id}
                className="bg-white border-2 border-gray-100 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-ocean-turquoise flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-ocean-deep mb-3">
                      {standort.name}
                    </h2>
                    <p className="text-gray-700 mb-4 text-lg">
                      {standort.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {standort.seoText}
                      </p>
                    </div>
                    <Link
                      href={`/kurse?standort=${standort.id}`}
                      className="inline-flex items-center gap-2 text-ocean-turquoise font-semibold hover:text-ocean-deep transition-colors"
                    >
                      Kurse in {standort.name} ansehen
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
