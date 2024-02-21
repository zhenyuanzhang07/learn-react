import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(initialArtists);

  const deleteArtist = (artistId) => {
    // Create a new array without the artist to delete
    const updatedArtists = artists.filter(artist => artist.id !== artistId);
    // Update the state with the new array
    setArtists(updatedArtists);
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
