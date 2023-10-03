import { Form } from "react-router-dom";
import useHero from "../hooks/useHero";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Heroe = () => {
  let { heroeId } = useParams();
  const heroes = useHero((state) => state.heroes);
  const updateHeroes = useHero((state) => state.updateHeroes);
  const heroe = heroes.find((heroe) => heroe.id === heroeId);
  const navigate = useNavigate();
  if (!heroe) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  const deletee = () => {
    updateHeroes(heroes.filter((hero) => hero.id !== heroeId));
    navigate(`/`);
  };
  return (
    <div className="right-section">
      <Form
        method="post"
        action="destroy"
        onSubmit={(event) => {
          if (!confirm("Please confirm you want to delete this record.")) {
            event.preventDefault();
          }
        }}
      >
        <button className="btnEliminar" onClick={deletee} type="submit">
          Delete
        </button>
      </Form>
      <div className="hero-details">
        <img src={heroe.response[0].thumbnail} alt={heroe.response[0].name} />
        <h2>
          {heroe.response[0].name}
          <span className="favorite-star"> &#9733;</span>
        </h2>
        <p>{heroe.response[0].description}</p>
      </div>
    </div>
  );
};

export default Heroe;
