import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Smart Matching",
    description: "Our AI-powered algorithm matches projects with the most suitable contributors based on skills, experience, and availability.",
    icon: "🎯"
  },
  {
    title: "Secure Payments",
    description: "Integrated escrow system ensures secure payments and protects both project creators and contributors throughout the process.",
    icon: "🔒"
  },
  {
    title: "Project Management",
    description: "Built-in tools for timeline tracking, milestone management, communication, and collaborative workflows.",
    icon: "📊"
  },
  {
    title: "Quality Assurance",
    description: "Review system, testing frameworks, and quality checkpoints to ensure project deliverables meet high standards.",
    icon: "✅"
  },
  {
    title: "Community Support",
    description: "Access to a vibrant community of experts, mentors, and fellow creators for guidance and networking.",
    icon: "👥"
  },
  {
    title: "Portfolio Building",
    description: "Showcase your work, build your professional portfolio, and establish credibility within the platform ecosystem.",
    icon: "🏆"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Detailed key features specifically related to project requests such as "Smart Matching", "Community Feedback", "Submission Tracking"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;