import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";


const AllCharacters = (props) => {

    const [charList, setCharList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/character")
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setCharList(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (

        <div>
            <Header title='VG-Character Api' linkRoute='/new' linkName='Add Character' />
            {
                charList.map((char, index) => (
                    <div key={index}>
                        <p>{char.name}</p>
                        <p>{char.origin}</p>
                        <p>{char.status}</p>
                        <p>{char.alignment}</p>
                        <img src={char.image} alt="Character" />
                        <p>{char.yearIntroduced}</p>
                        <hr />
                    </div>

                ))
            }

        </div>
    )
}

export default AllCharacters;