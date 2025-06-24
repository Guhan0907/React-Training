import { useState } from "react";
import Login from "./components/Login";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import MuiComponents from "./pages/MuiComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      {/* <Authentication /> */}
      {/* <Home /> */}
      <MuiComponents />
    </>
  );
}

export default App;
