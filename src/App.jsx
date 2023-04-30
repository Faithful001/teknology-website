import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Portfolio from './Portfolio';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </div>

    </div>
  )
}

export default App
