import { useState } from "react";
import { Plus, Edit, Trash2, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const AdminModules = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  // Mock data
  const modules = [
    {
      id: 1,
      title: "Introduction à la crypto",
      level: "Débutant",
      duration: "4h",
      status: "Publié",
      description: "Les bases de la cryptomonnaie",
    },
    {
      id: 2,
      title: "Trading avancé",
      level: "Avancé",
      duration: "8h",
      status: "Brouillon",
      description: "Stratégies de trading avancées",
    },
    {
      id: 3,
      title: "Sécurité blockchain",
      level: "Intermédiaire",
      duration: "6h",
      status: "Publié",
      description: "Sécuriser vos actifs crypto",
    },
  ];

  const filteredModules = modules.filter((module) =>
    module.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddModule = () => {
    toast({
      title: "Module créé ! 🎉",
      description: "Le module a été ajouté avec succès.",
    });
    setIsAddDialogOpen(false);
  };

  const handleDelete = (title: string) => {
    toast({
      title: "Module supprimé",
      description: `"${title}" a été supprimé.`,
    });
  };

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-heading font-bold">Gestion des modules</h1>
            <p className="text-muted-foreground">Créer et gérer les modules de formation</p>
          </div>
          <Link to="/admin/dashboard">
            <Button variant="outline">
              <ArrowLeft className="mr-2" size={16} />
              Retour
            </Button>
          </Link>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="text"
              placeholder="Rechercher un module..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero">
                <Plus className="mr-2" size={16} />
                Créer un module
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="font-heading">Créer un nouveau module</DialogTitle>
                <DialogDescription>Remplissez les informations du module</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="title">Titre du module *</Label>
                  <Input id="title" placeholder="Ex: Introduction à la crypto" className="mt-2" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="level">Niveau *</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Sélectionner un niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debutant">Débutant</SelectItem>
                        <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                        <SelectItem value="avance">Avancé</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="duration">Durée estimée</Label>
                    <Input id="duration" placeholder="Ex: 4h" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Décrivez le contenu du module..."
                    className="mt-2 resize-none"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="image">Image (URL)</Label>
                  <Input id="image" placeholder="https://..." className="mt-2" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Annuler
                </Button>
                <Button variant="hero" onClick={handleAddModule}>
                  Créer le module
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Modules Table */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Liste des modules ({filteredModules.length})</CardTitle>
            <CardDescription>Gérez vos modules de formation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Titre</th>
                    <th className="text-left py-3 px-4 font-semibold">Niveau</th>
                    <th className="text-left py-3 px-4 font-semibold">Durée</th>
                    <th className="text-left py-3 px-4 font-semibold">Statut</th>
                    <th className="text-right py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredModules.map((module) => (
                    <tr key={module.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{module.title}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex px-2 py-1 bg-secondary/20 text-secondary rounded text-sm font-medium">
                          {module.level}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{module.duration}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex px-2 py-1 rounded text-sm font-medium ${
                            module.status === "Publié"
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {module.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex justify-end gap-2">
                          <Link to={`/admin/chapitres/${module.id}`}>
                            <Button variant="outline" size="sm">
                              Chapitres
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm">
                            <Edit size={14} />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(module.title)}>
                            <Trash2 size={14} className="text-destructive" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminModules;
