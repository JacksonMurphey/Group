const mongoose = require('mongoose');

const VGCharacterSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'A name is required for your character'],
        minlength: [3, 'The character name must be at least 3 characters']
    },

    origin: {
        type: String,
        required: [true, 'Please Let us know the characters origin'],
        minlength: [3, 'The origin must be greater than 3 characters']
    },

    status: {
        type: Boolean,
        default: false
    },


    alignment: {
        type: String,
        required: [true, 'Character Alignment Required'],
        enum: [
            "Good",
            "Evil",
            "Neutral",
            "NPC"
        ]
    },

    image: {
        type: String

    },

    yearIntroduced: {
        type: Number,
        required: [true, 'Must input a date.'],
        min: [1972, "Didn't excist before 1972!"]
    }
}, { timestamps: true })

//  variable for our model = collectionName : the schema -> key value pair --- vgCharacters
const vgCharacter = mongoose.model("vgCharacter", VGCharacterSchema);

module.exports = vgCharacter;