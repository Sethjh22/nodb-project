const friends = []
let id = 1

module.exports = {
    getFriends: (req, res) => {
        res.status(200).send(friends)
    },
    makeFriends: (req, res) => {
        const {character} = req.body

        friends.push(character) 
        res.status(200).send(friends)

        friends.id = id
        id++
    },
    editCatchPhrase: (req,res) =>  {
        const {id} = req.params
        const {catchPhrase} = req.body

        const character = friends.find(elem => elem.id === +id)
        character.catchPhrase = catchPhrase
        res.status(200).send(friends)
    },
    throwOutWindow: (req, res) => {
        const {id} = req.params

        const index = friends.findIndex(elem => elem.id === +id)
        friends.splice(index, 1)
        res.status(200).send(friends)
    }
}