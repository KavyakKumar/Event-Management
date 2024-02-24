import '../assets/styles.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="./assets/logo.png" alt="Logo" /> */}
        <h2>Saphire Events</h2>
      </div>
      <ul className="nav-links">
      {/* <li><Link to="/HomePage">HomePage</Link></li> */}
      <li><Link to="/services">Services</Link></li>
        <li><a href="Events">Events</a></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Register">SignUp</Link></li>
        <li><Link to="/AdminLogin">Admin</Link></li>
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


