import React, { useRef, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Form, Link } from "react-router-dom";

export default function SearchHeader() {
  const [text, setText] = useState("");

  const handleType = (e) => {
    setText(e.target.value);
  };

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-2">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-4xl">Youtube</h1>
      </Link>
      <Form
        method="get"
        action="/results"
        onSubmit={() => setText("")}
        className="w-full flex justify-center"
      >
        <input
          type="search"
          placeholder="검색"
          value={text}
          name="search_query"
          onChange={handleType}
          className="w-9/12 p-2 outline-none bg-black text-gray-50"
        />
        <button type="submit" className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </Form>
    </header>
  );
}
