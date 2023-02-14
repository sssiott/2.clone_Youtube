import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {format} from 'timeago.js';
import { getURL } from '../api/Querys';

export default function VideoCard({video}) {

    const {channelTitle, title, publishedAt, thumbnails, channelId} = video.snippet;
    const {viewCount} = video.statistics;
    const navigate = useNavigate();

    const {data:thumbnailURL} = useQuery(getURL(channelId));

  return (
    <li className='cursor-pointer' onClick={()=>navigate(`/watch?v=${video.id}`,{state:{video}})}>
      <img src={thumbnails.medium.url} alt={title} className='w-full rounded-lg'/>
      <div>
        <img className='rounded-full' src={thumbnailURL} alt={channelTitle} />
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>View {viewCount} / {format(publishedAt)}</p>
      </div>
    </li>
  );
}