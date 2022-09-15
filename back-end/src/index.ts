import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) =>
  res.json([
    {
      id: 1,
      name: "1",
    },
  ])
)

app.listen("3333")
