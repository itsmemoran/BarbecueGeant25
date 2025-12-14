import { useEffect } from 'react'
import { Flame, Calendar, Users, Utensils } from 'lucide-react'

const features = [
  {
    name: 'Grillades Premium',
    description:
      'Des viandes sélectionnées et préparées par nos maîtres grilleurs pour une expérience gustative exceptionnelle.',
    icon: Flame,
  },
  {
    name: 'Ambiance Festive',
    description:
      'Musique live, DJ sets et animations pour créer une atmosphère inoubliable tout au long de la journée.',
    icon: Users,
  },
  {
    name: 'Cuisine Variée',
    description:
      'Un large choix de plats pour tous les goûts : viandes, poissons, végétarien, accompagnements et desserts.',
    icon: Utensils,
  },
  {
    name: 'Événement Gratuit',
    description:
      'Entrée 100% gratuite ! Inscris-toi simplement en ligne et profite d\'une journée mémorable avec ta famille et tes amis.',
    icon: Calendar,
  },
]

export default function Apropos() {
  // Charger les polices Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=Barlow:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <section id="APropos" className="scroll-smooth">
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-32 relative overflow-hidden">
        {/* Effet de fumée/braise en arrière-plan */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center space-y-10">
            {/* Badge "À propos" */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 px-6 py-2 border-2 border-orange-600/50">
                <span className="text-orange-400 text-xl">🔥</span>
                <h2 
                  className="text-base font-bold text-orange-400 uppercase tracking-widest"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  À propos
                </h2>
              </div>
            </div>

            {/* Fun Block 1 - C'est quoi ? */}
            <div className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-orange-600 hover:border-orange-500 transition-all duration-300">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🍖</span>
                <h3 
                  className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide"
                  style={{ 
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.05em'
                  }}
                >
                  C'est quoi le BBQ Géant ?
                </h3>
              </div>
              <p 
                className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Le BBQ Géant est bien plus qu'un simple événement culinaire ; c'est une{' '}
                <span className="text-orange-400 font-semibold">célébration de la convivialité</span>, de la culture et du plaisir de partager un repas en plein air. Que vous soyez un passionné de barbecue chevronné ou simplement curieux de découvrir de nouvelles saveurs, le Festival du Barbecue Géant offre une{' '}
                <span className="text-orange-400 font-semibold">expérience inoubliable</span> pour tous les amateurs de bonne cuisine.
              </p>
            </div>

            {/* Fun Block 2 - C'est quand ? */}
            <div className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-red-600 hover:border-red-500 transition-all duration-300">
              <div className="flex items-center gap-3">
                <span className="text-4xl">📅</span>
                <h3 
                  className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide"
                  style={{ 
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.05em'
                  }}
                >
                  C'est quand ?
                </h3>
              </div>
              <p 
                className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Le Festival du Barbecue Géant se tiendra le{' '}
                <span 
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-bold text-xl sm:text-2xl shadow-lg"
                  style={{ fontFamily: "'Bebas Neue', cursive" }}
                >
                  🔥 27 Décembre 2025 🔥
                </span>
                , offrant une journée complète de festivités, de démonstrations culinaires et de dégustations savoureuses. Marquez vos calendriers et préparez-vous à vivre une expérience gastronomique exceptionnelle !
              </p>
            </div>

            {/* Fun Block 3 - C'est pour qui ? */}
            <div className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-yellow-600 hover:border-yellow-500 transition-all duration-300">
              <div className="flex items-center gap-3">
                <span className="text-4xl">👥</span>
                <h3 
                  className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide"
                  style={{ 
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.05em'
                  }}
                >
                  C'est pour qui ?
                </h3>
              </div>
              <p 
                className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Le Festival du Barbecue Géant est{' '}
                <span className="text-orange-400 font-semibold">ouvert à tous</span> les passionnés de cuisine, aux familles, aux amis et à toute personne désireuse de découvrir l'art du barbecue dans une atmosphère festive. Que vous soyez un amateur de viande grillée, un végétarien curieux ou simplement à la recherche d'une journée divertissante en plein air, cet événement est conçu pour{' '}
                <span className="text-orange-400 font-semibold">rassembler les gens</span> autour de la passion commune de la bonne nourriture.
              </p>
            </div>
          </div>

          {/* Section des features avec cartes */}
          <div className="mx-auto mt-20 max-w-7xl">
            <h3 
              className="text-center text-4xl sm:text-5xl font-bold text-white mb-12 uppercase tracking-wider"
              style={{ 
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: '0.08em'
              }}
            >
              🔥 Ce qui t'attend 🔥
            </h3>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.name}
                    className="relative group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border-2 border-orange-600/30 hover:border-orange-500 transition-all duration-300"
                  >
                    {/* Icône */}
                    <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg">
                      <IconComponent className="h-7 w-7" aria-hidden="true" />
                    </div>
                    
                    {/* Titre */}
                    <h4 
                      className="text-xl font-bold text-white mb-3 uppercase tracking-wide"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {feature.name}
                    </h4>
                    
                    {/* Description */}
                    <p 
                      className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      style={{ fontFamily: "'Barlow', sans-serif" }}
                    >
                      {feature.description}
                    </p>

                    {/* Effet de lueur au hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 via-orange-600/0 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to action final */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border-2 border-orange-600/50 shadow-2xl">
              <p 
                className="text-2xl sm:text-3xl font-bold text-white mb-4 uppercase"
                style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: '0.05em' }}
              >
                Prêt pour l'aventure ?
              </p>
              <p 
                className="text-lg sm:text-xl text-gray-300 mb-6"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Ne rate pas cette occasion unique de vivre une expérience BBQ mémorable !
              </p>
              <a href="/Inscription">
                <button 
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg uppercase tracking-widest text-base sm:text-lg"
                  style={{ 
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.15em'
                  }}
                >
                  🔥 Réserver mon billet maintenant 🔥
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}