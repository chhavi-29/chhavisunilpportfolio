import { Brain, Globe, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description: "Predictive models, NLP systems, and intelligent applications that transform data into actionable insights.",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive, modern frontend and backend solutions that deliver exceptional user experiences.",
    color: "secondary",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Scalable and efficient software systems built with clean code and best practices.",
    color: "accent",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Expertise <span className="gradient-text">I Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Combining AI intelligence with modern development practices to create impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-3xl shadow-card card-hover text-center"
              >
                <div
                  className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    service.color === "primary"
                      ? "gradient-bg"
                      : service.color === "secondary"
                      ? "gradient-secondary-bg"
                      : "gradient-accent-bg"
                  }`}
                >
                  <Icon className="text-primary-foreground" size={36} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button variant="ghost" className="group-hover:text-primary">
                  Learn More →
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
