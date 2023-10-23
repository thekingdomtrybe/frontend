import React from 'react';
import PropTypes from 'prop-types';
import FileSelect from '@/components/FileSelect/FileSelect';
import FormGroup from '@/components/FormGroup/FormGroup';
import FormSubmit from '@/components/FormSubmit/FormSubmit';
import FormSelect from '@/components/FormSelect/FormSelect';
import Calendly from '@/components/Calendly/Calendly';
import CustomPhoneInput from '../CustomPhoneInput/CustomPhoneInput';
import TextArea from '@/components/TextArea/TextArea';
import FormAlert from '@/components/FormAlert/FormAlert';
import Styles from './Form.module.scss';

function Form({
  onSubmit,
  fields,
  fieldSize,
  gap,
  submitButtonContent,
  submitButtonVariant,
  submitButtonFullWidth,
  submitButtonSize,
}) {
  const formComponents = fields.map(({
    label,
    name,
    type,
    maxChars,
    numRows,
    url,
    prefill,
    options,
    callback,
    icon,
  }) => {
    if (type === 'textarea') {
      return (
        <TextArea
          key={name}
          name={name}
          label={label}
          maxChars={maxChars}
          numRows={numRows}
          fieldSize={fieldSize}
        />
      );
    }
    if (type === 'phone') {
      return (
        <CustomPhoneInput
          key={name}
          name={name}
          label={label}
        />
      );
    }

    if (type === 'calendly') {
      return (
        <Calendly
          key={name}
          url={url}
          prefill={prefill}
        />
      );
    }

    if (type === 'select') {
      return (
        <FormSelect
          key={name}
          name={name}
          label={label}
          options={options}
        />
      );
    }

    if (type === 'file') {
      return (
        <FileSelect
          key={name}
          callback={callback}
          label={label}
          name={name}
        />
      );
    }

    if (type === 'alert') {
      return (
        <FormAlert key={name} message={label} icon={icon} />
      );
    }

    return (
      <FormGroup key={name} fieldSize={fieldSize}>
        <label htmlFor={name}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          maxLength={maxChars}
          required
        />
      </FormGroup>
    );
  });

  let formClassName = Styles.form;
  formClassName += ` ${Styles[gap]}`;

  return (
    <form onSubmit={onSubmit} className={formClassName}>
      {formComponents}
      <FormSubmit
        content={submitButtonContent}
        variant={submitButtonVariant}
        fullWidth={submitButtonFullWidth}
        size={submitButtonSize}
      />
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitButtonContent: PropTypes.string.isRequired,
  submitButtonVariant: PropTypes.string.isRequired,
  submitButtonFullWidth: PropTypes.bool,
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    maxChars: PropTypes.number,
    numRows: PropTypes.number,
  })).isRequired,
  fieldSize: PropTypes.string,
  gap: PropTypes.string,
  submitButtonSize: PropTypes.string,
};

Form.defaultProps = {
  submitButtonFullWidth: false,
  submitButtonSize: 'normal',
  fieldSize: 'normal',
  gap: 'default',
};

export default Form;
