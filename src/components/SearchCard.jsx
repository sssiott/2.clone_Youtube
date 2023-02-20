import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";
import { getURL, getVideoDetail } from "../api/Querys";

export default function SearchCard({ video }) {
  const {
    channelTitle,
    description,
    publishedAt,
    thumbnails,
    title,
    channelId,
  } = video.snippet;

  const { data: thumbnailURL } = useQuery(getURL(channelId));
  const { data: videoViewCounts } = useQuery(getVideoDetail(video.id));

  const navigate = useNavigate();

  return (
    <li
      className="flex my-4 cursor-pointer"
      onClick={(e) => navigate(`/watch?v=${video.id}`, { state: { video } })}
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-6/8 rounded-lg mr-2"
      />
      <div className=''>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm opacity-70 mb-2">
          View {videoViewCounts} / {format(publishedAt)}
        </p>
        <div className='flex items-center mb-4'>
          <img className="rounded-full w-6 h-6 mr-3" src={thumbnailURL} alt={channelTitle} />
          <p className="text-sm opacity-70 mb-2">{channelTitle}</p>
        </div>
          <pre className="text-sm opacity-70">{description}</pre>
      </div>
    </li>
  );
}
