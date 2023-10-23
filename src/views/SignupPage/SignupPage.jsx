import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SignupFormSection from '@/page_components/Pages_SignupPage/FormSection/FormSection';
import AuthPageImageSection from '@/page_components/Pages_AuthPage/ImageSection/ImageSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import Styles from './SignupPage.module.scss';

function SignupPage() {
  return (
    <>
      <SiteHeader />
      <AuthPageImageSection />
      <SignupFormSection />
      <div className={Styles['desktop-footer']}>
        <SiteFooter />
      </div>
    </>
  );
}

export default SignupPage;
