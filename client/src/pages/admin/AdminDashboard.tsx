import { Users, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const AdminDashboard = () => {
  // Mock data
  const stats = [
    { label: "Utilisateurs inscrits", value: "1,234", icon: Users, color: "text-primary" },
    { label: "Modules publiés", value: "12", icon: BookOpen, color: "text-secondary" },
    { label: "Quiz complétés", value: "3,456", icon: TrendingUp, color: "text-mint" },
  ];

  const activityData = [
    { name: "Lun", quizzes: 45 },
    { name: "Mar", quizzes: 62 },
    { name: "Mer", quizzes: 78 },
    { name: "Jeu", quizzes: 55 },
    { name: "Ven", quizzes: 92 },
    { name: "Sam", quizzes: 48 },
    { name: "Dim", quizzes: 38 },
  ];

  const recentUsers = [
    { name: "Jean Dupont", email: "jean@exemple.fr", date: "01/10/2025" },
    { name: "Marie Martin", email: "marie@exemple.fr", date: "30/09/2025" },
    { name: "Thomas Bernard", email: "thomas@exemple.fr", date: "29/09/2025" },
  ];

  const recentModules = [
    { title: "Introduction à la crypto", level: "Débutant", status: "Publié" },
    { title: "Trading avancé", level: "Avancé", status: "Brouillon" },
    { title: "Sécurité blockchain", level: "Intermédiaire", status: "Publié" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-heading font-bold">Tableau de bord</h1>
            <p className="text-muted-foreground">Vue d'ensemble de la plateforme CryZen</p>
          </div>
          <Link to="/">
            <Button variant="outline">Retour au site</Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-heading font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Activité de la semaine</CardTitle>
            <CardDescription>Nombre de quiz complétés par jour</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="quizzes" stroke="hsl(169 76% 53%)" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Data */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Users */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Derniers utilisateurs</CardTitle>
              <CardDescription>Inscriptions récentes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.email} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{user.date}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/admin/clients">Voir tous les clients</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Modules */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Modules récents</CardTitle>
              <CardDescription>Dernières mises à jour</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentModules.map((module) => (
                  <div key={module.title} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{module.title}</p>
                      <p className="text-sm text-muted-foreground">{module.level}</p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        module.status === "Publié" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {module.status}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/admin/modules">Voir tous les modules</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
