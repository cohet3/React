import { useFetch } from "../../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const [] = useFetch("https://pokeapi.co/api/v2/pokemon/1");
  return (
    <>
      <h1>BreackingBad Quotes</h1>
      <hr />
    </>
  );
};
