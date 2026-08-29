import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { ProjectCard } from "@/components/site/project-card";
import { ContactBlock } from "@/components/site/contact-block";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { RotatingTagline } from "@/components/site/rotating-tagline";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="glow-bg relative overflow-hidden border-b border-border">
        <Container className="flex min-h-[75vh] flex-col items-center justify-center py-24 text-center">
          <h1 className="blur-in mt-8 w-full max-w-3xl text-balance text-[57.6px] font-bold leading-[1.05] tracking-tight [animation-delay:0ms] [animation-duration:3000ms] sm:text-[86.4px]">
            <RotatingTagline />
          </h1>
          <p className="blur-in mt-6 max-w-xl text-lg text-muted-foreground [animation-delay:2600ms]">
            I&apos;m Andrea Carniti, a product designer specializing in
            complex applications. I love building scalable design systems
            and designing with both business goals and user needs in mind.
          </p>
          <div className="blur-in mt-10 flex flex-wrap items-center justify-center gap-3 [animation-delay:3000ms]">
            <Button
              size="lg"
              nativeButton={false}
              render={
                <Link href="/work">
                  View work <ArrowUpRight className="size-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/about">About me</Link>}
            />
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section className="py-28">
        <Container>
          <div className="mb-14 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm text-muted-foreground">
                Selected work
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
                A few projects I&apos;m proud of
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden shrink-0 items-center gap-1 text-sm text-muted-foreground hover:text-foreground sm:flex"
            >
              View all work <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* About teaser */}
      <section className="py-20">
        <Container>
          <div className="grid gap-10 border-y border-border py-12 md:grid-cols-[1fr_1.5fr] md:gap-20 md:py-16">
            <div className="flex items-start">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                About me
              </h2>
            </div>
            <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
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
                systems — the foundation for scalable, beautiful products.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-foreground underline underline-offset-4"
              >
                More about me <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="pt-4 pb-28">
        <Container>
          <div className="glow-bg rounded-2xl border border-border bg-card/40 px-8 py-16">
            <ContactBlock showLocation={false} />
          </div>
        </Container>
      </section>
    </>
  );
}
