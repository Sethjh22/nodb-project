import React, {Component} from 'react'

class NewFriends extends Component{
    constructor(props){
        super(props)
        this.state = {
            catchPhraseInput: ''
        }
    }
    handleInput = (val) => {

        this.setState({catchPhraseInput: val})
    }
    handleEdit = (id) => {
        this.props.catchPhraseFN(id, this.state.catchPhraseInput)
        this.setState({catchPhraseInput: ''})
    }


    render(){
        return(
            <div>
                <img className='image' src={this.props.friend.image} alt={this.props.friend.name}/>
                <h2 className='name'>{this.props.friend.name}</h2>
                <h3 className='catchPhrase'>{this.props.friend.catchPhrase}</h3>
                <input placeholder="New catchphrase here" value={this.state.catchPhraseInput} onChange={e => this.handleInput(e.target.value)}/>
                <button className="button" onClick={() => this.handleEdit(this.props.friend.id)}>Edit Catchphrase</button>
                <button className="button" onClick={() => this.props.windowFN(this.props.friend.id)}>Throw out window</button>
            </div>

        )
    }
}
export default NewFriends