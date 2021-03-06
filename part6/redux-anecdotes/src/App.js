import React, { useEffect } from "react";
import AnecdotesForm from "./components/AnecdoteForm";
import AnecdotesList from "./components/AnecdotesList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { initAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdotesList />
      <AnecdotesForm />
    </div>
  );
};

export default App;
