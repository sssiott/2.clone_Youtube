
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Youtube from '../api/youtube';
import VideoCard from '../components/VideoCard';

export default function HotVideos() {
  const loadData = useLoaderData();

  return (
    <>
      <ul
        className='grid grid-cols-1 sm: grid-cols-2 lg: grid-cols-3 xl: grid-cols-4 gap-2 gap-y-4'
      >
        {loadData.map((data)=>(
          <VideoCard key={data.id}  video={data}/>
        ))}
      </ul>
    </>
  );
}

export function loader() {
  const client = new Youtube();
  return client.hot();
}