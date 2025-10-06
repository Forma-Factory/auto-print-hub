import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cog, Monitor, GraduationCap, Zap, FileText, Camera, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import featureAutomation from "@/assets/feature-automation.jpg";
import featureManagement from "@/assets/feature-management.jpg";
import featureAnalytics from "@/assets/feature-analytics.jpg";
import featureMonitoring from "@/assets/feature-monitoring.jpg";
import featureEducation from "@/assets/feature-education.jpg";
import automationSystem from "@/assets/automation-system-new.png";

const features = [
  {
    icon: Cog,
    title: "Sistema di Automatizzazione",
    description: "Cambio automatico dei piatti per produzione continua 24/7",
    features: ["Cambio piatti automatico", "Zero tempi morti", "Produzione continua"],
    link: "/features/automation",
    image: automationSystem
  },
  {
    icon: Monitor,
    title: "Gestione Multi-Stampante",
    description: "Controlla tutte le tue stampanti da un'unica dashboard",
    features: ["Dashboard centralizzata", "Controllo remoto", "Monitoraggio real-time"],
    link: "/features/management",
    image: featureManagement
  },
  {
    icon: FileText,
    title: "Gestione Coda Intelligente",
    description: "Ottimizza automaticamente la coda di stampa",
    features: ["Priorità automatica", "Bilanciamento carico", "Scheduling avanzato"],
    link: "/features/queue",
    image: featureAnalytics
  },
  {
    icon: Camera,
    title: "Monitoraggio Live",
    description: "Sorveglia le tue stampe in tempo reale",
    features: ["Streaming video", "Notifiche istantanee", "Controllo remoto"],
    link: "/features/monitoring",
    image: featureMonitoring
  },
  {
    icon: GraduationCap,
    title: "Piattaforma Didattica",
    description: "Corsi e certificazioni integrate nella piattaforma",
    features: ["Corsi interattivi", "Progetti guidati", "Certificazioni"],
    link: "/features/education",
    image: featureEducation
  },
  {
    icon: Zap,
    title: "API & Integrazioni",
    description: "Integra con i tuoi sistemi esistenti",
    features: ["API RESTful", "Webhook", "Plugin personalizzati"],
    link: "/features/integrations",
    image: featureAutomation
  }
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="text-primary font-medium">Tutte le Features</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Potenza e Innovazione
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              in Ogni Funzionalità
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed">
            Scopri tutte le funzionalità che rendono Forma Factory la soluzione più avanzata 
            per la gestione della stampa 3D professionale
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="group bg-gradient-card border-border/50 hover:border-primary/50 overflow-hidden hover:shadow-elegant transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={`${feature.title} - funzionalità Forma Factory`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute top-4 left-4 p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 group-hover:bg-primary/30 transition-all group-hover:scale-110">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <span className="mr-3 h-2 w-2 rounded-full bg-gradient-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full group" asChild>
                      <Link to={feature.link}>
                        Scopri di più
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
