
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/events.css'; // Import CSS for styling

const Events = () => {
  return (
    <div className="events-page">
      <Navbar />
      <div className="events-container">
        <div className="sidebar">
          <h3>Events</h3>
          <ul>
            <li>Weddings</li>
            <li>Corporate Events</li>
            <li>Birthday Parties</li>
            <li>Conferences</li>
            <li>Exhibitions</li>
            {/* Add more event types as needed */}
          </ul>
        </div>
        <div className="main-content">
          <h2>Our Services</h2>
          <div className="event-card">
            <h3>Weddings</h3>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Options: Venue selection, Decoration, Catering, Entertainment, Photography</p>
          </div>
          <div className="event-card">
            <h3>Corporate Events</h3>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Options: Venue booking, Event planning, Audio-visual setup, Catering</p>
          </div>
          <div className="event-card">
            <h3>Birthday Parties</h3>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Options: Theme selection, Venue decoration, Entertainment, Catering</p>
          </div>
          {/* Add more event cards as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
