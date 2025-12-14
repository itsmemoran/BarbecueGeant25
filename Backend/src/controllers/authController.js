import prisma from "../lib/prisma.js";
import QRCode from "qrcode";

export async function registerUser(req, res) {
  try {
    const { firstName, lastName, dateOfBirth, habitation, email, phone, whatsapp } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !dateOfBirth || !habitation || !email || !phone) {
      return res.status(400).json({ error: "Tous les champs obligatoires doivent être remplis" });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ error: "Un utilisateur avec cet email existe déjà" });
    }

    // Create user and ticket in a transaction
    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: { 
          firstName, 
          lastName, 
          dateOfBirth: new Date(dateOfBirth), 
          habitation, 
          email, 
          phone, 
          whatsapp 
        }
      });

      // Generate ticket code and QR
      const ticketCode = `BBQ-Géant25-${user.id}-${Date.now()}`;
      const qrData = await QRCode.toDataURL(ticketCode);

      const ticket = await tx.ticket.create({
        data: {
          userId: user.id,
          code: ticketCode,
          qrData
        }
      });

      return { user, ticket };
    });

    return res.status(201).json(result);
  } catch (error) {
    console.error("Erreur d'inscription:", error);
    return res.status(500).json({ error: "Erreur lors de l'inscription" });
  }
}