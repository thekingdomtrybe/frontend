import PrayerRequestPageFormSection from '@/page_components/Pages_PrayerRequestPage/FormSection/FormSection';
import PrayerRequestPageHeroSection from '@/page_components/Pages_PrayerRequestPage/HeroSection/HeroSection';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import Styles from './PrayerRequestPage.module.scss';

function PrayerRequestPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <PrayerRequestPageHeroSection />
      <PrayerRequestPageFormSection />
    </>
  );

  const footer = (
    <div className={Styles['desktop-footer']}>
      <SiteFooter />
    </div>
  );

  return (
    <BottomStuckFooterPage
      top={pageComponents}
      footer={footer}
    />
  );
}

export default PrayerRequestPage;
