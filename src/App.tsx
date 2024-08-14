import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import Dashboard from "./components/Dashboard/Dashboard";

export const App = () => (
  <Admin
    title=""
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    defaultTheme="light"
  >
    <Resource
      name="campaigns"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
