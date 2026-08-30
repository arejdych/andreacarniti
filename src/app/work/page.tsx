import { Metadata } from "next";
import { Container } from "@/components/site/container";
import { ProjectCard } from "@/components/site/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Andrea Carniti",
  description: "Case studies and selected UX design projects.",
};

export default function WorkPage() {
  return (
    <Container className="max-w-[1100px] py-24">
      <p className="blur-in font-mono text-sm text-muted-foreground [animation-delay:0ms]">
        Work
      </p>
      <h1 className="blur-in mt-2 max-w-2xl text-balance text-3xl font-medium tracking-tight [animation-delay:180ms] sm:text-4xl">
        Case studies from IoT, energy, sport, and hospitality.
      </h1>
      <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
