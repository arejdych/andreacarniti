import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { PhotoCarousel } from "@/components/site/photo-carousel";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About — Andrea Carniti",
  description:
    "UX designer with 6+ years of experience across fintech, SaaS, and consumer products.",
};

const experience = [
  {
    period: "2023 — Ongoing",
    role: "Lead & Sole Product Designer",
    org: "Baiond",
    location: "Vienna, Austria",
    url: "https://baiond.io/",
    description:
      "Designed a cloud platform turning sensor, camera, and satellite data into one live view for cities, infrastructure, and agriculture — owning end-to-end UX, the design system, and product strategy alongside the founders and engineers.",
  },
  {
    period: "2022 — 2023",
    role: "Lead Product Designer",
    org: "Cheerin'",
    location: "Vienna, Austria",
    url: "https://www.cheerin.app/",
    description:
      "Led design for a mobile app helping friend groups settle on plans through polling, scheduling, and venue-discovery flows, running user research and usability testing alongside two engineers and the founder.",
  },
  {
    period: "2021 — 2022",
    role: "UX Designer",
    org: "Tenant Portal",
    location: "Vienna, Austria",
    description:
      "Redesigned the core monitoring dashboard for a building-energy platform, conducting contextual research with facility managers and collaborating with a product manager and two engineers on delivery.",
  },
  {
    period: "2021",
    role: "UX Designer",
    org: "Financial Pilot",
    location: "Vienna, Austria",
    description:
      "Designed an app equipping users with the tools to effectively manage and invest their finances.",
  },
  {
    period: "2021",
    role: "UX Designer",
    org: "Gustaffo",
    location: "Vienna, Austria",
    url: "https://gustaffo.com/",
    description:
      "Designed the guest and staff experience for a digital concierge platform helping hotels manage reservations and check-ins, showcase their property, and understand guest behavior — reducing reliance on third-party booking platforms.",
  },
  {
    period: "2015 — 2021",
    role: "Architect",
    org: "Lorenzateliers",
    location: "Vienna, Austria",
  },
  {
    period: "2013",
    role: "Junior Architect",
    org: "JLCG Carrilho da Graça Arquitectos",
    location: "Lisbon, Portugal",
  },
];

const education = [
  {
    period: "2021",
    degree: "UX Bootcamp",
    org: "Talent Garden Vienna",
    country: "Austria",
    url: "https://talentgarden.org/",
  },
  {
    period: "2015 — 2017",
    degree: "Master's Degree, Studio Sejima",
    org: "Universität für angewandte Kunst Wien",
    country: "Austria",
    url: "https://www.dieangewandte.at/",
  },
  {
    period: "2014 — 2015",
    degree: "Master's Degree, Studio Zaha Hadid",
    org: "Universität für angewandte Kunst Wien",
    country: "Austria",
    url: "https://www.dieangewandte.at/",
  },
  {
    period: "2010 — 2013",
    degree: "Master's Degree, Architectural and Building Sciences/Technology",
    org: "Politecnico di Milano",
    country: "Italy",
    url: "https://www.polimi.it/",
  },
  {
    period: "2011 — 2012",
    degree: "Erasmus, Architecture",
    org: "Universitat Rovira i Virgili",
    country: "Spain",
    url: "https://www.urv.cat/",
  },
  {
    period: "2007 — 2010",
    degree: "Bachelor of Arts (B.A.), Industrial Design",
    org: "Università degli Studi di Brescia",
    country: "Italy",
    url: "https://www.unibs.it/",
  },
];

const otherCourses = [
  {
    name: "Advanced Figma",
    org: "Figma Academy",
    url: "https://www.dive.club/advanced-figma",
  },
];

const skillGroups = [
  {
    name: "Design",
    items: [
      "Product design",
      "User research",
      "Prototyping",
      "Interaction design",
      "Design systems",
      "Figma",
      "Adobe Suite",
    ],
  },
  {
    name: "Dev",
    items: [
      "VS Code + LLMs",
      "Antigravity",
      "Claude Code",
      "Cursor",
      "GitHub",
      "Tailwind",
      "shadcn/ui",
    ],
  },
  {
    name: "Product Management",
    items: ["Jira", "Confluence", "Stakeholder mgmt"],
  },
  {
    name: "Domains",
    items: ["B2B", "Proptech", "IoT", "Social", "Hospitality", "Fintech"],
  },
];

const languages = [
  { name: "Italian", level: "Native" },
  { name: "English", level: "C1" },
  { name: "Spanish", level: "B1" },
  { name: "German", level: "A2" },
];

