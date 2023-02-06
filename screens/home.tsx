import { FC } from "react";
import { Header, Layout,Balance, Operations } from "../components";

const HomeScreen: FC = () => (
  <Layout>
    <Header />
    <Balance />
    <Operations />
  </Layout>
);

export default HomeScreen;
