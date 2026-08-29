import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Layers, PenTool, Radar, User } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { IntegrationMarquee } from "@/components/site/integration-marquee";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { CheerinScreenCycle } from "@/components/site/cheerin-screen-cycle";
import { ProjectCard } from "@/components/site/project-card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import { CopyEmailButton } from "@/app/contact/copy-email-button";
import { assetPath } from "@/lib/asset-path";
import { CheerinSportCarousel } from "@/components/site/cheerin-sport-carousel";

const sections: {
  heading: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}[] = [
  {
    heading: "Track progress, celebrate wins",
    description:
      "A holistic view of personal data makes healthy habits easier to practice and achieve, while monthly summaries give friends a simple way to share progress and celebrate wins together.",
  },
  {
    heading: "Get better together",
    description:
      "The social experience helps friends motivate and support one another, plan activities together, deepen their friendships, and send live encouragement when someone is active.",
    imageSrc: assetPath("/images/cheerin/tracking.png"),
    imageAlt: "Cheerin cycling activity tracking screen",
  },
  {
    heading: "Find new friends to train with",
    description:
      "Discover like-minded people nearby through shared activities and interests, then connect with friends who make it easier to stay motivated and try something new.",
    imageSrc: assetPath("/images/cheerin/contact.png"),
    imageAlt: "Cheerin friend discovery profile",
  },
];

const details: { label: string; value: string; href?: string }[] = [
  { label: "Role", value: "Lead Product Designer" },
  { label: "Year", value: "2022-2023" },
  { label: "Website", value: "cheerin.app", href: "https://www.cheerin.app/" },
];

const responsibilities = [
  {
    title: "End-to-end UX design",
    description:
      "Owned research, IA, interaction design, and visual design across the entire platform, from first sketch to shipped feature.",
    icon: PenTool,
  },
  {
    title: "Design system ownership",
    description:
      "Built and maintained the design system powering every industry vertical, keeping the product consistent as new use cases were added.",
    icon: Layers,
  },
  {
    title: "Product strategy",
    description:
      "Partnered directly with founders and engineers to shape the roadmap, prioritizing features based on real customer feedback.",
    icon: Radar,
  },
  {
    title: "Cross-functional collaboration",
    description:
      "Worked closely with engineering to translate designs into production, unblocking edge cases and validating feasibility early.",
    icon: User,
  },
];

const otherProjects = projects
  .filter((project) => project.slug !== "cheerin-app")
  .slice(0, 3);

export function CheerinDetail() {
  return (
    <article className="cheerin-page min-h-screen bg-background">
      <Container className="py-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to work
        </Link>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <p className="font-mono text-sm text-muted-foreground">
            Mobile App · Social
          </p>
          <div className="flex items-center gap-3 overflow-x-auto font-mono text-sm text-muted-foreground">
            {details.map((detail, index) => (
              <span key={detail.label} className="whitespace-nowrap">
                {detail.href ? (
                  <Link
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                  >
                    {detail.value}
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                ) : (
                  detail.value
                )}
                {index < details.length - 1 && (
                  <span className="ml-3" aria-hidden="true">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
        <h1 className="mt-2 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl">
          Cheerin&apos;
        </h1>
        <p className="mt-4 inline-block w-max max-w-none whitespace-nowrap text-lg leading-relaxed text-muted-foreground">
          Forget training all alone! Cheerin is the social app for fit and active.
        </p>
        {" "}
        <p className="mt-4 inline-block w-max max-w-none whitespace-nowrap text-lg leading-relaxed text-muted-foreground">
          Plan, track &amp; share activities with your friends.
        </p>
        <div className="cheerin-hero relative mt-14 h-[700px] overflow-visible rounded-xl border border-white/45 bg-[linear-gradient(to_bottom,#ff7469,#f22919)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_18px_50px_rgba(148,20,12,0.22)]">
          <Image
            src={assetPath("/images/cheerin/hero.png")}
            alt="Cheerin mobile app screens"
            width={1141}
            height={1160}
            className="absolute bottom-[-10%] left-1/2 z-10 h-[104%] w-auto max-w-none -translate-x-1/2 object-contain"
            priority
          />
        </div>
      </Container>

      <IntegrationMarquee />

      <Container className="max-w-[1000px] space-y-8 pb-24 pt-12 sm:pb-32 sm:pt-16">
        {sections.map((section, index) => (
          <section
            key={section.heading}
            className={`grid items-center gap-10 md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div
              className={
                section.heading === "Get better together"
                    ? "text-right"
                    : undefined
              }
            >
              <ScrollReveal
                as="h2"
                className={`text-3xl font-medium tracking-tight sm:text-4xl ${
                  section.heading === "Get better together" ? "max-w-[320px]" : ""
                }`}
              >
                {section.heading}
              </ScrollReveal>
              <p className="mt-5 max-w-[320px] text-lg leading-relaxed text-muted-foreground">
                {section.description}
              </p>
            </div>
            <div
              className={`mx-auto flex w-full items-center justify-center ${
                section.heading === "Find new friends to train with" ||
                section.heading === "Track progress, celebrate wins" ||
                section.heading === "Get better together"
                  ? "h-[677px]"
                  : section.imageSrc
                    ? "h-[672px]"
                    : "h-[560px]"
              }`}
            >
              {section.heading === "Find new friends to train with" ? (
                <CheerinScreenCycle />
              ) : section.heading === "Track progress, celebrate wins" ? (
                <CheerinScreenCycle
                  screens={[
                    {
                      src: assetPath("/images/cheerin/tracking.png"),
                      alt: "Cheerin activity tracking screen",
                      width: 904,
                      height: 1882,
                    },
                    {
                      src: assetPath("/images/cheerin/cheer.png"),
                      alt: "Cheerin social cheering screen",
                      width: 904,
                      height: 1882,
                    },
                  ]}
                />
              ) : section.imageSrc ? (
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt ?? ""}
                  width={926}
                  height={1868}
                  className="h-[677px] w-auto max-w-none object-contain"
                />
              ) : (
                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Mobile app screenshot
                </span>
              )}
            </div>
          </section>
        ))}
      </Container>

      <CheerinSportCarousel />

      <Container className="py-20">
        <ScrollReveal as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
          My responsibilities
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {responsibilities.map((responsibility) => {
            const Icon = responsibility.icon;
            return (
              <div
                key={responsibility.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-foreground/30"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-foreground/5">
                  <Icon className="size-5" />
                </div>
                <p className="font-medium">{responsibility.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {responsibility.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>

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
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>

      <Separator />
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
