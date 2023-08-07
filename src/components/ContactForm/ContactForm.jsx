import React, { useState } from 'react';
import { Form } from './ContactForm.styled';
import PropTypes from 'prop-types';

export function ContactForm({ onSubmitHandler }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    onSubmitHandler({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="inputName">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        id="inputName"
        required
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="inputNumber">Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        id="inputNumber"
        required
        onChange={e => setNumber(e.target.value)}
      />
      <button type="submit">Add contact</button>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmitHandler: PropTypes.func,
};
