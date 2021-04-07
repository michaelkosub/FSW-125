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

bountyRouter.get("/", (req, res) => {
  res.send(bounties)
})

bountyRouter.post("/", (req, res)=> {
  const bounty = req.body;
  bounty._id = uuid();
  bounties.push(bounty)
  res.send(`Added ${bounty.firstName} ${bounty.lastName} to the database.`)
})

module.exports = bountyRouter