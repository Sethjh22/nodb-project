import React, {Component} from 'react'
import axios from 'axios'
import Train from './Train'

class Universe extends Component {
    constructor(props){
        super(props)
        this.state ={
            characters: []
        }
    }

    
    getCharacter = () =>{
        axios.get('/api/character')
        .then(res => {
            this.setState({characters: res.data})
        })
        .catch(err => console.log(err))
    }
    
    componentDidMount(){
        this.getCharacter
    }

    render(){
        const{friendFN} = props
        const mappedCharacter = this.state.characters.map((e, i)=> (
            <Train key={i} characters={e} friendFN = {friendFN} getCharacter = {this.getCharacter}/>
        ))
        return(
            <div>
                {mappedCharacter}
            </div>
        )
    }
}
export default Universe