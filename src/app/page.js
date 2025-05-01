"use client"
import { useReducer } from "react";
import { MovieContext } from "@/contexts/movieContext"
import { initialState, movieReducer } from "./movieReducer";
import MainPage from "@/components/mainPage";

export default function Home() {
  const [state, dispatch] = useReducer(movieReducer, initialState)
  return (
    <MovieContext.Provider value={{ state, dispatch}}>
      <MainPage/>
    </MovieContext.Provider>
  );
}