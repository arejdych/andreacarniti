import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { ImageBlock } from "@/components/site/image-block";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    url: "https://baiond.io/",
    description:
      "A cloud platform turning sensor, camera, and satellite data into one live view — helping cities, infrastructure, and agriculture act on real-time insight instead of raw numbers.",
    responsibilities: [
      "Owned end-to-end UX across research, IA, interaction, and visual design",
      "Built and maintained the design system powering every industry vertical",
      "Shaped product strategy and roadmap directly with founders and engineers",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Lead Product Designer",
    org: "Cheerin'",
    url: "https://www.cheerin.app/",
    description:
      "A mobile app helping friend groups settle on plans instead of endless group-chat back-and-forth, through polling, scheduling, and venue-discovery flows.",
    responsibilities: [
      "Led end-to-end design for polling, scheduling, and venue-discovery flows",
      "Ran user research and usability testing to reduce plan drop-off",
      "Partnered closely with two engineers and the founder to ship fast",
    ],
  },
  {
    period: "2021 — 2022",
    role: "UX Designer",
    org: "Infable Development",
    description:
      "A web and mobile platform turning building energy and utility sensor data into actionable insights for facility managers.",
    responsibilities: [
      "Redesigned the core monitoring dashboard around real daily decisions",
      "Conducted contextual research, shadowing facility managers on live shifts",
      "Collaborated with a product manager and two engineers on delivery",
    ],
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

const skills = [
  "User research",
  "Information architecture",
  "Wireframing & prototyping",
  "Usability testing",
  "Design systems",
  "Interaction design",
  "Stakeholder facilitation",
];

const tools = [
  "Figma",
  "Adobe Suite",
  "Jira",
  "Confluence",
  "VS Code + LLMs",
  "Antigravity",
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
      <Container className="grid gap-12 py-20 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div>
          <AspectRatio ratio={3 / 4}>
            <ImageBlock tone="02" label="Portrait" className="h-full w-full" />
          </AspectRatio>
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
              the University of Applied Arts Vienna. I&apos;ve come to see
              architecture and UX design as fundamentally alike: both put
              a human being at the center and hold that person&apos;s
              experience to the highest standard — one shaping the
              physical world, the other the digital one.
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
      <Container className="py-20">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Experience
        </h2>
        <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card/40 px-6">
          {experience.map((e) => (
            <div key={e.org} className="flex flex-col gap-3 py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium">{e.role}</p>
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
                  </p>
                </div>
                <p className="font-mono text-sm text-muted-foreground">
                  {e.period}
                </p>
              </div>
              {e.description && (
                <p className="text-sm text-muted-foreground">
                  {e.description}
                </p>
              )}
              {e.responsibilities && (
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {e.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>

      <Separator />

      {/* Education */}
      <Container className="py-20">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Education
        </h2>
        <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card/40 px-6">
          {education.map((e) => (
            <div
              key={`${e.org}-${e.degree}`}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium">{e.degree}</p>
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
              <p className="font-mono text-sm text-muted-foreground">
                {e.period}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <Separator />

      {/* Other courses */}
      <Container className="py-20">
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

      {/* Skills & tools */}
      <Container className="grid gap-12 py-20 sm:grid-cols-2">
        <div>
          <h2 className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
            Skills
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
            Tools
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {tools.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </Container>

      <Separator />

      {/* Languages */}
      <Container className="py-20">
        <h2 className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
          Languages
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {languages.map((l) => (
            <Badge key={l.name} variant="secondary">
              {l.name} · {l.level}
            </Badge>
          ))}
        </div>
      </Container>

      <Separator />

      {/* Currently reading */}
      <Container className="py-20">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          What I&apos;m recently reading &amp; watching
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card/40 p-6">
            <p className="font-medium">Jeff Gothelf&apos;s Substack</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Jeff Gothelf is an author, speaker, and product management
              expert best known for co-authoring <em>Lean UX</em>,{" "}
              <em>Sense &amp; Respond</em>, and{" "}
              <em>Who Does What by How Much?</em> He also co-founded Sense
              &amp; Respond Press. His writing pushes teams toward outcome-
              driven, evidence-based product practice — a perspective I
              find especially useful for design systems and complex
              applications.
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
              David Hoang is VP of Design at Atlassian, where he leads
              design for the company&apos;s enterprise products. On{" "}
              <em>Proof of Concept</em>, he writes candidly about scaling
              design teams, building design systems, and the realities of
              leading design inside a large product organization — insights
              I regularly draw on for my own systems and enterprise work.
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
              Jenny Wen is a product designer known for her work at Figma,
              where she led projects spanning notifications, Figma Make,
              and the Figma Agent. In this talk, she challenges designers
              to rethink rigid design processes in an era of AI-assisted
              product development — a conversation that resonates with how
              I approach my own workflow today.
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

      <Separator />

      <Container className="py-20">
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
    </>
  );
}
