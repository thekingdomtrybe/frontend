import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import LoginFormSection from '@/page_components/Pages_LoginPage/FormSection/FormSection';
import AuthPageImageSection from '@/page_components/Pages_AuthPage/ImageSection/ImageSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import Styles from './LoginPage.module.scss';

function LoginPage() {
  return (
    <>
      <SiteHeader />
      <AuthPageImageSection />
      <LoginFormSection />
      <div className={Styles['desktop-footer']}>
        <SiteFooter />
      </div>
    </>
  );
}

export default LoginPage;
