import React from 'react';
import Video from '@/components/Video/Video';
import Styles from './VideoList.module.scss';

function VideoList() {
  // Get videos from context or store
  const videos = [
    {
      id: '50icpksda',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: '',
    },
    {
      id: 'qi3jwiejxmo',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: '',
    },
    {
      id: 'qjfwscnzod',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: '',
    },
    {
      id: 'qjfwssscnzod',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: '',
    },
  ];

  const videoComponents = videos.map((video) => (
    <Video
      key={video.id}
      id={video.id}
      title={video.title}
      minister={video.minister}
      date={video.date}
      description=""
      image={video.image}
    />
  ));

  return (
    <div className={Styles['video-list']}>
      {videoComponents}
    </div>
  );
}

export default VideoList;
