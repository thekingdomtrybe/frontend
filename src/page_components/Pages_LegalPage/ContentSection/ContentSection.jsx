import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ContentSection.module.scss';

function LegalPageContentSection({ children }) {
  return (
    <section className={Styles['content-section']}>
      {children}
    </section>
  );
}

LegalPageContentSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LegalPageContentSection;

const LegalPageContentSectionStyles = Styles;
export {
  LegalPageContentSectionStyles,
};
