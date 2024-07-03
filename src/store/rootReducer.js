import { baseApi } from "./api/apiSlice";
import layout from "./layout";

const rootReducer = {
  layout,
  [baseApi.reducerPath]: baseApi.reducer,
};
export default rootReducer;
