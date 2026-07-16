import { V3PageHeader } from "@/components/v3/v3-page-header";
import { V3Process } from "@/components/v3/v3-process";
import { V3Contact } from "@/components/v3/v3-contact";

export default function ProcessPage() {
  return (
    <>
      <V3PageHeader />
      <main>
        <V3Process />
      </main>
      <V3Contact />
    </>
  );
}