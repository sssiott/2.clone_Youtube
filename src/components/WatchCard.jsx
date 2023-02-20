import React from "react";
import {format} from 'timeago.js';
export default function WatchCard({ video }) {
  const { title, channelId, channelTitle, description, publishedAt } =
    video.snippet;
  return (
    <>
      <iframe
        className='w-screen h-screen-3/4'
        id="player"
        type="text/html"
        title="player"
        src={`http://www.youtube.com/embed/${video.id}`}
      />
        <section className='mt-4 mx-4'>
          <h2 className='text-3xl font-bold'>{title}</h2>
          <p className='opacity-70'>{channelTitle}</p>
          <p className="opacity-70">{format(publishedAt)}</p>
          <article>
            <pre className='whitespace-pre-wrap bg-zinc-700 p-4 m-2 rounded-lg opacity-80'>{description}</pre>
          </article>
        </section>
    </>
  );
}
