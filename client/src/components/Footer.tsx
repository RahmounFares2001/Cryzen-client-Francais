import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      toast({
        title: "Inscription réussie ! 📧",
        description: "Tu recevras bientôt nos actualités.",
        duration: 3000,
      });
      setNewsletterEmail("");
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/cryzen", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/cryzen", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/cryzen", label: "Twitter/X" },
  ];

  const quickLinks = [
    { label: "Accueil", href: "/" },
    { label: "Modules", href: "/modules" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  const resources = [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Guide débutant", href: "/guide" },
    { label: "Glossaire crypto", href: "/glossaire" },
  ];

  return (
    <footer className="bg-foreground text-background relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-heading font-bold text-gradient mb-4">CryZen</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              La première plateforme e-learning francophone pour maîtriser la crypto-monnaie étape par étape.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-card hover:bg-secondary transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-primary">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-background/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-primary">Ressources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-background/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-primary">Newsletter</h4>
            <p className="text-background/80 mb-4 text-sm">
              Reçois nos dernières actualités et conseils crypto
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="ton@email.fr"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
              />
              <Button 
                type="submit" 
                size="icon"
                className="bg-primary hover:bg-primary/80 shrink-0"
              >
                <Send size={18} />
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-card">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-background/60 text-xs mb-1">Email</div>
                <a href="mailto:contact@cryzen.fr" className="text-background/90 hover:text-primary transition-colors">
                  contact@cryzen.fr
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-card">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-background/60 text-xs mb-1">Téléphone</div>
                <a href="tel:+33123456789" className="text-background/90 hover:text-primary transition-colors">
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-card">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-background/60 text-xs mb-1">Localisation</div>
                <span className="text-background/90">Paris, France 🇫🇷</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-background/70">
            © {currentYear} CryZen - Tous droits réservés
          </p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="text-background/70 hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="text-background/70 hover:text-primary transition-colors">
              Confidentialité
            </Link>
            <Link to="/cgu" className="text-background/70 hover:text-primary transition-colors">
              CGU
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative crypto symbols */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute bottom-4 left-10 text-4xl">₿</div>
        <div className="absolute bottom-8 left-1/4 text-3xl">Ξ</div>
        <div className="absolute bottom-6 left-1/2 text-4xl">◊</div>
        <div className="absolute bottom-10 right-1/4 text-3xl">⟠</div>
        <div className="absolute bottom-4 right-10 text-4xl">₿</div>
      </div>
    </footer>
  );
};

export default Footer;