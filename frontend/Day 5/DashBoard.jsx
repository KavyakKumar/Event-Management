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
          <li><Link to="/ScheduleAppointment">ScheduleAppointment</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      {/* Side Navbar */}
      <div className="side-navbar">
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/eventform">EventForm</Link></li>
          <li><Link to="/ScheduleAppointment">ScheduleAppointment</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Welcome to Your Dashboard</h2>
        <div className="card">
          <h3>Recent Events</h3>
          <p>No recent events</p>
        </div>
        <div className="card">
          <h3>Upcoming Appointments</h3>
          <p>No upcoming appointments</p>
        </div>
        <div className="card">
          <h3>Notifications</h3>
          <p>No notifications</p>
        </div>
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
