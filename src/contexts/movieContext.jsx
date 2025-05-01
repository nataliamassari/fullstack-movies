import { createContext } from "react";

export const MovieContext = createContext({
  state: {
    search: "",
    movies: {},
  },
  dispatch: () => {}
});
