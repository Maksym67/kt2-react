import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/sections/home-section';
import Projects from './components/sections/projects-section';
import Process from './components/sections/process-section';
import Services from './components/sections/services-section';
import Pricing from './components/sections/pricing-section';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <Projects/>
        <Process/>
        <Services/>
        <Pricing/>
        <Footer/>
    </div>
  );
}

export default App;