import React from 'react'

const SongsPage = () => {
  const songs = [
    { id: 1, title: 'Пісня 1' },
    { id: 2, title: 'Пісня 2' },
    { id: 3, title: 'Пісня 3' },
  ]

  return (
    <div>
      <h1>Список пісень</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default SongsPage