import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import AuthPageImageSection from '@/page_components/Pages_AuthPage/ImageSection/ImageSection';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import ResetPasswordFormSection from '@/page_components/Pages_ResetPasswordPage/FormSection/FormSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import Styles from './ResetPasswordPage.module.scss';

function ResetPasswordPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <AuthPageImageSection />
      <ResetPasswordFormSection />
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

export default ResetPasswordPage;
