"use client";

import { useState } from "react";
import { Send, Mail, Phone } from "lucide-react";

interface KontaktformularProps {
  standort: string;
}

export default function Kontaktformular({ standort }: KontaktformularProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simuliere Formularversand (später mit echter API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", telefon: "", nachricht: "" });
    }, 1000);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-ocean-deep mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-turquoise focus:border-transparent"
              placeholder="Ihr Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-ocean-deep mb-2">
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-turquoise focus:border-transparent"
              placeholder="ihre@email.de"
            />
          </div>
        </div>

        <div>
          <label htmlFor="telefon" className="block text-sm font-semibold text-ocean-deep mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-turquoise focus:border-transparent"
            placeholder="+49 (0) XXX XXX XXX"
          />
        </div>

        <div>
          <label htmlFor="nachricht" className="block text-sm font-semibold text-ocean-deep mb-2">
            Nachricht *
          </label>
          <textarea
            id="nachricht"
            name="nachricht"
            required
            rows={5}
            value={formData.nachricht}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-turquoise focus:border-transparent resize-none"
            placeholder={`Ihre Nachricht bezüglich Schwimmkurse in ${standort}...`}
          />
        </div>

        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir melden uns schnellstmöglich bei Ihnen.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-ocean-turquoise text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-deep transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            "Wird gesendet..."
          ) : (
            <>
              <Send className="w-5 h-5" />
              Nachricht senden
            </>
          )}
        </button>

        <div className="text-sm text-gray-600 pt-4 border-t border-gray-200">
          <p className="mb-2">Alternativ erreichen Sie uns auch direkt:</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-ocean-turquoise" />
              <a href="mailto:info@schwimmschule-funk.de" className="text-ocean-turquoise hover:text-ocean-deep">
                info@schwimmschule-funk.de
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-ocean-turquoise" />
              <a href="tel:+49XXXXXXXXX" className="text-ocean-turquoise hover:text-ocean-deep">
                +49 (0) XXX XXX XXX
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
