import { Global } from "@emotion/react";
import tw, { GlobalStyles } from "twin.macro";
import Home from "./Home";

const App = () => {
  return (
   <>
      <GlobalStyles />
      <Global styles={{ body: tw`antialiased font-sans` }} />
     <Home />
    </>
  );
};

export default App;
