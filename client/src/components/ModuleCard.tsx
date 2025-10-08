import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status?: "available" | "coming-soon";
  level?: "Débutant" | "Intermédiaire" | "Avancé";
  image?: string;
}

const ModuleCard = ({ icon: Icon, title, description, status = "coming-soon", level, image }: ModuleCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary overflow-hidden">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          {status === "coming-soon" && (
            <Badge variant="secondary" className="absolute top-4 right-4 font-medium">
              À venir
            </Badge>
          )}
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-gradient-card group-hover:shadow-lg transition-shadow">
            <Icon size={32} className="text-primary" />
          </div>
          {!image && status === "coming-soon" && (
            <Badge variant="secondary" className="font-medium">
              À venir
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-heading mt-4 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        {level && (
          <Badge variant="outline" className="w-fit">
            {level}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm md:text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
