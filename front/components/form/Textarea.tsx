export default function Textarea({
  placeholder,
  name,
}: {
  placeholder: string,
  name: string,
}) {
  return (
    <textarea
      name={name}
      style={{ resize: 'none' }}
      placeholder={placeholder.toUpperCase()}
      className="w-full h-48 border-3 border-white rounded-2xl text-white pl-4 pt-3 font-['Jomhuria'] text-3xl"
    />
  )
}