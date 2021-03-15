import React, {Component} from 'react'


class Train extends Component{
    handleCharacter = () => {
        const {characters} = this.props
        let newCharacter = {
            name: characters.name,
            image: characters.image,
            catchPhrase: 'How do you know rick?'
        }
        this.props.friendFN(newCharacter)
        this.props.getCharacter()
    }

    render(){

        return(
            <div onClick={this.handleCharacter}>
                <img src={this.props.characters.image} alt={'Character Image'}/>
                <h3>{this.props.characters.name}</h3>
                <h4>{this.props.characters.catchPhrase}</h4>
                

            </div>
        )
    }
}