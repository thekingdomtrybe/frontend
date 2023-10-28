import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SectionNotifier from '@/components/SectionNotifier/SectionNotifier';
import Styles from './FormNotification.module.scss';

function FormNotification({
  notifications,
}) {
  const notificationComponents = Object.keys(notifications).map((entry) => {
    const state = notifications[entry];
    if (entry === 'success') {
      return (
        <SectionNotifier
          show={state.trigger}
          timeout={state.timeout}
          customClass={Styles.success}
          fixed={state.fixed}
          key={entry}
        >
          <h3>{state.title}</h3>
          <p>{state.message}</p>
          {
            state.nextSteps && (
              <ul>
                {
                  state.nextSteps.map((step) => (
                    <li key={step.text}>
                      {step.text}
                      {' '}
                      <Link to={step.href}>{step.linkText}</Link>
                    </li>
                  ))
                }
              </ul>
            )
          }
        </SectionNotifier>
      );
    }
    if (entry === 'error') {
      return (
        <SectionNotifier
          show={state.trigger}
          timeout={state.timeout}
          customClass={Styles.error}
          fixed={state.fixed}
          key={entry}
        >
          {
            state.message
          }
        </SectionNotifier>
      );
    }
    if (entry.indexOf('custom') > -1) {
      return (
        <SectionNotifier
          show={state.trigger}
          timeout={state.timeout}
          customClass={state.styles}
          fixed={state.fixed}
          key={entry}
        >
          {
            state.message
          }
        </SectionNotifier>
      );
    }
    return (
      <SectionNotifier key={entry} />
    );
  });

  return (
    <>
      {notificationComponents}
    </>
  );
}

FormNotification.propTypes = {
  notifications: PropTypes.shape({}).isRequired,
};

export default FormNotification;
