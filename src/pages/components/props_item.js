function Item({ name, isPacked }) {
  // Use a ternary operator to conditionally render packed items with <del> tag
  return (
    <li className="item">{isPacked ? <del>{name}</del> : name}</li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={false}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={true}
          name="Socks"
        />
      </ul>
    </section>
  );
}
