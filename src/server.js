const express = require("express")
const cors = require("cors")

const nodeRoutes = require("./routes/nodeRoutes")

function startServer() {
  const app = express()

  app.use(cors())
  app.use(express.json())

  app.use("/api/node", nodeRoutes)

  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(`SolEngine running on port ${PORT}`)
  })
}

module.exports = startServer
