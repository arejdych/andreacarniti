import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  LayoutGrid,
  MapPin,
  PenTool,
  Zap,
  Sprout,
  ShieldCheck,
  Car,
  Wind,
  Droplets,
  Thermometer,
  Trash2,
  Footprints,
  Sun,
  Waves,
  Volume2,
  Building2,
  Building,
  Tractor,
  Shield,
  Leaf,
  Dumbbell,
  ShoppingBag,
  Map,
  Globe,
  Radar,
  Layers,
  User,
  Infinity,
  DatabaseZap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/site/container";
import { ImageBlock } from "@/components/site/image-block";
import { ProjectCard } from "@/components/site/project-card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { getProject, projects } from "@/data/projects";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { CoverIllustration } from "@/components/site/cover-illustration";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const statIcons: Record<string, LucideIcon> = {
  LayoutGrid,
  MapPin,
  PenTool,
  Zap,
  Sprout,
  ShieldCheck,
  Car,
  Wind,
  Droplets,
  Thermometer,
  Trash2,
  Footprints,
  Sun,
  Waves,
  Volume2,
  Building2,
  Building,
  Tractor,
  Shield,
  Leaf,
  Dumbbell,
  ShoppingBag,
  Map,
  Globe,
  Radar,
  Layers,
  User,
  Infinity,
  DatabaseZap,
  Sparkles,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Andrea Carniti`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  const meta = [
    { label: "Role", value: project.role },
    { label: "Duration", value: project.duration },
    ...(project.year ? [{ label: "Year", value: project.year }] : []),
    { label: "Tools", value: project.tools.join(", ") },
    ...(project.liveUrl ? [{ label: "Website", value: project.liveUrl, href: project.liveUrl }] : []),
  ];

  return (
    <article>
      {/* Header */}
      <Container className="py-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to work
        </Link>

        <p className="blur-in mt-8 font-mono text-sm text-muted-foreground [animation-delay:0ms]">
          {project.category}
        </p>
        <h1 className="blur-in mt-2 max-w-3xl text-4xl font-medium tracking-tight [animation-delay:180ms] sm:text-5xl">
          {project.title}
        </h1>
        <p className="blur-in mt-4 max-w-2xl text-lg text-muted-foreground [animation-delay:360ms]">
          {project.tagline}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 overflow-x-auto rounded-xl border border-border bg-card/40 p-6 sm:grid-cols-[repeat(4,minmax(max-content,1fr))]">
          {meta.map((m) => (
            <div key={m.label} className={m.label === "Website" ? "ml-[50px] w-[100px]" : ""}>
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {m.label}
              </p>
              {"href" in m && m.href ? (
                <Link
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm text-foreground hover:text-muted-foreground"
                >
                  {m.value.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  <ArrowUpRight className="size-3.5" />
                </Link>
              ) : (
                <p className="mt-1 text-sm whitespace-nowrap">{m.value}</p>
              )}
            </div>
          ))}
        </div>
      </Container>

      {/* Cover image */}
      <Container className="pb-16">
        <AspectRatio ratio={16 / 9}>
          {project.slug === "baiond-iot-sustainability-platform" ? (
            <CoverIllustration className="h-full w-full" />
          ) : (
            <ImageBlock
              tone={project.cover}
              label="Cover image / hero mockup"
              className="h-full w-full"
            />
          )}
        </AspectRatio>
      </Container>

      {/* Summary */}
      <Container className="pb-20">
        <div className="grid gap-x-20 gap-y-4 md:grid-cols-[minmax(0,280px)_1fr]">
          <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
            Overview
          </ScrollReveal>
          <div>
            <p className="max-w-[44rem] text-xl leading-relaxed md:ml-[50px]">
              {project.summary.includes("and more") && project.applicationAreas ? (
                <>
                  {project.summary.split("and more")[0]}
                  <Tooltip>
                    <TooltipTrigger
                      className="cursor-pointer"
                      render={
                        <span
                          className="text-muted-foreground underline-dotted-sparse hover:text-foreground"
                        >
                          and more
                        </span>
                      }
                    />
                    <TooltipContent side="top" className="block max-w-xs items-start p-5">
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {project.applicationAreas.map((area) => (
                          <li key={area}>{area}</li>
                        ))}
                      </ul>
                    </TooltipContent>
                  </Tooltip>
                  {project.summary.split("and more")[1]}
                </>
              ) : (
                project.summary
              )}
            </p>
            {project.industries && (
              <div className="mt-6 flex flex-wrap gap-2 md:ml-[50px]">
                {project.industries.map((industry) => {
                  const industryIconName = project.stats
                    ?.flatMap((s) => s.items ?? [])
                    .find((item) => item.name === industry)?.icon;
                  const IndustryIcon = industryIconName
                    ? statIcons[industryIconName]
                    : undefined;
                  return (
                    <Badge
                      key={industry}
                      variant="secondary"
                      className="bg-white/[0.08] text-muted-foreground"
                    >
                      {IndustryIcon && <IndustryIcon />}
                      {industry}
                    </Badge>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>

      {project.stats && (
        <>
          <Separator />
          <Container className="py-16">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {project.stats.map((s) => {
                const Icon = statIcons[s.icon];
                const hasItems = Boolean(
                  (s.items && s.items.length > 0) || (s.groups && s.groups.length > 0)
                );
                const content = (
                  <div className="group">
                    {Icon && (
                      <Icon className="size-[50px] text-muted-foreground" strokeWidth={1.5} />
                    )}
                    <p
                      className={
                        s.metric.length > 4
                          ? "mt-3 text-[40px] font-medium tracking-tight leading-tight"
                          : "mt-3 text-4xl font-medium tracking-tight sm:text-5xl"
                      }
                    >
                      {s.metric}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {s.label}
                      {hasItems && (
                        <Tooltip>
                          <TooltipTrigger
                            className="cursor-pointer"
                            render={
                              <span
                                className="ml-1.5 text-muted-foreground underline-dotted-sparse hover:text-foreground"
                              >
                                view all
                              </span>
                            }
                          />
                          <TooltipContent
                            side="top"
                            className={
                              s.groups
                                ? "block max-h-96 max-w-md items-start overflow-y-auto p-5 scrollbar-dark"
                                : "max-w-sm flex-wrap gap-2 p-5"
                            }
                          >
                            {s.groups ? (
                              <div className="space-y-4">
                                {s.groups.map((group) => {
                                  const GroupIcon = statIcons[group.icon];
                                  return (
                                    <div key={group.category}>
                                      <Badge
                                        variant="secondary"
                                        className="bg-white/[0.08] text-muted-foreground"
                                      >
                                        {GroupIcon && <GroupIcon />}
                                        {group.category}
                                      </Badge>
                                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                                        {group.types.map((type) => (
                                          <li key={type}>{type}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="flex flex-wrap gap-2">
                                {s.items!.map((item) => {
                                  const ItemIcon = statIcons[item.icon];
                                  return (
                                    <Badge
                                      key={item.name}
                                      variant="secondary"
                                      className="bg-white/[0.08] text-muted-foreground"
                                    >
                                      {ItemIcon && <ItemIcon />}
                                      {item.name}
                                    </Badge>
                                  );
                                })}
                              </div>
                            )}
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </p>
                  </div>
                );
                return <div key={s.label}>{content}</div>;
              })}
            </div>
          </Container>
        </>
      )}

      <Separator />

      {/* Problem */}
      <Container className="py-20">
        <div className="grid gap-x-20 gap-y-4 md:grid-cols-[minmax(0,280px)_1fr]">
          <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
            The problem
          </ScrollReveal>
          <p className="max-w-[44rem] text-[20px] leading-relaxed md:ml-[50px]">
            {project.problem}
          </p>
        </div>
      </Container>

      {project.showProcess !== false && project.process.length > 0 && (
        <>
          <Separator />
          <Container className="py-20">
            <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
              Process
            </ScrollReveal>
            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {project.process.map((step, i) => (
                <div key={step.heading}>
                  <p className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-medium">{step.heading}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            {project.showProcessImages !== false && (
              <div className="mt-16 grid gap-4 sm:grid-cols-2">
                <AspectRatio ratio={4 / 3}>
                  <ImageBlock
                    tone="02"
                    label="Research synthesis / affinity map"
                    className="h-full w-full"
                  />
                </AspectRatio>
                <AspectRatio ratio={4 / 3}>
                  <ImageBlock
                    tone="03"
                    label="Flow diagram / wireframes"
                    className="h-full w-full"
                  />
                </AspectRatio>
              </div>
            )}
          </Container>
        </>
      )}

      {project.showInsights !== false && project.insights.length > 0 && (
        <>
          <Separator />

          {/* Key insights */}
          <Container className="py-20">
            <div className="grid gap-x-20 gap-y-6 md:grid-cols-[minmax(0,280px)_1fr]">
              <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
                Key insights
              </ScrollReveal>
              <ul className="max-w-[38rem] space-y-4">
                {project.insights.map((insight) => (
                  <li
                    key={insight}
                    className="flex gap-3 text-lg leading-relaxed"
                  >
                    <span className="mt-1 text-muted-foreground">—</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </>
      )}

      <Separator />

      {/* Solution */}
      <Container className="py-20">
        <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
          The solution
        </ScrollReveal>

        <div className="mt-8 space-y-24">
          {project.solution.map((s, i) => (
            <div
              key={s.heading}
              className={
                project.showSolutionImages === false
                  ? "max-w-2xl"
                  : i === 0
                    ? "grid items-center gap-x-20 gap-y-8 md:grid-cols-[minmax(0,330px)_1fr]"
                    : i % 2 === 1
                      ? "grid items-center gap-12 md:grid-cols-[1fr_30%] md:gap-16"
                      : "grid items-center gap-12 md:grid-cols-[30%_1fr] md:gap-16"
              }
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <ScrollReveal as="h3" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.heading}
                </ScrollReveal>
                <p className="mt-4 max-w-[60ch] text-lg text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
              {project.showSolutionImages !== false && (
                <AspectRatio ratio={4 / 3}>
                  <ImageBlock
                    tone={i % 3 === 0 ? "01" : i % 3 === 1 ? "02" : "03"}
                    label="Final UI screen"
                    className="h-full w-full"
                  />
                </AspectRatio>
              )}
            </div>
          ))}
        </div>
      </Container>

      {project.responsibilities && project.responsibilities.length > 0 && (
        <>
          <Separator />
          <Container className="py-20">
            <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
              My responsibilities
            </ScrollReveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.responsibilities.map((r) => {
                const Icon = statIcons[r.icon];
                return (
                  <div
                    key={r.title}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-foreground/30"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {Icon && (
                      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-foreground/5">
                        <Icon className="size-5" />
                      </div>
                    )}
                    <p className="font-medium">{r.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </>
      )}

      {project.industryStories && (
        <>
          <Separator />
          <Container className="py-20">
            <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
              Application across industries
            </ScrollReveal>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A sample of the same platform, adapted to very different
              problems.
            </p>
            <div className="mt-10 grid border-t border-l border-border sm:grid-cols-2">
              {project.industryStories.map((story, i) => {
                const Icon = statIcons[story.icon];
                const tones = ["01", "02", "03", "04"] as const;
                return (
                  <div
                    key={story.name}
                    className="border-r border-b border-border p-8"
                  >
                    <AspectRatio ratio={16 / 9}>
                      <ImageBlock
                        tone={tones[i % tones.length]}
                        label={story.name}
                        className="h-full w-full"
                      />
                    </AspectRatio>
                    <div className="mt-6">
                      {Icon && (
                        <Icon
                          className="size-9 text-muted-foreground"
                          strokeWidth={1.5}
                        />
                      )}
                      <h3 className="mt-3 text-lg font-medium">{story.name}</h3>
                    </div>
                    <p className="mt-3 max-w-[50ch] text-sm leading-relaxed text-muted-foreground">
                      <span className="block font-semibold text-muted-foreground">Challenge</span>
                      <span className="line-clamp-3">{story.challenge}</span>
                    </p>
                    <p className="mt-3 max-w-[50ch] text-sm leading-relaxed text-muted-foreground">
                      <span className="block font-semibold text-muted-foreground">My approach</span>
                      <span className="line-clamp-3">{story.approach}</span>
                    </p>
                  </div>
                );
              })}
            </div>
            <Link
              href="https://baiond.io/applications/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-muted-foreground"
            >
              See all applications on baiond.io
              <ArrowUpRight className="size-5" />
            </Link>
          </Container>
        </>
      )}



      {(project.outcomes.length > 0 || project.showReflection !== false) && (
        <>
          <Separator />

          {/* Outcomes */}
          <Container className="py-20">
            {project.outcomes.length > 0 && (
              <>
                <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
                  Outcomes
                </ScrollReveal>
                <div className="mt-8 grid gap-8 sm:grid-cols-3">
                  {project.outcomes.map((o) => (
                    <div key={o.label}>
                      <p className="text-4xl font-medium tracking-tight sm:text-5xl">
                        {o.metric}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {o.label}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {project.showReflection !== false && (
              <div
                className={
                  project.outcomes.length > 0 ? "mt-14" : ""
                }
              >
                <div className="grid gap-x-20 gap-y-4 md:grid-cols-[minmax(0,280px)_1fr]">
                  <ScrollReveal as="h3" className="text-3xl font-medium tracking-tight sm:text-4xl">
                    Reflection
                  </ScrollReveal>
                  <p className="max-w-[38rem] leading-relaxed text-muted-foreground">
                    {project.learnings}
                  </p>
                </div>
              </div>
            )}
          </Container>
        </>
      )}

      {/* Used by / logos */}
      {project.logos && project.logos.length > 0 && (
        <>
          <Separator />
          <Container className="py-20">
            <ScrollReveal
              as="h2"
              className="mb-[60px] text-center text-sm font-medium tracking-wide text-muted-foreground uppercase"
            >
              Used by organizations across industries
            </ScrollReveal>
            <div className="flex flex-wrap items-center justify-between gap-y-10">
              {project.logos.map((logo) => {
                const img = (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={210}
                    height={84}
                    className={`h-[77px] w-auto object-contain opacity-60 brightness-0 invert transition duration-300 hover:opacity-100 ${
                      logo.src.endsWith(".jpeg") || logo.src.endsWith(".jpg")
                        ? "rounded-lg"
                        : ""
                    } ${logo.src.includes("kenya-wildlife-service") ? "scale-125" : ""} ${
                      logo.src.includes("hofburg-vienna") ? "scale-105" : ""
                    }`}
                  />
                );

                if (logo.story) {
                  return (
                    <Tooltip key={logo.name}>
                      <TooltipTrigger className="cursor-pointer" render={<span>{img}</span>} />
                      <TooltipContent side="top" className="block max-w-sm p-5">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {logo.story}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  );
                }

                return <span key={logo.name}>{img}</span>;
              })}
            </div>
          </Container>
        </>
      )}

      {/* More projects */}
      {otherProjects.length > 0 && (
        <>
          <Separator />
          <Container className="py-20">
            <div className="mb-10 flex items-center justify-between">
              <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
                More projects
              </ScrollReveal>
              <Link
                href="/work"
                className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground sm:flex"
              >
                View all <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
              {otherProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </>
      )}

      {/* Contact CTA */}
      <Separator />
      <Container className="py-20">
        <div className="glow-bg flex flex-col items-center gap-6 rounded-2xl border border-border bg-card/40 px-8 py-16 text-center">
          <h2 className="max-w-xl text-balance text-2xl font-medium tracking-tight sm:text-3xl">
            Interested in working together?
          </h2>
          <Button
            size="lg"
            nativeButton={false}
            render={
              <Link href="/contact">
                Get in touch <ArrowUpRight className="size-4" />
              </Link>
            }
          />
        </div>
      </Container>
    </article>
  );
}
