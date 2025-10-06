import { Lightbulb, Rocket, Users } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovazione",
    description: "Sviluppiamo soluzioni all'avanguardia per il settore della stampa 3D"
  },
  {
    icon: Rocket,
    title: "Efficienza",
    description: "Ottimizziamo i processi per massimizzare la produttività"
  },
  {
    icon: Users,
    title: "Formazione",
    description: "Crediamo nella diffusione della conoscenza attraverso l'educazione"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
              <span className="text-primary font-medium">Il Nostro DNA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Chi Siamo
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Siamo un'azienda innovativa che sta rivoluzionando il mondo della stampa 3D 
              attraverso l'automazione intelligente e software avanzati.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              La nostra missione è rendere la stampa 3D più accessibile, efficiente e 
              integrata con la formazione, creando un ecosistema completo per professionisti 
              e studenti.
            </p>
          </div>
          
          <div className="grid gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group animate-fade-in backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-xl bg-primary/20 border border-primary/30 group-hover:bg-primary/30 group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
