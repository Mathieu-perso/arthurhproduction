import { createFileRoute } from '@tanstack/react-router'
import Layout from "../../components/Layout";
import MainPictureCarrousel from "../../components/MainPictureCarrousel.tsx";
import {useState} from "react";
import type {HomePicture} from "../../types/Picture.ts";
import event from '@assets/event.jpg'
import voyage from '@assets/voyage.jpg'
import mode from '@assets/mode.jpg'

export const Route = createFileRoute('/')({
  component: App,
})

const pictures: HomePicture[] = [
  {
    src: event,
    alt: "event",
    title: "événement",
    page: "evenement",
    isHighlighted: false,
  },
  {
    src: voyage,
    alt: "voyage",
    title: "voyage",
    page: "voyage",
    isHighlighted: true,
  },
  {
    src: mode,
    alt: "mode",
    title: "mode",
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
