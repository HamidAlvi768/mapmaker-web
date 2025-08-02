import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectListSection from "@/components/sections/ProjectListSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-subtle py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Discover Amazing Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find exciting opportunities to collaborate with innovative project creators. Browse projects by category, budget, and timeline.
            </p>
          </div>
        </div>
      </section>

      <ProjectListSection title="All Projects" showAll={true} />
      <ServicesSection />
      <CTASection 
        title="Ready to Contribute?"
        description="Join our community of skilled contributors and start working on projects that match your expertise."
        primaryButtonText="Join as Contributor"
        secondaryButtonText="Post a Project"
      />
      <Footer />
    </div>
  );
};

export default Projects;