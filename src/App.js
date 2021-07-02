import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Service from './components/Service/Service';
import Megatab from './components/Megatab/Megatab';
import Delivery from './components/Deliverytype/Delivery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Notify from './components/Notification/Notify';
import './App.css';

function App() {
  return (
    <div className="App">
     <Notify />
     <Navbar />
     <Banner />
     <About />
     <Service />
     <Megatab />
     <Delivery />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
