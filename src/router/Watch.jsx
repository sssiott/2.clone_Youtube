import React, { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { getRelatedVideos } from "../api/Querys";
import WatchCard from "../components/WatchCard";
import RelatedVideo from "../components/RelatedVideo";

export default function Watch() {
  const {
    state: { video },
  } = useLocation();
  const relatedVideos = useLoaderData();

  useEffect(()=>{
    window.scrollTo(0,89);
  },);

  return (
    <div className='flex flex-col gap-4'>
      <section  id='video' className=''>
        <WatchCard video={video} />
      </section>
      <section className=''>
        <ul className='flex flex-row overflow-scroll'>
          {relatedVideos.map((video) => (
            <RelatedVideo key={video.id} video={video} />
          ))}
        </ul>
      </section>
    </div>
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
