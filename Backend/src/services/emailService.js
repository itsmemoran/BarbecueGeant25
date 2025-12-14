import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendTicketEmail(user, ticket) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'BBQ Géant 2025 <onboarding@resend.dev>', // Utilisez votre domaine vérifié en production
      to: user.email,
      subject: 'Votre ticket – BBQ Géant 2025',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">🎉 BBQ Géant 2025 🎉</h1>
            </div>
            
            <div style="background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none;">
              <h2 style="color: #667eea; margin-top: 0;">Merci pour votre inscription !</h2>
              
              <p>Bonjour <strong>${user.firstName} ${user.lastName}</strong>,</p>
              
              <p>Nous sommes ravis de vous compter parmi nous pour le BBQ Géant 2025 ! 🍖</p>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #667eea;">
                <h3 style="margin-top: 0; color: #667eea;">📋 Informations de votre billet</h3>
                <p style="margin: 5px 0;"><strong>Code :</strong> ${ticket.code}</p>
                <p style="margin: 5px 0;"><strong>Nom :</strong> ${user.firstName} ${user.lastName}</p>
                <p style="margin: 5px 0;"><strong>Commune :</strong> ${user.habitation}</p>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <p style="font-size: 16px; font-weight: bold; color: #667eea; margin-bottom: 15px;">Votre QR Code</p>
                <img src="${ticket.qrData}" alt="QR Code Ticket" style="width: 250px; height: 250px; border: 4px solid #667eea; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
                <p style="font-size: 12px; color: #666; margin-top: 10px;">Présentez ce QR code à l'entrée de l'événement</p>
              </div>
              
              <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 25px 0;">
                <p style="margin: 0; font-weight: bold; color: #856404;">⚠️ Informations importantes :</p>
                <ul style="margin: 10px 0; padding-left: 20px; color: #856404;">
                  <li>Gardez précieusement ce QR code</li>
                  <li>Imprimez ce billet ou sauvegardez-le sur votre téléphone</li>
                  <li>Arrivez 30 minutes avant le début de l'événement</li>
                  <li>Ce billet est personnel et non transférable</li>
                </ul>
              </div>
              
              <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin: 25px 0;">
                <p style="margin: 0; font-weight: bold; color: #0c5460;">📍 Détails de l'événement</p>
                <p style="margin: 10px 0; color: #0c5460;">
                  <strong>Date :</strong> [Insérez la date]<br>
                  <strong>Heure :</strong> [Insérez l'heure]<br>
                  <strong>Lieu :</strong> [Insérez le lieu]
                </p>
              </div>
              
              <p style="margin-top: 30px;">Des questions ? Contactez-nous :</p>
              <p style="margin: 5px 0;">📞 WhatsApp : ${user.whatsapp}</p>
              <p style="margin: 5px 0;">📧 Email : ${user.email}</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                À très bientôt au BBQ Géant 2025 ! 🎊
              </p>
              <p style="margin: 10px 0 0 0; color: #999; font-size: 12px;">
                © 2025 BBQ Géant. Tous droits réservés.
              </p>
            </div>
          </body>
        </html>
      `
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return false;
    }

    console.log(`Email envoyé à ${user.email} - ID: ${data.id}`);
    return true;

  } catch (error) {
    console.error('Erreur envoi email:', error);
    return false;
  }
}