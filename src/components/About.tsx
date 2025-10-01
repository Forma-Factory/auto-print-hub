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
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Chi Siamo
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Siamo un'azienda innovativa che sta rivoluzionando il mondo della stampa 3D 
              attraverso l'automazione intelligente e software avanzati.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
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
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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
