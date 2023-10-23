import PrayerRequestPageFormSection from '@/page_components/Pages_PrayerRequestPage/FormSection/FormSection';
import PrayerRequestPageHeroSection from '@/page_components/Pages_PrayerRequestPage/HeroSection/HeroSection';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import Styles from './PrayerRequestPage.module.scss';

function PrayerRequestPage() {
  return (
    <>
      <SiteHeader />
      <PrayerRequestPageHeroSection />
      <PrayerRequestPageFormSection />
      <div className={Styles['desktop-footer']}>
        <SiteFooter />
      </div>
    </>
  );
}

export default PrayerRequestPage;
