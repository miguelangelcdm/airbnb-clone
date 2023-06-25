export default function card(props) {
  let badgeText;
  let additionalStyles = {};
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
    additionalStyles.backgroundColor = "red";
    additionalStyles.color = "white";
  } else if (props.online) {
    badgeText = "ONLINE";
    additionalStyles.backgroundColor = "green";
    additionalStyles.color = "white";
  }
  return (
    <div className="card">
      {badgeText && <div style={additionalStyles} className="card--badge">{badgeText}</div>}
      <img src={`/images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img
          src="/images/[CITYPNG.COM]HD Outline Red Star Transparent PNG - 8192x7790.png"
          width={"20px"}
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
