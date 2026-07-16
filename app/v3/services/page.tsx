import { V3PageHeader } from "@/components/v3/v3-page-header";
import { V3Services } from "@/components/v3/v3-services";
import { V3Contact } from "@/components/v3/v3-contact";

export default function ServicesPage() {
  return (
    <>
      <V3PageHeader />
      <main>
        <V3Services />
      </main>
      <V3Contact />
    </>
  );
}