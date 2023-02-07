import React from 'react';
import {format} from 'timeago.js';
export default function VideoCard({video}) {
    console.log(video)
    const {channelTitle, title, publishedAt, thumbnails} = video.snippet;

  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} className='w-full'/>
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{format(publishedAt)}</p>
      </div>
    </li>
  );
}

