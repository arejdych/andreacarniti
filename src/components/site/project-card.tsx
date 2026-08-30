import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { ImageBlock } from "@/components/site/image-block";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { assetPath } from "@/lib/asset-path";

function ProjectThumbnail({ project }: { project: Project }) {
  if (project.slug === "cheerin-app") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(to_bottom,#111015,#08070a)] transition-all duration-300 group-hover:border-white/45 group-hover:scale-[1.01]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#ff7469,#f22919)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='20' viewBox='0 0 80 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q20 0 40 10 Q60 20 80 10' fill='none' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E\")", backgroundSize: "80px 20px" }} />
        <Image
          src={assetPath("/images/cheerin/logo.svg")}
          alt="Cheerin logo"
          width={320}
          height={156}
          className="relative z-10 w-[204px] h-auto"
        />
      </div>
    );
  }

  if (project.slug === "comgy-energy-platform") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(to_bottom,#0d1117,#080b10)] transition-all duration-300 group-hover:border-white/45 group-hover:scale-[1.01]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#4B8BF5,#2563EB)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 font-mono text-[10px] leading-[18px] text-white/[0.08] overflow-hidden p-3 text-center tracking-[0.3em]">
          <p>0110 1001 0011 0100</p>
          <p>&nbsp;&nbsp;1011 0010 1001 0110</p>
          <p>0101 1001&nbsp;&nbsp;0010 1101</p>
          <p>&nbsp;&nbsp;&nbsp;0011 0101 1100 1010</p>
          <p>0110 0111&nbsp;1101 0010</p>
          <p>&nbsp;&nbsp;0010 1011&nbsp;&nbsp;1001 1001</p>
          <p>0100&nbsp;1101 1011 0100</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;0101 0011 1010 0110</p>
          <p>0100 1011&nbsp;1100 1010</p>
          <p>&nbsp;0001 1010&nbsp;&nbsp;1010 1100</p>
          <p>0110 1001 1100&nbsp;1001</p>
          <p>&nbsp;&nbsp;0101 0110&nbsp;1001 0110</p>
          <p>0111&nbsp;0010 1100 1101</p>
          <p>&nbsp;&nbsp;&nbsp;0010 1010 1000&nbsp;1011</p>
          <p>0011 0110&nbsp;&nbsp;1101 0101</p>
          <p>&nbsp;0110 0100 1001 1011</p>
          <p>0100&nbsp;1101 1101 1010</p>
          <p>&nbsp;&nbsp;0110 0101&nbsp;1011 0010</p>
          <p>0010 1101&nbsp;1001 0011</p>
          <p>&nbsp;&nbsp;&nbsp;0101 1010 1011&nbsp;0001</p>
        </div>
        <span className="relative z-10 text-2xl font-medium tracking-tight text-white">Tenant Portal</span>
      </div>
    );
  }

  if (project.slug === "baiond-iot-sustainability-platform") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(to_bottom,#111015,#08070a)] transition-all duration-300 group-hover:border-white/10 group-hover:scale-[1.01]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#2d2840,#1a1530)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Image
          src={assetPath("/images/baiond/pattern.png")}
          alt=""
          fill
          className="absolute inset-0 object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-50"
          aria-hidden="true"
        />
        <Image
          src={assetPath("/images/baiond/logo.svg")}
          alt="Baiond logo"
          width={158}
          height={54}
          className="relative z-10 w-[204px] h-auto"
        />
      </div>
    );
  }

  return (
    <ImageBlock
      tone={project.cover}
      className="h-full w-full transition-all duration-300 group-hover:border-foreground/30 group-hover:scale-[1.01]"
    />
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-xl focus-visible:outline-none"
    >
      <AspectRatio ratio={4 / 3}>
        <ProjectThumbnail project={project} />
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
