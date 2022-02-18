const mongoose = require('mongoose')

const dbname = 'groupProject'
mongoose.connect(`mongodb://localhost/${dbname}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the database: ${dbname}`))
    .catch(err => console.log('Something went wrong while connecting to the database', err))
