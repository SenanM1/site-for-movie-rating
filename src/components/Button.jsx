import "./Button.css";

export default function Button(props) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      />
      <div className="y">
        <a type="button" className="gitHub" href={props.git}>
          Github<i class="fa-brands fa-square-github"></i>
        </a>
        <a type="button" className="youTube" href={props.you}>
          Youtube<i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </>
  );
}
