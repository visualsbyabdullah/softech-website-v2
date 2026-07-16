import { SoftechV3 } from "@/components/v3/softech-v3";
import { V3Products } from "@/components/v3/v3-products";
import { V3Services } from "@/components/v3/v3-services";
import { V3Process } from "@/components/v3/v3-process";
import { V3Proof } from "@/components/v3/v3-proof";
import { V3Faq } from "@/components/v3/v3-faq";
import { V3Contact } from "@/components/v3/v3-contact";

export default function V3Page() {
  return (
    <>
      <SoftechV3 />
      <V3Products />
      <V3Services />
      <V3Process />
      <V3Proof />
      <V3Faq />
      <V3Contact />
    </>
  );
}
