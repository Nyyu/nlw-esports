import { useEffect, useState } from "react"

// components
import GameCard from "./components/GameCard"

// styling
import logoImage from "./assets/Logo.svg"
import {
  GameController,
  MagnifyingGlassPlus,
} from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import DefaultModal from "./components/DefaultModal"
import DefaultInput from "./components/DefaultInput"

// interface
type TGame = {
  id: string
  title: string
  bannerUrl: string
  _count: { ads: number }
}

function App() {
  const [games, setGames] = useState<TGame[]>([])

  // Fetch games from Mock Backend API
  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((res) => res.json())
      .then((res) => setGames(res))
      .catch((e) => console.error(e))
    console.log(games)
  }, [])

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
        {games &&
          games.length > 0 &&
          games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              imgUrl={game.bannerUrl}
              adCount={game._count.ads}
            />
          ))}
      </div>
      <Dialog.Root>
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
            <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24} />
              Publicar anuncio
            </Dialog.Trigger>
          </div>
        </div>

        <DefaultModal title="Publique um anuncio">
          <form className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game">Qual o game?</label>
              <DefaultInput
                id="game"
                placeholder="Selecione o game que deseja jogar"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">
                Qual o seu nome (ou nick)?
              </label>
              <DefaultInput
                id="name"
                placeholder="ex. John Doe"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">
                  Joga ha quantos anos?
                </label>
                <DefaultInput
                  id="yearsPlaying"
                  type="number"
                  placeholder="Ta dboa se for 0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">
                  Qual a sua tag do Discord?
                </label>
                <DefaultInput
                  id="text"
                  placeholder="ex. JohnDoe#0000"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="activeDays">
                  Quando costuma jogar?
                </label>
                <div className="grid grid-cols-5 gap-2">
                  <button
                    className="bg-zinc-900 w-8 h-8 text-center rounded"
                    children="S"
                    type="button"
                    title="monday"
                  />
                  <button
                    className="bg-zinc-900 w-8 h-8 text-center rounded"
                    children="T"
                    type="button"
                    title="tuesday"
                  />
                  <button
                    className="bg-zinc-900 w-8 h-8 text-center rounded"
                    children="Q"
                    type="button"
                    title="wednesday"
                  />
                  <button
                    className="bg-zinc-900 w-8 h-8 text-center rounded"
                    children="Q"
                    type="button"
                    title="thursday"
                  />
                  <button
                    className="bg-zinc-900 w-8 h-8 text-center rounded"
                    children="S"
                    type="button"
                    title="friday"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">
                  Qual horario do dia
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <DefaultInput
                    id="hourStart"
                    type="time"
                    placeholder="De"
                  />
                  <DefaultInput
                    id="hourEnd"
                    type="time"
                    placeholder="Ate"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" id="voip" />
              <label htmlFor="voip">
                Constumo me conectar ao chat de voz
              </label>
            </div>
            <div className="flex gap-4 mt-4 justify-end">
              <Dialog.Close
                type="button"
                className="bg-zinc-500 px-5 h-12 rounded font-semibold hover:bg-zinc-600 transition-colors"
              >
                Cancelar
              </Dialog.Close>
              <button
                type="submit"
                className="bg-violet-500 px-5 h-12 rounded font-semibold hover:bg-violet-600 transition-colors flex gap-2 items-center"
              >
                <GameController className="w-6 h-6" />
                Encontrar duo
              </button>
            </div>
          </form>
        </DefaultModal>
      </Dialog.Root>
    </div>
  )
}

export default App
