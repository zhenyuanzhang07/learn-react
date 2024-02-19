import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  // Create deep copies of initialList for myList and yourList
  const [myList, setMyList] = useState(initialList.map(artwork => ({ ...artwork })));
  const [yourList, setYourList] = useState(initialList.map(artwork => ({ ...artwork })));

  function handleToggleMyList(artworkId, nextSeen) {
    const tmpList = myList.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen }; // Return a new object
      }
      return artwork;
    });
    setMyList(tmpList);
  }

  function handleToggleYourList(artworkId, nextSeen) {
    const tmpList = yourList.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen }; // Return a new object
      }
      return artwork;
    });
    setYourList(tmpList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => onToggle(artwork.id, e.target.checked)}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
