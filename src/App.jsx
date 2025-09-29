import Headers from "./components/layouts/header";
import { Outlet } from "react-router";


function App() { 

  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
}

export default App
