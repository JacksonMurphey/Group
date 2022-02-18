import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from './Form';


const NewCharacter = (props) => {

    // const [genre, setGenre] = useState('');
    // const [image, setImage] = useState('');
    // const [rating, setRating] = useState('');
    // const [company, setCompany] = useState('');
    // const [errors, setErrors] = useState('');

    const [newChar, setNewChar] = useState({
        name: "",
        origin: "",
        status: false,
        alignment: "",
        image: "",
        yearIntroduced: ""
    })

    const [errors, setErrors] = useState({})

    const newSubmitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/character', newChar)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => {
                console.log(err.response.data)
                setErrors(err.response.data.error.errors)
            })
    }


    return (
        <div>
            <Header title='VG-Character Api' linkRoute='/' linkName='Home' />
            <Form submitHandler={newSubmitHandler} char={newChar} setChar={setNewChar} buttonText='Create Character' errors={errors} />

        </div>
    )
}
export default NewCharacter;