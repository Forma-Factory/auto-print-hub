import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 50000,
    suffix: "+",
    label: "Stampe Completate",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Clienti Soddisfatti",
  },
  {
    icon: Clock,
    value: 15000,
    suffix: "+",
    label: "Ore di Produzione",
  },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(value * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, value]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
                style={{
                  animation: isVisible ? `fade-in 0.6s ease-out ${index * 0.2}s both` : "none",
                }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
