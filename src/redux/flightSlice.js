import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchCriteria: {
    tripType: 'one-way',
    source: '',
    destination: '',
    date: '',
  },
  flights: [],
  selectedFlight: null,
  bookingDetails: null,
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setSearchCriteria: (state, action) => {
      state.searchCriteria = action.payload;
    },
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
    selectFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
  },
});

export const { setSearchCriteria, setFlights, selectFlight, setBookingDetails } = flightSlice.actions;
export default flightSlice.reducer;
