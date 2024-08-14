// import simpleRestProvider from "ra-data-simple-rest";
import fakeDataProvider from 'ra-data-fakerest';
import { Campaigns } from "./datastore/Campaign";

/* using REST api */
// export const dataProvider = simpleRestProvider(
//   import.meta.env.VITE_SIMPLE_REST_URL
// );

/* using JSON */
export const dataProvider = fakeDataProvider({
  campaigns: Campaigns
}, true);