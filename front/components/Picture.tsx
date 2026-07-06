import type {HighlightedPicture} from "../types/HighlightedPicture.ts";

export default function Picture({
  src,
  alt,
  setIsHighlighted
}: {
  src: string;
  alt: string;
  setIsHighlighted: (value: HighlightedPicture | null) => void;
}) {
  return (
    <div className="h-80 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.75)]">
      <img
        src={src}
        alt={alt}
        className="size-full object-cover cursor-pointer"
        onClick={() => {setIsHighlighted({src, alt})}}
      />
    </div>
  )
}