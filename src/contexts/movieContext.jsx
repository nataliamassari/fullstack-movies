import { createContext } from 'react';

export const MovieContext = createContext({
  movie: {
    description: []
  },
  setMovie: (movie) => [],
});
