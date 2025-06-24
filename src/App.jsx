import { useState } from "react";
import Login from "./components/Login";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import MuiComponents from "./pages/MuiComponents";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
// impo

function App() {
  const [count, setCount] = useState(0);

  const themeObj = createTheme({
    palette : {
      primary : {
        main : "#720bb3"
      },
      secondary : {
        main : "#a8a432"
      }
    }
  })

  return (
    <>
      {/* <Login /> */}
      {/* <Authentication /> */}
      {/* <Home /> */}
      <ThemeProvider theme={themeObj}>
          <MuiComponents />
      </ThemeProvider>
      
    </>
  );
}

export default App;
