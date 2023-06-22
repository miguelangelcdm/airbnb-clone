export default function card(props) {
  return (
    <div className="card">
      <img src={`/images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img
          src="/images/[CITYPNG.COM]HD Outline Red Star Transparent PNG - 8192x7790.png"
          width={"25px"}
        />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From {props.price}</span> / Person
      </p>
    </div>
  );
}
