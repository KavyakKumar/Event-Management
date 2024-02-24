import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

import Footer from './Footer';
import '../assets/adminanalytics.css'; // Import CSS for styling

const AdminAnalytics = () => {
  // Dummy data for analytics
  const monthlyTargets = [
    { month: 'January', target: 100 },
    { month: 'February', target: 120 },
    { month: 'March', target: 150 },
    // Add more monthly targets as needed
  ];

  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
    // Redirect to homepage
    window.location.href = '/'; // Redirect to homepage
  };
  const userGrowthData = [
    { month: 'January', users: 100 },
    { month: 'February', users: 120 },
    { month: 'March', users: 150 },
    // Add more user growth data as needed
  ];

  useEffect(() => {
    // Render monthly targets chart
    const monthlyTargetChart = new Chart(document.getElementById('monthly-target-chart'), {
      type: 'bar',
      data: {
        labels: monthlyTargets.map(target => target.month),
        datasets: [{
          label: 'Monthly Targets',
          data: monthlyTargets.map(target => target.target),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Render user growth chart
    const userGrowthChart = new Chart(document.getElementById('user-growth-chart'), {
      type: 'line',
      data: {
        labels: userGrowthData.map(data => data.month),
        datasets: [{
          label: 'User Growth',
          data: userGrowthData.map(data => data.users),
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup function
    return () => {
      monthlyTargetChart.destroy();
      userGrowthChart.destroy();
    };
  }, ); // Empty dependency array to ensure useEffect runs only once

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
          <li><Link to="/AdminReport">AdminReport</Link></li>
          <li><Link to="/AdminAnalytics">AdminAnalytics</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Admin Analytics</h2>

        {/* Monthly Targets */}
        <div className="analytics-card">
          <h3>Monthly Targets</h3>
          <canvas id="monthly-target-chart" width="400" height="200"></canvas>
        </div>

        {/* User Growth */}
        <div className="analytics-card">
          <h3>User Growth</h3>
          <canvas id="user-growth-chart" width="400" height="200"></canvas>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminAnalytics;
