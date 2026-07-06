import {Category} from "../types/Category";
import {Link} from "@tanstack/react-router";

export default function Categories({
  selectedCategory
}: {
  selectedCategory: Category;
}) {
  const categories = [
    {
      id: Category.WEDDING,
      label: "Mariage",
      page: "/selection/mariage"
    },
    {
      id: Category.MODE,
      label: "Mode",
      page: "/selection/mode"
    },
    {
      id: Category.TRIP,
      label: "Voyage",
      page: "/selection/voyage"
    },
    {
      id: Category.FOOD,
      label: "Culinaire",
      page: "/selection/culinaire"
    },
    {
      id: Category.EVENT,
      label: "Événement",
      page: "/selection/evenement"
    }
  ]

  return (
    <div className="flex justify-center items-center gap-8">
      {categories.map((category) => {
        const isSelected = selectedCategory === category.id;
        const isSelectedClass = isSelected ? "text-6xl" : "text-5xl opacity-60";

        return (
          <Link
            key={category.id}
            to={category.page}
            className={`font-['Jomhuria'] cursor-pointer transition-[250ms] text-white ${isSelectedClass} hover:opacity-100`}
          >
            {category.label}
          </Link>
        )
      })}
    </div>
  )
}