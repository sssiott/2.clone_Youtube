import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function HotVideos() {
  const loadData = useLoaderData();
  console.log('핫');
  console.log(loadData);
  return (
    <>
      <p>🦩 비디오!</p>
      <ul>
        {loadData.map((data)=>(
          <li key={data.id}>
            {data.snippet.title}
          </li>
        ))}
      </ul>
    </>
  );
}

