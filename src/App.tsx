import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import { GlobalStyles } from "./globalStyles/GlobalStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  );
}

export default App;
