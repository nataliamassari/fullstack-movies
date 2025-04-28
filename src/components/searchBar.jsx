import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack } from "@mui/material";
import { MovieContext } from "@/contexts/movieContext";
import { useContext, useState } from "react";

export default function SearchBar() {
  const { setMovie } = useContext(MovieContext);
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {

    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(searchText)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setMovie(data);
      } else {
        setMovie([]);
      }
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  return (
    <Stack flexDirection={"row"}>
      <TextField
        id="standard-basic"
        label="Pesquisar filme"
        variant="standard"
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      <Button variant="outlined" onClick={handleSearch}>
        Buscar
      </Button>
    </Stack>
  );
}
