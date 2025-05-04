import Nav from "./components/Nav";
import Promo from "./components/Promo";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List3 from "./components/List3";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import imgr from "./imgs/imgr.png";
import img2 from "./imgs/img2.jpg";
import img3 from "./imgs/img3.jpg";
import img4 from "./imgs/img4.jpg";
import img5 from "./imgs/img5.jpg";
import img6 from "./imgs/img6.jpg";
import img7 from "./imgs/img7.jpg";
import img8 from "./imgs/img8.jpg";
import "./App.css";
import Btn from "./components/Btn";

function App() {
  const tittle = "Hello World";

 

  return (
    <div className="App">
      <Nav />
      <Promo />
      <h1 className="tittle">{tittle}</h1>
      <List1 color="I'm a props" />
      <List1 color="I'm a props 2" />
      <List2 tittle="My first app.com" />
      <List3 tittle="About us" color="dark" />
      <Logo src={imgr} height={200} width={400} description="REACT IMAGEN" />
      <Logo src={img2} height={200} width={400} description="REACT IMAGEN" />
      <Logo src={img3} height={200} width={400} description="REACT IMAGEN" />
      <Logo src={img4} height={200} width={400} description="REACT IMAGEN" />
      <Logo src={img5} height={200} width={400} description="REACT IMAGEN" />
      <Logo src={img6} height={200} width={400} description="REACT IMAGEN" />
      <Logo src={img7} height={200} width={400} description="REACT IMAGEN" />
      <Logo src={img8} height={200} width={400} description="REACT IMAGEN" />
      <Btn />
      <Footer />
    </div>
  );
}

export default App;
