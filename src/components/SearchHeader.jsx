import React, { useState } from 'react';
import { BsYoutube, BsSearch} from 'react-icons/bs';
import { Form, Link } from 'react-router-dom';

export default function SearchHeader() {
  const [text, setText] = useState('');

  const handleType = (e) => {
    setText(e.target.value);
  };
  

  return (
    <header>
      <Link to='/'>
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <Form method='get' action='/result' onSubmit={()=>setText('')}>
        <input
          type="search"
          placeholder='검색'
          value={text}
          name='search_query'
          onChange={handleType}
        />
        <button type='submit'>
          <BsSearch />
        </button>
      </Form>
    </header>
  );
}
