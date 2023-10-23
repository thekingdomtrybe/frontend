import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import AuthPageImageSection from '@/page_components/Pages_AuthPage/ImageSection/ImageSection';
import NewPasswordFormSection from '@/page_components/Pages_NewPasswordPage/FormSection/FormSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import Styles from './NewPasswordPage.module.scss';

function NewPasswordPage() {
  return (
    <>
      <SiteHeader />
      <AuthPageImageSection />
      <NewPasswordFormSection />
      <div className={Styles['desktop-footer']}>
        <SiteFooter />
      </div>
    </>
  );
}

export default NewPasswordPage;
