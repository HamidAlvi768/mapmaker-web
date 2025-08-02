import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ApplicationFormSection from "@/components/sections/ApplicationFormSection";
import CTASection from "@/components/sections/CTASection";

const ProjectRequest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Start Your Next Project
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn your ideas into reality by connecting with skilled contributors. Our platform makes it easy to find the perfect team for your project.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <ApplicationFormSection />
      <CTASection 
        title="Need Help Getting Started?"
        description="Our team is here to help you structure your project request and find the right contributors for your needs."
        primaryButtonText="Get Consultation"
        secondaryButtonText="Browse Examples"
      />
      <Footer />
    </div>
  );
};

export default ProjectRequest;