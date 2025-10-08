import { useState } from "react";
import { Plus, Edit, Trash2, ArrowLeft, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Link, useParams } from "react-router-dom";

const AdminChapitres = () => {
  const { moduleId } = useParams();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  // Mock data
  const chapitres = [
    {
      id: 1,
      title: "Qu'est-ce que la blockchain ?",
      summary: "Introduction à la technologie blockchain",
      video: "https://youtube.com/watch?v=example1",
      duration: "15 min",
    },
    {
      id: 2,
      title: "Bitcoin vs Ethereum",
      summary: "Comparaison des deux principales cryptomonnaies",
      video: "https://youtube.com/watch?v=example2",
      duration: "20 min",
    },
    {
      id: 3,
      title: "Créer son premier wallet",
      summary: "Guide pratique pour créer un portefeuille crypto",
      video: "https://youtube.com/watch?v=example3",
      duration: "25 min",
    },
  ];

  const handleAddChapitre = () => {
    toast({
      title: "Chapitre créé ! 🎉",
      description: "Le chapitre a été ajouté au module.",
    });
    setIsAddDialogOpen(false);
  };

  const handleDelete = (title: string) => {
    toast({
      title: "Chapitre supprimé",
      description: `"${title}" a été supprimé.`,
    });
  };

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-heading font-bold">Gestion des chapitres</h1>
            <p className="text-muted-foreground">Module : Introduction à la crypto</p>
          </div>
          <Link to="/admin/modules">
            <Button variant="outline">
              <ArrowLeft className="mr-2" size={16} />
              Retour aux modules
            </Button>
          </Link>
        </div>

        {/* Add Chapter Button */}
        <div className="flex justify-end">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="hero">
                <Plus className="mr-2" size={16} />
                Ajouter un chapitre
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="font-heading">Ajouter un nouveau chapitre</DialogTitle>
                <DialogDescription>Remplissez les informations du chapitre</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="chapterTitle">Titre du chapitre *</Label>
                  <Input id="chapterTitle" placeholder="Ex: Qu'est-ce que la blockchain ?" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="summary">Résumé *</Label>
                  <Textarea
                    id="summary"
                    placeholder="Résumé du contenu du chapitre..."
                    className="mt-2 resize-none"
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="videoUrl">Lien vidéo (YouTube/Vimeo)</Label>
                    <Input id="videoUrl" placeholder="https://youtube.com/watch?v=..." className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="chapterDuration">Durée</Label>
                    <Input id="chapterDuration" placeholder="Ex: 15 min" className="mt-2" />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Annuler
                </Button>
                <Button variant="hero" onClick={handleAddChapitre}>
                  Ajouter le chapitre
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Chapters List */}
        <div className="grid gap-6">
          {chapitres.map((chapitre, index) => (
            <Card key={chapitre.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                      <CardTitle className="font-heading text-xl">{chapitre.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{chapitre.summary}</CardDescription>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="ghost" size="sm">
                      <Edit size={14} />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(chapitre.title)}>
                      <Trash2 size={14} className="text-destructive" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Video size={16} className="text-primary" />
                    <a
                      href={chapitre.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Voir la vidéo
                    </a>
                  </div>
                  <span>•</span>
                  <span>{chapitre.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminChapitres;
