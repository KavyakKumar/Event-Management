
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/services.css'; // Import CSS for styling

const Services = () => {
  return (
    <div className="services-page">
      <Navbar />
      <div className="services-container">
        <div className="sidebar">
          <h3>Services</h3>
          <ul>
            <li>Event Planning</li>
            <li>Venue Selection</li>
            <li>Decoration</li>
            <li>Catering</li>
            <li>Entertainment</li>
            {/* Add more services as needed */}
          </ul>
        </div>
        <div className="main-content">
          <h2>Testimonials</h2>
          <div className="testimonial-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>- John Doe</p>
          </div>
          
          {/* Add more testimonial cards as needed */}
          
          <h2>Upcoming Events</h2>
          <div className="event-card">
            <h3>Event Name</h3>
            <p>Date: June 1, 2024</p>
            <p>Location: City, Country</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="event-card">
            <h3>Event Name</h3>
            <p>Date: June 1, 2024</p>
            <p>Location: City, Country</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="event-card">
            <h3>Event Name</h3>
            <p>Date: June 1, 2024</p>
            <p>Location: City, Country</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="event-card">
            <h3>Event Name</h3>
            <p>Date: June 1, 2024</p>
            <p>Location: City, Country</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="event-card">
            <h3>Event Name</h3>
            <p>Date: June 1, 2024</p>
            <p>Location: City, Country</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Add more event cards as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
