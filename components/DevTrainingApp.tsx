"use client";

import {
  AlertTriangle,
  Brain,
  Check,
  CheckCircle,
  Code2,
  Database,
  Layers,
  Lightbulb,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  IASection,
  PrinciplesSection,
  SummarySection,
} from "./DevTrainingAppSections";

const DevTrainingApp = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showAI, setShowAI] = useState(false);

  const tabs = [
    "Introduction",
    "Définition",
    "Mindset",
    "Stacks",
    "Principes",
    "IA & Dev",
    "Résumé",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Code2 className="text-gray-900" size={24} />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Best Practices Academy
                </h1>
                <p className="text-xs text-gray-500">
                  Formation professionnelle
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowAI(!showAI)}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Sparkles size={16} />
              Assistant IA
            </button>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === index
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="animate-fadeIn">
          {activeTab === 0 && <IntroSection />}
          {activeTab === 1 && <DefinitionSection />}
          {activeTab === 2 && <MindsetSection />}
          {activeTab === 3 && <StacksSection />}
          {activeTab === 4 && <PrinciplesSection />}
          {activeTab === 5 && <IASection />}
          {activeTab === 6 && <SummarySection setActiveTab={setActiveTab} />}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Best Practices Academy - Formation professionnelle pour développeurs
          </p>
        </div>
      </footer>

      {/* Modal IA */}
      {showAI && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowAI(false)}
          ></div>
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full">
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={20} />
                  <h2 className="text-lg font-semibold">Assistant IA</h2>
                </div>
                <button
                  onClick={() => setShowAI(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fonctionnalité à venir
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Nous travaillons sur un assistant IA qui pourra :
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Répondre à vos questions en temps réel",
                  "Analyser votre code",
                  "Générer des exemples",
                  "Vous guider dans l&apos;apprentissage",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle
                      className="text-gray-400 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <p className="text-sm text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  En attendant :
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• ChatGPT ou Claude</li>
                  <li>• GitHub Copilot</li>
                  <li>• Cursor ou Windsurf</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Section 1: Introduction
const IntroSection = () => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <Code2 className="text-gray-900 mb-4" size={32} />
      <h2 className="text-3xl font-bold mb-3 text-gray-900">Introduction</h2>
      <p className="text-gray-600">
        Apprenez les principes fondamentaux du développement professionnel
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <div className="border border-gray-200 rounded-lg p-6">
        <Brain className="text-gray-900 mb-3" size={24} />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Architecture
        </h3>
        <p className="text-sm text-gray-600">
          Pensez architecture et maintenabilité dès le départ.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <Layers className="text-gray-900 mb-3" size={24} />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Scalabilité
        </h3>
        <p className="text-sm text-gray-600">
          Concevez des systèmes qui supportent la croissance.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <Sparkles className="text-gray-900 mb-3" size={24} />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Outils IA</h3>
        <p className="text-sm text-gray-600">
          Utilisez l&apos;IA pour être plus productif.
        </p>
      </div>
    </div>

    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Au programme</h3>
      <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
        <div className="flex items-start gap-2">
          <CheckCircle className="flex-shrink-0 mt-0.5" size={16} />
          <p>Principes SOLID</p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle className="flex-shrink-0 mt-0.5" size={16} />
          <p>Scaling et performance</p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle className="flex-shrink-0 mt-0.5" size={16} />
          <p>Stacks modernes</p>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle className="flex-shrink-0 mt-0.5" size={16} />
          <p>IA et développement</p>
        </div>
      </div>
    </div>
  </div>
);

// Section 2: Définition
const DefinitionSection = () => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-3 text-gray-900">Définition</h2>
      <p className="text-gray-600">
        Une best practice est une méthode éprouvée qui fonctionne dans la
        majorité des cas.
      </p>
    </div>

    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex items-start gap-3">
        <Lightbulb className="text-gray-900 flex-shrink-0 mt-1" size={20} />
        <p className="text-gray-700 text-sm">
          Les best practices sont des règles d&apos;architecture éprouvées qui
          garantissent la qualité et la maintenabilité du code.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <X className="text-gray-400" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Sans best practices
          </h3>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Code difficile à maintenir</li>
          <li>• Bugs fréquents</li>
          <li>• Performance médiocre</li>
          <li>• Onboarding complexe</li>
          <li>• Refactoring risqué</li>
          <li>• Failles de sécurité</li>
        </ul>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Check className="text-gray-900" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Avec best practices
          </h3>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Code lisible et maintenable</li>
          <li>• Modifications sécurisées</li>
          <li>• Scalabilité optimale</li>
          <li>• Onboarding rapide</li>
          <li>• Refactoring facile</li>
          <li>• Sécurité intégrée</li>
        </ul>
      </div>
    </div>
  </div>
);

