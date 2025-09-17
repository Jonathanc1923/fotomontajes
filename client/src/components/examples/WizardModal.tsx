import { useState } from 'react';
import WizardModal from '../WizardModal';
import { Button } from '@/components/ui/button';

export default function WizardModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>
        Open Wizard Modal
      </Button>
      <WizardModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}