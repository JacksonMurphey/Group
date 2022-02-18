const vgCharacter = require("../models/vgCharacter.model")


module.exports = {

    // find all
    findAllCharacters: (req, res) => {
        vgCharacter.find()
            // function returns a promise
            .then((allCharacters) => {
                console.log(allCharacters)
                res.json(allCharacters) // converts response from server to client
            })
            .catch((err) => {
                console.log("Fail! Something went wrong with allCharacters", err)
                res.json({ message: "Something went wrong with finding characters", error: err })
            })
    },



    // create
    createNewCharacter:
        (req, res) => {
            vgCharacter.create(req.body)
                .then((newCharacter) => {
                    console.log(newCharacter)
                    res.json(newCharacter)
                })
                .catch(err => {
                    console.log('Creating a character Failed', err)
                    res.status(400).json({ message: 'Something went wrong in character create', error: err })
                })
        },

    // find one
    findOneCharacter:
        (req, res) => {
            vgCharacter.findOne({ _id: req.params.id })
                .then(oneCharacter => {
                    console.log(`Found ${oneCharacter.name}!`)
                    res.json(oneCharacter)
                })
                .catch((err) => {
                    console.log('Failed to retrieve Character', err)
                    res.json({ message: 'Someting when wrong while looking for character', error: err })
                })
        },


    // update
    updateOneCharacter:
        (req, res) => {
            vgCharacter.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                .then((updatedCharacter) => {
                    console.log(updatedCharacter)
                    res.json(updatedCharacter)
                })
                .catch(err => {
                    console.log('Updating the character failed', err)
                    res.status(400).json({ message: 'Something went wrong in updating one character', error: err })
                })
        },

    // delete 
    deleteCharacter: (req, res) => {
        vgCharacter.deleteOne({ _id: req.params.id })
            .then((deletedCharacter) => {
                console.log(deletedCharacter)
                res.json(deletedCharacter)
            })
            .catch((err) => {
                console.log("Fail! Something went wrong with deleteCharacter", err)
                res.json({ message: "Something went wrong with deleting character", error: err })
            })
    },




}


//--- Error Notes: ---
//We get the response status of 400 to display our err, which is the rejection of our promise.

// A '400' status error means our client is talking to our server just fine, but the client isnt sending good information 
// such as: (client isnt meeting the validations we setup in our model)
//  NOTE: --> This is how we will eventually display our validations from the server in REACT 

// A '404' status error means you are not making your calls to the correct place 'or' your server is not set up properly

// A '200' status returned means we are looking good/everything is working 