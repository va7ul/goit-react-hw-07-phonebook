import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return (state = state.filter(contact => contact.id !== action.payload));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

//====== redux toolkit without createSlice ======//
// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const contactsReducer = createReducer(contactsInitialState, builder =>
//   builder
//     .addCase(addContact, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(deleteContact, (state, action) => {
//       return state.filter(contact => contact.id !== action.payload);
//     })
// );
