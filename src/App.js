import Counter from "./components/Counter";
import Hero from "./components/Hero";
import Logged from "./components/Logged";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <Counter />
      <Logged />
    </div>
  );
}

export default App;
