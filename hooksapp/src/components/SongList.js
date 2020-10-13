import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewSongForm from './NewSongForm'

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 },
    ])
    const [age, setAge] = useState(20)

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuidv4() }])
    }

    useEffect(() => {
        console.log('hello')

    }, [songs])

    const addAge = () => {
        setAge(age + 1)
    }

    return (
        <div className='song-list'>
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id} >{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={addAge} >Add 1 to age: {age}</button>
        </div>
    )
}

export default SongList
