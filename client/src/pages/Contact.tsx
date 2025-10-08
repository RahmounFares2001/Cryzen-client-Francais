import { useState } from "react";
import { Mail, Send, MessageCircle, MapPin, Phone, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast({
        title: "Message envoyé ! 📧",
        description: "Nous te répondrons dans les plus brefs délais.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Écris-nous à tout moment",
      value: "contact@cryzen.fr",
      link: "mailto:contact@cryzen.fr",
      color: "from-primary to-secondary",
    },
    {
      icon: Phone,
      title: "Téléphone",
      description: "Appelle-nous directement",
      value: "+33 1 23 45 67 89",
      link: "tel:+33123456789",
      color: "from-secondary to-primary",
    },
    {
      icon: MessageCircle,
      title: "Chat en direct",
      description: "Support instantané",
      value: "Bientôt disponible",
      link: "#",
      color: "from-primary to-secondary",
    },
  ];

  const faqs = [
    {
      question: "Quand la plateforme sera-t-elle disponible ?",
      answer: "Très bientôt ! Inscris-toi sur la liste d'attente pour être informé du lancement.",
    },
    {
      question: "Les cours sont-ils gratuits ?",
      answer: "Nous proposerons des modules gratuits et des formations premium plus avancées.",
    },
    {
      question: "Faut-il des connaissances préalables ?",
      answer: "Non ! CryZen est conçu pour les débutants complets en cryptomonnaie.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Contacte-<span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">nous</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Une question, une suggestion ? On est là pour t'aider ! 💬
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title} 
              className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${method.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon size={28} className="text-white" />
                </div>
                <CardTitle className="font-heading text-xl">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={method.link}
                  className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
                >
                  {method.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <Card className="lg:col-span-2 shadow-2xl border-2">
            <CardHeader className="bg-gradient-card">
              <CardTitle className="text-3xl font-heading">Envoie-nous un message</CardTitle>
              <CardDescription className="text-base">
                Remplis le formulaire ci-dessous et nous te répondrons rapidement
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-semibold text-base">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-semibold text-base">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jean@exemple.fr"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="font-semibold text-base">
                    Sujet
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Question sur les modules"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-semibold text-base">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Écris ton message ici..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="mt-2 resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full text-lg h-14">
                  <Send className="mr-2" size={20} />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info Card */}
            <Card className="bg-gradient-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Clock size={24} className="text-primary" />
                  Horaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-semibold mb-1">Lundi - Vendredi</div>
                  <div className="text-muted-foreground">9h00 - 18h00</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Weekend</div>
                  <div className="text-muted-foreground">Fermé</div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <MapPin size={24} className="text-primary" />
                  Localisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  75008 Paris, France 🇫🇷
                </p>
                <p className="text-sm text-muted-foreground">
                  Startup basée au cœur de Paris
                </p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-primary/5 border-primary/20 border-2">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">&lt; 24h</div>
                  <div className="text-sm text-muted-foreground">Temps de réponse moyen</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <HelpCircle size={32} className="text-primary" />
            <h2 className="text-3xl font-heading font-bold">Questions fréquentes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-heading">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;