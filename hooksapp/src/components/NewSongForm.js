import React, { useState } from 'react'

const NewSongForm = ({ addSong }) => {
    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        addSong(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="name">Song Title: </label>
            <input
                type="text"
                value={input}
                required
                onChange={(e) => setInput(e.target.value)} />
            <input type="submit" value="Add Song" />
        </form>
    )
}

export default NewSongForm
