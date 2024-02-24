import { useState } from 'react';
import { Link } from 'react-router-dom';  
import '../assets/profile.css';  

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProfileUpdated, setIsProfileUpdated] = useState(false); // Track if profile is updated
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Simulate updating profile (replace with actual API call)
    // Here, we'll just set a flag to indicate that the profile is updated
    setIsProfileUpdated(true);
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
        <h2>Profile</h2>
        {isProfileUpdated && <p>Profile updated successfully!</p>}
        <form onSubmit={handleUpdateProfile}>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input 
              type="text" 
              id="fullName" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2024 Event Management Portal
      </footer>
    </div>
  );
};

export default Profile;
