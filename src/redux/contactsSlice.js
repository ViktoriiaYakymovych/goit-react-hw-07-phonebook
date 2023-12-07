import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = action.payload;
};

const handleAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.push(action.payload);
};

const handleDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload
  );
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: bilder =>
    bilder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact),
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
