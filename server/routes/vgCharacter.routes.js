const vgController = require('../controllers/vgCharacter.controller')

// app is express()
module.exports = (app) => {

    app.post('/api/character', vgController.createNewCharacter)
    app.get('/api/character', vgController.findAllCharacters)
    app.get('/api/character/:id', vgController.findOneCharacter)
    app.put('/api/character/:id', vgController.updateOneCharacter)
    app.delete('/api/character/:id', vgController.deleteCharacter)

}