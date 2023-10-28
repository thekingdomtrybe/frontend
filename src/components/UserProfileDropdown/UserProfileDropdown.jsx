import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useAuthenticateUserQuery } from '@/services/tkt-backend/auth';
import UserLoading from './Loading';
import Styles from './UserProfileDropdown.module.scss';

function UserProfileDropdown({
  menuItems,
}) {
  const {
    data: user,
    isLoading: isUserLoading,
  } = useAuthenticateUserQuery();
  const [open, setOpen] = useState(false);

  const dropdown = useRef();
  const toggle = useRef();

  useOnClickOutside(dropdown, (e) => {
    if (toggle.current.contains(e.target)) return;
    setOpen(false);
  });

  if (isUserLoading) return <UserLoading />;

  const menuItemsList = menuItems.map((item) => {
    if (item.auth === 'hide' && user) return null;
    if (item.auth === 'show' && !user) return null;
    if (item.type === 'button') {
      return (
        <li key={item.url} className={item.tablet && Styles['mobile-link']}>
          <img src={item.img} alt="" />
          <button type="button" onClick={item.onClick}>
            {item.label}
          </button>
        </li>
      );
    }
    return (
      <li key={item.url}>
        <img src={item.img} alt="" />
        <Link to={item.url}>{item.label}</Link>
      </li>
    );
  });

  const toggleMenu = () => {
    setOpen(!open);
  };

  const className = `${Styles['menu-content']} ${open ? Styles['menu-open'] : Styles['menu-closed']}`;
  const overlayClass = `${Styles.overlay} ${open && Styles['overlay-open']}`;

  return (
    <div className={Styles.menu}>
      <div className={overlayClass} />
      <div className={Styles.handle}>
        <button
          type="button"
          onClick={toggleMenu}
          ref={toggle}
        >
          <img
            alt=""
            src={user?.picture_url || ''}
          />
        </button>
      </div>
      <ul
        className={className}
        ref={dropdown}
      >
        {menuItemsList}
      </ul>
    </div>
  );
}

UserProfileDropdown.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tablet: PropTypes.bool,
  })).isRequired,
};

export default UserProfileDropdown;
