import Articles from "../Post";
import articlesList from "./articleList";

console.log(articlesList[0].description);

export const Indice = () => {
  return (
    <>
      {" "}
      <h1>Indice</h1>
      <ul>
        <li>primerTitulo</li>
        <li>segundoTitulo</li>
        <li>terceroTitulo</li>
      </ul>
      <Articles />
    </>
  );
};
