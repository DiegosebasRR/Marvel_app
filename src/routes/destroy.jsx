import { redirect } from "react-router-dom";
import { deleteHeroe } from "../heroes";

export async function action({ params }) {
  //throw new Error("oh dang!");
  alert("llegue");
  await deleteHeroe(params.heroeId);
  return redirect("/");
}
