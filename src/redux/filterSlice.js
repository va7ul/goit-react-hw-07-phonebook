import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const filterContacts = createAction('filter/filterContacts');

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, builder =>
//   builder.addCase(filterContacts, (state, action) => (state = action.payload))
// );
