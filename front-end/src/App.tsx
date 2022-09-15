import logoImage from "./assets/Logo.svg"

import { MagnifyingGlassPlus } from "phosphor-react"

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImage} alt="logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        esta aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a
          href=""
          className="relative rounded-lg overflow-hidden"
        >
          <img src="/Game-6.svg" alt="" />
          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block">
              4 anuncios
            </span>
          </div>
        </a>

        <a
          href=""
          className="relative rounded-lg overflow-hidden"
        >
          <img src="/Game-6.svg" alt="" />
          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block">
              4 anuncios
            </span>
          </div>
        </a>

        <a
          href=""
          className="relative rounded-lg overflow-hidden"
        >
          <img src="/Game-6.svg" alt="" />
          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block">
              4 anuncios
            </span>
          </div>
        </a>

        <a
          href=""
          className="relative rounded-lg overflow-hidden"
        >
          <img src="/Game-6.svg" alt="" />
          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block">
              4 anuncios
            </span>
          </div>
        </a>

        <a
          href=""
          className="relative rounded-lg overflow-hidden"
        >
          <img src="/Game-6.svg" alt="" />
          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block">
              4 anuncios
            </span>
          </div>
        </a>

        <a
          href=""
          className="relative rounded-lg overflow-hidden"
        >
          <img src="/Game-6.svg" alt="" />
          <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4">
            <strong className="font-bold text-white block">
              League of legends
            </strong>
            <span className="text-zinc-300 text-sm block">
              4 anuncios
            </span>
          </div>
        </a>
      </div>

      <div className="bg-nlw-gradient self-stretch pt-1 rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Nao encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anuncio para encontrar novos
              players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
