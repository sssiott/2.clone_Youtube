import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SearchCard from '../components/SearchCard';
import { searchQuery } from '../api/Querys';

export default function Result() {
  const videos = useLoaderData();

  return (
    <>
      <ul>
        {videos.map((video)=>(
          <SearchCard key={video.id} video={video}/>
        ))}
      </ul>
    </>
  );
}

export function loader(queryClient) {
  return async ({request}) => {
    const url = new URL(request.url);
    const keyword = url.searchParams.get('search_query');
    const query = searchQuery(keyword);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    )
  }
}