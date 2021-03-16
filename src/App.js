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
        <header>
          <Header />
          <Universe friendFN={this.makeFriend}/>
        </header>
        <body className='associates'>
          <section className='friends'>
            <Friends friends={this.state.friends} catchPhraseFN={this.editCatchPhrase} windowFN={this.throwOutWindow}/>
          </section>
          <section className='enemies'>
            <h2>Why don't you like Rick?</h2>
          </section>

        </body>


      </div>
    )
  }
}

export default App