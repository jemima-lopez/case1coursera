import Nav from "./components/Nav";
import Promo from "./components/Promo";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List3 from "./components/List3";
import Footer from "./components/Footer";

function App() {
  const tittle = "Hello World";

  return (
    <div className="App">
      <Nav />
      <Promo />
      <h1 className="tittle">{tittle}</h1>
      <List1 color="pink"/>{/* how to work one prop */}
      <List1 color="red"/>{/* how to pass props to a component */}
      <List2 />
      <List3 />
      <Footer />
    </div>
  );
}

export default App;
