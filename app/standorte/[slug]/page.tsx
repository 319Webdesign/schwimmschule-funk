import { notFound } from "next/navigation";
import { MapPin, Clock, Euro, Users, AlertCircle, ExternalLink } from "lucide-react";
import KursUebersicht from "@/components/KursUebersicht";

interface Kurs {
  id: string;
  name: string;
  kategorie: "kinder" | "erwachsene" | "einzel";
  tag: string;
  uhrzeit: string;
  alter: string;
  preis: number;
  plaetzeFrei: number;
  maxPlaetze: number;
}

interface StandortData {
  slug: string;
  name: string;
  displayName: string;
  adresse: string;
  adresseLink: string;
  badge: string;
  headline: string;
  beschreibung: string;
  seoText: string;
  kurse: Kurs[];
}

const standortDaten: Record<string, StandortData> = {
  darmstadt: {
    slug: "darmstadt",
    name: "Darmstadt",
    displayName: "Darmstadt",
    adresse: "Musterstraße 123, 64283 Darmstadt",
    adresseLink: "https://maps.google.com/?q=Musterstraße+123,+64283+Darmstadt",
    badge: "Schwimmschule Funk Darmstadt",
    headline: "Schwimmkurse in Darmstadt – Sicher & mit Freude lernen",
    beschreibung: "Vom Anfänger bis zum Schmetterlingskurs – wir bieten in Darmstadt kleine Gruppen und moderne Herangehensweisen.",
    seoText: "Schwimmschule Darmstadt - Professionelle Kinderschwimmkurse Darmstadt und Erwachsenenschwimmkurse Darmstadt. Unsere Schwimmkurse in Darmstadt finden in zentral gelegenen Schwimmbädern statt und sind optimal auf die Bedürfnisse unserer Teilnehmer abgestimmt. Ob Techniktraining, Schmetterlingsschwimmen oder Anfängerkurse – in Darmstadt finden Sie das passende Angebot. Buchen Sie jetzt Ihren Schwimmkurs in Darmstadt.",
    kurse: [
      { id: "1", name: "Anfängerkurs für Kinder (4-6 Jahre)", kategorie: "kinder", tag: "Montag", uhrzeit: "15:00-16:00", alter: "4-6 Jahre", preis: 180, plaetzeFrei: 3, maxPlaetze: 8 },
      { id: "2", name: "Fortgeschrittenenkurs (7-10 Jahre)", kategorie: "kinder", tag: "Dienstag", uhrzeit: "16:00-17:00", alter: "7-10 Jahre", preis: 200, plaetzeFrei: 5, maxPlaetze: 10 },
      { id: "3", name: "Seepferdchen-Kurs", kategorie: "kinder", tag: "Mittwoch", uhrzeit: "14:30-15:30", alter: "5-7 Jahre", preis: 175, plaetzeFrei: 2, maxPlaetze: 8 },
      { id: "4", name: "Erwachsenen-Kurs Anfänger", kategorie: "erwachsene", tag: "Donnerstag", uhrzeit: "19:00-20:00", alter: "Ab 16 Jahre", preis: 220, plaetzeFrei: 6, maxPlaetze: 12 },
      { id: "5", name: "Schmetterlingskurs", kategorie: "erwachsene", tag: "Freitag", uhrzeit: "18:00-19:00", alter: "Ab 16 Jahre", preis: 240, plaetzeFrei: 4, maxPlaetze: 10 },
    ],
  },
  dieburg: {
    slug: "dieburg",
    name: "Dieburg",
    displayName: "Dieburg",
    adresse: "Beispielweg 45, 64807 Dieburg",
    adresseLink: "https://maps.google.com/?q=Beispielweg+45,+64807+Dieburg",
    badge: "Schwimmschule Funk Dieburg",
    headline: "Schwimmkurse in Dieburg – Sicher & mit Freude lernen",
    beschreibung: "Vom Anfänger bis zum Schmetterlingskurs – wir bieten in Dieburg kleine Gruppen und moderne Herangehensweisen.",
    seoText: "Schwimmschule Dieburg - Kinderschwimmkurs Dieburg für alle Altersgruppen. Unsere Kurse zeichnen sich durch kleine Gruppen, individuelle Betreuung und eine spielerische Lernatmosphäre aus. Ob Techniktraining, Schmetterlingsschwimmen oder Anfängerkurse – in Dieburg finden Sie professionelle Schwimmkurse. Melden Sie sich noch heute für einen Schwimmkurs in Dieburg an.",
    kurse: [
      { id: "1", name: "Seepferdchen-Kurs", kategorie: "kinder", tag: "Mittwoch", uhrzeit: "14:30-15:30", alter: "5-7 Jahre", preis: 175, plaetzeFrei: 2, maxPlaetze: 8 },
      { id: "2", name: "Bronze-Kurs", kategorie: "kinder", tag: "Donnerstag", uhrzeit: "15:30-16:30", alter: "7-10 Jahre", preis: 190, plaetzeFrei: 7, maxPlaetze: 10 },
      { id: "3", name: "Silber-Kurs", kategorie: "kinder", tag: "Freitag", uhrzeit: "16:00-17:00", alter: "8-12 Jahre", preis: 195, plaetzeFrei: 5, maxPlaetze: 10 },
      { id: "4", name: "Erwachsenen-Kurs", kategorie: "erwachsene", tag: "Dienstag", uhrzeit: "19:00-20:00", alter: "Ab 16 Jahre", preis: 220, plaetzeFrei: 8, maxPlaetze: 12 },
    ],
  },
  mainz: {
    slug: "mainz",
    name: "Mainz",
    displayName: "Mainz / Budenheim",
    adresse: "Hauptstraße 78, 55116 Mainz",
    adresseLink: "https://maps.google.com/?q=Hauptstraße+78,+55116+Mainz",
    badge: "Schwimmschule Funk Mainz",
    headline: "Schwimmkurse in Mainz – Sicher & mit Freude lernen",
    beschreibung: "Vom Anfänger bis zum Schmetterlingskurs – wir bieten in Mainz kleine Gruppen und moderne Herangehensweisen.",
    seoText: "Schwimmschule Mainz - Kinderschwimmkurs Mainz und Erwachsenenschwimmkurs Mainz. Die Kurse werden von erfahrenen Trainern geleitet, die auf eine individuelle Betreuung großen Wert legen. Ob Techniktraining, Schmetterlingsschwimmen oder Anfängerkurse – in Mainz und Budenheim finden Sie professionelle Schwimmkurse. Informieren Sie sich über unsere aktuellen Kursangebote in Mainz und Budenheim.",
    kurse: [
      { id: "1", name: "Kleinkind-Kurs (3-4 Jahre)", kategorie: "kinder", tag: "Mittwoch", uhrzeit: "14:00-14:45", alter: "3-4 Jahre", preis: 170, plaetzeFrei: 1, maxPlaetze: 6 },
      { id: "2", name: "Silber-Kurs", kategorie: "kinder", tag: "Donnerstag", uhrzeit: "16:00-17:00", alter: "8-12 Jahre", preis: 195, plaetzeFrei: 8, maxPlaetze: 10 },
      { id: "3", name: "Erwachsenen-Kurs", kategorie: "erwachsene", tag: "Dienstag", uhrzeit: "19:00-20:00", alter: "Ab 16 Jahre", preis: 220, plaetzeFrei: 6, maxPlaetze: 12 },
      { id: "4", name: "Techniktraining Kraul", kategorie: "erwachsene", tag: "Freitag", uhrzeit: "18:30-19:30", alter: "Ab 16 Jahre", preis: 240, plaetzeFrei: 5, maxPlaetze: 10 },
    ],
  },
  dresden: {
    slug: "dresden",
    name: "Dresden",
    displayName: "Dresden",
    adresse: "Schwimmbadstraße 12, 01067 Dresden",
    adresseLink: "https://maps.google.com/?q=Schwimmbadstraße+12,+01067+Dresden",
    badge: "Schwimmschule Funk Dresden",
    headline: "Schwimmkurse in Dresden – Sicher & mit Freude lernen",
    beschreibung: "Vom Anfänger bis zum Schmetterlingskurs – wir bieten in Dresden kleine Gruppen und moderne Herangehensweisen.",
    seoText: "Schwimmschule Dresden - Kinderschwimmkurs Dresden und Erwachsenenschwimmkurs Dresden. Die Kurse finden in modernen Schwimmbädern statt und sind optimal auf die Bedürfnisse der Teilnehmer abgestimmt. Ob Techniktraining, Schmetterlingsschwimmen oder Anfängerkurse – in Dresden finden Sie professionelle Schwimmkurse für jedes Niveau. Buchen Sie jetzt Ihren Schwimmkurs in Dresden.",
    kurse: [
      { id: "1", name: "Anfängerkurs für Kinder", kategorie: "kinder", tag: "Montag", uhrzeit: "15:00-16:00", alter: "4-6 Jahre", preis: 185, plaetzeFrei: 4, maxPlaetze: 8 },
      { id: "2", name: "Erwachsenen-Kurs", kategorie: "erwachsene", tag: "Dienstag", uhrzeit: "19:00-20:00", alter: "Ab 16 Jahre", preis: 220, plaetzeFrei: 6, maxPlaetze: 12 },
      { id: "3", name: "Bronze-Kurs", kategorie: "kinder", tag: "Donnerstag", uhrzeit: "15:30-16:30", alter: "7-10 Jahre", preis: 190, plaetzeFrei: 7, maxPlaetze: 10 },
      { id: "4", name: "Schmetterlingskurs", kategorie: "erwachsene", tag: "Freitag", uhrzeit: "18:00-19:00", alter: "Ab 16 Jahre", preis: 240, plaetzeFrei: 3, maxPlaetze: 10 },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(standortDaten).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const standort = standortDaten[params.slug];
  
  if (!standort) {
    return {
      title: "Standort nicht gefunden",
    };
  }

  return {
    title: `Schwimmkurse in ${standort.displayName} - Schwimmschule Funk`,
    description: standort.seoText,
  };
}

export default function StandortPage({ params }: { params: { slug: string } }) {
  const standort = standortDaten[params.slug];

  if (!standort) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero-Split-Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            {/* Bild links (Mobile: oben) */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-ocean-turquoise/20 to-ocean-deep/20 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 bg-ocean-turquoise/30 rounded-full flex items-center justify-center">
                      <MapPin className="w-16 h-16 text-ocean-deep" />
                    </div>
                    <p className="text-ocean-deep font-semibold text-xl mb-2">
                      Schwimmhalle {standort.displayName}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Platzhalter-Bild
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content rechts (Mobile: unten) */}
            <div className="order-1 md:order-2">
              <div className="inline-block bg-ocean-deep text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                {standort.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6 leading-tight">
                {standort.headline}
              </h1>
              
              {/* Kontakt-Info */}
              <div className="mb-6 space-y-3">
                <a
                  href={standort.adresseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ocean-turquoise hover:text-ocean-deep transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="text-gray-700">{standort.adresse}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="bg-gray-100 rounded-lg p-3 h-32 flex items-center justify-center">
                  <p className="text-sm text-gray-600">Karten-Vorschau</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {standort.beschreibung}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interaktive Kursübersicht */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-8 text-center">
              Aktuelle Kurse in {standort.displayName}
            </h2>
            <KursUebersicht kurse={standort.kurse} standort={standort.displayName} />
          </div>
        </div>
      </section>

      {/* SEO-Text-Block */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-ocean-deep mb-6">
                Schwimmschule {standort.displayName} – Professionelle Schwimmkurse für jedes Niveau
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  {standort.seoText}
                </p>
                <p>
                  Unsere Schwimmschule in {standort.displayName} bietet ein umfassendes Kursangebot für Anfänger und Fortgeschrittene. 
                  Ob Sie Techniktraining für Kraul, Brust oder Schmetterlingsschwimmen suchen, oder einen Anfängerkurs für sich oder 
                  Ihr Kind benötigen – wir haben das passende Angebot. Unsere erfahrenen Trainer arbeiten mit modernen Methoden und 
                  legen großen Wert auf individuelle Betreuung in kleinen Gruppen.
                </p>
                <p>
                  Die Schwimmkurse in {standort.displayName} finden in modernen, gut ausgestatteten Schwimmbädern statt. 
                  Für Anfänger bieten wir spezielle Kurse, die Schritt für Schritt an das Element Wasser heranführen. 
                  Fortgeschrittene können ihr Techniktraining in unseren spezialisierten Kursen verbessern, sei es für 
                  Schmetterlingsschwimmen, Kraultechnik oder andere Schwimmstile.
                </p>
                <p>
                  Melden Sie sich noch heute für einen Schwimmkurs in {standort.displayName} an und erleben Sie, 
                  wie viel Freude Schwimmen machen kann. Unsere Kurse sind für alle Altersgruppen geeignet – von 
                  Kleinkindern bis zu Erwachsenen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
