export default function Input({
  type = "text",
  name,
  placeholder,
}: {
  type?: string,
  placeholder: string,
  name: string,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder.toUpperCase()}
      className="w-full h-16 border-3 border-white rounded-2xl text-white pl-4 pt-1 font-['Jomhuria'] text-3xl"
    />
  )
}