import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import { GlobalStyles } from "./globalStyles/GlobalStyles";
import SearchBar from "./components/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Header />
      <SearchBar />
    </>
  );
}

export default App;
