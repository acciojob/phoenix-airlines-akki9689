import { useDispatch } from 'react-redux';
import { setSearchCriteria } from '../redux/flightSlice';
import { useNavigate } from 'react-router-dom';

const FlightSearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(
      setSearchCriteria({
        tripType: 'one-way',
        source: 'NYC',
        destination: 'LAX',
        date: '2024-12-20',
      })
    );
    navigate('/flight-search/results');
  };

  return (
    <div className="flight-search_page">
      <h2>Search Flights</h2>
      <button onClick={handleSearch} className="book-flight">
        Search
      </button>
    </div>
  );
};

export default FlightSearchPage;
