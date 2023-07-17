import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetFor } =
    useForm({
      username: "",
      email: "",
      password: "",
    });
  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con custon hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="danny@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetFor} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
