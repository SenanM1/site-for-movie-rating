import "./Home.css";
import Guys from "./guys";
import Button from "./Button";
import content from "./content";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
    <div className="Home">
      {content.map(
        (content) => (
          (<Button git={content.git} you={content.you} />),
          (
            <Guys
              key={content.id}
              name={content.name}
              mail={content.mail}
              image={content.image}
              info={content.info}
            />
          )
        )
      )}

      </div>
      <Footer />
    </div>
  );
}
