import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { getRelatedVideos } from "../api/Querys";
import WatchCard from "../components/WatchCard";
import RelatedVideo from "../components/RelatedVideo";

export default function Watch() {
  const {
    state: { video },
  } = useLocation();

  const relatedVideos = useLoaderData();

  return (
    <>
      <section>
        <WatchCard video={video} />
      </section>
      <section>
        <ul>
          {relatedVideos.map(video=>(
            <RelatedVideo key={video.id} video={video} />
          ))}
        </ul>
      </section>
    </>
  );
}

// export function loader(queryClient) {
//   return async ()=> {
//     const {state : {video}} = useLocation();
//     const query = getRelatedVideos(video.id);
//     return (
//       queryClient.getQueryData(query.queryKey) ??
//       (await queryClient.fetchQuery(query))
//     )
//   }
// }

export function loader(queryClient) {
  return async ({ request }) => {
    const url = new URL(request.url);
    const keyword = url.searchParams.get("v");
    const query = getRelatedVideos(keyword);

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
}
