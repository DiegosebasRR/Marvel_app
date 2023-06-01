import localforage from "localforage";

export async function createHeroe(response) {
  await fakeNetwork();
  let id = `${response[0].id}`;
  let heroe = { id, response };
  console.log(heroe);
  let heroes = await getHeroes();
  heroes.unshift(heroe);
  await set(heroes);

  return heroe;
}

export async function getHeroes(query) {
  await fakeNetwork(`getHeroes:${query}`);
  let heroes = await localforage.getItem("heroes");
  if (!heroes) heroes = [];
  if (query) {
    heroes = matchSorter(heroes, query, { keys: ["first", "last"] });
  }
  console.log(heroes);
  return heroes;
}

export async function getHeroe(id) {
  await fakeNetwork(`heroe:${id}`);
  let heroes = await localforage.getItem("heroes");
  let heroe = heroes.find((heroe) => heroe.id === id);
  return heroe ?? null;
}

export async function deleteHeroe(id) {
  let heroes = await localforage.getItem("heroes");
  let index = heroes.findIndex((heroe) => heroe.id === id);
  if (index > -1) {
    heroes.splice(index, 1);
    await set(heroes);
    console.log("elininado");
    return true;
  }
  console.log("No elininado");
  return false;
}

let fakeCache = {};

function set(heroes) {
  return localforage.setItem("heroes", heroes);
}

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
