import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    category: 'Outstation', 
    tripType: 'Round Trip',
    from: '',
    to: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '00:00'
  },
  reducers: {
    setCategory: (state, action) => { state.category = action.payload; },
    setTripType: (state, action) => { state.tripType = action.payload; },
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { setCategory, setTripType, updateField } = bookingSlice.actions;
export default bookingSlice.reducer;