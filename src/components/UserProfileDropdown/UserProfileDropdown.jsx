import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useAuthenticateUserQuery } from '@/services/tkt-backend/auth';
import UserLoading from './Loading';
import SVG from '../SVG/SVG';
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
        <li key={item.url}>
          <button type="button" onClick={item.onClick}>
            <div className={Styles.icon}>
              <span>{item.display}</span>
            </div>
            {item.label}
          </button>
        </li>
      );
    }
    return (
      <li key={item.url}>
        <Link to={item.url}>
          <div className={Styles.icon}>
            <span>{item.display}</span>
          </div>
          {item.label}
        </Link>
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
          {
            user && user?.picture_url && (
              <img
                alt=""
                src={user.picture_url}
              />
            )
          }
          {
            !user && (
              <div className={Styles['svg-container']}>
                <SVG icon="user" width={27} color="var(--gray)" />
              </div>
            )
          }
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
    display: PropTypes.string.isRequired,
  })).isRequired,
};

export default UserProfileDropdown;
