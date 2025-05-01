
import {Stack} from "@mui/material";
import SearchBar from "./searchBar";
import MoviesList from "./moviesList";
import styles from '../app/styles.module.css';

export default function MainPage() {
    return (
      <div className={styles.container}>
      <SearchBar></SearchBar>
      <MoviesList></MoviesList>
      </div>
  );
}
