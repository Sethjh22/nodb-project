const express = require('express')
const characters = require('./controllers/characters')

const friends = require('./controllers/friends')

const port = 4242
const app = express()

app.use(express.json())

app.get('/api/character', friends.getFriends)

app.post('/api/character', friends.makeFriends)

app.put('/api/character/:id', friends.editCatchPhrase)

app.delete('/api/character/:id', friends.throwOutWindow)

app.listen(port, () => console.log(`Server is running on ${port}`))