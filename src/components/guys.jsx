import "./guys.css";

export default function Guys(props) {
  return (
    <div className="container">
      <div key={props.id} className="card">
        <div className="profile">
          <img
            src={props.image}
            alt="cardImg"
            className="cardImage"
            width="200"
            height="200"
          />
        </div>
        <div className="about">
          <p>Name: {props.name}</p>
          <p>Mail: {props.mail}</p>
        </div>
        <div className="p">
          <h3 className="bio">Biography</h3>
          <p className="lorem">{props.info}</p>
        </div>
        <div className="y">
          <a type="button" className="gitHub" href={props.git}>
            Github<i class="fa-brands fa-square-github"></i>
          </a>
          <a type="button" className="youTube" href={props.you}>
            Youtube<i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
