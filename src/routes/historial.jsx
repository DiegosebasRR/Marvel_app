import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getHeroes } from "../heroes";
export async function loader() {
  const heroes = await getHeroes();
  return { heroes };
}

const Historial = () => {
  const { heroes } = useLoaderData();
  return (
    <div className="container">
      <div className="left-section">
        <div className="search-box">
          <input type="text" placeholder="Buscar" />
        </div>
        <div className="hero-buttons">
          {heroes.length ? (
            <ul>
              {heroes.map((heroe) => (
                <li key={heroe.id}>
                  <Link to={`heroe/${heroe.id}`}>
                    <button className="hero-button">
                      {heroe.response[0].name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay heroes</p>
          )}
          ;
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Historial;
