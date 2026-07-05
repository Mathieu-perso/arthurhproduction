import type {ReactNode} from "react";

export default function ContentWidth({children}: { children: ReactNode }) {
  return (
    <div className="w-[90%] relative">
      {children}
    </div>
  )
}