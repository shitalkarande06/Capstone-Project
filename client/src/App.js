import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import LandPage from './Components/LandPage';
import HomePage from './Screens/HomePage';
import Signuppage from './Screens/Signuppage';
import Loginpage from './Screens/Loginpage';
import CartPage from './Screens/CartPage';
import OrdersScreen from './Screens/OrdersScreen';
import Client from './Components/AuthPages/Client';
// import Admin from './Components/AuthPages/Admin';
// import Client from './Components/AuthPages/Client';

function App() {

  return (
   
    <div>
      <NavBar/>
      <Routes>
       {/* <Route path='admin-registeration' element={<Admin/>} /> */}
       {/* <Route path='/user-registeration' element={<Client/>} /> */}
       <Route path="/" element={<LandPage/>}/>
       <Route path="/Homepage" element={<HomePage/>}/>
       <Route path="/fooditems" element={<Client/>}/>
       <Route path="/Signup" element={<Signuppage/>} />
       <Route path="/Login" element={<Loginpage/>} />
       <Route path='/cart' element={<CartPage/>}/>

       <Route path='/orders' element={<OrdersScreen/>}/>


      </Routes>
      
      
    </div>
    
  );
}

export default App;
