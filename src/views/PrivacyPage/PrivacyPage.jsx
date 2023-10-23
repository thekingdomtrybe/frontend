import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import LegalPageHeroSection from '@/page_components/Pages_LegalPage/HeroSection/HeroSection';
import LegalPageContentSection, { LegalPageContentSectionStyles } from '@/page_components/Pages_LegalPage/ContentSection/ContentSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import MobileFooter from '@/components/MobileFooter/MobileFooter';
import Styles from './PrivacyPage.module.scss';

function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <LegalPageHeroSection />
      <LegalPageContentSection>
        <div>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy explains how the Truth of Calvary Ministries
            (“we”, “us”, or “our”) collects, uses, and discloses your personal
            information when you visit and use The Kingdom Trybe website
            (“the Website”). By accessing or using the Website, you therefore
            agree to the terms of this Privacy Policy.
          </p>
        </div>

        <div>
          <h2>CONTENTS</h2>
          <ul className={LegalPageContentSectionStyles['table-of-contents']}>
            <li>
              <a href="#what-we-collect">Information We Collect</a>
            </li>
            <li>
              <a href="#info-usage">How We Use Your Information</a>
            </li>
            <li>
              <a href="#info-disclosure">How We Share Your Information</a>
            </li>
            <li>
              <a href="#security">Security</a>
            </li>
            <li>
              <a href="#third-party">Third Party Websites</a>
            </li>
            <li>
              <a href="#children">Children&apos;s Privacy</a>
            </li>
            <li>
              <a href="#changes">Changes to This Privacy Policy</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 id="what-we-collect">INFORMATION WE COLLECT</h2>
          <p>
            When you visit the Website, we may collect certain personal information about you,
            including your name, email address, and any other information you provide to us
            voluntarily. We may also collect non-personal information, such as your IP address
            and browser type.
          </p>
        </div>

        <div>
          <h2 id="info-usage">HOW WE USE YOUR INFORMATION</h2>
          <p>We may use your personal information:</p>
          <ul>
            <li>To provide you with access to the Website and its Content;</li>
            <li>To respond to your inquiries and provide customer support;</li>
            <li>To send you administrative and promotional emails;</li>
            <li>To personalize your experience on the Website;</li>
            <li>To enforce our Terms of Use and other policies.</li>
          </ul>
        </div>

        <div>
          <h2 id="info-disclosure">HOW WE SHARE YOUR INFORMATION</h2>
          <p>
            We may disclose your personal information to third parties in the
            following circumstances:
          </p>
          <ul>
            <li> With your express consent;</li>
            <li>To comply with legal obligations or respond to legal requests;</li>
            <li>
              To protect the rights, property, or safety of the Truth of Calvary
              Ministries, our users, or others.
            </li>
          </ul>
        </div>

        <div>
          <h2 id="security">SECURITY</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access or disclosure. However, no method of
            transmission over the Internet or electronic storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 id="third-party">THIRD PARTY WEBSITES</h2>
          <p>
            The Website may contain links to third-party websites.
            This Privacy Policy does not apply to those websites,
            nd we are not responsible for the privacy practices or
            content of any third-party websites.
          </p>
        </div>

        <div>
          <h2 id="children">CHILDREN&apos;S PRIVACY</h2>
          <p>
            The Website is not directed to children under the age of 18.
            We do not knowingly collect personal information from children
            under the age of 18. If you are under the age of 18, do not provide
            us with any personal information.
          </p>
        </div>

        <div>
          <h2 id="changes">CHANGES TO THIS PRIVACY POLICY</h2>
          <p>
            We may update this Privacy Policy from time to time.
            Any changes will be posted on the Website. You are responsible
            for periodically reviewing this Privacy Policy.
          </p>
        </div>

        <div>
          <h2 id="contact">CONTACT US</h2>
          <p>
            If you have any questions about this Privacy Policy,
            please contact us at
            {' '}
            <a href="mailto:tktglobal23@gmail.com">tktglobal</a>
            .
          </p>
        </div>
      </LegalPageContentSection>
      <div className={Styles['desktop-footer']}>
        <SiteFooter />
      </div>
      <div className={Styles['mobile-footer']}>
        <MobileFooter />
      </div>
    </>
  );
}

export default PrivacyPage;
