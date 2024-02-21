import '../assets/styles.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="./assets/logo.png" alt="Logo" /> */}
        <span>Saphire Events</span>
      </div>
      <ul className="nav-links">
        <li><a href="Home">Home</a></li>
        <li><a href="Services">Services</a></li>
        <li><a href="Events">Events</a></li>
        <li><Link to="/Login">Login</Link></li>
        {/* <li><a href='/Login'  >Login</a> </li> */}

      </ul>
    </nav>

    
  );
};
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route path='/Login' } />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

export default Navbar;


