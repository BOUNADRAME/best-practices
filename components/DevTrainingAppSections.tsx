// Sections manquantes pour DevTrainingApp
import {
  AlertTriangle,
  BookOpen,
  Check,
  CheckCircle,
  ChevronRight,
  GitBranch,
  Rocket,
  Shield,
  Star,
  Target,
  X,
  Zap,
} from "lucide-react";

// Section 5: Principes
export const PrinciplesSection = () => (
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-black text-center mb-8 text-gray-900">
      Les Principes Fondamentaux 📚
    </h2>

    {/* SOLID */}
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <h3 className="text-3xl font-bold text-gray-900 mb-6">
        SOLID : Les 5 Piliers du Code Propre
      </h3>
      <div className="space-y-6">
        {[
          {
            letter: "S",
            title: "Single Responsibility",
            desc: "Une classe = une seule responsabilité",
            example:
              "UserService gère les users. EmailService gère les emails.",
          },
          {
            letter: "O",
            title: "Open/Closed",
            desc: "Ouvert à l'extension, fermé à la modification",
            example: "Ajoute des features sans modifier le code existant.",
          },
          {
            letter: "L",
            title: "Liskov Substitution",
            desc: "Les sous-classes doivent pouvoir remplacer les classes parentes",
            example: "Si Bird a fly(), Penguin ne devrait pas hériter de Bird.",
          },
          {
            letter: "I",
            title: "Interface Segregation",
            desc: "Plusieurs petites interfaces > une grosse interface",
            example: "ICanFly, ICanSwim > IAnimal avec tout dedans.",
          },
          {
            letter: "D",
            title: "Dependency Inversion",
            desc: "Dépendre des abstractions, pas des implémentations",
            example:
              "UserService dépend de IEmailService, pas de GmailService.",
          },
        ].map((principle, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6 rounded-r-xl"
          >
            <div className="flex items-start gap-4">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-2xl flex-shrink-0">
                {principle.letter}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {principle.title}
                </h4>
                <p className="text-gray-700 mb-2">{principle.desc}</p>
                <p className="text-sm text-indigo-700 font-semibold">
                  💡 {principle.example}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* DRY & KISS */}
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          DRY : Don&apos;t Repeat Yourself
        </h3>
        <p className="text-blue-800 mb-4">
          Ne te répète jamais. Chaque connaissance doit avoir une seule source
          de vérité.
        </p>
        <div className="bg-white rounded-xl p-4">
          <p className="text-sm text-gray-600 mb-2">❌ Mauvais :</p>
          <code className="text-xs block mb-3 text-red-600">
            calculateTax(100); calculateTax(200); calculateTax(300);
          </code>
          <p className="text-sm text-gray-600 mb-2">✅ Bon :</p>
          <code className="text-xs block text-green-600">
            [100, 200, 300].map(calculateTax)
          </code>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-200">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          KISS : Keep It Simple, Stupid
        </h3>
        <p className="text-purple-800 mb-4">
          La simplicité est la sophistication ultime. Code simple = code
          maintenable.
        </p>
        <div className="bg-white rounded-xl p-4">
          <p className="text-sm text-gray-600 mb-2">❌ Compliqué inutilement</p>
          <p className="text-sm text-gray-600 mb-3">
            Factory + Builder + Strategy pour afficher &quot;Hello&quot;
          </p>
          <p className="text-sm text-gray-600 mb-2">✅ Simple et efficace</p>
          <p className="text-sm text-gray-600">
            console.log(&quot;Hello&quot;)
          </p>
        </div>
      </div>
    </div>

    {/* Git Flow, Performance, Sécurité */}
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-200">
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="text-orange-600" size={32} />
          <h3 className="text-3xl font-bold text-gray-900">Git Flow</h3>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { name: "main", desc: "Production", color: "red" },
            { name: "develop", desc: "Développement", color: "blue" },
            { name: "feature/", desc: "Nouvelles features", color: "green" },
            { name: "hotfix/", desc: "Bugs urgents", color: "orange" },
          ].map((branch, index) => (
            <div
              key={index}
              className={`bg-${branch.color}-50 border-2 border-${branch.color}-200 rounded-xl p-4 text-center`}
            >
              <p className={`font-bold text-${branch.color}-900 mb-1`}>
                {branch.name}
              </p>
              <p className="text-sm text-gray-600">{branch.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="text-green-600" size={32} />
          <h3 className="text-3xl font-bold text-gray-900">Performance</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Frontend</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Lazy loading des composants</li>
              <li>• Pagination (pas tout charger)</li>
              <li>• Debounce sur les recherches</li>
              <li>• Compression des images</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Backend</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Caching (Redis, Memcached)</li>
              <li>• Indexation DB correcte</li>
              <li>• Rate limiting sur les APIs</li>
              <li>• CDN pour les assets</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-200">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="text-red-600" size={32} />
          <h3 className="text-3xl font-bold text-gray-900">Sécurité</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
            <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
              <X size={20} /> 🚫 JAMAIS
            </h4>
            <ul className="space-y-2 text-red-800 text-sm">
              <li>• Credentials en dur dans le code</li>
              <li>• SQL brut sans paramètres</li>
              <li>• Données sensibles en clair</li>
              <li>• Sessions sans expiration</li>
            </ul>
          </div>
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
              <Check size={20} /> ✅ TOUJOURS
            </h4>
            <ul className="space-y-2 text-green-800 text-sm">
              <li>• Variables d&apos;environnement</li>
              <li>• Prepared statements / ORM</li>
              <li>• Encryption pour les mots de passe</li>
              <li>• HTTPS partout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Section 6: IA & Dev
export const IASection = () => (
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-black text-center mb-8 text-gray-900">
      IA & Développement 🤖
    </h2>

    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center mb-8">
      <p className="text-3xl font-black mb-4">
        IA = Assistant 🤝 Pas un Pilote Automatique
      </p>
      <p className="text-xl">
        L&apos;IA est ton super-pouvoir, mais TOI tu restes le cerveau !
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <Check /> ✅ BON Usage de l&apos;IA
        </h3>
        <ul className="space-y-3 text-green-800">
          <li className="flex items-start gap-2">
            <CheckCircle className="flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold">Expliquer du code complexe</p>
              <p className="text-sm">
                &quot;Explique-moi ce que fait cette regex&quot;
              </p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold">Générer du boilerplate</p>
              <p className="text-sm">Config, tests, types de base</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold">Débugger des erreurs</p>
              <p className="text-sm">
                &quot;Pourquoi j&apos;ai cette erreur ?&quot;
              </p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold">Apprendre de nouvelles technos</p>
              <p className="text-sm">
                &quot;Comment utiliser React Query ?&quot;
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
          <X /> ❌ MAUVAIS Usage de l&apos;IA
        </h3>
        <ul className="space-y-3 text-red-800">
          <li className="flex items-start gap-2">
            <AlertTriangle className="flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold">Copier sans comprendre</p>
              <p className="text-sm">Tu seras perdu au moindre bug</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold">Laisser l&apos;IA tout faire</p>
              <p className="text-sm">Tu ne progresses pas</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold">Ne pas tester le code généré</p>
              <p className="text-sm">L&apos;IA fait des erreurs</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold">Croire que l&apos;IA sait tout</p>
              <p className="text-sm">Vérifie toujours les infos</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        🛠️ Outils IA pour Développeurs
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <h4 className="font-bold text-blue-900 mb-2">GitHub Copilot</h4>
          <p className="text-sm text-blue-800">
            Autocomplétion IA dans ton IDE. Parfait pour le boilerplate.
          </p>
        </div>
        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
          <h4 className="font-bold text-purple-900 mb-2">ChatGPT / Claude</h4>
          <p className="text-sm text-purple-800">
            Explications, architecture, debugging. Ton mentor IA.
          </p>
        </div>
        <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-6">
          <h4 className="font-bold text-pink-900 mb-2">Cursor / Windsurf</h4>
          <p className="text-sm text-pink-800">
            IDE avec IA intégrée. Coder en parlant à l&apos;IA.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-4 text-center">
        🎯 Mini Défi : Utilise l&apos;IA Intelligemment
      </h3>
      <ol className="space-y-3 text-lg">
        <li>
          1️⃣ Demande à ChatGPT d&apos;expliquer un concept que tu ne comprends
          pas
        </li>
        <li>2️⃣ Utilise GitHub Copilot pour générer des tests unitaires</li>
        <li>
          3️⃣ Demande à l&apos;IA de review un de tes fichiers et
          d&apos;expliquer les améliorations
        </li>
      </ol>
      <p className="text-center mt-6 text-xl font-semibold">
        Mais TOUJOURS vérifie et comprends ce que l&apos;IA propose !
      </p>
    </div>
  </div>
);

// Section 7: Résumé
export const SummarySection = ({
  setActiveTab,
}: {
  setActiveTab: (tab: number) => void;
}) => (
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-black text-center mb-8 text-gray-900">
      Les 10 Commandements du Bon Code 📜
    </h2>

    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-12">
      <div className="grid md:grid-cols-2 gap-6">
        {[
          "1️⃣ Tu réfléchiras avant de coder",
          "2️⃣ Tu écriras du code lisible pour les humains",
          "3️⃣ Tu testeras ton code (unit tests)",
          "4️⃣ Tu ne te répèteras pas (DRY)",
          "5️⃣ Tu penseras au scaling dès le départ",
          "6️⃣ Tu sécuriseras tout (HTTPS, encryption)",
          "7️⃣ Tu commiteras petit et souvent",
          "8️⃣ Tu documenteras ce qui n&apos;est pas évident",
          "9️⃣ Tu utiliseras l&apos;IA intelligemment",
          "🔟 Tu apprendras en continu",
        ].map((commandement, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-lg font-semibold"
          >
            <Star className="flex-shrink-0" size={20} />
            <p>{commandement}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
          <AlertTriangle /> 🚨 STOP Si...
        </h3>
        <ul className="space-y-2 text-red-800">
          <li>• Tu ne comprends pas ton propre code</li>
          <li>• Modifier 1 ligne casse tout</li>
          <li>• Tu as peur de refactorer</li>
          <li>• Onboard un dev = 1 mois</li>
          <li>• Tes tests ne passent jamais</li>
        </ul>
        <p className="mt-4 text-red-900 font-bold">
          👉 Reprends cette formation !
        </p>
      </div>

      <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <CheckCircle /> ✅ Checklist Quotidienne
        </h3>
        <ul className="space-y-2 text-green-800">
          <li>• Code review de tes PRs</li>
          <li>• Tests passent tous au vert</li>
          <li>• Code documenté si complexe</li>
          <li>• Commits avec messages clairs</li>
          <li>• Performance vérifiée</li>
        </ul>
        <p className="mt-4 text-green-900 font-bold">👉 Continue comme ça !</p>
      </div>

      <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <BookOpen /> 📚 Ressources
        </h3>
        <ul className="space-y-2 text-blue-800 text-sm">
          <li>• Clean Code (livre de Robert Martin)</li>
          <li>• Refactoring.guru (patterns)</li>
          <li>• Docs officielles (Next.js, Symfony, etc.)</li>
          <li>• GitHub repos populaires</li>
          <li>• Dev.to & Medium (articles)</li>
        </ul>
        <p className="mt-4 text-blue-900 font-bold">
          👉 Apprends constamment !
        </p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-6">
        🚀 Challenge 7 Jours
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { day: "Lun", task: "Refactor 1 fichier avec SOLID" },
          { day: "Mar", task: "Ajouter des tests unitaires" },
          { day: "Mer", task: "Optimiser les requêtes DB" },
          { day: "Jeu", task: "Code review avec un collègue" },
          { day: "Ven", task: "Documenter le code complexe" },
          { day: "Sam", task: "Apprendre 1 nouveau pattern" },
          { day: "Dim", task: "Side project avec best practices" },
        ].map((day, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-4"
          >
            <p className="font-black text-indigo-900 text-xl mb-2">{day.day}</p>
            <p className="text-gray-700 text-sm">{day.task}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center">
      <h3 className="text-4xl font-black mb-6">Félicitations ! 🎉</h3>
      <p className="text-2xl mb-8">
        Tu as maintenant toutes les clés pour devenir un développeur
        d&apos;élite.
        <br />
        Le voyage ne fait que commencer !
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <button
          onClick={() => setActiveTab(0)}
          className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl flex items-center gap-2"
        >
          <Rocket size={24} />
          Revoir la Formation
        </button>
        <button className="bg-purple-900 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl flex items-center gap-2">
          <Target size={24} />
          Commencer à Coder
          <ChevronRight size={20} />
        </button>
      </div>
      <p className="text-lg mt-8 text-white/90">
        💪 Tu as ce qu&apos;il faut. Maintenant, passe à l&apos;action !
      </p>
    </div>
  </div>
);
