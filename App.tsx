import { FC } from "react";
import { UserProvider } from "./context/user";
import Navigation from "./navigation";

const App: FC = () => (
  <UserProvider>
    <Navigation />
  </UserProvider>
);

export default App;
