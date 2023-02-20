import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";
import { getURL } from "../api/Querys";

export default function VideoCard({ video }) {
  const { channelTitle, title, publishedAt, thumbnails, channelId } =
    video.snippet;
  const { viewCount } = video.statistics;
  const navigate = useNavigate();

  const { data: thumbnailURL } = useQuery(getURL(channelId));

  return (
    <li
      className="cursor-pointer mb-4"
      onClick={() => navigate(`/watch?v=${video.id}`, { state: { video } })}
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="w-full rounded-lg"
      />
      <div className='flex items-start'>
        <img className="rounded-full w-10 h-10 ml-2 mr-4 my-4" src={thumbnailURL} alt={channelTitle} />
        <div>
          <p className="font-semibold my-2 line-clamp-2">{title}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
          <p className="text-sm opacity-80">
            View {viewCount} / {format(publishedAt)}
          </p>
        </div>
      </div>
    </li>
  );
}