export default function AboutPage() {
  return (
    <>
      <Container className="max-w-[900px] grid gap-12 pt-[80px] pb-20 md:grid-cols-[240px_1fr] md:gap-16">
        <div className="w-[240px]">
          <PhotoCarousel
            slides={[
              {
                src: `${process.env.GITHUB_PAGES === "true" ? "/andreacarniti" : ""}/images/andrea.jpg`,
                alt: "Andrea Carniti",
              },
              {
                src: `${process.env.GITHUB_PAGES === "true" ? "/andreacarniti" : ""}/images/andrea-fun.png`,
                alt: "Andrea Carniti on the Cheerin' team",
              },
            ]}
          />
        </div>

        <div>
          <p className="blur-in font-mono text-sm text-muted-foreground [animation-delay:0ms]">
            About
          </p>
          <h1 className="blur-in mt-2 text-3xl font-medium tracking-tight [animation-delay:180ms] sm:text-4xl">
            Hi, I&apos;m Andrea.
          </h1>
          <div className="blur-in mt-6 space-y-4 text-muted-foreground [animation-delay:360ms]">
            <p>
              I&apos;m a product designer with experience across consumer
              and business web and mobile apps. I approach every project
              holistically, balancing user needs with business goals.
            </p>
            <p>
              I specialize in complex, data-heavy applications, but I
              equally enjoy consumer products where visual delight and
              craft take center stage.
            </p>
            <p>
              I&apos;m passionate about building comprehensive design
              systems — I believe they&apos;re the foundation for scalable,
              beautiful products.
            </p>
            <p>
              My background is in architecture, where I had the privilege
              of studying under acclaimed architects such as Zaha Hadid at
              the University of Applied Arts Vienna.
            </p>
            <p>
              I&apos;ve come to see architecture and UX design as
              fundamentally alike: both put a human being at the center and
              hold that person&apos;s experience to the highest standard —
              one shaping the physical world, the other the digital one.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={
                <Link href="/contact">
                  Get in touch <ArrowUpRight className="size-4" />
                </Link>
              }
            />
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={`${process.env.GITHUB_PAGES === "true" ? "/andreacarniti" : ""}/andrea-carniti-resume.pdf`}
                  download
                >
                  Download résumé
                </a>
              }
            />
          </div>
        </div>
      </Container>

      <Separator />

      {/* Experience */}
      <Container className="max-w-[900px] py-20">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Experience
        </h2>
        <div className="relative mt-10 border-l border-border pl-8">
          {experience.map((e) => (
            <div key={e.org} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 size-2.5 rounded-full border-2 border-background bg-foreground" />
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {e.period}
              </p>
              <p className="mt-1.5 font-medium">{e.role}</p>
              <p className="text-sm text-muted-foreground">
                {e.url ? (
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    {e.org}
                  </a>
                ) : (
                  e.org
                )}
                {e.location ? ` · ${e.location}` : ""}
              </p>
              {e.description && (
                <p className="mt-2 max-w-[80ch] text-sm text-muted-foreground">
                  {e.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>

      <Separator />

      {/* Education */}
      <Container className="max-w-[900px] py-20">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Education
        </h2>
        <div className="relative mt-10 border-l border-border pl-8">
          {education.map((e) => (
            <div key={`${e.org}-${e.degree}`} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 size-2.5 rounded-full border-2 border-background bg-foreground" />
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {e.period}
              </p>
              <p className="mt-1.5 font-medium">{e.degree}</p>
              <p className="text-sm text-muted-foreground">
                <a
                  href={e.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  {e.org}
                </a>{" "}
                · {e.country}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <Separator />

      {/* Other courses */}
      <Container className="max-w-[900px] py-20">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Other courses
        </h2>
        <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card/40 px-6">
          {otherCourses.map((c) => (
            <div
              key={`${c.org}-${c.name}`}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-muted-foreground">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    {c.org}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Separator />

      {/* Skills & languages */}
      <Container className="max-w-[900px] py-20">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Skills
        </h2>
        <div className="mt-10 grid gap-12 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
                {group.name}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
            Languages
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {languages.map((l) => (
              <Badge key={l.name} variant="secondary">
                {l.name} · {l.level}
              </Badge>
            ))}
          </div>
        </div>
      </Container>

      <Separator />

      <Container className="max-w-[900px] py-20">
        <div className="glow-bg flex flex-col items-center gap-6 rounded-2xl border border-border bg-card/40 px-8 py-16 text-center">
          <h2 className="max-w-xl text-balance text-2xl font-medium tracking-tight sm:text-3xl">
            Want to see the work behind the résumé?
          </h2>
          <Button
            size="lg"
            nativeButton={false}
            render={
              <Link href="/work">
                View case studies <ArrowUpRight className="size-4" />
              </Link>
            }
          />
        </div>
      </Container>

      <Separator />

      {/* Currently reading */}
      <Container className="max-w-[900px] py-20">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          What I&apos;m recently reading &amp; watching
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card/40 p-6">
            <p className="font-medium">Jeff Gothelf&apos;s Substack</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Co-author of <em>Lean UX</em> and <em>Sense &amp; Respond</em>,
              writing on outcome-driven, evidence-based product practice.
            </p>
            <a
              href="https://substack.com/@jeffgothelf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-foreground underline underline-offset-4"
            >
              Read his Substack <ArrowUpRight className="size-3.5" />
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-6">
            <p className="font-medium">David Hoang&apos;s Substack</p>
            <p className="mt-2 text-sm text-muted-foreground">
              VP of Design at Atlassian, writing candidly about scaling
              design teams and design systems on <em>Proof of Concept</em>.
            </p>
            <a
              href="https://www.proofofconcept.pub/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-foreground underline underline-offset-4"
            >
              Read his Substack <ArrowUpRight className="size-3.5" />
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/40 p-6">
            <p className="font-medium">
              Jenny Wen: &quot;The Design Process Is Dead&quot;
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Former Figma designer challenging designers to rethink rigid
              process in an era of AI-assisted product development.
            </p>
            <a
              href="https://www.youtube.com/watch?v=4u94juYwLLM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm text-foreground underline underline-offset-4"
            >
              Watch the talk <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </Container>

    </>
  );
}
