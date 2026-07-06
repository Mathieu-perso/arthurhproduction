import {X} from "lucide-react";
import type {HighlightedPicture} from "../types/HighlightedPicture.ts";

export default function Modal({
  src,
  alt,
  setIsHighlighted
}: {
  src: string;
  alt: string;
  setIsHighlighted: (value: HighlightedPicture | null) => void;
}) {
  return (
    <div className="absolute size-full flex justify-center items-center">
      <div className="absolute size-full top-0 left-0 bg-black opacity-75 z-20"/>

      <img
        src={src}
        alt={alt}
        className="h-[35rem] w-fit relative z-30"
      />

      <div className="absolute top-8 right-8 cursor-pointer text-white z-30">
        <X
          size={32}
          onClick={() => setIsHighlighted(null)}
        />
      </div>
    </div>
  )
}