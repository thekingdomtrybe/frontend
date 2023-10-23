import React from 'react';
import Styles from './VideosSection.module.scss';
import Video from '@/components/Video/Video';

function PastSermonsVideosSection() {
  // Get videos from store or context
  const videos = [
    {
      id: 'oj0efv-2kfd',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 'oj0efefv3fscd',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 'oj0edvfwsd',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 'oj0edvfwsd',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 'oj0edvfwsd',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 'oj0edvfwsd',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 'oj0edvfwsd',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 'oj0edvfwsd',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 'oj0edvfwsd',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 'oj0edvfwsd',
      title: 'Where Money Hides',
      minister: 'Pastor Olumide Emmanuel',
      date: '2020-01-01',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies.',
      image: 'https://via.placeholder.com/300',
    },
  ];

  const videoElements = videos.map((video) => (
    <Video
      key={video.id}
      id={video.id}
      title={video.title}
      minister={video.minister}
      date={video.date}
      description={video.description}
      image={video.image}
    />
  ));

  return (
    <section className={Styles.videos}>
      {videoElements}
    </section>
  );
}

export default PastSermonsVideosSection;
