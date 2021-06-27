import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';

interface SearchBarProps {
  setValue: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setValue }) => {
  const [text, setText] = useState<string>('');
  const debouncedValue = useDebounce<string>(text, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  useEffect(() => {
    setValue(debouncedValue);
  }, [debouncedValue, setValue]);

  return (
    <TextField
      id="search-bar"
      placeholder="Search a super hero"
      onChange={handleChange}
      variant="outlined"
    />
  );
};
