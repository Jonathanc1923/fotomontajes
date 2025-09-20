import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Reclamos() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [complaint, setComplaint] = useState("");
  const [proposal, setProposal] = useState("");
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_business: "elalbummagico@gmail.com",
          to_client: email,
          full_name: fullName,
          phone,
          complaint,
          proposal,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      setStatus(
        "✅ Reclamo enviado correctamente. Recibirás una copia en tu correo."
      );
      setFullName("");
      setEmail("");
      setPhone("");
      setComplaint("");
      setProposal("");
    } catch (err) {
      console.error(err);
      setStatus("❌ No se pudo enviar el reclamo. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        {/* Encabezado */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-purple-800">
            Libro de Reclamaciones Virtual
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Conforme a lo establecido en la Ley N.º 29571 - Código de
            Protección y Defensa del Consumidor.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nombre completo *
            </label>
            <input
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Correo electrónico *
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Número de teléfono *
            </label>
            <input
              type="tel"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Detalle del reclamo *
            </label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
              rows={4}
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              ¿Qué solución propones? (opcional)
            </label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
              rows={3}
              value={proposal}
              onChange={(e) => setProposal(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition"
          >
            {loading ? "Enviando..." : "Enviar reclamo"}
          </button>
        </form>

        {status && (
          <p className="mt-4 text-sm text-center font-medium">{status}</p>
        )}

        {/* Pie de página legal */}
        <div className="mt-8 text-xs text-gray-500 text-center border-t pt-4">
          Este formulario constituye el Libro de Reclamaciones Virtual de{" "}
          <strong>El Álbum Mágico</strong>, conforme a la Ley N.º 29571 - Código
          de Protección y Defensa del Consumidor.  
          El proveedor está obligado a dar respuesta en un plazo máximo de 30
          días calendario.
        </div>
      </div>
    </div>
  );
}
