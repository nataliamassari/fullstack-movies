import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack } from "@mui/material";
import { MovieContext } from "@/contexts/movieContext";
import { useContext, useState } from "react";

export default function SearchBar() {
  const { state, dispatch } = useContext(MovieContext);

  const handleSearch = async () => {
    if (!state.search) {
      return;
    }

    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(
      state.search
    )}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        dispatch({ type: "SET_MOVIES", payload: data });
      } else {
        dispatch([]);
      }
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  return (
    <Stack flexDirection={"row"} pr={5} pl={5} pt={5}>
      <TextField
        id="standard-basic"
        label="Pesquisar filme"
        fullWidth
        color="secondary"
        variant="filled"
        focused
        value={state.search}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
        sx={{ input: { color: "white" } }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ color: "white", padding: 5 }}
              >
                <SearchIcon fontSize="sm" />
              </InputAdornment>
            ),
          },
        }}
      />
      <Button color="secondary" onClick={handleSearch}>
        Buscar
      </Button>
    </Stack>
  );
}
