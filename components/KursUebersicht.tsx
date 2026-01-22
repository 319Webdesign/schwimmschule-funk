"use client";

import { useState } from "react";
import { Clock, Euro, Users, AlertCircle, ArrowRight } from "lucide-react";

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

interface KursUebersichtProps {
  kurse: Kurs[];
  standort: string;
}

export default function KursUebersicht({ kurse, standort }: KursUebersichtProps) {
  const [filter, setFilter] = useState<"alle" | "kinder" | "erwachsene" | "einzel">("alle");

  const gefilterteKurse =
    filter === "alle"
      ? kurse
      : kurse.filter((kurs) => kurs.kategorie === filter);

  const kategorien = [
    { id: "alle", label: "Alle Kurse" },
    { id: "kinder", label: "Kinder" },
    { id: "erwachsene", label: "Erwachsene" },
    { id: "einzel", label: "Einzel" },
  ];

  return (
    <div>
      {/* Filter-Leiste */}
      <div className="mb-8 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-2 justify-center">
          {kategorien.map((kat) => (
            <button
              key={kat.id}
              onClick={() => setFilter(kat.id as typeof filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === kat.id
                  ? "bg-ocean-turquoise text-white"
                  : "bg-gray-100 text-ocean-deep hover:bg-gray-200"
              }`}
            >
              {kat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Kurs-Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gefilterteKurse.map((kurs) => (
          <div
            key={kurs.id}
            className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-ocean-turquoise transition-all duration-300 flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-ocean-deep mb-4">
                {kurs.name}
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-ocean-turquoise" />
                  <span>
                    {kurs.tag}, {kurs.uhrzeit}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-5 h-5 text-ocean-turquoise" />
                  <span>{kurs.alter}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Euro className="w-5 h-5 text-ocean-turquoise" />
                  <span className="font-semibold text-ocean-deep text-lg">
                    {kurs.preis}€
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Verfügbarkeit:</span>
                  <span className="font-semibold text-ocean-deep">
                    {kurs.plaetzeFrei} / {kurs.maxPlaetze} Plätze
                  </span>
                </div>
                {kurs.plaetzeFrei <= 3 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-semibold text-red-700">
                      Nur noch {kurs.plaetzeFrei} Plätze frei
                    </span>
                  </div>
                )}
              </div>
            </div>

            <button className="w-full bg-ocean-turquoise text-white py-3 rounded-lg font-semibold hover:bg-ocean-deep transition-colors flex items-center justify-center gap-2 mt-auto">
              Jetzt Platz sichern
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {gefilterteKurse.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-600 text-lg">
            Keine Kurse für diese Kategorie gefunden.
          </p>
        </div>
      )}
    </div>
  );
}
