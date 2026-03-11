const { exec } = require("child_process")

exports.deploy = () => {
  return new Promise((resolve, reject) => {

    exec("bash scripts/deployNode.sh", (error, stdout, stderr) => {

      if (error) {
        return reject(error)
      }

      resolve({
        output: stdout
      })
    })

  })
}

exports.status = async () => {

  return {
    network: "solana",
    status: "running",
    uptime: process.uptime()
  }

}
