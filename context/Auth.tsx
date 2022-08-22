import { User } from "firebase/auth";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../vendor/firebase";
import { getAuth } from "firebase/auth";

const AuthContext = createContext<[ReturnType<typeof getAuth>, User | null]>([
  auth,
  null,
]);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={[auth, user]}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
