import logo from './logo.svg';
import './App.css';
import Animals from './animals';
import image from "./img/pic.jpg";

function App() {
  return (
    <div className="app-content">
    <Animals name="Dog" color="white" />
    <img src={image} />
    </div>
  );
}

export default App;
