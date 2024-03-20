import { ReactNode, useState } from "react";
import { AuthContextContextProvider } from "./auth-context";

type Props = {
  children?: ReactNode;
};
const initialValue = {
  authenticated: false,
  setAuthenticated: () => {},
};
const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(
    initialValue.authenticated
  );
  return (
    <AuthContextContextProvider
      value={{ authenticated, setAuthenticated }}
    ></AuthContextContextProvider>
  );
};

export default AuthProvider;
