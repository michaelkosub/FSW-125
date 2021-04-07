const express = require("express")
const bountyRouter = express.Router()
const {v4: uuid} = require('uuid')

const bounties = [
    {
     firstName: "Luke",
     lastName: "Skywalker",
     living: true,
     bounty: 1000000,
     type: "Jedi",
     _id: uuid()
    },
    {
    firstName: "Darth",
    lastName: "Vader",
    living: true,
    bounty: 300500,
    type: "Sith",
    _id: uuid()
  },
  {
    firstName: "Darth",
    lastName: "Maul",
    living: true,
    bounty: 200867,
    type: "Sith",
    _id: uuid()
  }
  
]

bountiesRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountiesRouter.get("/:bountyID", (req, res) => {
    const bountyID = req.params.bountyID
    const selectBounty = bounties.find(b => b._id === bountyID)
    res.send(selectBounty)
})

bountiesRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounties.push(newBounty)
    res.send(`${newBounty.fName} ${newBounty.lName} was succesfully added to the Bounty List!`)
})

bountiesRouter.delete("/:bountyID", (req, res) => {
    const bountyID = req.params.bountyID
    const bountyIndex = bounties.findIndex(b => b._id === bountyID)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty sucessfully deleted")
})

bountiesRouter.put("/:bountyID", (req, res) => {
    const bountyID = req.params.bountyID
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(b => b._id === bountyID)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
})

module.exports = bountiesRouter