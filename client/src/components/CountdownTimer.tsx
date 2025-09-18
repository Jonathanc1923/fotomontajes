import { useEffect, useState } from "react";

function getTimeRemaining() {
  const now = new Date();
  // Convertir a zona horaria Perú
  const peruTime = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Lima" })
  );

  // Hora de inicio y fin en Perú
  const start = new Date(peruTime);
  start.setHours(6, 0, 0, 0); // 6:00am

  const end = new Date(peruTime);
  end.setHours(19, 0, 0, 0); // 7:00pm

  let diff = end.getTime() - peruTime.getTime();

  if (diff <= 0) {
    // ya terminó la promo, reinicia mañana 6am
    return { expired: true, hours: 0, minutes: 0, seconds: 0 };
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { expired: false, hours, minutes, seconds };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return (
      <div className="text-center text-red-600 font-bold text-xl">
        🚨 La promoción de hoy ya terminó. Vuelve mañana desde las 6:00am.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-4 text-center shadow-lg">
      <h2 className="text-lg font-semibold mb-2">⏳ Promoción válida hasta las 7:00pm de hoy</h2>
      <div className="text-3xl font-bold font-mono">
        {String(timeLeft.hours).padStart(2, "0")}:
        {String(timeLeft.minutes).padStart(2, "0")}:
        {String(timeLeft.seconds).padStart(2, "0")}
      </div>
      <p className="text-sm mt-2">Horas : Minutos : Segundos</p>
    </div>
  );
}
