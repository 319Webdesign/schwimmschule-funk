"use client";

import { useState } from "react";
import {
  Download,
  FileText,
  TrendingUp,
  Users,
  BarChart3,
  Filter,
} from "lucide-react";

interface Teilnehmer {
  id: string;
  name: string;
  kurs: string;
  standort: string;
  bezahlt: boolean;
  betrag: number;
  anmeldedatum: string;
}

const teilnehmer: Teilnehmer[] = [
  {
    id: "1",
    name: "Max Mustermann",
    kurs: "Anfängerkurs für Kinder (4-6 Jahre)",
    standort: "Darmstadt",
    bezahlt: true,
    betrag: 180,
    anmeldedatum: "2024-04-15",
  },
  {
    id: "2",
    name: "Emma Schmidt",
    kurs: "Fortgeschrittenenkurs (7-10 Jahre)",
    standort: "Darmstadt",
    bezahlt: true,
    betrag: 200,
    anmeldedatum: "2024-04-16",
  },
  {
    id: "3",
    name: "Lukas Weber",
    kurs: "Seepferdchen-Kurs",
    standort: "Dieburg",
    bezahlt: false,
    betrag: 175,
    anmeldedatum: "2024-04-17",
  },
  {
    id: "4",
    name: "Sophie Müller",
    kurs: "Bronze-Kurs",
    standort: "Dieburg",
    bezahlt: true,
    betrag: 190,
    anmeldedatum: "2024-04-18",
  },
  {
    id: "5",
    name: "Noah Fischer",
    kurs: "Anfängerkurs für Kinder",
    standort: "Dresden",
    bezahlt: true,
    betrag: 185,
    anmeldedatum: "2024-04-19",
  },
  {
    id: "6",
    name: "Mia Wagner",
    kurs: "Erwachsenen-Kurs",
    standort: "Dresden",
    bezahlt: false,
    betrag: 220,
    anmeldedatum: "2024-04-20",
  },
  {
    id: "7",
    name: "Ben Becker",
    kurs: "Kleinkind-Kurs (3-4 Jahre)",
    standort: "Mainz",
    bezahlt: true,
    betrag: 170,
    anmeldedatum: "2024-04-21",
  },
  {
    id: "8",
    name: "Lina Hoffmann",
    kurs: "Silber-Kurs",
    standort: "Mainz",
    bezahlt: true,
    betrag: 195,
    anmeldedatum: "2024-04-22",
  },
  {
    id: "9",
    name: "Finn Schulz",
    kurs: "Anfängerkurs für Kinder (4-6 Jahre)",
    standort: "Darmstadt",
    bezahlt: true,
    betrag: 180,
    anmeldedatum: "2024-04-23",
  },
  {
    id: "10",
    name: "Hannah Klein",
    kurs: "Fortgeschrittenenkurs (7-10 Jahre)",
    standort: "Darmstadt",
    bezahlt: false,
    betrag: 200,
    anmeldedatum: "2024-04-24",
  },
];

const standorte = ["Alle", "Darmstadt", "Dieburg", "Dresden", "Mainz"];

export default function AdminPage() {
  const [selectedStandort, setSelectedStandort] = useState<string>("Alle");

  const filteredTeilnehmer =
    selectedStandort === "Alle"
      ? teilnehmer
      : teilnehmer.filter((t) => t.standort === selectedStandort);

  const umsatzDieserMonat = teilnehmer
    .filter((t) => t.bezahlt)
    .reduce((sum, t) => sum + t.betrag, 0);

  const aktiveTeilnehmer = teilnehmer.length;
  const bezahlteTeilnehmer = teilnehmer.filter((t) => t.bezahlt).length;
  const auslastung = Math.round((bezahlteTeilnehmer / aktiveTeilnehmer) * 100);

  const handleExportCSV = () => {
    const csvContent =
      "Name,Kurs,Standort,Betrag,Bezahlt,Anmeldedatum\n" +
      filteredTeilnehmer
        .map(
          (t) =>
            `${t.name},${t.kurs},${t.standort},${t.betrag},${t.bezahlt ? "Ja" : "Nein"},${t.anmeldedatum}`
        )
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `kursliste_${selectedStandort === "Alle" ? "alle" : selectedStandort}_${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSammelrechnungen = () => {
    // Platzhalter für Sammelrechnungen-Generierung
    alert("Sammelrechnungen werden generiert...\n\nDiese Funktion wird später mit der Datenbankanbindung implementiert.");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">
                  Verwaltung der Schwimmschule Funk
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleExportCSV}
                  className="bg-ocean-turquoise text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-deep transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Kursliste (CSV) exportieren
                </button>
                <button
                  onClick={handleSammelrechnungen}
                  className="bg-ocean-deep text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-turquoise transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Sammelrechnungen generieren
                </button>
              </div>
            </div>

            {/* Statistiken */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-ocean-turquoise to-ocean-deep text-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-100 text-sm">Umsatz diesen Monat</span>
                  <TrendingUp className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold">{umsatzDieserMonat.toLocaleString("de-DE")}€</p>
              </div>
              <div className="bg-gradient-to-br from-ocean-turquoise to-ocean-deep text-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-100 text-sm">Aktive Teilnehmer</span>
                  <Users className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold">{aktiveTeilnehmer}</p>
              </div>
              <div className="bg-gradient-to-br from-ocean-turquoise to-ocean-deep text-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-100 text-sm">Auslastung</span>
                  <BarChart3 className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold">{auslastung}%</p>
              </div>
            </div>
          </div>

          {/* Filter und Tabelle */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-ocean-deep">Teilnehmerübersicht</h2>
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-ocean-turquoise" />
                <select
                  value={selectedStandort}
                  onChange={(e) => setSelectedStandort(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 text-ocean-deep focus:outline-none focus:ring-2 focus:ring-ocean-turquoise"
                >
                  {standorte.map((standort) => (
                    <option key={standort} value={standort}>
                      {standort}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-ocean-deep uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-ocean-deep uppercase tracking-wider">
                      Kurs
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-ocean-deep uppercase tracking-wider">
                      Standort
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-ocean-deep uppercase tracking-wider">
                      Betrag
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-ocean-deep uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-ocean-deep uppercase tracking-wider">
                      Anmeldedatum
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTeilnehmer.map((t) => (
                    <tr key={t.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-ocean-deep">
                        {t.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-700">
                        {t.kurs}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {t.standort}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-ocean-deep">
                        {t.betrag}€
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            t.bezahlt
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {t.bezahlt ? "Bezahlt" : "Offen"}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                        {new Date(t.anmeldedatum).toLocaleDateString("de-DE")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredTeilnehmer.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">Keine Teilnehmer für diesen Standort gefunden.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
