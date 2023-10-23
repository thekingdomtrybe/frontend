import TestimonyPageFormSection from '@/page_components/Pages_TestimonyPage/FormSection/FormSection';
import TestimonyPageHeroSection from '@/page_components/Pages_TestimonyPage/HeroSection/HeroSection';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import Styles from './TestimonyPage.module.scss';

function TestimonyPage() {
  return (
    <>
      <SiteHeader />
      <TestimonyPageHeroSection />
      <TestimonyPageFormSection />
      <div className={Styles['desktop-footer']}>
        <SiteFooter />
      </div>
    </>
  );
}

export default TestimonyPage;
