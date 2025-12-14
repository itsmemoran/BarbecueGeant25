import React, { useState, useEffect } from 'react'
import { ArrowLeft, CheckCircle } from 'lucide-react'

export default function CheckoutForm() {
  // Charger les polices Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=Barlow:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    habitation: "",
    email: "",
    phone: "",
    whatsapp: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Prénom requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Nom requis";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date de naissance requise";
    if (!formData.habitation) newErrors.habitation = "Habitation requise";
    if (!formData.phone.trim()) newErrors.phone = "Numéro de téléphone requis";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Numéro WhatsApp requis";
    
    // Validation email optionnelle
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'inscription");
      }

      // Succès - afficher le ticket
      setTicket(result.ticket);
      
    } catch (err) {
      console.error(err);
      alert(err.message || "Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  // Affichage du ticket après inscription réussie
  if (ticket) {
    return (
      <div className="min-h-screen bg-gray-900 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <CheckCircle className="w-20 h-20 text-orange-500 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.05em' }}>
              C'EST CONFIRMÉ ! 🔥
            </h2>
            <p className="text-xl text-orange-300 font-medium" style={{ fontFamily: "'Oswald', sans-serif" }}>
              TON BILLET EST PRÊT
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 shadow-2xl border-4 border-orange-500">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.03em' }}>
                {formData.firstName} {formData.lastName}
              </h3>
              <p className="text-lg font-semibold text-orange-600" style={{ fontFamily: "'Oswald', sans-serif" }}>
                CODE: {ticket.code}
              </p>
            </div>

            <div className="flex justify-center mb-6">
              <img 
                src={ticket.qrData} 
                alt="QR Code" 
                className="w-64 h-64 border-4 border-orange-600 rounded-lg shadow-lg"
              />
            </div>

            <div className="text-center space-y-2 text-sm font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>
              <p className="text-gray-800">🔥 PRÉSENTE CE QR CODE À L'ENTRÉE</p>
              <p className="text-gray-800">📱 SAUVEGARDE CETTE IMAGE</p>
              <p className="text-gray-800">🍖 PRÉPARE-TOI POUR LE MEILLEUR BBQ</p>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.download = `BBQ-Geant-Ticket-${ticket.code}.png`;
                  link.href = ticket.qrData;
                  link.click();
                }}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-md transition shadow-lg text-lg"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.05em' }}
              >
                TÉLÉCHARGER
              </button>
              <a 
                href="/" 
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded-md transition text-center flex items-center justify-center shadow-lg text-lg"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.05em' }}
              >
                RETOUR
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16 sm:py-16 lg:px-8">
      <a href="/">
        <button
          className="flex items-center gap-2 text-orange-400 hover:text-orange-300 ml-4 mb-5 py-3 transition font-semibold"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          <ArrowLeft className="w-5 h-5" />
          RETOUR
        </button>
      </a>
      
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-purple-400 opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-6xl sm:text-7xl font-bold tracking-wider text-white" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.05em' }}>
          INSCRIPTION
        </h2>
        <p className="mt-6 text-xl text-orange-300 font-medium" style={{ fontFamily: "'Oswald', sans-serif" }}>
          RÉSERVE TON BILLET GRATUIT MAINTENANT
        </p>
        <p className="mt-2 text-base text-gray-400" style={{ fontFamily: "'Barlow', sans-serif" }}>
          Rejoins-nous pour le plus grand BBQ de 2025 🔥
        </p>
      </div>

      <div className="max-w-xl mx-auto p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm shadow-2xl rounded-lg space-y-4 mt-8 border-2 border-orange-600/30">
        {/* Prénom */}
        <div>
          <label className="block text-sm font-bold text-orange-400 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-orange-600/50 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          />
          {errors.firstName && <p className="text-sm text-red-400 mt-1 font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>{errors.firstName}</p>}
        </div>

        {/* Nom */}
        <div>
          <label className="block text-sm font-bold text-orange-400 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-orange-600/50 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          />
          {errors.lastName && <p className="text-sm text-red-400 mt-1 font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>{errors.lastName}</p>}
        </div>

        {/* Date de naissance */}
        <div>
          <label className="block text-sm font-bold text-orange-400 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Date de naissance <span className="text-red-500">*</span>
          </label>
          <input
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-orange-600/50 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          />
          {errors.dateOfBirth && <p className="text-sm text-red-400 mt-1 font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>{errors.dateOfBirth}</p>}
        </div>

        {/* Habitation */}
        <div>
          <label className="block text-sm font-bold text-orange-400 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Commune d'habitation <span className="text-red-500">*</span>
          </label>
          <select
            name="habitation"
            value={formData.habitation}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-orange-600/50 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            <option value="">Sélectionne ta commune</option>
            <option value="Abobo">Abobo</option>
            <option value="Adjamé">Adjamé</option>
            <option value="Attécoubé">Attécoubé</option>
            <option value="Cocody">Cocody</option>
            <option value="Koumassi">Koumassi</option>
            <option value="Marcory">Marcory</option>
            <option value="Plateau">Plateau</option>
            <option value="Port‑Bouët">Port‑Bouët</option>
            <option value="Treichville">Treichville</option>
            <option value="Yopougon">Yopougon</option>
          </select>
          {errors.habitation && <p className="text-sm text-red-400 mt-1 font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>{errors.habitation}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-bold text-orange-400 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Email (optionnel)
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 border-orange-600/50 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          />
          {errors.email && <p className="text-sm text-red-400 mt-1 font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>{errors.email}</p>}
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-sm font-bold text-orange-400 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Numéro d'urgence <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+225 XX XX XX XX XX"
            className="w-full px-3 py-2 border-2 border-orange-600/50 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          />
          {errors.phone && <p className="text-sm text-red-400 mt-1 font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>{errors.phone}</p>}
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block text-sm font-bold text-orange-400 mb-2 uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Numéro WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="+225 XX XX XX XX XX"
            className="w-full px-3 py-2 border-2 border-orange-600/50 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          />
          {errors.whatsapp && <p className="text-sm text-red-400 mt-1 font-medium" style={{ fontFamily: "'Barlow', sans-serif" }}>{errors.whatsapp}</p>}
        </div>

        {/* Bouton de soumission */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-md transition flex items-center justify-center gap-2 shadow-lg text-lg uppercase tracking-wider"
          style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.1em' }}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Inscription en cours...
            </>
          ) : (
            "🔥 Réserver Mon Billet 🔥"
          )}
        </button>
      </div>
    </div>
  );
}