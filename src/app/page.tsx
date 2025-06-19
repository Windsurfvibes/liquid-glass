import { GlassHello } from '@/components/glass-hello'

export default function Home() {
  return (
    <main 
      className="min-h-[300vh] w-full"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Slide 1: Le Problème */}
      <section className="min-h-screen w-full flex items-center justify-center">
        <div className="glass-container">
          <div className="glass-filter" />
          <div className="glass-overlay" />
          <div className="glass-specular" />
          <div className="glass-content">
            <div className="text-6xl mb-6 text-center">🚀</div>
            <h1 className="text-5xl font-light mb-12 text-white text-center">
              Tu veux lancer ton SaaS
            </h1>
            <div className="text-lg text-white/90 text-center space-y-6 max-w-lg">
              <div className="flex items-center justify-center space-x-3">
                <span className="w-2 h-2 bg-red-300 rounded-full"></span>
                <p className="text-white">Pas de compétences techniques</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="w-2 h-2 bg-red-300 rounded-full"></span>
                <p className="text-white">Budget limité</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="w-2 h-2 bg-red-300 rounded-full"></span>
                <p className="text-white">Tu ne sais pas par où commencer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: La Solution */}
      <section className="min-h-screen w-full flex items-center justify-center">
        <div className="glass-container">
          <div className="glass-filter" />
          <div className="glass-overlay" />
          <div className="glass-specular" />
          <div className="glass-content">
            <div className="text-6xl mb-6 text-center">🌊</div>
            <h1 className="text-5xl font-light mb-12 text-white text-center">
              WindsurfVibes
            </h1>
            <div className="text-lg text-white/90 text-center space-y-6 max-w-lg">
              <div className="flex items-center justify-center space-x-3">
                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                <p className="text-white">Crée ton SaaS en 3h</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                <p className="text-white">Sans coder</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                <p className="text-white">Avec l'IA Windsurf</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                <p className="text-white">Support expert 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: L'Offre */}
      <section className="min-h-screen w-full flex items-center justify-center">
        <div className="glass-container">
          <div className="glass-filter" />
          <div className="glass-overlay" />
          <div className="glass-specular" />
          <div className="glass-content">
            <div className="text-6xl mb-6 text-center">🎯</div>
            <h1 className="text-5xl font-light mb-12 text-white text-center">
              Accompagnement
            </h1>
            <div className="text-base text-white/90 text-center space-y-4 max-w-md mb-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-sm font-medium text-white">4</div>
                <p className="text-white">modules progressifs</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-sm text-white">→</div>
                <p className="text-white">De l'idée au déploiement</p>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <span className="text-3xl font-light text-white">300€ offerts</span>
              </div>
              <a 
                href="https://windsurfvibes.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-3 text-white font-light border border-white/40 rounded-full hover:bg-white/10 transition-all duration-300 group"
              >
                <span>Découvrir</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
