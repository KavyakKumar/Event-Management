import { Link } from 'react-router-dom';
import '../assets/dashboard.css';

const Dashboard = () => {
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="logo">Saphire Events</div>
        <ul className="nav-links">
          
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/eventform">Event Form</Link></li>
          <li><Link to="/schedule-appointment">Schedule Appointment</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      {/* Side Navbar */}
      <div className="side-navbar">
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/eventform">EventForm</Link></li>
          <li><Link to="/schedule-appointment">Schedule Appointment</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Content goes here */}
      </div>

      {/* Footer */}
      <footer className="footer">
        {/* Footer content goes here */}
        © 2024 Event Management Portal
      </footer>
    </div>
  );
};

export default Dashboard;
