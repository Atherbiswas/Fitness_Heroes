import './App.css';
import Answer from './Components/Answer/Answer';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className='container'>
      <Home></Home>
      <hr />
      <Answer></Answer>
      <Footer></Footer>
    </div>
  );
}

export default App;
