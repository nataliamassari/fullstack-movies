"use client"
import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "@/components/searchBar";
import { useState } from "react";
import { Stack, Paper } from "@mui/material";
import { MovieContext } from "@/contexts/movieContext"
import MoviesList from "@/components/moviesList";

export default function Home() {
  const [movie, setMovie] = useState("")
  return (
    <MovieContext.Provider value={{setMovie, movie}}>
      <SearchBar></SearchBar>
      <MoviesList></MoviesList>
    </MovieContext.Provider>
  );
}