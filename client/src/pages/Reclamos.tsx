import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Reclamos() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail]     = useState("");
  const [phone, setPhone]     = useState("");
  const [complaint, setComplaint] = useState("");
  const [proposal, setProposal]   = useState("");
  const [status, setStatus]   = useState<null | string>(null);
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
          proposal
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      setStatus("✅ Reclamo enviado correctamente. Recibirás una copia en tu correo.");
      setFullName(""); setEmail(""); setPhone(""); setComplaint(""); setProposal("");
    } catch (err) {
      console.error(err);
      setStatus("❌ No se pudo enviar el reclamo. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-10 px-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-purple-700 mb-1">Libro de Reclamaciones</h1>
        <p className="text-gray-600 mb-6">
          Completa el formulario para registrar tu reclamo. Recibirás una copia en tu correo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nombre completo *</label>
            <input
              className="w-full border rounded-lg px-3 py-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Correo electrónico *</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Número de teléfono *</label>
            <input
              type="tel"
              className="w-full border rounded-lg px-3 py-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Detalle del reclamo *</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2"
              rows={4}
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">¿Qué solución propones? (opcional)</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2"
              rows={3}
              value={proposal}
              onChange={(e) => setProposal(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition"
          >
            {loading ? "Enviando..." : "Enviar reclamo"}
          </button>
        </form>

        {status && <p className="mt-4 text-sm">{status}</p>}
      </div>
    </div>
  );
}
