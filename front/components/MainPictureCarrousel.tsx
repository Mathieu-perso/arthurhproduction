import MainPicture from "./MainPicture.tsx";
import type {HomePicture} from "../types/Picture.ts";
import {type MouseEvent, useState} from "react";

type CarrouselProps = {
  pictures: HomePicture[];
  onActivePictureChange?: (activePicture: HomePicture) => void;
};

export default function MainPictureCarrousel({ pictures, onActivePictureChange }: CarrouselProps) {
  const [sortedPictures, setSortedPictures] = useState(pictures);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const slide = (dir: "left" | "right") => {
    const newArr = [...sortedPictures];

    if (dir === "left") {
      const firstElement = newArr.shift();
      if (firstElement) {
        newArr.push(firstElement);
      }
    } else {
      const lastElement = newArr.pop();
      if (lastElement) {
        newArr.unshift(lastElement);
      }
    }

    setSortedPictures(newArr);

    if (onActivePictureChange) {
      onActivePictureChange(newArr[1]);
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => setDragStartX(e.clientX);

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (dragStartX === null) {
      return;
    }
    const diff = dragStartX - e.clientX;

    if (diff > 50){
      slide("right");
    } else if (diff < -50) {
      slide("left");
    }

    setDragStartX(null);
  };

  const visiblePictures = sortedPictures.slice(0, 3);

  return (
    <div
      className="flex items-center h-[65vh] w-full cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setDragStartX(null)}
    >
      <div className="absolute left-10 z-30 cursor-pointer text-white font-bold" onClick={() => slide("left")}>
        GAUCHE
      </div>

      <div className="flex justify-center items-center -space-x-16 size-full">
        {visiblePictures.map((picture, index) => {
          const isCenter = index === 1;
          const isCenterClass = isCenter
            ? "z-20 drop-shadow-[0_4px_30px_-5px_rgba(0,0,0,0.45)]"
            : "z-10 brightness-75 cursor-pointer";

          return (
            <div
              key={picture.src}
              className={`h-full transition-all duration-500 ${isCenterClass}`}
              onClick={() => {
                if (index === 0) slide("right");
                if (index === 2) slide("left");
              }}
            >
              <MainPicture
                src={picture.src}
                alt={picture.alt}
                page={picture.page}
                isHighlighted={isCenter}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute right-10 z-30 cursor-pointer text-white font-bold" onClick={() => slide("right")}>
        DROITE
      </div>
    </div>
  );
}