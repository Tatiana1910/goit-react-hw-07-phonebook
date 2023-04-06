import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactsList;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectfilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normilezedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilezedFilter)
    );
  }
);
