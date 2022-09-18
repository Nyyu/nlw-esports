interface GameCardProps {
  title: string
  imgUrl: string
  adCount: number
}

export default function GameCard({
  title,
  imgUrl,
  adCount,
}: GameCardProps) {
  return (
    <a
      href=""
      className="relative rounded-lg overflow-hidden"
    >
      <img src={imgUrl} alt="" />
      <div className="bg-game-gradient absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4">
        <strong className="font-bold text-white block">
          {title}
        </strong>
        <span className="text-zinc-300 text-sm block">
          {adCount} anuncio{adCount > 1 && "s"}
        </span>
      </div>
    </a>
  )
}
