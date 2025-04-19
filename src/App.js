import Nav from "./components/Nav";
import Promo from "./components/Promo";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List3 from "./components/List3";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import reactimg from "./reactimg.png";
import "./App.css";

function App() {
  const tittle = "Hello World";

  return (
    <div className="App">
      <Nav />
      <Promo />
      <h1 className="tittle">{tittle}</h1>
      <List1 color="I'm a props" />
      <List1 color="I'm a props 2" />   
      <List2 tittle="My app.com" />     
      <List3 tittle="About us" color="dark" />      
      <Logo src={reactimg} height={300} description="REACT IMAGEN" />  
      <Footer />
    </div>
  );
}

export default App;
