import { PrismaClient } from "@prisma/client";
import QRCode from "qrcode";
const prisma = new PrismaClient();

export async function createTicket(req, res) {
  try {
    const { userId } = req.params;

    // Génère un code unique (UUID ou timestamp)
    const ticketCode = "BBQ-Géant" + Date.now();

    // Génère QR en DataURI
    const qrData = await QRCode.toDataURL(ticketCode);

    const ticket = await prisma.ticket.create({
      data: {
        userId: parseInt(userId),
        code: ticketCode,
        qrData
      }
    });

    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Impossible de créer le ticket" });
  }
}

export async function getMyTicket(req, res) {
  const { userId } = req.params;
  const ticket = await prisma.ticket.findFirst({ where: { userId: parseInt(userId) } });
  res.json(ticket);
}
