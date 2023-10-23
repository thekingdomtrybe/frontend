import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import AuthPageImageSection from '@/page_components/Pages_AuthPage/ImageSection/ImageSection';
import ResetPasswordFormSection from '@/page_components/Pages_ResetPasswordPage/FormSection/FormSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import Styles from './ResetPasswordPage.module.scss';

function ResetPasswordPage() {
  return (
    <>
      <SiteHeader />
      <AuthPageImageSection />
      <ResetPasswordFormSection />
      <div className={Styles['desktop-footer']}>
        <SiteFooter />
      </div>
    </>
  );
}

export default ResetPasswordPage;
