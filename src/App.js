import Nav from "./components/Nav";
import Promo from "./components/Promo";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List3 from "./components/List3";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import reactImg from "./reactImg.png";
import "./App.css";

function App() {
  const tittle = "Hello World";

  return (
    <div className="App">
      <Nav />
      <Promo />
      <h1 className="tittle">{tittle}</h1>
      <List1 color="I'm a props" />{/* Demonstrates passing a single prop */}
      <List1 color="I'm a props2" />{/* Demonstrates passing another prop */}
      <List2 tittle="My app.com" />{/* Example of passing a prop to List2 */}
      /* Passing multiple props */
        <Logo img={reactImg} height={300} description="REACT IMAGEN" />{/* Corrected prop usage for Logo */}
      <Footer />
    </div>
  );
}

export default App;
