import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../assets/adminreport.css'; // Import CSS for styling

const AdminReport = () => {
  // Dummy data for reports
  const monthlyReports = [
    { month: 'January', sales: 1000 },
    { month: 'February', sales: 1200 },
    { month: 'March', sales: 1500 },
    // Add more monthly reports as needed
  ];
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };
  const weeklyReports = [
    { week: 'Week 1', sales: 200 },
    { week: 'Week 2', sales: 300 },
    { week: 'Week 3', sales: 400 },
    // Add more weekly reports as needed
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
        <h2>Admin Reports</h2>

        <div className="reports-container">
          {/* Monthly Reports */}
          <div className="report-card">
            <h3>Monthly Sales</h3>
            <ul>
              {monthlyReports.map((report, index) => (
                <li key={index}>
                  <span>{report.month}: </span>
                  <span>{report.sales} sales</span>
                </li>
              ))}
            </ul>
            <canvas id="monthly-chart" width="400" height="200"></canvas>
          </div>

          {/* Weekly Reports */}
          <div className="report-card">
            <h3>Weekly Sales</h3>
            <ul>
              {weeklyReports.map((report, index) => (
                <li key={index}>
                  <span>{report.week}: </span>
                  <span>{report.sales} sales</span>
                </li>
              ))}
            </ul>
            <canvas id="weekly-chart" width="400" height="200"></canvas>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminReport;
