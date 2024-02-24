// import { Link } from 'react-router-dom';
// import '../assets/admindashboard.css';
// const handleLogout = () => {
//     // Implement logout logic here
//     alert('Logged out successfully!');
//     // Redirect to homepage
//     window.location.href = '/'; // Redirect to homepage
//   };

// const AdminDashboard = () => {
//   return (
//     <div>
//       {/* Top navigation bar */}
//       <div className="top-navbar">
//         <div className="logo">Saphire Events</div>
//         <ul className="nav-links">
//           <li><Link to="/AdminProfile">Profile</Link></li>
//           <li><Link to="/AdminUsers">Users</Link></li>
//           <li><Link to="/AdminEvents">Events</Link></li>
//           <li><Link to="/AdminSettings">Settings</Link></li>
//           <li><button onClick={handleLogout}>Logout</button></li>
//         </ul>
//       </div>

//       {/* Side navigation bar */}
//       <div className="side-navbar">
//         <ul>
//           <li><Link to="/AdminDashboard">Dashboard</Link></li>
//           <li><Link to="/AdminAnalytics">Analytics</Link></li>
//           <li><Link to="/AdminReports">Reports</Link></li>
//         </ul>
//       </div>

//       {/* Main content area */}
//       <div className="main-content">
//         <h2>Welcome to the Admin Dashboard!</h2>
//         {/* Add your admin dashboard content here */}
//       </div>

//       {/* Footer */}
//       <div className="footer">
//         &copy; 2024 Admin Dashboard
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import { Link } from 'react-router-dom';
import '../assets/admindashboard.css';

const handleLogout = () => {
  // Implement logout logic here
  alert('Logged out successfully!');
  // Redirect to homepage
  window.location.href = '/'; // Redirect to homepage
};

const AdminDashboard = () => {
  return (
    <div>
      {/* Top navigation bar */}
      <div className="top-navbar">
        <div className="logo">Saphire Events</div>
        <ul className="nav-links">
          <li><Link to="/AdminProfile">Profile</Link></li>
          <li><Link to="/AdminUsers">Users</Link></li>
          <li><Link to="/AdminEvents">Events</Link></li>
          <li><Link to="/AdminSettings">Settings</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>

      {/* Side navigation bar */}
      <div className="side-navbar">
        <ul>
          <li><Link to="/AdminDashboard">Dashboard</Link></li>
          <li><Link to="/AdminAnalytics">AdminAnalytics</Link></li>
          <li><Link to="/AdminReport">AdminReport</Link></li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="main-content">
        <h2>Welcome to the Admin Dashboard!</h2>
        <div className="card">
          <h3>Manage Users</h3>
          <p>View, add, edit, or delete users.</p>
        </div>
        <div className="card">
          <h3>Manage Events</h3>
          <p>View, add, edit, or delete events.</p>
        </div>
        <div className="card">
          <h3>Analytics</h3>
          <p>View detailed analytics and insights.</p>
        </div>
        <div className="card">
          <h3>Reports</h3>
          <p>Generate and view reports.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        &copy; 2024 Admin Dashboard
      </div>
    </div>
  );
};

export default AdminDashboard;
