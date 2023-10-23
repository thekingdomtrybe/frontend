import React from 'react';
import PropTypes from 'prop-types';
import { InlineWidget } from 'react-calendly';
import FormGroup from '@/components/FormGroup/FormGroup';

function Calendly({
  url,
  prefill,
}) {
  return (
    <FormGroup align="center">
      <InlineWidget
        url={url}
        pageSettings={{
          hideEventTypeDetails: true,
        }}
        prefill={prefill}
      />
    </FormGroup>
  );
}

Calendly.propTypes = {
  url: PropTypes.string.isRequired,
  prefill: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Calendly;
