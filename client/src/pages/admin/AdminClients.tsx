import { useState } from "react";
import { Search, Eye, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const AdminClients = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const clients = [
    { id: 1, name: "Jean Dupont", email: "jean@exemple.fr", date: "01/10/2025", modules: 3 },
    { id: 2, name: "Marie Martin", email: "marie@exemple.fr", date: "30/09/2025", modules: 5 },
    { id: 3, name: "Thomas Bernard", email: "thomas@exemple.fr", date: "29/09/2025", modules: 2 },
    { id: 4, name: "Sophie Laurent", email: "sophie@exemple.fr", date: "28/09/2025", modules: 4 },
    { id: 5, name: "Pierre Dubois", email: "pierre@exemple.fr", date: "27/09/2025", modules: 1 },
  ];

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-heading font-bold">Gestion des clients</h1>
            <p className="text-muted-foreground">Liste complète des utilisateurs inscrits</p>
          </div>
          <Link to="/admin/dashboard">
            <Button variant="outline">
              <ArrowLeft className="mr-2" size={16} />
              Retour
            </Button>
          </Link>
        </div>

        {/* Search */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Rechercher un client</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Rechercher par nom ou email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </CardContent>
        </Card>

        {/* Clients Table */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Liste des clients ({filteredClients.length})</CardTitle>
            <CardDescription>Cliquez sur "Voir" pour afficher les détails</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Nom</th>
                    <th className="text-left py-3 px-4 font-semibold">Email</th>
                    <th className="text-left py-3 px-4 font-semibold">Inscription</th>
                    <th className="text-left py-3 px-4 font-semibold">Modules</th>
                    <th className="text-right py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{client.name}</td>
                      <td className="py-3 px-4 text-muted-foreground">{client.email}</td>
                      <td className="py-3 px-4 text-muted-foreground">{client.date}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center justify-center px-2 py-1 bg-primary/20 text-primary rounded text-sm font-medium">
                          {client.modules}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <Eye className="mr-1" size={14} />
                              Voir
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="font-heading">Détails du client</DialogTitle>
                              <DialogDescription>Informations complètes sur l'utilisateur</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4">
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Nom complet</p>
                                <p className="text-lg font-semibold">{client.name}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Email</p>
                                <p className="text-lg">{client.email}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Date d'inscription</p>
                                <p className="text-lg">{client.date}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Modules suivis</p>
                                <p className="text-lg font-semibold text-primary">{client.modules} modules</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
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

export default AdminClients;
