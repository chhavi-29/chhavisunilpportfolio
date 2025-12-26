const skillCategories = [
  {
    title: "Programming",
    color: "primary",
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "AI / Machine Learning",
    color: "secondary",
    skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "NLP", "XGBoost", "LLM Tools"],
  },
  {
    title: "Web Development",
    color: "accent",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap"],
  },
  {
    title: "Backend & Tools",
    color: "primary",
    skills: ["FastAPI", "Django", "Docker", "Kubernetes", "AWS"],
  },
  {
    title: "Core Strengths",
    color: "secondary",
    skills: ["Problem-Solving", "Self-Learning", "Collaboration", "Creativity"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, web development, and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-card p-6 rounded-2xl shadow-card card-hover border-t-4 ${
                category.color === "primary"
                  ? "border-primary"
                  : category.color === "secondary"
                  ? "border-secondary"
                  : "border-accent"
              }`}
            >
              <h3 className="font-display font-bold text-xl mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                        : category.color === "secondary"
                        ? "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        : "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
