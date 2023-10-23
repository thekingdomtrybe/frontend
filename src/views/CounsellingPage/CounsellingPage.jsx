import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import CounsellingPageImageSection from '@/page_components/Pages_CounsellingPage/ImageSection/ImageSection';
import CounsellingPageFormSection from '@/page_components/Pages_CounsellingPage/FormSection/FormSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import Styles from './CounsellingPage.module.scss';

function CounsellingPage() {
  return (
    <>
      <SiteHeader />
      <CounsellingPageImageSection />
      <CounsellingPageFormSection />
      <div className={Styles['desktop-footer']}>
        <SiteFooter />
      </div>
    </>
  );
}

export default CounsellingPage;
