import Profile from './profile.js'

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="https://i.imgur.com/szV5sdGs.jpg"
        altText="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discoveries="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="https://i.imgur.com/YfeOqp2s.jpg"
        altText="Katsuko Saruhashi"
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discoveries="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
