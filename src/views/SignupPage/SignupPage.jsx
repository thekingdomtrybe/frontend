import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import SignupFormSection from '@/page_components/Pages_SignupPage/FormSection/FormSection';
import AuthPageImageSection from '@/page_components/Pages_AuthPage/ImageSection/ImageSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import Styles from './SignupPage.module.scss';

function SignupPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <AuthPageImageSection />
      <SignupFormSection />
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

export default SignupPage;
