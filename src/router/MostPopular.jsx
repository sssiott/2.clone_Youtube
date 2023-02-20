import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { mostPopularQuery } from "../api/Querys";
import VideoCard from "../components/VideoCard";

export default function MostPopular() {
  const videos = useLoaderData();

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-4">
        {videos.map((data) => (
          <VideoCard key={data.id} video={data} />
        ))}
      </ul>
    </>
  );
}

export function loader(queryClient) {
  return async () => {
    const query = mostPopularQuery();
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
}
