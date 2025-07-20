import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Form, Button, FormControl } from 'react-bootstrap';

const SearchBox = () => {
  const navigate = Navigate();

  const [keyword, setKeyword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <FormControl
        type="text"
        name="q"
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></FormControl>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
