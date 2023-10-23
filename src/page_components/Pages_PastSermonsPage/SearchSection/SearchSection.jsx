import React from 'react';
import Search from '@/components/Search/Search';
import Styles from './SearchSection.module.scss';

function PastSermonsSearchSection() {
  return (
    <section className={Styles['search-section']}>
      <h2>Search for a video</h2>
      <Search />
    </section>
  );
}

export default PastSermonsSearchSection;
