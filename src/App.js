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
    this.makeFriend = this.makeFriend.bind(this)
  }
  componentDidMount(){
    axios.get('/api/friend')
    .then(res=> {
      this.setState({friends: res.data})
    })
  }


  makeFriend(character){
    axios.post('/api/friend', {character: character})
    .then(res=> {
      this.setState({friends: res.data})
    })
    .catch(err => console.log(err))
  }
  editCatchPhrase = (id, newCatchPhrase) => {
    let body = {catchPhrase: newCatchPhrase}
    axios.put(`/api/friend/${id}`, body)
    .then(res=> {
      this.setState({friends: res.data})
    })
    .catch(err => console.log(err))
  }
  throwOutWindow = (id) => {
    axios.delete(`/api/friend/${id}`)
    .then(res=> {
      this.setState({ friends: res.data})
    })
    .catch(err => console.log(err))
  }


  render(){
    return(
      <div>
        <Header />
        <Universe friendFN={this.makeFriend}/>
        <Friends friends={this.state.friends} catchPhraseFN={this.editCatchPhrase} windowFN={this.throwOutWindow}/>


      </div>
    )
  }
}

export default App