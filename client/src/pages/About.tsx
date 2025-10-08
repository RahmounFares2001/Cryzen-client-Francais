import { Target, Users, Lightbulb, Award, Zap, Heart, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const team = [
    { 
      name: "Sophie Martin", 
      role: "CEO & Co-fondatrice", 
      description: "Experte blockchain & éducation",
      color: "from-primary to-secondary"
    },
    { 
      name: "Thomas Dubois", 
      role: "CTO & Co-fondateur", 
      description: "Développeur & passionné de crypto",
      color: "from-secondary to-primary"
    },
    { 
      name: "Marie Laurent", 
      role: "Responsable Pédagogique", 
      description: "Spécialiste e-learning",
      color: "from-primary to-secondary"
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Nous sommes passionnés par la blockchain et l'éducation accessible à tous",
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "Contenus vérifiés et approuvés par des experts de la crypto",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Des standards élevés pour offrir la meilleure expérience d'apprentissage",
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Une communauté bienveillante et engagée pour progresser ensemble",
    },
  ];

  const achievements = [
    { number: "4+", label: "Modules complets", icon: Award },
    { number: "50+", label: "Leçons créées", icon: Lightbulb },
    { number: "100%", label: "En français", icon: Zap },
    { number: "24/7", label: "Support actif", icon: Users },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            À propos de <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CryZen</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Notre mission est de rendre la cryptomonnaie accessible à tous les francophones, en proposant un
            apprentissage progressif, ludique et sans jargon technique compliqué.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.label} 
              className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-card border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <achievement.icon size={32} className="text-primary mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Notre ADN</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary">
              <CardHeader>
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4">
                  <Target size={40} className="text-white" />
                </div>
                <CardTitle className="font-heading text-2xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Démocratiser l'accès à la connaissance crypto pour tous les francophones, quel que soit leur niveau
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-secondary">
              <CardHeader>
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-secondary to-primary mx-auto mb-4">
                  <Lightbulb size={40} className="text-white" />
                </div>
                <CardTitle className="font-heading text-2xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Devenir la référence francophone de l'apprentissage crypto en ligne d'ici 2026
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary">
              <CardHeader>
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4">
                  <Users size={40} className="text-white" />
                </div>
                <CardTitle className="font-heading text-2xl">Valeurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Pédagogie, accessibilité, transparence et innovation au cœur de tout ce que nous faisons
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20 bg-gradient-card rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Nos valeurs fondamentales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-full bg-background mb-4 group-hover:shadow-lg transition-shadow">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">Notre histoire</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                CryZen est né d'un constat simple : il existe très peu de ressources pédagogiques de qualité en français
                pour apprendre la cryptomonnaie. Trop souvent, les contenus sont trop techniques, en anglais, ou peu
                structurés.
              </p>
              <p className="text-muted-foreground">
                Face à ce constat, nous avons décidé de créer la première plateforme e-learning francophone dédiée à la crypto, 
                avec une approche progressive, ludique et accessible à tous. Notre objectif : permettre à chacun de comprendre et
                maîtriser cet univers fascinant, quel que soit son niveau de départ.
              </p>
              <p className="text-muted-foreground">
                Aujourd'hui, CryZen c'est une équipe passionnée qui travaille chaque jour pour créer des contenus de qualité,
                simples à comprendre et adaptés aux besoins des francophones qui veulent se lancer dans l'univers crypto.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">L'équipe CryZen</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Des passionnés de crypto et d'éducation réunis pour démocratiser l'apprentissage blockchain
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.color} mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                    <span className="text-5xl font-heading font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <CardTitle className="font-heading text-2xl mb-2">{member.name}</CardTitle>
                  <p className="text-sm font-semibold text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-12 bg-gradient-to-r from-primary to-secondary rounded-3xl max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Prêt à nous rejoindre ?</h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoins la communauté CryZen et commence ton voyage dans l'univers crypto
          </p>
          <a
            href="/#waitlist"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary rounded-xl hover:bg-white/90 font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
          >
            Rejoindre la liste d'attente 🚀
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;