import Button from "./Button";
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
            width="50px"
            height="50px"
          />
          <h4>
            Name: {props.name} <br />
            Mail: {props.mail}
          </h4>
        </div>
        <div className="description">
          <p>{props.info}</p>
          <div className="buttons">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
