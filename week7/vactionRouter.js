const express = require("express")
const vacationRouter = express.Router()
const uuid = require("uuid")

const vacationSpots = [
    { 
    city: "Asheville", 
    state: "North Carolina", 
    visited: false, 
    priority: 1, 
    pros: [" weather, ", "restaurants, ", "breweries"], 
    _id: uuid.v4()
    }, {
    city: "Nashville",
    state: "Tennessee",
    visited: true,
    priority: 5,
    pros: [" music, ", "food, ", "bars"],
    _id: uuid.v4()
    }, {
    city: "Honolulu",
    state: "Hawaii",
    visited: false,
    priority: 2,
    pros: [" beach, ", "hiking, ", "food"],
    _id: uuid.v4()
    }, {
    city: "Portland",
    state: "Maine",
    visited: true,
    priority: 3,
    pros: [" food, ", "breweries, ", "views"],
    _id: uuid.v4()
    }
]

vacationRouter.route("/")

//get all
.get((req, res) => {
    res.status(200)
    res.send(vacationSpots)
})

//post
.post((req, res) => {
    const newVacationSpot = req.body
    newVacationSpot._id = uuid.v4()
    vacationSpots.push(newVacationSpot)
    res.status(201).send(newVacationSpot)
})

//get by id
vacationRouter.get("/:vacationSpotId", (req, res, next) => {
    const vacationSpotId = req.params.vacationSpotId
    const foundVacationSpot = vacationSpots.find(vacationSpot => vacationSpot._id === vacationSpotId)
    if(!foundVacationSpot) {
        const error = new Error(`Sorry! The item with id ${vacationSpotId} not found!`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundVacationSpot)
})

//get by state
vacationRouter.get("/search/state", (req, res, next) => {
    const state = req.query.state
    if(!state) {
        const error = new Error("Sorry! You must list a state!")
        res.status(500)
        return next(error)
    } else if(state !== vacationSpots.state) {
        const error = new Error("Sorry! There are no vacation spots listed in this state!")
        res.status(500)
        return next(error)
    }
    const filteredVacationSpots = vacationSpots.filter(vacationSpot => vacationSpot.state === state)
    res.status(200).send(filteredVacationSpots)
})

//delete
vacationRouter.delete("/:vacationSpotId", (req, res) => {
    const vacationSpotId = req.params.vacationSpotId
    const vacationSpotIndex = vacationSpots.findIndex(vacationSpot => vacationSpot._id === vacationSpotId)
    vacationSpots.splice(vacationSpotIndex, 1)
    res.send("Visited vacation Spot!")
})

//update
vacationRouter.put("/:vacationSpotId", (req, res) => {
    const vacationSpotId = req.params.vacationSpotId
    const updateObject = req.body
    const vacationSpotIndex = vacationSpots.findIndex(vacationSpot => vacationSpot._id === vacationSpotId)
    const updatedVacationSpot = Object.assign(vacationSpots[vacationSpotIndex], updateObject)
    res.status(201).send(updatedVacationSpot)
})

module.exports = vacationRouter