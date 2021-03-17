import React from 'react'
import NewFriends from './NewFriends'

const Friends = props => {
    const mappedCharacter = props.friends.map((e, i) => (
        <NewFriends key={i} friend={e} catchPhraseFN={props.catchPhraseFN} windowFN={props.windowFN}/>
    ))

    return (
        <div className='App'>
            <h2 className="title">Rickity Rick Rick Rick</h2>
            <section className='character-card'>
                {mappedCharacter}
            </section>

        </div>
    )
}
export default Friends