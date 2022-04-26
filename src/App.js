import logo from './logo.svg';
import './App.css';
import img from './IMG_9899.jpg';

function App() {
  return (
    <div className="App">
     <h1>My First React based Website</h1>
     <h2> Mohit Garg</h2>
     <img src={img} alt="profileimage" />
    </div>
  );
}

export default App;
