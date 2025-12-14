import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// Ancienne fonction migrée vers Resend
export async function sendTicket(req, res) {
  try {
    const { ticketId } = req.params;

    const ticket = await prisma.ticket.findUnique({
      where: { id: parseInt(ticketId) },
      include: { user: true }
    });

    if (!ticket) return res.status(404).json({ error: "Ticket introuvable" });

    // Utiliser le nouveau service
    const emailSent = await sendTicketEmail(ticket.user, ticket);

    if (emailSent) {
      return res.json({ message: "Ticket envoyé avec succès" });
    } else {
      return res.status(500).json({ error: "Erreur envoi email" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur envoi ticket" });
  }
}