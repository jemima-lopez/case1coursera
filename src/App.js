import Nav from "./components/Nav";
import Promo from "./components/Promo";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List3 from "./components/List3";
import Footer from "./components/Footer";
import reactImg from "./reactImg.png";


function Logo(props) {
  const logos = <img src={reactImg} height={300}/>;
  return logos;
}

function App() {
  const tittle = "Hello World";

  return (
    <div className="App">
      <Nav />
      <Promo />
      <h1 className="tittle">{tittle}</h1>
      <List1 color="I'm a props"/>{/* how to work one prop */}
      <List1 color="I'm a props2"/>{/* how to pass props to a component */}
      <List2 />
      <List3 />
      <Logo/>
      <Footer />
    </div>
  );
}

export default App;
