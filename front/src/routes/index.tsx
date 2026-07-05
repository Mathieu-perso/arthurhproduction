import { createFileRoute } from '@tanstack/react-router'
import Layout from "../../components/Layout";
import MainPictureCarrousel from "../../components/MainPictureCarrousel.tsx";
import {useState} from "react";
import type {HomePicture} from "../../types/Picture.ts";

export const Route = createFileRoute('/')({
  component: App,
})

const pictures: HomePicture[] = [
  {
    src: "/event.jpg",
    alt: "event",
    title: "Event",
    page: "evenements",
    isHighlighted: false,
  },
  {
    src: "/voyage.jpg",
    alt: "voyage",
    title: "Voyage",
    page: "voyages",
    isHighlighted: true,
  },
  {
    src: "/mode.jpg",
    alt: "mode",
    title: "Mode",
    page: "mode",
    isHighlighted: false,
  }
]

function App() {
  const [activePic, setActivePic] = useState(pictures[1]);

  return (
    <Layout
      highlightedBackgroundSrc={activePic.src}
      highlightedBackgroundTitle={activePic.title}
    >
      <MainPictureCarrousel
        pictures={pictures}
        onActivePictureChange={(newPic) => setActivePic(newPic)}
      />
    </Layout>
  )
}
