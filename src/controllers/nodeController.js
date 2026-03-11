const nodeService = require("../services/nodeService")

exports.deployNode = async (req, res) => {
  try {
    const result = await nodeService.deploy()

    res.json({
      success: true,
      message: "Node deployed successfully",
      data: result
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.nodeStatus = async (req, res) => {
  try {
    const status = await nodeService.status()

    res.json({
      success: true,
      node: status
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
