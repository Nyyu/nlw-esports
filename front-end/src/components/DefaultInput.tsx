import { InputHTMLAttributes } from "react"

interface DefaultInput
  extends InputHTMLAttributes<HTMLInputElement> {}

function DefaultInput(props: DefaultInput) {
  return (
    <input
      {...props}
      className="bg-zinc-900 placeholder:text-zinc-500 py-3 px-4 rounded text-sm"
    />
  )
}

export default DefaultInput
