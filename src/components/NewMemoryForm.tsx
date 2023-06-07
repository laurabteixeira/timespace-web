'use client'
import { Camera } from 'lucide-react'
import { MediaPicker } from './MediaPicker'
import { FormEvent } from 'react'
import Cookie from 'js-cookie'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

export function NewMemoryForm() {
  const router = useRouter()

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    // Se você estiver interessado apenas nos dados de um formulário específico, FormData(event.target) será a opção mais adequada. Se você quiser coletar os dados de um elemento DOM específico, independentemente de ser um formulário ou não, então FormData(event.currentTarget) é o que você deve usar.

    const fileToUpload = formData.get('coverUrl')

    let coverUrl = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      // O FormData() só recebe arquivos do tipo multipart form data, por isso passamos ela.
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)

      coverUrl = uploadResponse.data.fileUrl
    }

    const token = Cookie.get('token')

    await api.post(
      '/memories',
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    router.push('/')
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
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
      <MediaPicker />
      {/* Encapsulei o MediaPicker para conseguir usar o 'use client' só nele. */}
      <textarea
        name="content"
        spellCheck={false}
        className="rouded w-full flex-1 resize-none border-0 bg-transparent p-0 text-sm leading-relaxed text-gray-100 placeholder:text-sm placeholder:text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você vai lembrar para sempre!"
      />
      <button
        type="submit"
        className="inline-block self-end rounded-full bg-gray-400 px-4 py-2 text-sm leading-none text-white transition-colors hover:bg-green-500"
      >
        Salvar
      </button>
    </form>
  )
}
