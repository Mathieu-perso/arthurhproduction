import logo from "@assets/logo-arthur-h-production.svg";
import {Link} from "@tanstack/react-router";

const HEADER_MENUS = [
  {
    id: "ABOUT",
    name: "À Propos",
    href: "/a-propos",
  },
  {
    id: "CONTACT",
    name: "Contact",
    href: "/contact",
  },
];

export default function Header({selectedMenu}: { selectedMenu?: string }) {
  return (
    <div className="w-full flex justify-between p-6 absolute z-10">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Logo ArthurH Productions"
            className="h-[4rem] w-auto"
          />
        </Link>
      </div>
      <div className="flex justify-between gap-4 font-['Jomhuria'] text-4xl text-white uppercase -mt-2">
        {HEADER_MENUS.map((menu) => {
          const isSelected = menu.id === selectedMenu;

          return (
            <Link
              key={menu.id}
              to={menu.href}
              className={`hover:text-[#EEEEEE] ${isSelected ? "underline" : ""}`}
            >
              {menu.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}