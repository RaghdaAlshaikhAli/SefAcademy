import { useEffect, useState } from "react";
import Routerc from "./router/router";
import Splash from "./pages/splash/splash";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return <div className="App">{showSplash ? <Splash /> : <Routerc />}
  <ToastContainer/>
  </div>;
}

export default App;
