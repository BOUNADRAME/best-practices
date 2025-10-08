import {
  BookOpen,
  Brain,
  ChevronRight,
  Code2,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Code2 className="text-gray-900 mb-4" size={40} />
              <h1 className="text-5xl font-bold mb-4 text-gray-900">
                Best Practices Academy
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Formation professionnelle pour développeurs
              </p>
              <p className="text-base text-gray-500 max-w-2xl">
                Maîtrisez les best practices en développement web et mobile.
                Symfony, Next.js, Spring Boot, Angular.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link href="/formation">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                  Commencer la formation
                  <ChevronRight size={18} />
                </button>
              </Link>
              <a href="#features">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
                  En savoir plus
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-1">7</div>
              <div className="text-sm font-medium text-gray-600">Chapitres</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-1">4+</div>
              <div className="text-sm font-medium text-gray-600">
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-1">10</div>
              <div className="text-sm font-medium text-gray-600">Principes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-1">1h30</div>
              <div className="text-sm font-medium text-gray-600">Durée</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">
            Programme de formation
          </h2>
          <p className="text-gray-600">Une formation complète et structurée</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <Brain className="text-gray-900 mb-3" size={24} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Mindset d&apos;Architecte
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pensez comme un architecte logiciel. Comprenez le besoin,
              anticipez le scaling, concevez des systèmes maintenables.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <Code2 className="text-gray-900 mb-3" size={24} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Principes SOLID
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Maîtrisez les patterns éprouvés : SOLID, DRY, KISS. Appliquez-les
              sur Next.js, Symfony, Spring Boot et Angular.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <Sparkles className="text-gray-900 mb-3" size={24} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              IA & Développement
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Utilisez l&apos;IA efficacement. GitHub Copilot, ChatGPT, Claude :
              devenez plus productif sans perdre votre expertise.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <Target className="text-gray-900 mb-3" size={24} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Performance & Scalabilité
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Optimisez vos applications pour supporter des milliers
              d&apos;utilisateurs simultanés. Scaling horizontal et vertical.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <BookOpen className="text-gray-900 mb-3" size={24} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Code Maintenable
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Écrivez du code lisible et documenté. Nommage clair, structure
              logique, documentation pertinente.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <Rocket className="text-gray-900 mb-3" size={24} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Évolution de carrière
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Accélérez votre progression. Les best practices sont essentielles
              pour évoluer vers des postes senior.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Commencez votre formation
            </h2>
            <p className="text-gray-600 mb-8">
              Formation gratuite et accessible à tous les développeurs.
            </p>
            <Link href="/formation">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
                Démarrer maintenant
                <ChevronRight size={18} />
              </button>
            </Link>
            <p className="text-sm text-gray-500 mt-6">
              Durée : 1h30 • Niveau : Débutant à Intermédiaire
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="text-gray-900" size={20} />
              <span className="font-semibold text-gray-900">
                Best Practices Academy
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Formation professionnelle pour développeurs
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
