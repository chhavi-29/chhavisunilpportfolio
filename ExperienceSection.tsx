import { Briefcase, Cloud, Palette, Code } from "lucide-react";

const experiences = [
  {
    title: "AWS AI-ML Virtual Internship",
    company: "Amazon Web Services",
    period: "2025",
    description: "Hands-on exposure to AI/ML concepts and cloud-based workflows using AWS services.",
    icon: Cloud,
    color: "primary",
  },
  {
    title: "Google AI-ML Virtual Internship",
    company: "Google",
    period: "2024",
    description: "Practical experience in applied machine learning concepts and Google's AI tools.",
    icon: Code,
    color: "secondary",
  },
  {
    title: "Graphic Designer",
    company: "College Technical Club",
    period: "2023 – Present",
    description: "Designed creatives and visuals for technical events, demonstrating creativity alongside technical skills.",
    icon: Palette,
    color: "accent",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Experience</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            My <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={index}
                    className="relative flex gap-6 md:gap-8"
                  >
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-card z-10 ${
                        exp.color === "primary"
                          ? "gradient-bg"
                          : exp.color === "secondary"
                          ? "gradient-secondary-bg"
                          : "gradient-accent-bg"
                      }`}
                    >
                      <Icon className="text-primary-foreground" size={28} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card p-6 rounded-2xl shadow-card card-hover">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-display font-bold text-xl">{exp.title}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-semibold">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
