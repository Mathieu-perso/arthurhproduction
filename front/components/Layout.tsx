import type {ReactNode} from "react";
import Header from "./Header.tsx";

export default function Layout({
  highlightedBackgroundSrc,
  highlightedBackgroundTitle,
  selectedMenu,
  screenHeight = true,
  children
}: {
  highlightedBackgroundSrc: string,
  highlightedBackgroundTitle?: string,
  selectedMenu?: string,
  screenHeight?: boolean,
  children: ReactNode
}) {
  return (
    <div className={`${screenHeight ? "overflow-hidden" : ""} h-screen w-screen relative`}>
      <div className="size-full absolute top-0 left-0 flex items-end">
        <div
          style={{ backgroundImage: `url(${highlightedBackgroundSrc})` }}
          className="absolute -z-1 size-full blur-[4px] bg-no-repeat bg-cover bg-center"
        />
        {highlightedBackgroundTitle && (
          <h1 className="w-full text-[35vw] leading-[0.75] text-center uppercase text-[#EEEEEE] opacity-50 select-none font-['Jomhuria'] -mb-[5vw]">
            {highlightedBackgroundTitle}
          </h1>
        )}
      </div>

      <Header selectedMenu={selectedMenu} />

      <div className="size-full flex justify-center items-center">
        {children}
      </div>

      {/*<div className="w-full absolute top-full">*/}
      {/*  <a*/}
      {/*    href="/mentions-legales"*/}
      {/*    className="opacity-20 hover:opacity-100 transition duration-300 ease-in-out"*/}
      {/*  >*/}
      {/*    Mentions légales*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  )
}