import React from 'react';
import {format} from 'timeago.js';

export default function SearchCard({video}) {
  console.log(video)
  const {channelTitle, description,publishedAt, thumbnails,title} = video.snippet;
  return (
    <li className='flex'>
      <img src={thumbnails.medium.url} alt="title" className='w-50' />
      <div>
        <p>{title}</p>
        <p>{format(publishedAt)}</p>
        <p>{channelTitle}</p>
        <p>{description}</p>
      </div>
    </li>
  );
}

