import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { ImageBlock } from "@/components/site/image-block";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-xl focus-visible:outline-none"
    >
      <AspectRatio ratio={4 / 3}>
        <ImageBlock
          tone={project.cover}
          className="h-full w-full transition-all duration-300 group-hover:border-foreground/30 group-hover:scale-[1.01]"
        />
      </AspectRatio>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="flex items-center gap-1 text-lg font-medium tracking-tight">
            {project.title}
            <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.tagline}
          </p>
        </div>
        <span className="whitespace-nowrap pt-1 font-mono text-xs text-muted-foreground">
          {project.year || project.duration}
        </span>
      </div>
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
        {project.category}
      </p>
    </Link>
  );
}
