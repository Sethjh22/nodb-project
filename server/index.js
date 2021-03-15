const express = require('express')
const characters = require('./controllers/characters')

const friends = require('./controllers/friends')

const port = 4242
const app = express()

app.use(express.json())

app.get('/api/character', characters.getRandomCharacter)

app.get('/api/friend', friends.getFriends)

app.post('/api/friend', friends.makeFriends)

app.put('/api/friend/:id', friends.editCatchPhrase)

app.delete('/api/friend/:id', friends.throwOutWindow)

app.listen(port, () => console.log(`Server is running on ${port}`))