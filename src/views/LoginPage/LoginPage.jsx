import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import LoginFormSection from '@/page_components/Pages_LoginPage/FormSection/FormSection';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import AuthPageImageSection from '@/page_components/Pages_AuthPage/ImageSection/ImageSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import Styles from './LoginPage.module.scss';

function LoginPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <AuthPageImageSection />
      <LoginFormSection />
    </>
  );

  const footer = (
    <div className={Styles['desktop-footer']}>
      <SiteFooter />
    </div>
  );
  return (
    <ProtectedRoute isAuthenticationPage>
      <BottomStuckFooterPage
        top={pageComponents}
        footer={footer}
      />
    </ProtectedRoute>
  );
}

export default LoginPage;
