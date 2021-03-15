const axios = require('axios')


module.exports = {
    getRandomCharacter: (req, res) => {
        const trainCharacter = []

        const random = Math.ceil(Math.random() * 671)

        axios.get(`https://rickandmortyapi.com/api/character/${random}`)
         .then(response => {
             trainCharacter.push(response.data)
             res.status(200).send(trainCharacter)
         })
         .catch(err => console.log(err))
    }
}