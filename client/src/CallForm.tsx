import { useState } from "react";

export default function CallForm() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/save-number", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Número registrado, te llamaremos pronto");
        setPhone("");
      } else {
        setStatus("⚠️ Ocurrió un error");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="p-4 rounded-xl shadow-md bg-white/80">
      <h2 className="text-lg font-bold mb-2">📞 Déjanos tu número</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ej: 987654321"
          required
          className="border rounded-lg px-3 py-2 flex-1"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
        >
          Enviar
        </button>
      </form>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}