// Section 3: Mindset
const MindsetSection = () => (
  <div className="max-w-4xl mx-auto">
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-3 text-gray-900">
        Mindset Architecte
      </h2>
      <p className="text-gray-600">Questions essentielles avant de coder</p>
    </div>

    <div className="border border-gray-200 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Checklist de conception
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          "Quel est le besoin réel de l'utilisateur ?",
          "Combien d'utilisateurs dans 6 mois ?",
          "Comment maintenir ce code facilement ?",
          "Quels sont les points critiques ?",
          "Quelles failles de sécurité ?",
          "Comment tester efficacement ?",
        ].map((question, index) => (
          <div
            key={index}
            className="flex items-start gap-2 text-sm text-gray-700"
          >
            <span className="text-gray-400">•</span>
            {question}
          </div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="text-gray-900" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Scaling Horizontal
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ajouter plus de serveurs pour répartir la charge
        </p>
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <p className="text-xs font-medium text-gray-700 mb-1">
            Exemple : Netflix
          </p>
          <p className="text-xs text-gray-600">
            1 serveur → 100 serveurs → 1000 serveurs
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Check size={14} />
          Scalabilité quasi-infinie
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Database className="text-gray-900" size={20} />
          <h3 className="text-lg font-semibold text-gray-900">
            Scaling Vertical
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Améliorer le serveur existant (RAM, CPU)
        </p>
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <p className="text-xs font-medium text-gray-700 mb-1">
            Exemple : Startup
          </p>
          <p className="text-xs text-gray-600">
            8 GB RAM → 32 GB RAM → 128 GB RAM
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <AlertTriangle size={14} />
          Limité par le matériel
        </div>
      </div>
    </div>

    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
      <p className="text-sm text-gray-700">
        <span className="font-semibold">Règle d&apos;or :</span> Réfléchir avant
        de coder. Vous êtes un architecte, pas seulement un codeur.
      </p>
    </div>
  </div>
);

// Section 4: Stacks
const StacksSection = () => (
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-black text-center mb-8 text-gray-900">
      Best Practices par Stack 🛠️
    </h2>

    <div className="space-y-8">
      {/* Next.js */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
            ⚛️
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Next.js 15</h3>
            <p className="text-gray-600">
              Le framework React pour le web moderne
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <Check /> À FAIRE
            </h4>
            <ul className="space-y-2 text-green-800">
              <li>• App Router pour la navigation</li>
              <li>• Server Components par défaut</li>
              <li>• Image optimization avec next/image</li>
              <li>• API Routes pour le backend</li>
              <li>• Streaming SSR pour la perf</li>
              <li>• Metadata API pour le SEO</li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <X /> À ÉVITER
            </h4>
            <ul className="space-y-2 text-red-800">
              <li>• Tout mettre en Client Components</li>
              <li>• Utiliser &lt;img&gt; au lieu de &lt;Image&gt;</li>
              <li>• Fetch côté client pour tout</li>
              <li>• Oublier les loading.tsx</li>
              <li>• Ignorer le caching automatique</li>
              <li>• Négliger les error boundaries</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Symfony */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-500 to-black w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
            🎼
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Symfony</h3>
            <p className="text-gray-600">Le framework PHP enterprise</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <Check /> À FAIRE
            </h4>
            <ul className="space-y-2 text-green-800">
              <li>• Services en Dependency Injection</li>
              <li>• Doctrine ORM avec migrations</li>
              <li>• Validation avec Constraints</li>
              <li>• Security component pour l&apos;auth</li>
              <li>• EventDispatcher pour découpler</li>
              <li>• Cache avec Redis/Memcached</li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <X /> À ÉVITER
            </h4>
            <ul className="space-y-2 text-red-800">
              <li>• SQL brut partout</li>
              <li>• Logique dans les controllers</li>
              <li>• Oublier les validations</li>
              <li>• Sessions sans sécurité</li>
              <li>• Ignorer les events Symfony</li>
              <li>• Bypass le container DI</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spring Boot */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-500 to-green-700 w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
            🍃
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Spring Boot</h3>
            <p className="text-gray-600">La puissance de Java simplifiée</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <Check /> À FAIRE
            </h4>
            <ul className="space-y-2 text-green-800">
              <li>• @RestController pour les APIs</li>
              <li>• JPA/Hibernate pour la DB</li>
              <li>• Spring Security configuré</li>
              <li>• DTO pattern pour les échanges</li>
              <li>• @Transactional sur les services</li>
              <li>• Actuator pour le monitoring</li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <X /> À ÉVITER
            </h4>
            <ul className="space-y-2 text-red-800">
              <li>• Entities directement dans les APIs</li>
              <li>• Connexions DB manuelles</li>
              <li>• Oublier la validation des inputs</li>
              <li>• Transactions trop longues</li>
              <li>• N+1 queries non optimisées</li>
              <li>• Pas de tests unitaires</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Angular */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-red-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
            🅰️
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Angular</h3>
            <p className="text-gray-600">Le framework TypeScript enterprise</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <Check /> À FAIRE
            </h4>
            <ul className="space-y-2 text-green-800">
              <li>• Standalone Components (Angular 15+)</li>
              <li>• Signals pour la réactivité</li>
              <li>• Lazy loading des modules</li>
              <li>• RxJS pour la gestion d&apos;état</li>
              <li>• Services avec Dependency Injection</li>
              <li>• Guards pour les routes</li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <X /> À ÉVITER
            </h4>
            <ul className="space-y-2 text-red-800">
              <li>• Tout dans app.component</li>
              <li>• Oublier unsubscribe (memory leaks)</li>
              <li>• Logique dans les templates</li>
              <li>• Services sans providers</li>
              <li>• Ignorer le Change Detection</li>
              <li>• Pas de typage TypeScript strict</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DevTrainingApp;
