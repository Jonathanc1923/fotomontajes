import WhatsAppButton from '../WhatsAppButton';

export default function WhatsAppButtonExample() {
  return (
    <div className="relative h-64 bg-gray-100 rounded-lg">
      <p className="text-center pt-24 text-gray-600">
        Fixed WhatsApp button appears in bottom-right corner
      </p>
      <WhatsAppButton />
    </div>
  );
}