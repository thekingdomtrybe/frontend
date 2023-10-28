import React from 'react';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import Styles from './Loading.module.scss';

function ProtectedRouteLoading() {
  const loadingComponent = (
    <>
      <SiteHeader />
      <section className={Styles.loader}>
        <div className={Styles.overlay} />
        <span className={Styles.spinner} />
        <h1>Loading</h1>
      </section>
    </>
  );

  const footer = (
    <SiteFooter />
  );

  return (
    <BottomStuckFooterPage
      top={loadingComponent}
      footer={footer}
    />
  );
}

export default ProtectedRouteLoading;
