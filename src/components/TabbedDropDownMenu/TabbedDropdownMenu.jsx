import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Styles from './TabbedDropdownMenu.module.scss';

function TabbedDropdownMenu({ variant, menuItems }) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const dropdown = useRef();
  const toggle = useRef();
  const activeMenuItems = menuItems[activeTab].items;
  const className = `${Styles['menu-body']} ${open ? Styles['menu-open'] : Styles['menu-closed']}`;
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

  const tabGridStyle = {
    gridTemplateRows: `repeat(${menuItems.length}, max-content)`,
  };

  const menuTabsComponents = menuItems.map((item, index) => (
    <button
      type="button"
      key={item.group}
      onClick={() => setActiveTab(index)}
    >
      <img alt={item.icon} src={item.icon} />
    </button>
  ));

  const activeMenuComponents = activeMenuItems.map((item) => (
    <li key={item.url}>
      <Link to={item.url}>{item.label}</Link>
    </li>
  ));

  const toggleMenu = () => {
    setOpen(!open);
  };

  useOnClickOutside(dropdown, (e) => {
    if (toggle.current.contains(e.target)) return;
    setOpen(false);
  });

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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6L18 18" />
              </svg>
            )
            : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 7H21" />
                <path d="M3 12H21" />
                <path d="M3 17H21" />
              </svg>
            )
        }
      </button>
      {
        open && (
          <div
            className={className}
            ref={dropdown}
          >
            <div
              className={Styles.tabs}
              style={tabGridStyle}
            >
              {menuTabsComponents}
            </div>
            <ul
              className={Styles['menu-items']}
            >
              {activeMenuComponents}
            </ul>
          </div>
        )
      }
    </div>
  );
}

TabbedDropdownMenu.propTypes = {
  variant: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape(
    {
      group: PropTypes.string,
      icon: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
      })),
    },
  )).isRequired,
};

TabbedDropdownMenu.defaultProps = {
  variant: 'light',
};

export default TabbedDropdownMenu;
