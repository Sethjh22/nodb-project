const friends = []
let id = 1

module.exports = {
    getFriends: (req, res) => {
        res.status(200).send(friends)
    },
    makeFriends: (req, res) => {
        const {character} = req.body
        // console.log(character)
        character.id = id
        friends.push(character) 
        // console.log(friends)
        res.status(200).send(friends)
        
        
        id++
    },
    editCatchPhrase: (req,res) =>  {
        const {id} = req.params
        const {catchPhrase} = req.body

        const friend = friends.find(elem => elem.id === +id)
        console.log(friend)
        friend.catchPhrase = catchPhrase
        res.status(200).send(friends)
    },
    throwOutWindow: (req, res) => {
        const {id} = req.params

        const index = friends.findIndex(elem => elem.id === +id)
        friends.splice(index, 1)
        res.status(200).send(friends)
    }
}