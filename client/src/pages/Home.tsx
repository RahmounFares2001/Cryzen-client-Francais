import { useState } from "react";
import { BookOpen, Shield, TrendingUp, Globe, CheckCircle2, Zap, Users, Award, ArrowRight, Play, Clock, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import ModuleCard from "@/components/ModuleCard";
import heroImage from "@/assets/hero-crypto.jpg";
import moduleIntro from "@/assets/module-intro.jpg";
import moduleSecurity from "@/assets/module-security.jpg";
import moduleTrading from "@/assets/module-trading.jpg";
import moduleDefi from "@/assets/module-defi.jpg";

const Home = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      toast({
        title: "Merci ! 🎉",
        description: "Tu es désormais sur la liste d'attente. On te contacte très bientôt !",
        duration: 5000,
      });
      setEmail("");
      setName("");
    }
  };

  const modules = [
    {
      icon: BookOpen,
      title: "Introduction à la crypto",
      description: "Découvre les bases des cryptomonnaies, la blockchain et le fonctionnement des portefeuilles.",
      level: "Débutant" as const,
      image: moduleIntro,
    },
    {
      icon: Shield,
      title: "Sécurité & bonnes pratiques",
      description: "Protège tes actifs numériques avec les meilleures pratiques de sécurité.",
      level: "Débutant" as const,
      image: moduleSecurity,
    },
    {
      icon: TrendingUp,
      title: "Trading débutant",
      description: "Apprends les fondamentaux du trading crypto et les stratégies de base.",
      level: "Intermédiaire" as const,
      image: moduleTrading,
    },
    {
      icon: Globe,
      title: "DeFi & NFT",
      description: "Explore la finance décentralisée, les NFT et les nouvelles opportunités du Web3.",
      level: "Avancé" as const,
      image: moduleDefi,
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Apprentissage progressif",
      description: "Apprends à ton rythme avec des leçons claires et interactives.",
    },
    {
      icon: TrendingUp,
      title: "Parcours structurés",
      description: "Des cours pour tous les niveaux : débutant, intermédiaire, avancé.",
    },
    {
      icon: Globe,
      title: "100% en français",
      description: "Contenu accessible à tous, sans jargon compliqué.",
    },
  ];

  const testimonials = [
    {
      name: "Sophie M.",
      role: "Étudiante",
      content: "Enfin une formation crypto claire et en français ! J'ai enfin compris la blockchain.",
      rating: 5,
    },
    {
      name: "Thomas D.",
      role: "Entrepreneur",
      content: "CryZen m'a permis de comprendre les bases avant d'investir. Contenu de qualité !",
      rating: 5,
    },
    {
      name: "Marie L.",
      role: "Développeuse",
      content: "Parfait pour débuter ! Les explications sont simples et progressives.",
      rating: 5,
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Inscris-toi gratuitement",
      description: "Crée ton compte en 30 secondes",
      icon: Users,
    },
    {
      step: "2",
      title: "Choisis ton parcours",
      description: "Sélectionne le niveau adapté à tes connaissances",
      icon: Target,
    },
    {
      step: "3",
      title: "Apprends à ton rythme",
      description: "Progresse avec des leçons interactives et des quiz",
      icon: Rocket,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 gradient-hero opacity-95">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,211,183,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(123,97,255,0.15),transparent_50%)]" />
        </div>
        <img
          src={heroImage}
          alt="Crypto learning platform"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        
        {/* Floating crypto symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse">₿</div>
          <div className="absolute top-40 right-20 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '150ms' }}>Ξ</div>
          <div className="absolute bottom-32 left-1/4 text-4xl opacity-10 animate-pulse" style={{ animationDelay: '300ms' }}>◊</div>
          <div className="absolute bottom-20 right-1/3 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '500ms' }}>⟠</div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 
              mb-6 mt-14 md:mt-0">
            <Zap size={16} className="text-primary animate-pulse" />
            <span className="text-sm text-white font-medium">Plateforme 100% française 🇫🇷</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Maîtrise la crypto
            <br />
            <span className="text-white">
              facilement
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            La première plateforme e-learning francophone pour comprendre Bitcoin, Ethereum, la blockchain et le Web3 étape par étape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="lg" 
                className="text-lg px-10 py-4 h-auto group
                    w-4/5 md:w-auto" asChild>
              <a href="#waitlist">
                Commencer gratuitement
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button variant="outline" size="lg" 
                className="text-lg px-10 py-4 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20
                  w-4/5 md:w-auto"
                   asChild>
              <a href="#demo" className="flex items-center gap-2">
                <Play size={20} />
                Voir la démo
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">4+</div>
              <div className="text-sm text-white/70">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/70">Leçons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/70">Français</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-xl hover:bg-gradient-card transition-all duration-300 animate-scale-in"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-card mb-4">
                  <feature.icon size={36} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              En 3 étapes simples, lance-toi dans l'apprentissage de la crypto
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-card flex items-center justify-center border-4 border-background">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <CardContent className="pt-8">
                    <div className="inline-flex p-4 rounded-full bg-gradient-card mb-4">
                      <step.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-card -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">Modules à venir</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Une formation complète pour maîtriser tous les aspects de la crypto-monnaie
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">Ce qu'ils en pensent</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvre les témoignages de nos futurs apprenants
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-card flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div className="animate-scale-in">
              <div className="text-5xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Modules complets</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '100ms' }}>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Leçons vidéos</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Quiz interactifs</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '300ms' }}>
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">
              Rejoins dès maintenant la communauté CryZen 🚀
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              Sois parmi les premiers à accéder à la plateforme dès son lancement
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-gradient-card p-8 rounded-2xl shadow-xl">
            <div>
              <Label htmlFor="name" className="text-base font-medium">
                Prénom & Nom
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Jean Dupont"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 h-12 text-base"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-base font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jean@exemple.fr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 h-12 text-base"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" 
                className="w-full text-base md:text-lg h-12 md:h-14">
              <CheckCircle2 className="mr-2" size={20} />
              Je rejoins la liste d'attente
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;