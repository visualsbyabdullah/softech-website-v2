import { SoftechV3 } from "@/components/v3/softech-v3";
import { V3Products } from "@/components/v3/v3-products";
import { V3Services } from "@/components/v3/v3-services";

export default function V3Page() {
  return (
    <>
      <SoftechV3 />
      <V3Products />
      <V3Services />
    </>
  );
}
