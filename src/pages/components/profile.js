export default function Profile({ name, imageUrl, altText, profession, awards, discoveries }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageUrl}
        alt={altText}
        width={70}
        height={70}
      />
      <ul>
        <li><b>Profession: </b>{profession}</li>
        <li><b>Awards: </b>{awards}</li>
        <li><b>Discovered: </b>{discoveries}</li>
      </ul>
    </section>
  );
}
