import express from "express"
import cors from "cors"

// ORM
import { PrismaClient } from "@prisma/client"

// Utils
import { minutesToHourString } from "./utils/minutesToHourString"
import { hourStringToMinutes } from "./utils/hourStringToMinutes"

const app = express()
app.use(cors())

const prisma = new PrismaClient()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.route("/").get(function (req, res) {
  res.status(200).json([])
})

app
  .route("/ads")
  .get(function (req, res) {
    res.status(200).json([])
  })
  .post(function (req, res) {
    res.status(201).json([])
  })

app
  .route("/games")
  .get(async (req, res) => {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    })

    res.status(200).json(games)
  })
  .post(function (req, res) {
    res.status(201).json([])
  })

app
  .route("/games/:id/ads")
  .get(async function (req, res) {
    const gameId = req.params.id

    const ads = await prisma.ad.findMany({
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        HourEnd: true,
      },
      where: {
        gameId,
      },
      orderBy: {
        createdAt: "asc",
      },
    })

    res.status(200).json(
      ads.map((ad) => ({
        ...ad,
        weekDays: ad.weekDays.split(","),
        hourStart: minutesToHourString(ad.hourStart),
        HourEnd: minutesToHourString(ad.HourEnd),
      }))
    )
  })
  .post(async (req, res) => {
    const gameId = req.params.id
    const body: any = req.body

    const ad = await prisma.ad.create({
      data: {
        gameId,
        name: body.name,
        useVoiceChannel: body.useVoiceChannel,
        yearsPlaying: body.yearsPlaying,
        discord: body.discord,
        weekDays: body.weekDays.join(","),
        hourStart: hourStringToMinutes(body.hourStart),
        HourEnd: hourStringToMinutes(body.HourEnd),
      },
    })

    return res.json(ad)
  })

app
  .route("/ads/:id/discord")
  .get(async function (req, res) {
    const adId = req.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
      where: { id: adId },
      select: {
        discord: true,
      },
    })

    res.status(200).json({
      discord: ad.discord,
    })
  })

app.listen("3333")
