import React from 'react';
import { FilterDiv } from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter({ filter, onChange }) {
  return (
    <FilterDiv>
      <label>Find contact by Name: </label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => onChange(e.target.value)}
      />
    </FilterDiv>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
