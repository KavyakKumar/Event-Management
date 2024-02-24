import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useState } from 'react';

import '../assets/scheduleappointment.css'; // Import CSS for styling

const ScheduleAppointment = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement appointment scheduling logic here
    alert(`Appointment scheduled for ${appointmentDate} at ${appointmentTime}`);
    // Reset form fields
    setName('');
    setEmail('');
    setAppointmentDate('');
    setAppointmentTime('');
  };

  return (
    <div>
      {/* Top Navbar */}
      <nav className="top-navbar">
        <div className="logo">Saphire Events</div>
        <ul className="nav-links">
          <li><Link to="/DashBoard">DashBoard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/eventform">Event Form</Link></li>
          <li><Link to="/ScheduleAppointment">ScheduleAppointment</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      {/* Sidebar */}
      <div className="sidebar">
      <ul>
      <li><Link to="/DashBoard">DashBoard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/eventform">Event Form</Link></li>
          <li><Link to="/ScheduleAppointment">ScheduleAppointment</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Schedule Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="appointment-date">Date:</label>
            <input type="date" id="appointment-date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="appointment-time">Time:</label>
            <input type="time" id="appointment-time" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required />
          </div>
          <button type="submit">Schedule</button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ScheduleAppointment;
