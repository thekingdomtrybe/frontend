import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import Styles from './MoreOptions.module.scss';
import SVG from '@/components/SVG/SVG';

function MoreOptions({
  setCurrentPage,
  onLogout,
}) {
  const navigate = useNavigate();

  const options = [
    {
      title: 'Administrator Dashboard',
      icon: 'arrow-right',
      onClick: () => {
        setCurrentPage('admin-dashboard');
        navigate('/settings/admin-dashboard');
      },
    },
    {
      title: 'About us',
      icon: 'arrow-right',
      onClick: () => {
        setCurrentPage('about-us');
        navigate('/settings/about-us');
      },
    },
    {
      title: 'Privacy policy',
      url: '/privacy-policy',
      icon: 'arrow-right',
    },
    {
      title: 'Terms of use',
      url: '/terms-of-use',
      icon: 'arrow-right',
    },
    {
      title: 'Log Out',
      url: null,
      onClick: onLogout,
    },
  ];

  const optionComponents = options.map((option) => {
    let className = '';
    if (option.title === 'Log Out') {
      className = Styles['log-out'];
    }

    return (
      <li
        key={option.title}
        className={className}
      >
        {
          option.url && (
            <Link to={option.url}>
              {option.title}
              {option.icon && (<SVG icon={option.icon} color="var(--gray)" />)}
            </Link>
          )
        }
        {
          !option.url && (
            <button
              type="button"
              onClick={option.onClick}
            >
              {option.title}
              {option.icon && (<SVG icon={option.icon} color="var(--gray)" />)}
            </button>
          )
        }
      </li>
    );
  });

  return (
    <div className={Styles['more-options']}>
      <h2>More</h2>
      <ul>
        {optionComponents}
      </ul>
    </div>
  );
}

MoreOptions.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default MoreOptions;
