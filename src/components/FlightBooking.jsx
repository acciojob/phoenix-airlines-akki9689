import { useDispatch, useSelector } from 'react-redux';
import { selectFlight } from '../redux/flightSlice';
import { useNavigate } from 'react-router-dom';

const FlightBookingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const flights = useSelector((state) => state.flight.flights);

  const handleBooking = (flight) => {
    dispatch(selectFlight(flight));
    navigate('/flight-booking');
  };

  return (
    <div className="flight-search-1_page">
      <h2>Available Flights</h2>
      {flights.map((flight) => (
        <div key={flight.id} className="book-flight">
          <p>{flight.name}</p>
          <button onClick={() => handleBooking(flight)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default FlightBookingPage;
