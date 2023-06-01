import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getHeroe } from "../heroes";
import { deleteHeroe } from "../heroes";

export async function loader({ params }) {
  const heroe = await getHeroe(params.heroeId);
  if (!heroe) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { heroe };
}

const Heroe = () => {
  const { heroe } = useLoaderData();
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
        <button className="btnEliminar" type="submit">
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
