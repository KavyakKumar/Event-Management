
import { Link } from 'react-router-dom';

import Footer from './Footer';
import '../assets/adminevents.css'; // Import CSS for styling
const handleLogout = () => {
  // Implement logout logic here
  alert('Logged out successfully!');
  // Redirect to homepage
  window.location.href = '/'; // Redirect to homepage
};
const AdminEvents = () => {
  // Dummy data for events
  const events = [
    { id: 1, name: 'Event 1', date: '2024-12-25', description: 'Description of Event 1' },
    { id: 2, name: 'Event 2', date: '2025-01-01', description: 'Description of Event 2' },
    { id: 3, name: 'Event 3', date: '2025-02-14', description: 'Description of Event 3' },
    // Add more events as needed
  ];

  return (
    <div>
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="logo">Admin Dashboard</div>
        <ul className="nav-links">
        <li><Link to="/AdminProfile">Profile</Link></li>
          <li><Link to="/AdminUsers">Users</Link></li>
          <li><Link to="/AdminEvents">Events</Link></li>
          <li><Link to="/AdminSettings">Settings</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li><Link to="/AdminDashboard">Dashboard</Link></li>
          <li><Link to="/AdminAnalytics">AdminAnalytics</Link></li>
          <li><Link to="/AdminReport">AdminReport</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Admin Events</h2>
        <div className="events-container">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Description: {event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminEvents;
