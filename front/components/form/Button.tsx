export default function Button({
  label
}: {
  label: string
}) {
  return (
    <button
      className="border-3 border-white text-white w-fit py-2 px-6 rounded-2xl font-['Jomhuria'] text-3xl cursor-pointer transition-colors ease-in-out uppercase duration-[500ms] hover:bg-white hover:text-black"
    >
      {label}
    </button>
  )
}