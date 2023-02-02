import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function Result() {
  const data = useLoaderData();
  const {isLoading, error, data : videos} = useQuery(
    ['videos'], data
  );
  return (
    <>
      검색결과
      <ul>
        {data.map((video)=>(
          <li key={video.id.videoId}>
            {video.snippet.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function loader({request}) {
  const url = new URL(request.url);
  const search_query = url.searchParams.get('search_query');
  const res = await axios.get('/mock/search.json');
  return res.data.items;
} 


