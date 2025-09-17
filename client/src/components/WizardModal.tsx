import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Sparkles, MessageCircle, Phone, ArrowLeft, ArrowRight } from "lucide-react";
import logoImg from "@assets/logo album magico_1758127287037.png";

// Import sample images for wizard
import babyImg from "@assets/87735100-a949-4908-9b57-70f38a2ad938_1758126876414.jpg";
import childImg from "@assets/492330742_1240768438048772_8307688729786010659_n_1758126876417.jpg";
import pregnancyImg from "@assets/foto15_1758126876415.jpg";
import familyImg from "@assets/48b44a95-4f4f-4662-bd86-7f0e518e6142_1758126876416.jpg";
import birthdayImg from "@assets/542b0a32-3e11-4f3d-8691-a2a24c855bb8_1758126876419.jpg";
import baptismImg from "@assets/2e4124f7-dc68-4be9-a6ab-e8684e3b707e_1758126876415.jpg";

import disneyImg from "@assets/91d832aa-62de-4a65-bfc6-f0054089cf7b_1758126876418.jpg";
import marvelImg from "@assets/492330742_1240768438048772_8307688729786010659_n_1758126876417.jpg";
import halloweenImg from "@assets/6e962d61-7aa0-4010-9889-956b71e2e25e_1758126876413.jpg";
import christmasImg from "@assets/494147861_1296189768892720_4684710318659525456_n_1758126876418.jpg";
import fantasyImg from "@assets/9c474195-07bc-4bdd-bdea-12067ed76364_1758126876414.jpg";
import othersImg from "@assets/89c5c25d-1415-4cd8-b897-0ac5beb26d88_1758126876416.jpg";

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
  { id: 'baby', label: 'Bebé', icon: '👶', sampleImg: babyImg },
  { id: 'child', label: 'Niño', icon: '🧒', sampleImg: childImg },
  { id: 'pregnancy', label: 'Embarazo', icon: '🤱', sampleImg: pregnancyImg },
  { id: 'family', label: 'Familiar', icon: '👨‍👩‍👧‍👦', sampleImg: familyImg },
  { id: 'birthday', label: 'Cumpleaños', icon: '🎂', sampleImg: birthdayImg },
  { id: 'baptism', label: 'Bautizo', icon: '⛪', sampleImg: baptismImg },
];

const themeOptions = [
  { id: 'disney', label: 'Disney', icon: '🏰', sampleImg: disneyImg },
  { id: 'marvel', label: 'Marvel', icon: '🦸', sampleImg: marvelImg },
  { id: 'halloween', label: 'Halloween', icon: '🎃', sampleImg: halloweenImg },
  { id: 'christmas', label: 'Navidad', icon: '🎄', sampleImg: christmasImg },
  { id: 'fantasy', label: 'Fantasía', icon: '🧚', sampleImg: fantasyImg },
  { id: 'others', label: 'Otros', icon: '✨', sampleImg: othersImg },
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
          <div className="text-center mb-4">
            <img 
              src={logoImg} 
              alt="El Álbum Mágico" 
              className="h-16 mx-auto mb-2"
              data-testid="img-wizard-logo"
            />
          </div>
          <DialogTitle className="text-2xl font-fredoka text-purple-800 flex items-center justify-center gap-2">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {photoTypeOptions.map((option) => (
                  <Card 
                    key={option.id}
                    className={`cursor-pointer hover-elevate transition-all duration-200 overflow-hidden ${
                      wizardData.photoTypes.includes(option.id)
                        ? 'bg-purple-100 border-purple-400 ring-2 ring-purple-300'
                        : 'hover:bg-purple-50'
                    }`}
                    onClick={() => togglePhotoType(option.id)}
                    data-testid={`card-photo-type-${option.id}`}
                  >
                    <div className="flex gap-3 p-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={option.sampleImg} 
                          alt={`Ejemplo ${option.label}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-xl">{option.icon}</div>
                          <div className="font-semibold text-purple-800">{option.label}</div>
                        </div>
                        {wizardData.photoTypes.includes(option.id) && (
                          <div className="flex items-center gap-1 text-green-600 text-sm">
                            <CheckCircle className="w-4 h-4" />
                            <span>Seleccionado</span>
                          </div>
                        )}
                      </div>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {themeOptions.map((option) => (
                  <Card 
                    key={option.id}
                    className={`cursor-pointer hover-elevate transition-all duration-200 overflow-hidden ${
                      wizardData.themes.includes(option.id)
                        ? 'bg-purple-100 border-purple-400 ring-2 ring-purple-300'
                        : 'hover:bg-purple-50'
                    }`}
                    onClick={() => toggleTheme(option.id)}
                    data-testid={`card-theme-${option.id}`}
                  >
                    <div className="flex gap-3 p-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={option.sampleImg} 
                          alt={`Ejemplo ${option.label}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-xl">{option.icon}</div>
                          <div className="font-semibold text-purple-800">{option.label}</div>
                        </div>
                        {wizardData.themes.includes(option.id) && (
                          <div className="flex items-center gap-1 text-green-600 text-sm">
                            <CheckCircle className="w-4 h-4" />
                            <span>Seleccionado</span>
                          </div>
                        )}
                      </div>
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