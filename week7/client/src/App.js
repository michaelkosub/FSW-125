import React, { useState, useEffect } from "react"
import axios from "axios"
import VacationSpot from "./VacationSpots"
import AddVacationSpot from "./addVacationSpot"

export default function App() {
    const [vacationSpots, setVacationSpots] = useState([])
    
    function getVacationSpots() {
        axios.get("/vacationSpots")
        .then(res => setVacationSpots(res.data))
        .catch(err => console.log(err))
    }

    function addVacationSpot(newVacationSpot) {
        axios.post("/vacationSpots", newVacationSpot)
        .then(res => {
            setVacationSpots(prevVacationSpots => [...prevVacationSpots, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteVacationSpot(vacationSpotId, index) {
        axios.delete(`/vacationSpots/${vacationSpotId}`)
        .then(res => {
            let newVacationSpots = [...vacationSpots] 
            newVacationSpots.splice(index, 1)
        setVacationSpots(newVacationSpots)
        })
        .catch(err => console.log(err))
    }

    function editVacationSpot(updates, vacationSpotId) {
        axios.put(`/vacationSpots/${vacationSpotId}`, updates)
        .then(res => {
            setVacationSpots(prevVacationSpots => prevVacationSpots.map(VacationSpot => VacationSpot._id !== vacationSpotId ? VacationSpot : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getVacationSpots()
    }, [])
        return (
            <div>
            <h2 id="heading">Vacation Spots</h2>
            <AddVacationSpot
                submit={addVacationSpot}
                btnText="Add Vacation Spot"
            />
            {
                vacationSpots.map((vacationSpot, index) =>
                    <VacationSpot 
                        {...vacationSpot}
                        index={index}
                        key={vacationSpot.city}
                        deleteVacationSpot={deleteVacationSpot}
                        editVacationSpot={editVacationSpot}
                    />
                    )
            }
            </div>
        )
}
