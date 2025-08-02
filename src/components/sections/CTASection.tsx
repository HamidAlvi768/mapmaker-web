import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection = ({ 
  title = "Ready to Start Your Next Project?",
  description = "Join thousands of creators and contributors building the future together. Get started today and turn your ideas into reality.",
  primaryButtonText = "Start a Project",
  primaryButtonLink = "/project-request",
  secondaryButtonText = "Browse Projects",
  secondaryButtonLink = "/projects"
}: CTASectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="xl">
              <Link to={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="xl" 
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;