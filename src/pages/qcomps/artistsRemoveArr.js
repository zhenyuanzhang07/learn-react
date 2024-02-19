import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(initialArtists);

  const deleteArtist = (id) => {
    setArtists(artists.filter(artist => artist.id !== id));
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => deleteArtist(artist.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
