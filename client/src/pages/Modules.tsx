import { BookOpen, Shield, TrendingUp, Globe } from "lucide-react";
import ModuleCard from "@/components/ModuleCard";
import moduleIntro from "@/assets/module-intro.jpg";
import moduleSecurity from "@/assets/module-security.jpg";
import moduleTrading from "@/assets/module-trading.jpg";
import moduleDefi from "@/assets/module-defi.jpg";

const Modules = () => {
  const modules = [
    {
      icon: BookOpen,
      title: "Introduction à la crypto",
      description:
        "Découvre les bases des cryptomonnaies, la blockchain et le fonctionnement des portefeuilles. Parfait pour démarrer ton aventure crypto.",
      level: "Débutant" as const,
      image: moduleIntro,
    },
    {
      icon: Shield,
      title: "Sécurité & bonnes pratiques",
      description:
        "Protège tes actifs numériques avec les meilleures pratiques de sécurité. Apprends à éviter les pièges et à sécuriser tes cryptos.",
      level: "Débutant" as const,
      image: moduleSecurity,
    },
    {
      icon: TrendingUp,
      title: "Trading débutant",
      description:
        "Apprends les fondamentaux du trading crypto et les stratégies de base. Comprends les graphiques et les indicateurs.",
      level: "Intermédiaire" as const,
      image: moduleTrading,
    },
    {
      icon: Globe,
      title: "DeFi & NFT",
      description:
        "Explore la finance décentralisée, les NFT et les nouvelles opportunités du Web3. Plonge dans l'avenir de la finance.",
      level: "Avancé" as const,
      image: moduleDefi,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Nos <span className="text-gradient">Modules</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Une formation complète et progressive pour maîtriser tous les aspects de la crypto-monnaie, du niveau
            débutant à avancé.
          </p>
        </div>

        {/* Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {modules.map((module) => (
              <ModuleCard
                key={module.title}
                icon={module.icon}
                title={module.title}
                description={module.description}
                level={module.level}
                status="coming-soon"
                image={module.image}
              />
            ))}
          </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 bg-gradient-card rounded-2xl max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Envie d'en savoir plus ?</h2>
          <p className="text-muted-foreground mb-6">
            Rejoins la liste d'attente pour être parmi les premiers à accéder à nos modules dès leur lancement.
          </p>
          <a
            href="/#waitlist"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-mint-dark font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Rejoindre la liste d'attente 🚀
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modules;
