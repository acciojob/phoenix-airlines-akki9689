import { useSelector } from 'react-redux';

const ConfirmationPage = () => {
  const bookingDetails = useSelector((state) => state.flight.bookingDetails);

  return (
    <div className="confirmation_page">
      <h2>Booking Confirmation</h2>
      <p>Name: {bookingDetails?.name}</p>
      <p>Email: {bookingDetails?.email}</p>
      <p>Status: Confirmed</p>
    </div>
  );
};

export default ConfirmationPage;
