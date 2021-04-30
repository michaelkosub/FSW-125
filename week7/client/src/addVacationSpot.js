import React, { useState } from "react"

export default function AddVacationSpot(props) {
    const initInputs = {
        city: props.city || "",
        state: props.state || "",
        visited: props.visited || "",
        priority: props.priority || "",
        pros: props.pros || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <p id="formHeading">Next stop?</p>
            <input
                id="input"
                type="text"
                name="city"
                value={inputs.city}
                onChange={handleChange}
                placeholder="City"
            />
            <input
                id="input"
                type="text"
                name="state"
                value={inputs.state}
                onChange={handleChange}
                placeholder="State"
            />
            <br />
            <input
                id="input"
                type="text"
                name="visited"
                value={inputs.visited}
                onChange={handleChange}
                placeholder="Ever been?"
            />
            <input
                id="input"
                type="number"
                name="priority"
                value={inputs.priority}
                onChange={handleChange}
                placeholder="Scale of 1 to 10"
            />
            <br />
            <input
                id="input"
                type="text"
                name="pros"
                value={inputs.pros}
                onChange={handleChange}
                placeholder="Attractions"
            />
            <br />
            <button id="addBtn" type="submit">{props.btnText}</button>
        </form>
    )
}