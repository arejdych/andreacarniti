import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Layers, PenTool, Radar, User } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { CheerinScreenCycle } from "@/components/site/cheerin-screen-cycle";
import { ProjectCard } from "@/components/site/project-card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import { CopyEmailButton } from "@/app/contact/copy-email-button";
import { assetPath } from "@/lib/asset-path";
import { ComgyIconMarquee } from "@/components/site/comgy-icon-marquee";

const sections: {
  heading: string;
  description: string;
  carousel?: boolean;
  images: { src: string; alt: string; width: number; height: number }[];
}[] = [
  {
    heading: "Easily check your heating and water consumption online",
    description:
      "Tenants and facility managers can monitor real-time heating and water usage from any device, replacing manual meter readings with a clear, always-available dashboard.",
    carousel: true,
    images: [
      {
        src: assetPath("/images/comgy/1.png"),
        alt: "Comgy heating and water monitoring screen",
        width: 904,
        height: 1882,
      },
      {
        src: assetPath("/images/comgy/1a.png"),
        alt: "Comgy heating and water detail screen",
        width: 904,
        height: 1882,
      },
    ],
  },
  {
    heading: "Cost predictions and comparisons year to year",
    description:
      "Baseline-aware charts show whether current consumption is typical for the season and building type, with year-over-year comparisons that help managers spot anomalies early.",
    images: [
      {
        src: assetPath("/images/comgy/3.png"),
        alt: "Comgy consumption comparison screen",
        width: 904,
        height: 1882,
      },
    ],
  },
  {
    heading: "E-mail consumption bills with comparisons",
    description:
      "Automated email reports break down consumption with historical comparisons and personalized tips, helping tenants understand their usage without logging in.",
    carousel: true,
    images: [
      {
        src: assetPath("/images/comgy/2.png"),
        alt: "Comgy email bill with CO2 emissions overview",
        width: 904,
        height: 1882,
      },
      {
        src: assetPath("/images/comgy/2b.png"),
        alt: "Comgy email bill with consumption comparisons",
        width: 904,
        height: 1882,
      },
    ],
  },
];

const details: { label: string; value: string; href?: string }[] = [
  { label: "Role", value: "UX Designer" },
  { label: "Year", value: "2021-2022" },
];

const responsibilities = [
  {
    title: "End-to-end UX design",
    description:
      "Owned research, interaction design, and visual design for the monitoring dashboard, from contextual inquiry through to tested prototype.",
    icon: PenTool,
  },
  {
    title: "Design system contribution",
    description:
      "Extended the existing component library with new alert and chart patterns, keeping the platform consistent as new features were added.",
    icon: Layers,
  },
  {
    title: "User research",
    description:
      "Shadowed 7 facility managers during real shifts and ran two rounds of usability testing with 12 users to validate the redesign.",
    icon: Radar,
  },
  {
    title: "Cross-functional collaboration",
    description:
      "Worked alongside a product manager and two engineers to translate insights from contextual research into shipped features.",
    icon: User,
  },
];

const otherProjects = projects
  .filter((project) => project.slug !== "comgy-energy-platform")
  .slice(0, 3);

export function ComgyDetail() {
  return (
    <article className="comgy-page min-h-screen bg-[#f5f7fa] -mt-[72px] pt-[72px]">
      <style>{`html, body { background-color: #f5f7fa !important; }`}</style>
      <Container className="py-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Back to work
        </Link>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <p className="font-mono text-sm text-muted-foreground">
            Web App · Mobile App · PropTech
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
          Tenant Portal
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Turning raw building-sensor data into decisions facility managers can act on.
        </p>
        <div className="comgy-hero relative mt-14 h-[700px] overflow-visible rounded-xl border border-white/45 bg-[linear-gradient(to_bottom,#4B8BF5,#2563EB)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_18px_50px_rgba(37,99,235,0.22)]">
          <Image
            src={assetPath("/images/comgy/main.png")}
            alt="Comgy energy platform laptop and phone mockup"
            width={2400}
            height={1600}
            className="absolute -bottom-[90px] left-1/2 z-10 h-[95%] w-auto max-w-none -translate-x-1/2 object-contain"
            priority
          />
        </div>
      </Container>

      <ComgyIconMarquee />

      <Container className="max-w-[1000px] space-y-28 pb-24 pt-12 sm:pb-32 sm:pt-16">
        {sections.map((section, index) => (
          <section
            key={section.heading}
            className={`grid items-center gap-10 md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div
              className={index % 2 === 1 ? "text-right" : undefined}
            >
              <ScrollReveal
                as="h2"
                className="text-3xl font-medium tracking-tight sm:text-4xl"
              >
                {section.heading}
              </ScrollReveal>
              <p className={`mt-5 max-w-[360px] text-lg leading-relaxed text-muted-foreground ${index % 2 === 1 ? "ml-auto" : ""}`}>
                {section.description}
              </p>
            </div>
            <div className="mx-auto flex w-full items-center justify-center h-[677px]">
              {section.carousel ? (
                <CheerinScreenCycle screens={section.images} />
              ) : (
                <Image
                  src={section.images[0].src}
                  alt={section.images[0].alt}
                  width={section.images[0].width}
                  height={section.images[0].height}
                  className="h-[677px] w-auto max-w-none object-contain"
                />
              )}
            </div>
          </section>
        ))}
      </Container>

      <Container className="pb-32 pt-12">
        <div className="relative h-[700px] overflow-visible rounded-xl border border-white/45 bg-[linear-gradient(to_bottom,#4B8BF5,#2563EB)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_18px_50px_rgba(37,99,235,0.22)]">
          <h2 className="absolute top-[62px] left-0 right-0 z-20 text-center text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Consumption cost overview
          </h2>
          <Image
            src={assetPath("/images/comgy/costs.png")}
            alt="Comgy cost predictions and dashboard overview"
            width={2400}
            height={1600}
            className="absolute -bottom-[90px] left-1/2 z-10 h-[91%] w-auto max-w-none -translate-x-1/2 object-contain"
          />
        </div>
      </Container>

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
        <div className="comgy-cta-glow flex flex-col items-center rounded-2xl border border-border bg-card/40 px-8 py-16 text-center">
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
