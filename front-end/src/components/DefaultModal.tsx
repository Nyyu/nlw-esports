import { ReactNode } from "react"
import * as Dialog from "@radix-ui/react-dialog"

interface DefaultModalProps {
  title: string
  children: ReactNode
}

/**
 *
 * @param children -> body
 * @returns default styling for modal
 *
 * @requires a root, trigger and close
 */

export default function DefaultModal({
  title,
  children,
}: DefaultModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded shadow-lg shadow-black/40 min-w-[460px]">
        <Dialog.Title className="text-3xl font-black">
          {title}
        </Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}
