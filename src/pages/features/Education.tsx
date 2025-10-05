import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Lightbulb, Rocket, Target } from "lucide-react";
import { Link } from "react-router-dom";
import educationImage from "@/assets/feature-education.jpg";

const benefits = [
  {
    icon: BookOpen,
    title: "Didattica Attiva",
    description: "Metodologie innovative che coinvolgono gli studenti attraverso progetti pratici"
  },
  {
    icon: Users,
    title: "Apprendimento Collaborativo",
    description: "Favorire il lavoro di gruppo e lo sviluppo di competenze trasversali"
  },
  {
    icon: Trophy,
    title: "Sviluppo Talenti",
    description: "Aiutiamo ogni ragazzo a scoprire e coltivare le proprie capacità uniche"
  },
  {
    icon: Lightbulb,
    title: "Creatività & Innovazione",
    description: "Stimolare il pensiero creativo e la capacità di problem solving"
  }
];

const courses = [
  "Introduzione alla Stampa 3D e Modellazione Base",
  "Design Thinking e Prototipazione Rapida",
  "Progetti STEAM con Stampa 3D",
  "Dalla Progettazione alla Realizzazione",
  "Workshop Tematici Personalizzati",
  "Percorsi Avanzati per Docenti"
];

const features = [
  "Corsi progettati da esperti del settore",
  "Materiali didattici sempre aggiornati",
  "Progetti pratici hands-on",
  "Certificazioni riconosciute",
  "Piattaforma integrata per la gestione dei corsi",
  "Supporto continuo da parte di tutor esperti",
  "Metodologie didattiche validate",
  "Focus su competenze del futuro"
];

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
                <span className="text-primary font-medium">Didattica e Formazione</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Formiamo i Talenti
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  del Futuro
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La didattica è uno dei nostri focus principali. Crediamo nell'apprendimento attivo 
                e integriamo la stampa 3D nei nostri corsi per coinvolgere i ragazzi e aiutarli 
                a sviluppare i loro talenti attraverso progetti concreti e stimolanti.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                  <Link to="/contact">Scopri i Corsi</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/features">Vedi Altre Soluzioni</Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src={educationImage} 
                alt="Piattaforma didattica Forma Factory"
                className="rounded-2xl shadow-elegant border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Il Nostro Approccio
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Siamo esperti nel settore della stampa 3D e della didattica. Cerchiamo sempre 
            il modo migliore per coinvolgere i ragazzi, rendendo l'apprendimento un'esperienza 
            entusiasmante e significativa. La nostra piattaforma integra tecnologia e pedagogia 
            per favorire la didattica attiva attraverso progetti che uniscono creatività, 
            innovazione e competenze tecniche.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Focus sul Pratico</CardTitle>
                <CardDescription>
                  Ogni corso include progetti concreti che gli studenti possono toccare con mano
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 w-fit">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Innovazione Continua</CardTitle>
                <CardDescription>
                  Aggiorniamo costantemente i contenuti per riflettere le ultime tecnologie
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Team di Esperti</CardTitle>
                <CardDescription>
                  Docenti qualificati con esperienza sia in tecnologia che in pedagogia
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Perché la Nostra Didattica
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un approccio innovativo per sviluppare competenze concrete
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="text-center bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-elegant"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 w-fit">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              I Nostri Corsi
            </h2>
            <p className="text-xl text-muted-foreground">
              Percorsi formativi completi che integrano stampa 3D e didattica attiva
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Catalogo Corsi</CardTitle>
                <CardDescription>Scopri la nostra offerta formativa</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Caratteristiche</CardTitle>
                <CardDescription>Cosa rende speciali i nostri corsi</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Studenti Formati</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Scuole Partner</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-muted-foreground">Soddisfazione</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <div className="text-muted-foreground">Progetti Realizzati</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white leading-tight">
            Porta l'Innovazione nella Tua Scuola
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Scopri come i nostri corsi possono trasformare l'apprendimento dei tuoi studenti
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Richiedi Informazioni</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;