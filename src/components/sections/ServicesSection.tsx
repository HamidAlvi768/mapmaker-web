import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications using modern frameworks like React, Vue, Angular with backend technologies.",
    icon: "🌐"
  },
  {
    title: "Mobile Development", 
    description: "Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, or native technologies.",
    icon: "📱"
  },
  {
    title: "UI/UX Design",
    description: "User interface and experience design services including wireframing, prototyping, and visual design.",
    icon: "🎨"
  },
  {
    title: "Data Science & AI",
    description: "Machine learning models, data analysis, and AI-powered solutions using Python, TensorFlow, and more.",
    icon: "🤖"
  },
  {
    title: "Blockchain Development",
    description: "Smart contracts, DeFi applications, and blockchain solutions using Solidity, Web3, and various protocols.",
    icon: "⛓️"
  },
  {
    title: "DevOps & Cloud",
    description: "Cloud infrastructure, CI/CD pipelines, containerization, and deployment automation services.",
    icon: "☁️"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explanation of the types of services and solutions that skilled projects can be found through the platform and contributors can provide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;