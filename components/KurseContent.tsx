"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Users, Euro, AlertCircle } from "lucide-react";

interface Kurs {
  id: string;
  name: string;
  standort: string;
  standortId: string;
  preis: number;
  plaetzeFrei: number;
  maxPlaetze: number;
  startDatum: string;
  wochentag: string;
  uhrzeit: string;
}

const kurse: Kurs[] = [
  {
    id: "1",
    name: "Anfängerkurs für Kinder (4-6 Jahre)",
    standort: "Darmstadt",
    standortId: "darmstadt",
    preis: 180,
    plaetzeFrei: 3,
    maxPlaetze: 8,
    startDatum: "2024-05-15",
    wochentag: "Montag",
    uhrzeit: "15:00-16:00",
  },
  {
    id: "2",
    name: "Fortgeschrittenenkurs (7-10 Jahre)",
    standort: "Darmstadt",
    standortId: "darmstadt",
    preis: 200,
    plaetzeFrei: 5,
    maxPlaetze: 10,
    startDatum: "2024-05-16",
    wochentag: "Dienstag",
    uhrzeit: "16:00-17:00",
  },
  {
    id: "3",
    name: "Seepferdchen-Kurs",
    standort: "Dieburg",
    standortId: "dieburg",
    preis: 175,
    plaetzeFrei: 2,
    maxPlaetze: 8,
    startDatum: "2024-05-17",
    wochentag: "Mittwoch",
    uhrzeit: "14:30-15:30",
  },
  {
    id: "4",
    name: "Bronze-Kurs",
    standort: "Dieburg",
    standortId: "dieburg",
    preis: 190,
    plaetzeFrei: 7,
    maxPlaetze: 10,
    startDatum: "2024-05-18",
    wochentag: "Donnerstag",
    uhrzeit: "15:30-16:30",
  },
  {
    id: "5",
    name: "Anfängerkurs für Kinder",
    standort: "Dresden",
    standortId: "dresden",
    preis: 185,
    plaetzeFrei: 4,
    maxPlaetze: 8,
    startDatum: "2024-05-20",
    wochentag: "Montag",
    uhrzeit: "15:00-16:00",
  },
  {
    id: "6",
    name: "Erwachsenen-Kurs",
    standort: "Dresden",
    standortId: "dresden",
    preis: 220,
    plaetzeFrei: 6,
    maxPlaetze: 12,
    startDatum: "2024-05-21",
    wochentag: "Dienstag",
    uhrzeit: "19:00-20:00",
  },
  {
    id: "7",
    name: "Kleinkind-Kurs (3-4 Jahre)",
    standort: "Mainz",
    standortId: "mainz",
    preis: 170,
    plaetzeFrei: 1,
    maxPlaetze: 6,
    startDatum: "2024-05-22",
    wochentag: "Mittwoch",
    uhrzeit: "14:00-14:45",
  },
  {
    id: "8",
    name: "Silber-Kurs",
    standort: "Mainz",
    standortId: "mainz",
    preis: 195,
    plaetzeFrei: 8,
    maxPlaetze: 10,
    startDatum: "2024-05-23",
    wochentag: "Donnerstag",
    uhrzeit: "16:00-17:00",
  },
];

const standorte = ["Alle", "Darmstadt", "Dieburg", "Dresden", "Mainz"];

const standortMapping: Record<string, string> = {
  darmstadt: "Darmstadt",
  dieburg: "Dieburg",
  dresden: "Dresden",
  mainz: "Mainz",
};

export default function KurseContent() {
  const searchParams = useSearchParams();
  const standortParam = searchParams.get("standort");
  const initialStandort = standortParam && standortMapping[standortParam] 
    ? standortMapping[standortParam] 
    : "Alle";
  
  const [selectedStandort, setSelectedStandort] = useState<string>(initialStandort);

  useEffect(() => {
    if (standortParam && standortMapping[standortParam]) {
      setSelectedStandort(standortMapping[standortParam]);
    }
  }, [standortParam]);

  const filteredKurse = selectedStandort === "Alle"
    ? kurse
    : kurse.filter((kurs) => kurs.standort === selectedStandort);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4 text-center">
            Kursübersicht
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Finden Sie den passenden Schwimmkurs für sich oder Ihr Kind
          </p>

          {/* Filter */}
          <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
            <label className="block text-sm font-semibold text-ocean-deep mb-3">
              Standort filtern:
            </label>
            <div className="flex flex-wrap gap-2">
              {standorte.map((standort) => (
                <button
                  key={standort}
                  onClick={() => setSelectedStandort(standort)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedStandort === standort
                      ? "bg-ocean-turquoise text-white"
                      : "bg-gray-100 text-ocean-deep hover:bg-gray-200"
                  }`}
                >
                  {standort}
                </button>
              ))}
            </div>
          </div>

          {/* Kursliste */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredKurse.map((kurs) => (
              <div
                key={kurs.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-ocean-deep flex-1">
                    {kurs.name}
                  </h3>
                  {kurs.plaetzeFrei <= 3 && (
                    <span className="ml-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      Nur noch {kurs.plaetzeFrei} Plätze frei
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-ocean-turquoise" />
                    <span>{kurs.standort}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-ocean-turquoise" />
                    <span>
                      {kurs.wochentag}, {kurs.uhrzeit}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Euro className="w-5 h-5 text-ocean-turquoise" />
                    <span className="font-semibold text-ocean-deep">
                      {kurs.preis}€
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">
                      Verfügbare Plätze:
                    </span>
                    <span className="font-semibold text-ocean-deep">
                      {kurs.plaetzeFrei} / {kurs.maxPlaetze}
                    </span>
                  </div>
                  <button className="w-full bg-ocean-turquoise text-white py-2 rounded-lg font-semibold hover:bg-ocean-deep transition-colors">
                    Jetzt buchen
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredKurse.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-600 text-lg">
                Keine Kurse für diesen Standort gefunden.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
