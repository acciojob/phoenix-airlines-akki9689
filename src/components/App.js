
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FlightSearchPage from './pages/FlightSearchPage';
import FlightBookingPage from './pages/FlightBookingPage';
import ConfirmationPage from './pages/ConfirmationPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/flight-search" element={<FlightSearchPage />} />
      <Route path="/flight-booking" element={<FlightBookingPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  </Router>
);

export default App;

