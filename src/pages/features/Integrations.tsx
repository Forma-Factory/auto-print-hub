import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Code, Webhook, Puzzle, Globe, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Integrations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                <span className="text-primary font-medium">API & Integrazioni</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Connetti Forma Factory
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  al Tuo Ecosistema
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                API RESTful complete, webhook personalizzabili e plugin per integrare perfettamente 
                il nostro sistema con i tuoi strumenti esistenti. Massima flessibilità per adattarsi 
                al tuo workflow aziendale.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/contact">
                    Richiedi API Key
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/features">Tutte le Features</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <Card className="relative bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>API Example</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-background/50 rounded-lg p-4 border border-border/50 font-mono text-sm">
                    <pre className="text-muted-foreground">
{`POST /api/v1/print-jobs
{
  "file": "model.gcode",
  "printer_id": "printer_01",
  "priority": "high",
  "material": "PLA",
  "settings": {
    "temperature": 210,
    "speed": 50
  }
}`}
                    </pre>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-muted-foreground">Response: 200 OK - Job queued</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modalità di Integrazione
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scegli il metodo più adatto alle tue esigenze di integrazione
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                title: "API RESTful",
                description: "API complete con endpoint per tutte le funzionalità della piattaforma",
                features: ["Documentazione completa", "Autenticazione OAuth2", "Rate limiting intelligente", "Versioning API"]
              },
              {
                icon: Webhook,
                title: "Webhook",
                description: "Ricevi notifiche in tempo reale su eventi specifici della piattaforma",
                features: ["Eventi personalizzabili", "Retry automatici", "Payload flessibili", "Logging completo"]
              },
              {
                icon: Puzzle,
                title: "Plugin Personalizzati",
                description: "Estendi le funzionalità con plugin sviluppati su misura",
                features: ["SDK completo", "Hot-reload", "Sandbox sicura", "Marketplace plugin"]
              }
            ].map((integration, index) => {
              const Icon = integration.icon;
              return (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-elegant animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 w-fit mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{integration.title}</CardTitle>
                    <CardDescription>{integration.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {integration.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Casi d'Uso Comuni
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scopri come le nostre integrazioni possono migliorare il tuo workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "E-commerce Integration",
                description: "Connetti il tuo negozio online per automatizzare ordini e produzione",
                example: "WooCommerce, Shopify, Magento"
              },
              {
                title: "ERP & Inventory",
                description: "Sincronizza inventario e ordini con il tuo sistema gestionale",
                example: "SAP, Odoo, Microsoft Dynamics"
              },
              {
                title: "Project Management",
                description: "Integra con i tuoi strumenti di gestione progetti e task",
                example: "Jira, Asana, Monday.com"
              },
              {
                title: "IoT & Smart Factory",
                description: "Connetti sensori e dispositivi per una fabbrica intelligente",
                example: "MQTT, Modbus, OPC-UA"
              },
              {
                title: "Analytics & BI",
                description: "Esporta dati verso piattaforme di business intelligence",
                example: "Power BI, Tableau, Grafana"
              },
              {
                title: "Custom Applications",
                description: "Sviluppa applicazioni personalizzate utilizzando le nostre API",
                example: "Mobile app, Dashboard custom, Automazioni"
              }
            ].map((useCase, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                    <span className="text-xs text-primary font-medium">{useCase.example}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Performance */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Sicurezza Garantita</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Tutte le integrazioni sono protette con i più alti standard di sicurezza
              </p>
              <ul className="space-y-3">
                {[
                  "Autenticazione OAuth 2.0 / JWT",
                  "Crittografia TLS 1.3",
                  "Rate limiting per prevenire abusi",
                  "Audit log completo",
                  "Whitelisting IP"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Performance Elevate</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                API ottimizzate per garantire risposte rapide e affidabili
              </p>
              <ul className="space-y-3">
                {[
                  "Latenza media < 100ms",
                  "Uptime 99.9% garantito",
                  "CDN globale",
                  "Caching intelligente",
                  "Load balancing automatico"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Inizia a Integrare Oggi
            </h2>
            <p className="text-xl text-muted-foreground">
              Richiedi le credenziali API e accedi alla documentazione completa per iniziare subito
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Richiedi API Key
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Globe className="mr-2 h-4 w-4" />
                Vedi Documentazione
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;
