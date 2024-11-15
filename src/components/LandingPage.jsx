import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="landing_page">
    <h1>Welcome to Phoenix Airlines</h1>
    <Link to="/flight-search">
      <button>Search Flights</button>
    </Link>
  </div>
);

export default LandingPage;
