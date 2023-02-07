import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Youtube from '../api/youtube';
import SearchCard from '../components/SearchCard';

export default function Result() {
  const data = useLoaderData();

  return (
    <>
      <ul>
        {data.map((video)=>(
          <SearchCard key={video.id.videoId} video={video}/>
        ))}
      </ul>
    </>
  );
}

export async function loader({request}) {
  const url = new URL(request.url);
  const keyword = url.searchParams.get('search_query');
  const client = new Youtube();
  const res = await client.search(keyword);
  // const res = await axios.get('/mock/search.json');
  return res.data.items;
} 


