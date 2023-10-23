import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Styles from './DropdownMenu.module.scss';
import SVG from '../SVG/SVG';

function DropdownMenu({ variant, menuItems }) {
  const [open, setOpen] = useState(false);

  const dropdown = useRef();
  const toggle = useRef();

  useOnClickOutside(dropdown, (e) => {
    if (toggle.current.contains(e.target)) return;
    setOpen(false);
  });

  const menuItemsList = menuItems.map((item) => (
    <li key={item.url} className={item.tablet && Styles['mobile-link']}>
      <Link to={item.url}>{item.label}</Link>
    </li>
  ));

  const toggleMenu = () => {
    setOpen(!open);
  };

  const className = `${Styles['menu-content']} ${open ? Styles['menu-open'] : Styles['menu-closed']}`;
  let color = '';

  switch (variant) {
    case 'blue': {
      color = 'var(--white)';
      break;
    }
    case 'dark': {
      color = 'var(--white)';
      break;
    }
    default:
      color = 'var(--black)';
      break;
  }

  return (
    <div className={Styles.menu}>
      <button
        type="button"
        onClick={toggleMenu}
        ref={toggle}
      >
        {
          open
            ? (
              <SVG icon="close" color={color} />
            )
            : (
              <SVG icon="menu" color={color} />
            )
        }
      </button>
      <ul
        className={className}
        ref={dropdown}
      >
        {menuItemsList}
      </ul>
    </div>
  );
}

DropdownMenu.propTypes = {
  variant: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

DropdownMenu.defaultProps = {
  variant: 'light',
};

export default DropdownMenu;
