import type { Express } from "express";
import { createServer, type Server } from "http";
import { google } from "googleapis";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // Ruta para guardar número en Google Sheets
  app.post("/api/save-number", async (req, res) => {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ error: "Número requerido" });
    }

    try {
      // Autenticación con la Service Account
      const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json", // Render lo tendrá como Secret File
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      const spreadsheetId = "1eNQjuXxCJvi98aEO-mu_3SgZOYAhttVmpPT-1D9-PxI"; // tu ID
      const range = "Hoja1!A:B"; // Col A: número, Col B: fecha/hora

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        requestBody: {
          values: [[phone, new Date().toISOString()]],
        },
      });

      res.json({ success: true, message: "Número guardado en Google Sheets" });
    } catch (error) {
      console.error("Error al guardar en Sheets:", error);
      res.status(500).json({ error: "No se pudo guardar el número" });
    }
  });

  return httpServer;
}
