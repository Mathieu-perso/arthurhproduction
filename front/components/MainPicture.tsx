import type {Picture} from "../types/Picture.ts";
import {Link} from "@tanstack/react-router";

export default function MainPicture({
  src,
  alt,
  page,
  isHighlighted,
}: Picture) {
  const isHighlightedDivClass = isHighlighted ? "h-full" : "h-8/10 top-1/2 transform -translate-y-1/2";

  return (
    <div className={`${isHighlightedDivClass} select-none group relative rounded-[4rem] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="w-auto h-full object-cover cursor-pointer transition-transform duration-400 hover:scale-105"
      />
      <div className="absolute bg-black/40 top-0 left-0 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
        <Link
          to="/selection/$category"
          params={{ category: page }}
          className="text-white opacity-0 group-hover:opacity-100 transition delay-100 hover:text-[#ded9d9]"
        >
          Voir la sélection
        </Link>
      </div>
    </div>
  )
}