import { useContext, useState, useEffect } from "react";
import { ConcertsContext } from "../App";

export default function SingleConcert() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const idParam = params.get("id");
  const concerts = useContext(ConcertsContext);

  const [name, setName] = useState("?");
  useEffect(() => {
    if (concerts) {
      concerts.forEach((object) => {
        if (object.id == idParam) {
          setName(object.acf.nom_artiste);
        }
      });
    }
  }, [concerts]);

  return (
    <>
      <h1>Concert de {name}</h1>
    </>
  );
}
