import { GlassHello } from '@/components/glass-hello'

export default function Home() {
  return (
    <>
      {/* Background fixe pour tous les appareils */}
      <div 
        className="fixed inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <main className="min-h-[300vh] w-full relative">
        {/* Slide 1: Le Problème */}
        <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6">
          <div className="glass-container">
            <div className="glass-filter" />
            <div className="glass-overlay" />
            <div className="glass-specular" />
            <div className="glass-content">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 text-center">🚀</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-12 text-white text-center px-4">
                Tu veux lancer ton SaaS
              </h1>
              <div className="text-base sm:text-lg text-white/90 text-center space-y-4 sm:space-y-6 max-w-sm sm:max-w-lg mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <span className="w-2 h-2 bg-red-300 rounded-full flex-shrink-0"></span>
                  <p className="text-white">Pas de compétences techniques</p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="w-2 h-2 bg-red-300 rounded-full flex-shrink-0"></span>
                  <p className="text-white">Budget limité</p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="w-2 h-2 bg-red-300 rounded-full flex-shrink-0"></span>
                  <p className="text-white">Tu ne sais pas par où commencer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2: La Solution */}
        <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6">
          <div className="glass-container">
            <div className="glass-filter" />
            <div className="glass-overlay" />
            <div className="glass-specular" />
            <div className="glass-content">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 text-center">🌊</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-12 text-white text-center px-4">
                WindsurfVibes
              </h1>
              <div className="text-base sm:text-lg text-white/90 text-center space-y-4 sm:space-y-6 max-w-sm sm:max-w-lg mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse flex-shrink-0"></span>
                  <p className="text-white">Crée ton SaaS en 3h</p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse flex-shrink-0"></span>
                  <p className="text-white">Sans coder</p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse flex-shrink-0"></span>
                  <p className="text-white">Avec l'IA Windsurf</p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse flex-shrink-0"></span>
                  <p className="text-white">Support expert 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: L'Offre */}
        <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6">
          <div className="glass-container">
            <div className="glass-filter" />
            <div className="glass-overlay" />
            <div className="glass-specular" />
            <div className="glass-content">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 text-center">🎯</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-12 text-white text-center px-4">
                Accompagnement
              </h1>
              <div className="text-sm sm:text-base text-white/90 text-center space-y-3 sm:space-y-4 max-w-xs sm:max-w-md mx-auto mb-6 sm:mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium text-white flex-shrink-0">4</div>
                  <p className="text-white">modules progressifs</p>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full flex items-center justify-center text-xs sm:text-sm text-white flex-shrink-0">→</div>
                  <p className="text-white">De l'idée au déploiement</p>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-light text-white">300€ offerts</span>
                </div>
                <a 
                  href="https://windsurfvibes.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white font-light border border-white/40 rounded-full hover:bg-white/10 transition-all duration-300 group"
                >
                  <span>Découvrir</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
