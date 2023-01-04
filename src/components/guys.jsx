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
            width="200" 
            height="200"
          />
        </div>
        <h4 className="about">
          Name: {props.name} <br />
          Mail: {props.mail}
        </h4>
        <div className="p">
          <h3>Biography</h3>
          <p className="lorem">{props.info}</p>
        </div>
        <Button />
      </div>
    </div>
  );
}
