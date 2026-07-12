import { SiteHeader } from "@/components/layout/site-header";
import { HeroStatic } from "@/components/sections/hero-static";
import { ServicesV2 } from "@/components/sections/services-v2";
import { ProductsV2 } from "@/components/sections/products-v2";
import { Impact } from "@/components/sections/impact";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroStatic />
      <ServicesV2 />
      <ProductsV2 />
      <Impact />
    </main>
  );
}
