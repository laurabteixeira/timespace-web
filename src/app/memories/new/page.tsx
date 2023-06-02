import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="hover: flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 transition hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Anexar mídia
          </label>

          <label
            htmlFor=""
            className="hover: flex items-center gap-1.5 text-sm text-gray-200 transition hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="bg-gray-400"
            />
            Tornar memória pública
          </label>
        </div>

        <input type="file" id="media" className="invisible h-0 w-0" />
        <textarea
          name="content"
          spellCheck={false}
          className="rouded w-full flex-1 resize-none border-0 bg-transparent p-0 text-sm leading-relaxed text-gray-100 placeholder:text-sm placeholder:text-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você vai lembrar para sempre!"
        />
      </form>
    </div>
  )
}
