import React, {Component} from 'react'


class Train extends Component{
    handleCharacter = () => {
        const {characters} = this.props
        let newCharacter = {
            name: characters.name,
            image: characters.image,
            catchPhrase: 'I sure do love Rick!'
        }
        this.props.friendFN(newCharacter)
        this.props.getCharacter()
    }

    render(){

        return(
            <div onClick={this.handleCharacter}>
                <img className='image'src={this.props.characters.image} alt={this.props.characters.name}/>
                <h3>{this.props.characters.name}</h3>
                <h4>{this.props.characters.catchPhrase}</h4>
                

            </div>
        )
    }
}
export default Train