const express = require("express");
const app = express();
const cors = require("cors");
port = 8000;


// middleware -- allows recognize request object as json object -- used for post and put calls
app.use(express.json());

// recognize request objects as strings or arrays
app.use(express.urlencoded({ extended: true }));

// removes cors errors when making axios calls
app.use(cors({ origin: 'http://localhost:3000' }))


// connect to database - handles connection to DB   node.js  <- mongoose -> db
require("./config/mongoose.config");

// routes
require('./routes/vgCharacter.routes')(app)




app.listen(port, () => console.log(`Success! You are now listening on port ${port}!`))