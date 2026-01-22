import { Suspense } from "react";
import KurseContent from "@/components/KurseContent";

export default function KursePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-ocean-deep">Lade Kurse...</p></div>}>
      <KurseContent />
    </Suspense>
  );
}
