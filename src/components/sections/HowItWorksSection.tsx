import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    step: "01",
    title: "Create Your Project",
    description: "Post your project idea with detailed requirements and budget range. Our platform helps you structure your request effectively."
  },
  {
    step: "02",
    title: "Get Matched",
    description: "Our AI-powered matching system connects you with skilled contributors who fit your project needs and timeline."
  },
  {
    step: "03",
    title: "Collaborate & Build",
    description: "Work together using our integrated tools for communication, project management, and secure payment processing."
  },
  {
    step: "04",
    title: "Launch Successfully",
    description: "Review deliverables, provide feedback, and launch your project with confidence. Build lasting professional relationships."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A detailed step-by-step process of how to create a project, get it funded, and how contributors can participate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 relative">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;