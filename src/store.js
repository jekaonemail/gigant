import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./redux/menuSlice";

export default configureStore({
  reducer: {
    menuWindow: menuSlice,
  },
});
