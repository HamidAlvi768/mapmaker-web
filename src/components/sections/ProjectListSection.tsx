import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with React and Node.js. Looking for frontend developers and designers.",
    category: "Web Development",
    budget: "$5,000 - $10,000",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with social features. Need React Native developers.",
    category: "Mobile Development",
    budget: "$8,000 - $15,000",
    skills: ["React Native", "Firebase", "UI/UX Design"],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "Business intelligence dashboard with machine learning insights. Seeking ML engineers and data scientists.",
    category: "Data Science",
    budget: "$12,000 - $20,000",
    skills: ["Python", "TensorFlow", "React", "PostgreSQL"],
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "Secure voting platform using blockchain technology. Looking for blockchain developers.",
    category: "Blockchain",
    budget: "$15,000 - $25,000",
    skills: ["Solidity", "Web3", "React", "Smart Contracts"],
    posted: "5 days ago"
  }
];

interface ProjectListSectionProps {
  title?: string;
  showAll?: boolean;
}

const ProjectListSection = ({ title = "Featured Projects", showAll = false }: ProjectListSectionProps) => {
  const displayProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exciting opportunities to collaborate on innovative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <Card key={project.id} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <span className="text-sm text-muted-foreground">{project.posted}</span>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="font-semibold text-primary mb-2">{project.budget}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full" variant="default">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectListSection;