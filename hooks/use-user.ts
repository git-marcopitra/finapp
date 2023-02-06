import { useContext } from "react";

import UserContext, { IUserContext } from "../context/user";

export const useUser = (): IUserContext => useContext(UserContext);
