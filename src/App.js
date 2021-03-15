import React, {Component} from 'react'
import axios from 'axios'

import Header from './Components/Header'
import Universe from './Components/Universe'
import Friends from './Components/Friends'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: []
    }
  }


  makeFriend(character){
    axios.post('/api/character', {character: character})
    .then(res=> {
      this.setState({friends: res.data})
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <Header/>
        <Universe friendFN={this.makeFriend}/>
        <Friends/>


      </div>
    )
  }
}

export default App