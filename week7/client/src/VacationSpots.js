import React, { useState } from "react"
import AddVacationSpot from "./addVacationSpot"


export default function VacationSpots(props) {
    const { city, state, visited, priority, pros, _id, index } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div>
            { !editToggle ?
            <>
            <div>
            <h4>City: {city}</h4>
            <h4>State: {state}</h4>
            <h4>Visited? {visited + ""}</h4>
            <h5>How badly do you want to go? {priority}</h5>
            <h5>Why do you want to go? {pros}</h5>
            <button className="deleteBtn" onClick={() => props.deleteVacationSpot(_id, index)}>
                Delete
            </button>
            <button className="editBtn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit
            </button></div>
            </>
            :
            <>
            <AddVacationSpot 
                city={city}
                state={state}
                visited={visited}
                priority={priority}
                pros={pros}
                _id={_id}
                btnText="Submit Edit"
                submit={props.editVacationSpot}
            />
            <button id="closeBtn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
            <hr />
        </div>
    )
}