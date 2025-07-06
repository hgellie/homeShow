import './App.css';
import Header from './components/Header'; // Import our new component
import Slideshow from './components/Slideshow'; // Import the Slideshow component

function App() {
  return (
    <div className="App">
      <Header /> {/* Use our new component here */}
      <Slideshow />
    </div>
  );
}

export default App;