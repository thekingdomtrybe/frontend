import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SVG from '@/components/SVG/SVG';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Styles from './DropdownMenu.module.scss';

function DropdownMenu({ variant, menuItems }) {
  const [open, setOpen] = useState(false);

  const dropdown = useRef();
  const toggle = useRef();

  useOnClickOutside(dropdown, (e) => {
    if (toggle.current.contains(e.target)) return;
    setOpen(false);
  });

  const menuItemsList = menuItems.map((item) => (
    <li
      key={item.url}
      className={
        `${item.tablet && Styles['mobile-link']} ${item['desktop-first'] && Styles['desktop-first']} ${item['desktop-last'] && Styles['desktop-last']}`
      }
    >
      <Link to={item.url}>
        <div className={Styles.icon}>
          <span>{item.display}</span>
        </div>
        {item.label}
      </Link>
    </li>
  ));

  const toggleMenu = () => {
    setOpen(!open);
  };

  const className = `${Styles['menu-content']} ${open ? Styles['menu-open'] : Styles['menu-closed']}`;
  const overlayClass = `${Styles.overlay} ${open && Styles['overlay-open']}`;
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
      <div className={overlayClass} />
      <button
        type="button"
        onClick={toggleMenu}
        ref={toggle}
      >
        <SVG icon="menu" className={Styles.handle} color={color} />
        <span className="placeholder-label">content</span>
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
    display: PropTypes.string,
  })).isRequired,
};

DropdownMenu.defaultProps = {
  variant: 'light',
};

export default DropdownMenu;
