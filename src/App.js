import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { data } from "./helpers/data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div>
        <div className="cards-container">
          {data.map((place, i) => (
            <Card place={place} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
