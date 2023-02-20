import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getVideoDetail } from "../api/Querys";
import { format } from "timeago.js";

export default function RelatedVideo({ video }) {
  const {
    channelTitle,
    publishedAt,
    thumbnails,
    title,
  } = video.snippet;

  const { data: videoViewCounts } = useQuery(getVideoDetail(video.id));
  const navigate = useNavigate();
  return (
    <>
      <li
        className="cursor-pointer flex flex-col"
        onClick={(e) => navigate(`/watch?v=${video.id}`, { state: { video } })}
      >
        <img className='w-80 mx-1 rounded-xl' src={thumbnails.default.url} alt={title} />
        <div>
          <p className="font-bold">{title}</p>
          <p className='opacity-70'>{channelTitle}</p>
          <p>
            View {videoViewCounts} / {format(publishedAt)}
          </p>
        </div>
      </li>
    </>
  );
}
