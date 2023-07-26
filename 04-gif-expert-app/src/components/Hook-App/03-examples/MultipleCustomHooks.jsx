import { useFetch } from "../../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  const { id, name } = !!data && data[0];

  console.log(data);
  console.log(id, name);
  // console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>Pokemon GO GO GO GO Go Go Go </h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1"></p>

          <footer className="blockquote-footer"></footer>
        </blockquote>
      )}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next quote
      </button>
    </>
  );
};
