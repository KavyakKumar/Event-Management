import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/eventform.css';  


const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit event form
    alert('Event form submitted successfully!');
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

      {/* Side Navbar */}
      <div className="side-navbar">
      <ul>
      <li><Link to="/DashBoard">DashBoard</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/eventform">Event Form</Link></li>
          <li><Link to="/ScheduleAppointment">ScheduleAppointment</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Event Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="eventName">Event Name:</label>
            <input 
              type="text" 
              id="eventName" 
              value={eventName} 
              onChange={(e) => setEventName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor="eventDate">Event Date:</label>
            <input 
              type="date" 
              id="eventDate" 
              value={eventDate} 
              onChange={(e) => setEventDate(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor="eventLocation">Event Location:</label>
            <input 
              type="text" 
              id="eventLocation" 
              value={eventLocation} 
              onChange={(e) => setEventLocation(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor="eventDescription">Event Description:</label>
            <textarea 
              id="eventDescription" 
              value={eventDescription} 
              onChange={(e) => setEventDescription(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Submit Event Form</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2024 Event Management Portal
      </footer>
    </div>
  );
};

export default EventForm;
