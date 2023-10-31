import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import LegalPageHeroSection from '@/page_components/Pages_LegalPage/HeroSection/HeroSection';
import LegalPageContentSection, { LegalPageContentSectionStyles } from '@/page_components/Pages_LegalPage/ContentSection/ContentSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
// import Styles from './TermsOfUsePage.module.scss';

function TermsOfUsePage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <LegalPageHeroSection />
      <LegalPageContentSection>
        <div>
          <h1>Terms of Use</h1>
          <p>
            Welcome to The Kingdom Trybe website (“the Website”) an
            online streaming platform for the Truth of Calvary Ministries
            operated by Truth of Calvary Ministries. By accessing or using the
            Website, you agree to be bound by these Terms of Use. Please read
            them carefully.
          </p>
        </div>

        <div>
          <h2>CONTENTS</h2>
          <ul className={LegalPageContentSectionStyles['table-of-contents']}>
            <li>
              <a href="#acceptance">Acceptance of Terms</a>
            </li>
            <li>
              <a href="#website-use">Use of the Website and Content</a>
            </li>
            <li>
              <a href="#user-conduct">User Conduct</a>
            </li>
            <li>
              <a href="#intellectual-rights">Intellectual Property Rights</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#warraty-disclaimer">Disclaimer of Warranties</a>
            </li>
            <li>
              <a href="#liabilities">Limitation of Liability</a>
            </li>
            <li>
              <a href="#changes">Modification or Termination of the Website</a>
            </li>
            <li>
              <a href="#law">Governing Law and Jurisdiction</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 id="acceptance">ACCEPTANCE OF TERMS</h2>
          <p>
            By using the Website, you acknowledge that you have read,
            understood, and agree to be bound by these Terms of Use.
            If you do not agree to these Terms of Use, please do not access
            or use the Website.
          </p>
        </div>

        <div>
          <h2 id="website-use">USE OF THE WEBSITE AND CONTENT</h2>
          <p>
            The Website and its content, including streaming videos,
            audio files, images, text, and other materials (“Content”)
            are provided solely for your personal, non-commercial use.
            You should therefore not reproduce, distribute, modify,
            create derivative works from, publicly display, publicly perform,
            republish, download, store, or transmit any of the Content on the
            Website without the prior written consent of the Truth of Calvary
            Ministries.
          </p>
        </div>

        <div>
          <h2 id="user-conduct">USER CONDUCT</h2>
          <p>
            By accessing or using the Website, you agree that you will not:
          </p>
          <ul>
            <li>Use the Website for any illegal or unauthorized purpose;</li>
            <li>
              Interfere with or disrupt the Website or servers or networks
              connected to the Website;
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the
              Website or any other accounts, computer systems, or networks
              connected to the Website, whether through hacking, password
              mining, or any other means;
            </li>
            <li>
              Transmit any viruses, worms, defects, Trojan horses, or any
              items of a destructive nature;
            </li>
            <li>
              Use any robot, spider, or other automatic device, process,
              or means to access the Website for any purpose, including
              monitoring or copying any of the material on the Website;
            </li>
            <li>
              Impersonate or attempt to impersonate the Truth of Calvary
              Ministries or any other person or entity associated with the
              Website.
            </li>
          </ul>
        </div>

        <div>
          <h2 id="intellectual-rights">INTELLECTUAL PROPERTY RIGHTS</h2>
          <p>
            The Website and its Content are protected by copyright, trademark,
            and other intellectual property laws. All rights not expressly
            granted herein are reserved. You may should therefore not use any
            trademarks, service marks, or logos displayed on the Website without
            the prior written consent of the Truth of Calvary Ministries.
          </p>
        </div>

        <div>
          <h2 id="privacy">PRIVACY</h2>
          <p>
            Your use of the Website is subject to our
            {' '}
            <Link to="/privacy-policy">privacy policy</Link>
            ,
            which is incorporated by reference into these Terms of Use.
            Please review our Privacy Policy to understand our practices
            regarding the collection, use, and disclosure of your personal
            information.
          </p>
        </div>

        <div>
          <h2 id="warraty-disclaimer">DISCLAIMER OF WARRANTIES</h2>
          <p>
            The Website and its Content are provided “as is” and without
            warranties of any kind, whether express or implied. The Truth
            of Calvary Ministries does not warrant that the Website will be
            error-free, secure, or uninterrupted, or that any defects will
            be corrected as soon as they occur.
          </p>
        </div>

        <div>
          <h2 id="liabilities">LIMITATION OF LIABILITY</h2>
          <p>
            To the maximum extent permitted by law, the Truth of Calvary
            Ministries shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, whether arising
            under contract, tort, or any other legal theory, even if the
            Truth of Calvary Ministries has been advised of the possibility
            of such damages.
          </p>
        </div>

        <div>
          <h2 id="changes">MODIFICATION OR TERMINATION OF THE WEBSITE</h2>
          <p>
            The Truth of Calvary Ministries reserves the right to modify,
            suspend, or terminate the Website or any Content provided on
            the Website at any time without notice.
          </p>
        </div>

        <div>
          <h2 id="law">GOVERNING LAW AND JURISDICTION</h2>
          <p>
            These Terms of Use shall be governed by and construed in
            accordance with the laws of the Federal Republic of Nigeria
            [jurisdiction]. Any disputes arising under or in connection
            with these Terms of Use shall be subject to the exclusive
            jurisdiction of the courts of the jurisdiction.
          </p>
        </div>
      </LegalPageContentSection>
    </>
  );

  return (
    <BottomStuckFooterPage
      top={pageComponents}
      footer={<SiteFooter />}
    />
  );
}

export default TermsOfUsePage;
