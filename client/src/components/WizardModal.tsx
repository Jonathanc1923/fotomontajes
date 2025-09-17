import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Sparkles, MessageCircle, Phone, ArrowLeft, ArrowRight } from "lucide-react";

interface WizardData {
  photoTypes: string[];
  themes: string[];
  contactMethod: 'whatsapp' | 'phone' | '';
  phoneNumber: string;
}

interface WizardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const photoTypeOptions = [
  { id: 'baby', label: 'Bebé', icon: '👶' },
  { id: 'child', label: 'Niño', icon: '🧒' },
  { id: 'pregnancy', label: 'Embarazo', icon: '🤱' },
  { id: 'family', label: 'Familiar', icon: '👨‍👩‍👧‍👦' },
  { id: 'birthday', label: 'Cumpleaños', icon: '🎂' },
  { id: 'baptism', label: 'Bautizo', icon: '⛪' },
];

const themeOptions = [
  { id: 'disney', label: 'Disney', icon: '🏰' },
  { id: 'marvel', label: 'Marvel', icon: '🦸' },
  { id: 'halloween', label: 'Halloween', icon: '🎃' },
  { id: 'christmas', label: 'Navidad', icon: '🎄' },
  { id: 'fantasy', label: 'Fantasía', icon: '🧚' },
  { id: 'others', label: 'Otros', icon: '✨' },
];

export default function WizardModal({ isOpen, onClose }: WizardModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [wizardData, setWizardData] = useState<WizardData>({
    photoTypes: [],
    themes: [],
    contactMethod: '',
    phoneNumber: '',
  });

  const progress = (currentStep / 3) * 100;

  const togglePhotoType = (type: string) => {
    setWizardData(prev => ({
      ...prev,
      photoTypes: prev.photoTypes.includes(type)
        ? prev.photoTypes.filter(t => t !== type)
        : [...prev.photoTypes, type]
    }));
  };

  const toggleTheme = (theme: string) => {
    setWizardData(prev => ({
      ...prev,
      themes: prev.themes.includes(theme)
        ? prev.themes.filter(t => t !== theme)
        : [...prev.themes, theme]
    }));
  };

  const handleContactMethod = (method: 'whatsapp' | 'phone') => {
    setWizardData(prev => ({ ...prev, contactMethod: method }));
    
    if (method === 'whatsapp') {
      // TODO: Save data to backend first
      console.log('Saving wizard data:', wizardData);
      window.open('https://wa.link/p15xd2', '_blank');
      onClose();
    }
  };

  const handlePhoneSubmit = () => {
    if (wizardData.phoneNumber.trim()) {
      // TODO: Save data to backend
      console.log('Saving wizard data with phone:', { ...wizardData, contactMethod: 'phone' });
      alert('¡Gracias! Te llamaremos en unos minutos 📞');
      onClose();
    }
  };

  const canProceedStep1 = wizardData.photoTypes.length > 0;
  const canProceedStep2 = wizardData.themes.length > 0;

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-fredoka text-purple-800 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Personaliza tu experiencia mágica
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-purple-600">
              <span>Paso {currentStep} de 3</span>
              <span>{Math.round(progress)}% completado</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step 1: Photo Types */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-800">
                ¿Qué tipo de fotomontaje quieres?
              </h3>
              <p className="text-purple-600">Puedes seleccionar múltiples opciones</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {photoTypeOptions.map((option) => (
                  <Card 
                    key={option.id}
                    className={`p-4 cursor-pointer hover-elevate transition-all duration-200 ${
                      wizardData.photoTypes.includes(option.id)
                        ? 'bg-purple-100 border-purple-400'
                        : 'hover:bg-purple-50'
                    }`}
                    onClick={() => togglePhotoType(option.id)}
                    data-testid={`card-photo-type-${option.id}`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{option.icon}</div>
                      <div className="font-medium text-purple-800">{option.label}</div>
                      {wizardData.photoTypes.includes(option.id) && (
                        <CheckCircle className="w-5 h-5 text-green-600 mx-auto mt-2" />
                      )}
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-end">
                <Button 
                  onClick={nextStep} 
                  disabled={!canProceedStep1}
                  className="bg-purple-600 hover:bg-purple-700"
                  data-testid="button-next-step1"
                >
                  Siguiente <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Themes */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-800">
                ¿Qué temática te gustaría?
              </h3>
              <p className="text-purple-600">Elige las temáticas que más te gusten</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {themeOptions.map((option) => (
                  <Card 
                    key={option.id}
                    className={`p-4 cursor-pointer hover-elevate transition-all duration-200 ${
                      wizardData.themes.includes(option.id)
                        ? 'bg-purple-100 border-purple-400'
                        : 'hover:bg-purple-50'
                    }`}
                    onClick={() => toggleTheme(option.id)}
                    data-testid={`card-theme-${option.id}`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{option.icon}</div>
                      <div className="font-medium text-purple-800">{option.label}</div>
                      {wizardData.themes.includes(option.id) && (
                        <CheckCircle className="w-5 h-5 text-green-600 mx-auto mt-2" />
                      )}
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  data-testid="button-prev-step2"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Anterior
                </Button>
                <Button 
                  onClick={nextStep} 
                  disabled={!canProceedStep2}
                  className="bg-purple-600 hover:bg-purple-700"
                  data-testid="button-next-step2"
                >
                  Siguiente <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Method */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-800">
                ¿Cómo deseas contratar?
              </h3>
              <p className="text-purple-600">Elige tu método de contacto preferido</p>
              
              <div className="grid gap-4">
                <Card className="p-6 hover-elevate cursor-pointer" onClick={() => handleContactMethod('whatsapp')} data-testid="card-contact-whatsapp">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 p-3 rounded-full text-white">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Por WhatsApp</h4>
                      <p className="text-gray-600">Contacto inmediato y fácil</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover-elevate cursor-pointer" onClick={() => handleContactMethod('phone')} data-testid="card-contact-phone">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-full text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Por llamada</h4>
                      <p className="text-gray-600">Te llamaremos en unos minutos</p>
                    </div>
                  </div>
                </Card>

                {wizardData.contactMethod === 'phone' && (
                  <Card className="p-4 bg-blue-50">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Ingresa tu número de teléfono:
                      </label>
                      <Input
                        type="tel"
                        placeholder="Ej: 999 888 777"
                        value={wizardData.phoneNumber}
                        onChange={(e) => setWizardData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                        className="w-full"
                        data-testid="input-phone-number"
                      />
                      <Button 
                        onClick={handlePhoneSubmit}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        disabled={!wizardData.phoneNumber.trim()}
                        data-testid="button-submit-phone"
                      >
                        Confirmar y solicitar llamada
                      </Button>
                    </div>
                  </Card>
                )}
              </div>
              
              <div className="flex justify-start">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  data-testid="button-prev-step3"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Anterior
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}