import About from "./components/About";
import All from "./components/All";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import { Support } from "./components/Support";


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Support/>
      <All/>
      <Pricing/>
      <Footer/>
    </>
  );
}

export default App;
