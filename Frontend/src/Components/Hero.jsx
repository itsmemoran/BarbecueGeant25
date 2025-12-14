import { useEffect } from 'react'

export default function Hero() {
  // Charger les polices Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=Barlow:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        
        {/* Overlay orange pour effet BBQ */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-900/20 via-transparent to-gray-900/80" />
        
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-orange-500 to-red-600 opacity-30"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-orange-500 to-yellow-500 opacity-25"
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {/* Badge "2025" */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-600/20 px-4 py-2 border-2 border-orange-600/50">
              <span className="text-orange-400 text-2xl">🔥</span>
              <span 
                className="text-orange-400 font-bold text-lg uppercase tracking-wider"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Édition 2025
              </span>
            </div>

            {/* Titre principal */}
            <h1 
              className="text-6xl font-bold tracking-wider text-white sm:text-8xl mb-4 drop-shadow-2xl"
              style={{ 
                fontFamily: "'Bebas Neue', cursive", 
                letterSpacing: '0.08em',
                textShadow: '4px 4px 8px rgba(0,0,0,0.8), 0 0 20px rgba(234, 88, 12, 0.5)'
              }}
            >
              BARBECUE GÉANT
            </h1>

            {/* Sous-titre accrocheur */}
            <h2 
              className="text-2xl sm:text-4xl font-semibold text-orange-400 mb-8 uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Le plus grand festival BBQ de Côte d'Ivoire 🍖
            </h2>

            {/* Description */}
            <p 
              className="mt-8 text-pretty text-lg font-medium text-gray-200 sm:text-xl leading-relaxed"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              Le Festival du Barbecue Géant est de retour pour une édition encore plus savoureuse ! Rejoignez-nous pour une célébration épique de la cuisine en plein air, où les amateurs de grillades se rassemblent pour partager des moments inoubliables autour de délicieuses viandes fumées, de légumes grillés et de saveurs exquises.
            </p>

            {/* Points forts */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl mb-2">🔥</div>
                <p 
                  className="text-orange-400 font-bold text-sm uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Grillades
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎵</div>
                <p 
                  className="text-orange-400 font-bold text-sm uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Musique Live
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎉</div>
                <p 
                  className="text-orange-400 font-bold text-sm uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Ambiance
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎁</div>
                <p 
                  className="text-orange-400 font-bold text-sm uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Entrée gratuite
                </p>
              </div>
            </div>
          </div>

          {/* Boutons CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
            <a 
              href="/Inscription"
              className="w-full sm:w-auto"
            >
              <button
                className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 py-4 text-xl font-bold text-white shadow-2xl transition-all transform hover:scale-105 uppercase tracking-widest"
                style={{ 
                  fontFamily: "'Bebas Neue', cursive", 
                  letterSpacing: '0.15em',
                  boxShadow: '0 10px 40px rgba(234, 88, 12, 0.4)'
                }}
              >
                🔥 Réserver mon billet 🔥
              </button>
            </a>
            
            <a 
              href="#APropos" 
              className="group flex items-center gap-2 text-lg font-semibold text-orange-400 hover:text-orange-300 transition-colors uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              En savoir plus 
              <span 
                aria-hidden="true" 
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* Compteur ou info importante */}
          <div className="mt-16 inline-flex items-center gap-3 rounded-lg bg-gray-800/80 backdrop-blur-sm px-6 py-3 border-l-4 border-orange-600">
            <span className="text-3xl">⚡</span>
            <p 
              className="text-white font-medium"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              <span 
                className="text-orange-400 font-bold text-xl"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Places limitées
              </span>
              {" "}— Inscris-toi maintenant !
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}