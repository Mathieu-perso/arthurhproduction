import logo from "/assets/logo-arthur-h-production.svg";

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

export default function Header({ selectedMenu }: { selectedMenu?: string }) {
  return (
    <div className="w-full flex justify-between p-6 absolute">
      <div>
        <a href="/">
          <img
            src={logo}
            alt="Logo ArthurH Productions"
            className="h-[4rem] w-auto"
          />
        </a>
      </div>
      <div className="flex justify-between gap-4 font-['Jomhuria'] text-4xl text-white uppercase -mt-2">
        {HEADER_MENUS.map((menu) => {
          const isSelected = menu.id === selectedMenu;

          return (
            <a
              key={menu.id}
              href={menu.href}
              className={`hover:text-[#EEEEEE] ${isSelected ? "underline" : ""}`}
            >
              {menu.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}