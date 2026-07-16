import { V3PageHeader } from "@/components/v3/v3-page-header";
import { V3Products } from "@/components/v3/v3-products";
import { V3Contact } from "@/components/v3/v3-contact";

export default function ProductsPage() {
  return (
    <>
      <V3PageHeader />
      <main>
        <V3Products />
      </main>
      <V3Contact />
    </>
  );
}