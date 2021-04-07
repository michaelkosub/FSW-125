const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounties", require("./bountiesRouter"))

app.listen(8000, () => {
    console.log("The server is running on 8000")
})