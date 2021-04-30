const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/vacationSpots", (req, res, next) => {
    console.log("DONE")
    next()
})

app.use("/vacationSpots", require("./vacationRouter"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("SERVER WORKS!")
})