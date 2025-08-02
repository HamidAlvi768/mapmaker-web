import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Build Amazing Projects
            <span className="block text-primary-glow">Together</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Connect with talented creators and contributors. Turn your ideas into reality with our collaborative platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="xl">
              <Link to="/projects">Browse Projects</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/project-request">Start a Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;