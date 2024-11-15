import { useDispatch, useSelector } from 'react-redux';
import { setBookingDetails } from '../redux/flightSlice';
import { useNavigate } from 'react-router-dom';

const FlightBookingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedFlight = useSelector((state) => state.flight.selectedFlight);

  const handleConfirm = () => {
    dispatch(
      setBookingDetails({
        name: 'John Doe',
        email: 'john@example.com',
      })
    );
    navigate('/confirmation');
  };

  return (
    <div className="flight-booking_page">
      <h2>Booking Details</h2>
      <p>{selectedFlight?.name}</p>
      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
};

export default FlightBookingPage;
