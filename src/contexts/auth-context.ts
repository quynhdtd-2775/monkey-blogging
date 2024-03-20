import { createContext } from "react";

type IAuthContext = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
};

const initialValue = {
  authenticated: false,
  setAuthenticated: () => {},
};

export const AuthContext = createContext<IAuthContext>(initialValue);
export const AuthContextContextProvider = AuthContext.Provider;
