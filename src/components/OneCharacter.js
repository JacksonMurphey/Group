import { useEffect, useState } from "react"
import Header from "./Header"
import axios from "axios"

const OneCharacter = (props) => {

    const [char, setChar] = useState({})
    const { id } = props

    useEffect(() => {
        axios.get(`http://localhost:8000/api/character/${id}`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setChar(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            <Header title={char.name} linkRoute='/' linkName='Home' />
            <p>Origin: {char.origin}</p>
            {
                char.status === true
                    ? <p>Status: Alive</p>
                    : <p>Status: Dead</p>
            }
            <p>Alignment: {char.alignment}</p>
            <img src={char.image} alt="" style={{ height: "1000px", width: "500px" }} />
            <p>Introduced In: {char.yearIntroduced}</p>
        </div>

    )
}


export default OneCharacter