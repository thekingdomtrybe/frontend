import TestimonyPageFormSection from '@/page_components/Pages_TestimonyPage/FormSection/FormSection';
import TestimonyPageHeroSection from '@/page_components/Pages_TestimonyPage/HeroSection/HeroSection';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
// import Styles from './TestimonyPage.module.scss';

function TestimonyPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <TestimonyPageHeroSection />
      <TestimonyPageFormSection />
    </>
  );

  const footer = (
    <SiteFooter />
  );

  return (
    <BottomStuckFooterPage
      top={pageComponents}
      footer={footer}
    />
  );
}

export default TestimonyPage;
