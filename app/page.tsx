import { SiteHeader } from "@/components/layout/site-header";
import { HeroStatic } from "@/components/sections/hero-static";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroStatic />

      <section
        id="services"
        className="site-container section-space"
      >
        <p className="eyebrow">Next section / Services</p>
      </section>
    </main>
  );
}