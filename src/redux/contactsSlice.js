import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  item: [
    { id: 'id-1', name: 'Helen', number: '22-336-555' },
    { id: 'id-2', name: 'Oddy', number: '23-566-5645' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.item.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.item.findIndex(
        contact => contact.id === action.payload
      );
      state.item.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
