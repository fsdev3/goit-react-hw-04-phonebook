import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';

const STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const submitHandler = user => {
    if (contacts.some(contact => contact.name === user.name)) {
      alert(`${user.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, { id: nanoid(), ...user }]);
  };

  const deleteItem = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmitHandler={submitHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={setFilter} />
      <ContactList list={filteredContacts} onDeleteItem={deleteItem} />
    </Container>
  );
};
