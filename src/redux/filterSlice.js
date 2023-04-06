import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onChangeInput(state, action) {
      return (state = action.payload);
    },
  },
});

export const { onChangeInput } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
