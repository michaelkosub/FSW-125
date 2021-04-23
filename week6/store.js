const express = require("express")
const storeRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const store = [
    {name: "apple",
     type: "food",
     price: 200,
     _id: uuidv4() },

     {name: "shirt",
     type: "clothing",
     price: 2500,
     _id: uuidv4() },

     {name: "basket ball",
     type: "toy",
     price: 1000,
     _id: uuidv4() },

     {name: "rockem sockem robots",
     type: "toy",
     price: 1500,
     _id: uuidv4() },

     {name: "socks",
     type: "clothing",
     price: 800,
     _id: uuidv4() },

     {name: "soup",
     type: "food",
     price: 300,
     _id: uuidv4() },
     
     {name: "flour",
      type: "food",
      price: 100,
      _id: uuidv4()}
]

storeRouter.route("/")
    .get((req,res) => {
        res.send(store)
    })
    .post((req, res) => {
        const newItem = req.body
        newItem._id = uuidv4()
        store.push(newItem)
        res.send(newItem)
    })

storeRouter.route("/:storeId")
    .get((req,res) => {
        const storeId = req.params.storeId
        const foundItem = store.find(store => store._id === storeId)
        res.send(foundItem)
    })
    .put((req, res) => {
        const storeId = req.params.storeId
        const updateStore = req.body
        const storeIndex = store.findIndex(store => store._id === storeId)
        const updatedStore = Object.assign(store[storeIndex], updateStore)
        res.send(updatedStore)
    })
    .delete((req, res) => {
        const storeId = req.params.storeId
        const storeIndex = store.findIndex(store => store._id === storeId)
        store.splice(storeIndex, 1)
        res.send("Item Deleted")
    })
    
storeRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredStore = store.filter(store => store.type === type)
    res.send(filteredStore)
})
    

module.exports = storeRouter