const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      {/* Dynamically insert the person's name into the heading */}
      <h1>{person.name}'s Todos</h1>
      {/* Construct the src using template literals and set the alt dynamically */}
      <img className="avatar"
      src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
      alt={`${person.name}`}
      />
    </div>
  );
}
