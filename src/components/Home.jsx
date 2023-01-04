import "./Home.css";
import Guys from "./guys";
import content from "./content";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="Home">
        {content.map((c) => (
          <Guys
            key={c.id}
            name={c.name}
            mail={c.mail}
            image={c.image}
            info={c.info}
            git={c.git}
            you={c.you}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
