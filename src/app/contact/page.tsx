import { Metadata } from "next";
import { Container } from "@/components/site/container";
import { ContactBlock } from "@/components/site/contact-block";

export const metadata: Metadata = {
  title: "Contact — Andrea Carniti",
  description: "Get in touch about freelance or full-time UX design work.",
};

export default function ContactPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24">
      <p className="blur-in font-mono text-sm text-muted-foreground [animation-delay:0ms]">
        Contact
      </p>
      <div className="mt-2">
        <ContactBlock startDelay={180} />
      </div>
    </Container>
  );
}
