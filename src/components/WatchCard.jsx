import React from "react";

export default function WatchCard({ video }) {
  const { title, channelId, channelTitle, description, publishedAt } =
    video.snippet;
  return (
    <>
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="360"
        title="player"
        src={`http://www.youtube.com/embed/${video.id}`}
      />
      <section>
        <div>
          <h2>{title}</h2>
          <p>{channelTitle}</p>
          <div></div>
        </div>
      </section>
    </>
  );
}
