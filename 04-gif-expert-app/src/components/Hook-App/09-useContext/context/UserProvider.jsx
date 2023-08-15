import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Danny Rodas",
  email: "tauro.total90@gmail.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "mundo", udrt: user }}>
      {children}
    </UserContext.Provider>
  );
};
