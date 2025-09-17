import { useState } from "react";
import MagicalHero from "@/components/MagicalHero";
import WizardModal from "@/components/WizardModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const startWizard = () => {
    setIsWizardOpen(true);
  };

  const closeWizard = () => {
    setIsWizardOpen(false);
  };

  return (
    <div className="min-h-screen">
      <MagicalHero onStartWizard={startWizard} />
      <WizardModal isOpen={isWizardOpen} onClose={closeWizard} />
      <WhatsAppButton />
    </div>
  );
}