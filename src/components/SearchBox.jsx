import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SearchBox = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search for movies..."
    />
  );
};

export default SearchBox;
