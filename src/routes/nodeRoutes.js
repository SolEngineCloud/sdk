const express = require("express")
const router = express.Router()

const { deployNode, nodeStatus } = require("../controllers/nodeController")

router.post("/deploy", deployNode)
router.get("/status", nodeStatus)

module.exports = router
