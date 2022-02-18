import { useState } from "react"


const Form = (props) => {

    const { submitHandler, char, setChar, buttonText, errors } = props

    const changeHandler = e => {
        let newCharObject = { ...char }

        if (e.target.type === "checkbox") {
            console.log(e.target.name, e.target.checked)
            newCharObject[e.target.name] = e.target.checked

        } else {
            console.log(e.target.name, e.target.value)
            newCharObject[e.target.name] = e.target.value
        }
        console.log(e.target)
        setChar(newCharObject)
    }


    return (
        <form onSubmit={submitHandler}>
            <div>
                {errors.name && <p style={{ color: "red" }}> {errors.name.message}</p>}
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={changeHandler} value={char.name} />
            </div>
            <div>
                {errors.origin && <p style={{ color: "red" }}> {errors.origin.message}</p>}
                <label htmlFor="origin">Origin: </label>
                <input type="text" name="origin" id="" onChange={changeHandler} value={char.origin} />
            </div>
            <div>

                <label htmlFor="status">status: </label>
                <input type="checkbox" name="status" onChange={changeHandler} value={char.status} />


            </div>
            <div>
                {errors.alignment && <p style={{ color: "red" }}> {errors.alignment.message}</p>}
                <label htmlFor="alignment">alignment: </label>
                <select name="alignment" onChange={changeHandler} value={char.alignment}>
                    <option value="none" defaultValue hidden >Select an option</option>
                    <option value="Good" >Good</option>
                    <option value="Evil" >Evil</option>
                    <option value="Neutral" >Neutral</option>
                    <option value="NPC" >NPC</option>
                </select>
            </div>
            <div>
                {errors.image && <p style={{ color: "red" }}> {errors.image.message}</p>}
                <label htmlFor="image">image: </label>
                <input type="text" name="image" onChange={changeHandler} value={char.image} />
            </div>
            <div>
                {errors.yearIntroduced && <p style={{ color: "red" }}> {errors.yearIntroduced.message}</p>}
                <label htmlFor="yearIntroduced">Year Introduced: </label>
                <input type="number" name="yearIntroduced" onChange={changeHandler} value={char.yearIntroduced} />
            </div>

            <button type="submit">{buttonText}</button>

        </form>
    )
}

export default Form