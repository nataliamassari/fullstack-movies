import { Button, Stack, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { MovieContext } from "@/contexts/movieContext";
import { useContext } from "react";

export default function MoviesList() {
  const { state } = useContext(MovieContext);
  const filmsToShow = Array.isArray(state.movies?.description)
    ? state.movies.description
    : [];

  return (
    <Stack
      flexDirection={"column"}
      justifyContent={"center"}
      padding={5}
    >
      <Grid container spacing={2} justifyContent="center">
        {filmsToShow.length > 0 ? (
          filmsToShow.map((film, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
              <Card sx={{ backgroundColor: "#202020", width: 250, height: 550 }}>
                <CardMedia
                  component="img"
                  height="350px"
                  image={film["#IMG_POSTER"]}
                  alt={film["#TITLE"]}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "white", fontSize: 14 }}
                  >
                    {film["#YEAR"]}
                  </Typography>
                  <Typography variant="h5" component="div" color="white">
                    {film["#TITLE"]}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {film["#ACTORS"]}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>Nenhum filme encontrado.</Typography>
        )}
      </Grid>
    </Stack>
  );
}
