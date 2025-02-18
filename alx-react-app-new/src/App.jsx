import { useState, createContext } from "react";

import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

export const data = createContext();

function App() {
  return (
    <>
      <Counter />
      <WelcomeMessage />

      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
  );
}

export default App;
