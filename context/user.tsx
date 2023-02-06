import { createContext, FC, PropsWithChildren, useState } from "react";

interface IOperation {
  type: string;
  amount: string;
}

export interface IUser {
  balance: 0;
  uid: string;
  email: string;
  costs: ReadonlyArray<IOperation>;
  incomes: ReadonlyArray<IOperation>;
}

export interface IUserContext {
  isLogged: boolean;
  user: IUser | null;
  updateUser: (user: IUser | null) => void;
}

const UserContext = createContext({} as IUserContext);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = UserContext;
  const [user, setUser] = useState<IUser | null>(null);

  const updateUser = setUser

  const value = {
    user,
    updateUser,
    isLogged: !!user,
  } as IUserContext;

  return <Provider value={value}>{children}</Provider>;
};

export default UserContext;
