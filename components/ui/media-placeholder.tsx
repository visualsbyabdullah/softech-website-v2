import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  label: string;
  ratio?: string;
  className?: string;
  index?: string;
};

export function MediaPlaceholder({
  label,
  ratio = "16 / 10",
  className,
  index = "01",
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn("media-placeholder", className)}
      style={{ aspectRatio: ratio }}
    >
      <div className="media-placeholder__top">
        <span>{index}</span>
        <ImageIcon size={15} strokeWidth={1.6} />
      </div>

      <div className="media-placeholder__center">
        <strong>{label}</strong>
        <span>Replace media later</span>
      </div>

      <div className="media-placeholder__bottom">
        <span>SOFTECH / PRODUCT MEDIA</span>
        <span>{ratio}</span>
      </div>
    </div>
  );
}