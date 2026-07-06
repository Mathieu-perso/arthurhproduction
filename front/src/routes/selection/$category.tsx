import {createFileRoute, Navigate} from '@tanstack/react-router'
import ContentWidth from "../../../components/ContentWidth.tsx";
import Categories from "../../../components/Categories.tsx";
import Layout from "../../../components/Layout.tsx";
import {Category} from "../../../types/Category";
import Picture from "../../../components/Picture.tsx";
import {useState} from "react";
import Modal from "../../../components/Modal.tsx";
import type {HighlightedPicture} from "../../../types/HighlightedPicture.ts";
import event from '@assets/event.jpg';
import voyage from '@assets/voyage.jpg';
import mode from '@assets/mode.jpg';

export const Route = createFileRoute("/selection/$category")({
  component: RouteComponent,
})

const categoryMap: Record<string, { type: Category; background: string }> = {
  'mariage': {
    type: Category.WEDDING,
    background: "https://picsum.photos/1920/1080?random=1"
  },
  'mode': {
    type: Category.MODE,
    background: mode
  },
  'voyage': {
    type: Category.TRIP,
    background: voyage
  },
  'culinaire': {
    type: Category.FOOD,
    background: "https://picsum.photos/1920/1080?random=4"
  },
  'evenement': {
    type: Category.EVENT,
    background: event
  }
};

function RouteComponent() {
  const {category} = Route.useParams();
  const categoryConfig = categoryMap[category.toLowerCase()];

  const [isHighlighted, setIsHighlighted] = useState<HighlightedPicture | null>(null);

  if (!categoryConfig) {
    return <Navigate to="/"/>
  }

  return (
    <Layout highlightedBackgroundSrc={categoryConfig.background} screenHeight={false}>
      <ContentWidth>
        <div className="flex flex-col pt-[7rem] h-full">
          <Categories selectedCategory={categoryConfig.type}/>
          <div
            className="grid grid-cols-5 gap-8 py-8 px-8 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
              return (
                <Picture
                  alt=""
                  src="https://picsum.photos/200/300"
                  setIsHighlighted={setIsHighlighted}
                />
              )
            })}
          </div>
        </div>
      </ContentWidth>

      {isHighlighted && (
        <Modal
          src={isHighlighted.src}
          alt={isHighlighted.alt}
          setIsHighlighted={setIsHighlighted}
        />
      )}
    </Layout>
  )
}
