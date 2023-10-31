import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import SVG from '@/components/SVG/SVG';
import Styles from './AccountSettings.module.scss';

function AccountSettings({
  setCurrentPage,
  toggleSetting,
}) {
  const navigate = useNavigate();

  const options = [
    {
      title: 'Edit profile',
      icon: 'arrow-right',
      onClick: () => {
        setCurrentPage('edit-profile');
        navigate('/settings/edit-profile');
      },
    },
    {
      title: 'Change password',
      icon: 'arrow-right',
      onClick: () => {
        setCurrentPage('change-password');
        navigate('/settings/change-password');
      },
    },
    {
      title: 'Dark mode',
      url: null,
      control: 'checkbox',
      disabled: true,
      onChange: () => toggleSetting('dark-mode'),
    },
    {
      title: 'Push notifications',
      url: null,
      control: 'checkbox',
      disabled: true,
      onChange: () => toggleSetting('push-notifications'),
    },
  ];

  const optionComponents = options.map((option) => {
    let className = '';
    if (option.control === 'checkbox') {
      className = Styles['toggle-container'];
    }

    return (
      <li
        key={option.title}
      >
        {
          option.url && (
            <Link to={option.url}>
              {option.title}
              {option.icon === 'arrow' && (<img alt="" src="" />)}
            </Link>
          )
        }
        {
          !option.url && (
            <button
              type="button"
              className={className}
              onClick={option.onClick}
              disabled={option.disabled}
            >
              {option.title}
              {option.icon && (<SVG icon={option.icon} color="var(--gray)" />)}
              {option.control === 'checkbox' && (
                <input
                  type="checkbox"
                  disabled={option.disabled}
                  onChange={option.onChange}
                />
              )}
            </button>
          )
        }
      </li>
    );
  });

  return (
    <div className={Styles['account-settings']}>
      <h2>Account Settings</h2>
      <ul>
        {optionComponents}
      </ul>
    </div>
  );
}

AccountSettings.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  toggleSetting: PropTypes.func.isRequired,
};

export default AccountSettings;
