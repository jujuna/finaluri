import './App.css';
import { Link,Switch,Route } from 'react-router-dom';
import Ajax1 from './Components/class1'
import Form from './Components/form'
import About from './Components/about'

const Navbar=()=>{
  return  <div className="navbar">
    
    <ul>
      <Link to='/'>home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/ajax'>Ajax</Link>
      <Link to='/about'>About me</Link>
    </ul>

    
  </div>
  
}

const MapStyle={
  position:'relative',
  top:'250px'
}
const ContactPage=()=>{
  return <div style={MapStyle}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.646161860328!2d44.736478315285545!3d41.70657368411002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447344e8047ced%3A0xb53d8ecd4495903f!2sBusiness%20and%20Technology%20University!5e0!3m2!1sen!2sge!4v1608139925525!5m2!1sen!2sge" width="600" height="450" ></iframe>
  </div>
}


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Switch>
       <Route path="/"  exact component={Form}/>
       <Route path="/contact" exact component={ContactPage}/>
       <Route path="/ajax" exact component={Ajax1}/>
       <Route path="/about" exact component={About}/>
      </Switch>
      
    </div>
  );
}

export default App;
