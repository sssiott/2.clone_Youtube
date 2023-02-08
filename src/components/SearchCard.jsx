import React from 'react';
import {format} from 'timeago.js';
import Youtube from '../api/youtube';

export default function SearchCard({video}) {

  const {channelTitle, description,publishedAt, thumbnails,title, channelId} = video.snippet;

  const thumbnail = getChannelDetails(channelId);

  console.log(thumbnail);
  return (
    <li className='flex my-4'>
      <img src={thumbnails.medium.url} alt="title" className='w-50 rounded-lg mr-2' />
      <div>
        <p className='text-lg font-semibold'>{title}</p>
        <p className='text-sm opacity-70 mb-2'>{format(publishedAt)}</p>
        <p className='text-sm opacity-70 mb-2'>{channelTitle}</p>
        <p className='text-sm opacity-70'>{description}</p>
      </div>
    </li>
  );
}

function getChannelDetails(keyword) {
  const client = new Youtube();
  const channelDetail = client.channelDetail(keyword);
  return channelDetail;
}