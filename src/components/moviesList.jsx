import Image from "next/image";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Button, Stack} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MovieContext } from "@/contexts/movieContext";
import { useContext } from "react";
import { Key } from "@mui/icons-material";

export default function MoviesList() {
    const { movie } = useContext(MovieContext)
    const filmsToShow = movie ? movie.description.slice(0, 5) : [];

    return (
      <Stack flexDirection={'row'} flexWrap="wrap" gap={2}>
          {filmsToShow.length > 0 ? filmsToShow.map((film, index) => (
              <Card sx={{ minWidth: 275 }} key={index}>
                  <CardContent>
                      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                          {film['#YEAR']}
                      </Typography>
                      <Typography variant="h5" component="div">
                          {film['#TITLE']}
                      </Typography>
                      <Typography variant="body2">
                          {film['#ACTORS']}
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small">AVALIAR</Button>
                  </CardActions>
              </Card>
          )) : (
              <Typography>Nenhum filme encontrado.</Typography>
          )}
      </Stack>
  );
}
