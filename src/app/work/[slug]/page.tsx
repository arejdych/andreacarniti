import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { getProject, projects } from "@/data/projects";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { CoverIllustration } from "@/components/site/cover-illustration";
import { GraphMarquee } from "@/components/site/graph-marquee";
import { WidgetStack } from "@/components/site/widget-stack";
import { CheerinDetail } from "@/components/site/cheerin-detail";
import { ComgyDetail } from "@/components/site/comgy-detail";
import { CopyEmailButton } from "@/app/contact/copy-email-button";
import { assetPath } from "@/lib/asset-path";

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
    .slice(0, 3);

  const meta = [
    { label: "Role", value: project.role },
    { label: "Duration", value: project.duration },
    ...(project.year ? [{ label: "Year", value: project.year }] : []),
    ...(project.liveUrl ? [{ label: "Website", value: project.liveUrl, href: project.liveUrl }] : []),
  ];

  if (project.slug === "cheerin-app") {
    return <CheerinDetail />;
  }

  if (project.slug === "comgy-energy-platform") {
    return <ComgyDetail />;
  }

  return (
    <article
      className={
        project.slug === "baiond-iot-sustainability-platform"
          ? "baiond-page min-h-screen bg-background"
          : project.slug === "cheerin-app"
            ? "cheerin-page min-h-screen bg-background"
          : undefined
      }
    >
      {/* Header */}
      <Container className="py-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to work
        </Link>

        <div className="blur-in mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 [animation-delay:0ms]">
          <p className="font-mono text-sm text-muted-foreground">
            {project.category}
          </p>
          {project.slug === "baiond-iot-sustainability-platform" && (
            <div className="flex items-center gap-3 overflow-x-auto font-mono text-sm text-muted-foreground">
              {meta.map((m, index) => (
                <Fragment key={m.label}>
                  {"href" in m && m.href ? (
                    <Link
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                    >
                      {m.value.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  ) : (
                    <span>{m.value}</span>
                  )}
                  {index < meta.length - 1 && <span aria-hidden="true">·</span>}
                </Fragment>
              ))}
            </div>
          )}
        </div>
        <h1 className="blur-in mt-2 max-w-3xl text-4xl font-medium tracking-tight [animation-delay:180ms] sm:text-5xl">
          {project.title}
        </h1>
        <p className="blur-in mt-4 max-w-2xl text-lg text-muted-foreground [animation-delay:360ms]">
          {project.tagline}
        </p>

      </Container>

      {/* Cover image */}
      <Container className="pb-16">
        <div className="h-[700px]">
          {project.slug === "baiond-iot-sustainability-platform" ? (
            <CoverIllustration
              className="h-full w-full"
              imageSrc={assetPath("/images/baiond/main-image.png")}
              imageAlt="Baiond dashboard overview"
              imageHeight={1117}
              secondaryImageSrc={assetPath("/images/baiond/dashboard-mobile.png")}
              secondaryImageAlt="Baiond mobile dashboard"
            />
          ) : (
            project.slug === "cheerin-app" ? (
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-white/45 bg-[linear-gradient(to_bottom,#ff7469,#f22919)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_18px_50px_rgba(148,20,12,0.22)]">
                <span className="rounded-md border border-white/25 bg-black/15 px-3 py-2 font-mono text-xs tracking-wide text-white backdrop-blur">
                  Cheerin&apos; mobile app
                </span>
              </div>
            ) : (
              <ImageBlock
                tone={project.cover}
                label="Cover image / hero mockup"
                className="h-full w-full"
              />
            )
          )}
        </div>
      </Container>

      {project.slug !== "baiond-iot-sustainability-platform" && (
        <Container className="pb-16">
          <div className="grid grid-cols-2 gap-6 overflow-x-auto sm:grid-cols-[repeat(4,minmax(max-content,1fr))]">
            {meta.map((m) => (
              <div key={m.label}>
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
      )}

      {/* Summary */}
      <Container
        className={
          project.slug === "cheerin-app" ? "py-28" : "pb-20"
        }
      >
        <div className="grid gap-x-20 gap-y-4 md:grid-cols-[minmax(0,280px)_1fr]">
          <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
            Overview
          </ScrollReveal>
          <div>
            <p className="max-w-[44rem] text-xl leading-relaxed md:ml-[50px]">
            {project.slug === "baiond-iot-sustainability-platform" ? (
              <>
                {project.summary.split("sensor")[0]}
                <Tooltip>
                  <TooltipTrigger
                    className="cursor-pointer"
                    render={
                      <span className="text-foreground underline-dotted-sparse hover:text-foreground">
                        sensor
                      </span>
                    }
                  />
                  <TooltipContent side="top" className="block max-w-xs items-start p-5">
                    <span className="text-sm text-muted-foreground">
                      Environmental, water, air quality, temperature, energy,
                      traffic, security, and noise sensors.
                    </span>
                  </TooltipContent>
                </Tooltip>
                {project.summary.split("sensor")[1].split("and more")[0]}
                <Tooltip>
                  <TooltipTrigger
                    className="cursor-pointer"
                    render={
                      <span className="text-foreground underline-dotted-sparse hover:text-foreground">
                        and more
                      </span>
                    }
                  />
                  <TooltipContent side="top" className="block max-w-xs items-start p-5">
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {project.applicationAreas?.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </TooltipContent>
                </Tooltip>
                {project.summary.split("and more")[1]}
              </>
            ) : project.summary.includes("and more") && project.applicationAreas ? (
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
                      className="h-7 gap-1.5 bg-white/[0.08] px-3 text-lg text-muted-foreground [&>svg]:size-4!"
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

      {project.slug === "baiond-iot-sustainability-platform" && (
        <GraphMarquee />
      )}

      {project.stats &&
        project.slug !== "baiond-iot-sustainability-platform" && (
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

      {project.slug !== "baiond-iot-sustainability-platform" && <Separator />}

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

      {project.slug === "baiond-iot-sustainability-platform" && <Separator />}

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

      {project.slug !== "baiond-iot-sustainability-platform" && <Separator />}

      {/* Solution */}
      <Container className="py-20">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          The solution
        </h2>

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
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.heading}
                </h3>
                <p className="mt-4 max-w-[60ch] whitespace-pre-line text-lg leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
              {project.showSolutionImages !== false && (
                <AspectRatio
                  className={
                    project.slug === "baiond-iot-sustainability-platform" &&
                    s.heading === "The Space System"
                      ? "h-[540px] aspect-auto"
                      : project.slug === "baiond-iot-sustainability-platform" &&
                          s.heading === "People Counter"
                        ? "h-[540px] aspect-auto"
                      : undefined
                  }
                  ratio={
                    project.slug === "baiond-iot-sustainability-platform" &&
                    s.heading === "The Space System"
                      ? 1728 / 1383
                      : project.slug === "baiond-iot-sustainability-platform" &&
                          s.heading === "Graph Builder"
                        ? 1728 / 1117
                        : project.slug === "baiond-iot-sustainability-platform" &&
                          s.heading === "Dashboard Builder"
                        ? 2000 / 1356
                        : project.slug === "baiond-iot-sustainability-platform" &&
                          s.heading === "Tasks"
                          ? 1740 / 1117
                          : project.slug === "baiond-iot-sustainability-platform" &&
                              s.heading === "People Counter"
                            ? 1728 / 1623
                          : 4 / 3
                  }
                >
                  {project.slug === "baiond-iot-sustainability-platform" &&
                  s.heading === "The Space System" ? (
                    <CoverIllustration
                      className="h-full w-full"
                      imageSrc={assetPath("/images/baiond/weather-station.png")}
                      imageAlt="Baiond weather station dashboard"
                      imageFit="cover"
                      imageHeight={1383}
                    />
                  ) : project.slug === "baiond-iot-sustainability-platform" &&
                    s.heading === "Graph Builder" ? (
                    <CoverIllustration
                      className="h-full w-full"
                      imageSrc={assetPath("/images/baiond/chart-builder.png")}
                      imageAlt="Baiond chart builder dashboard"
                      imageFit="contain"
                      imageHeight={1117}
                    />
                  ) : project.slug === "baiond-iot-sustainability-platform" &&
                    s.heading === "Dashboard Builder" ? (
                    <CoverIllustration
                      imageSrc={assetPath("/images/baiond/dashboard-builder.png")}
                      imageAlt="Baiond dashboard builder"
                      imageFit="contain"
                      imageWidth={2000}
                      imageHeight={1356}
                      frameless
                      className="h-full w-full"
                    />
                  ) : project.slug === "baiond-iot-sustainability-platform" &&
                    s.heading === "Tasks" ? (
                    <CoverIllustration
                      className="h-full w-full"
                      imageSrc={assetPath("/images/baiond/tasks.png")}
                      imageAlt="Baiond task management dashboard"
                      imageFit="contain"
                      imageWidth={1740}
                      imageHeight={1117}
                    />
                  ) : project.slug === "baiond-iot-sustainability-platform" &&
                    s.heading === "People Counter" ? (
                    <CoverIllustration
                      className="h-full w-full"
                      imageSrc={assetPath("/images/baiond/people-counter.png")}
                      imageAlt="Baiond people counter dashboard"
                      imageFit="cover"
                      imageWidth={1728}
                      imageHeight={1623}
                    />
                  ) : (
                    <ImageBlock
                      tone={i % 3 === 0 ? "01" : i % 3 === 1 ? "02" : "03"}
                      label="Final UI screen"
                      className="h-full w-full"
                    />
                  )}
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
              Selected other features
            </ScrollReveal>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A sample of the same platform, adapted to very different
              problems.
            </p>
            <div className="mt-10 grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
              {project.industryStories.map((story, i) => {
                const Icon = statIcons[story.icon];
                const tones = ["01", "02", "03", "04"] as const;
                return (
                  <div
                    key={story.name}
                    className="border-r border-b border-border p-8"
                  >
                    <AspectRatio
                      ratio={
                        story.name === "Widgets"
                          ? 499 / 331
                          : story.name === "Automations"
                            ? 499 / 331
                            : 16 / 9
                      }
                    >
                      {story.name === "Widgets" ? (
                        <WidgetStack />
                      ) : story.name === "Automations" ? (
                        <Image
                          src={assetPath("/images/baiond/automation.png")}
                          alt="Baiond automation builder"
                          width={300}
                          height={370}
                          className="mx-auto h-full w-auto -translate-y-4 scale-[0.8] object-contain"
                        />
                      ) : story.name === "Sankey Chart Builder" ? (
                        <Image
                          src={assetPath("/images/baiond/sankey.png")}
                          alt="Baiond Sankey chart builder"
                          width={1366}
                          height={578}
                          className="h-full w-full scale-[0.8] object-contain opacity-50"
                        />
                      ) : story.name === "Heatmap Builder" ? (
                        <Image
                          src={assetPath("/images/baiond/heatmap.png")}
                          alt="Baiond heatmap builder"
                          width={1280}
                          height={640}
                          className="h-full w-full scale-[0.75] object-contain opacity-60"
                        />
                      ) : (
                        <ImageBlock
                          tone={tones[i % tones.length]}
                          label={story.name}
                          className="h-full w-full"
                        />
                      )}
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
                    <p className="mt-1 max-w-[50ch] text-sm leading-relaxed text-muted-foreground">
                      <span className="line-clamp-5">
                        {story.challenge} {story.approach}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
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
                    src={assetPath(logo.src)}
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
          {project.slug !== "baiond-iot-sustainability-platform" && <Separator />}
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
            <div className="grid gap-x-8 gap-y-16 sm:grid-cols-3">
              {otherProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </>
      )}

      {/* Contact CTA */}
      {project.slug !== "baiond-iot-sustainability-platform" && <Separator />}
      <Container className="py-20">
        <div className="glow-bg flex flex-col items-center rounded-2xl border border-border bg-card/40 px-8 py-16 text-center">
          <h2 className="max-w-xl text-balance text-2xl font-medium tracking-tight sm:text-3xl">
            Interested in working together? Let&apos;s talk.
          </h2>
          <Link
            href="mailto:and.carniti@gmail.com"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/40 px-6 py-3 text-xl font-medium tracking-tight transition-colors hover:bg-white/[0.06] sm:text-2xl"
          >
            and.carniti@gmail.com
            <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <div className="mt-4">
            <CopyEmailButton email="and.carniti@gmail.com" />
          </div>
        </div>
      </Container>
    </article>
  );
}
