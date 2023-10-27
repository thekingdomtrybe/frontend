import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import CounsellingPageImageSection from '@/page_components/Pages_CounsellingPage/ImageSection/ImageSection';
import CounsellingPageFormSection from '@/page_components/Pages_CounsellingPage/FormSection/FormSection';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import Styles from './CounsellingPage.module.scss';

function CounsellingPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <CounsellingPageImageSection />
      <CounsellingPageFormSection />
    </>
  );

  const footer = (
    <div className={Styles['desktop-footer']}>
      <SiteFooter />
    </div>
  );

  return (
    <BottomStuckFooterPage
      top={pageComponents}
      footer={footer}
    />
  );
}

export default CounsellingPage;
