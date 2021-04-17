const express = require('express')
const hunterRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const bountyHunters = [
    {
        firstName:"Luke ",
        lastName: "Skywalker",
        alive: true,
        bounty: 5000,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName:"Darth ",
        lastName: "Vader",
        alive: false,
        bounty: 100000,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName:"Darth",
        lastName: "Maul",
        alive: true,
        bounty: 500,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName:"Obi-Wan",
        lastName: "Kenobi ",
        alive: false,
        bounty: 00,
        type: "Jedi",
        _id: uuidv4()
    }
]


hunterRouter.get("/", (req, res) =>{
    const bountyHunterId = req.params.bountyHunterId
    const foudHunter = bountyHunters.find(hunter => hunter._id===bountyHunterId)
    res.send(foudHunter)
})


hunterRouter.get("/:Id", (req, res) =>{
    const bountyHunterId = req.params.Id
    const hunterIndex = bountyHunters.findIndex(hunter => hunter._id === bountyHunterId)
    if(!hunterIndex){
        res.status(500)
        const error  = new Error(`The item could not be found`)
        return next(error)
    }
    
    res.status(200).send(hunterIndex)
})

hunterRouter.get("/search/type", (req, res) =>{
    const type = req.query.type
    const filteredHunters = bountyHunters.filter(hunter => hunter.type === type)
    res.send(filteredHunters)
})




hunterRouter.get("/search/firstname", (req, res) =>{
    const firstname = req.query.firstname
    const filteredHunters = bountyHunters.filter(hunter => hunter.firstName === firstname)
    res.send(filteredHunters)
})


hunterRouter.delete("/:bountyHunterId", (req, res) =>{
    const bountyHunterId = req.params.bountyHunterId
    const hunterIndex = bountyHunters.findIndex(hunter => hunter._id === bountyHunterId)
    bountyHunters.splice(hunterIndex, 1)
    res.send("Successfully deleted hunter!")
})


hunterRouter.put("/:bountyHunterId", (req, res) => {
    const bountyHunterId = req.params.bountyHunterId
    const hunterIndex = bountyHunters.findIndex(hunter => hunter._id === bountyHunterId)
    const updatedHunter = Object.assign(bountyHunters[hunterIndex], req.body)
    res.send(updatedHunter)
})


// hunterRouter.route("/")
// .get( (req, res) =>{
//     res.send(bountyHunters)
// })


hunterRouter.post( (req, res) => {
    const newBountyHunter = req.body
    newBountyHunter._id = uuidv4()
    bountyHunters.push(newBountyHunter)
    res.send(newBountyHunter)
})


module.exports = hunterRouter