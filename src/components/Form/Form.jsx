import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthenticationFormControl from '@/components/AuthenticationFormControl/AuthenticationFormControl';
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
  clear,
  isLoading,
  onSubmit,
  onClick,
  fields,
  fieldSize,
  gap,
  title,
  submitButtonContent,
  submitButtonVariant,
  submitButtonFullWidth,
  submitButtonSize,
  submitButtonDisabled,
  submitButtonStlye,
  noLineBreakBeforeSubmit,
}) {
  const [formState, setFormState] = useState({});
  const authControls = [];

  const formComponents = fields.map(({
    label,
    name,
    type,
    link,
    submit,
    maxChars,
    numRows,
    url,
    prefill,
    options,
    callback,
    icon,
    variant,
    content,
    initialValue,
    disabled,
    children,
    styleClassName,
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
          value={formState[name] || initialValue || ''}
          onChange={(e) => setFormState({ ...formState, [name]: e.target.value })}
        />
      );
    }

    if (type === 'phone') {
      return (
        <CustomPhoneInput
          key={name}
          name={name}
          label={label}
          value={formState[name]}
          onChange={(value) => setFormState({ ...formState, [name]: value })}
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
          value={formState[name]}
          onChange={(value) => setFormState({ ...formState, [name]: value })}
        />
      );
    }

    if (type === 'checkbox') {
      return (
        <FormGroup type="checkbox" key={name} fieldSize={fieldSize}>
          <input
            type={type}
            name={name}
            id={name}
            value={formState[name] || ''}
            onChange={(e) => setFormState({ ...formState, [name]: e.target.checked })}
            required
          />
          <label htmlFor={name}>
            {content}
          </label>
        </FormGroup>
      );
    }

    if (type === 'file') {
      return (
        <FormGroup key={name} fieldSize={fieldSize}>
          <FileSelect
            callback={((file) => {
              if (callback) callback(file);
              setFormState({ ...formState, [name]: file });
            })}
            name={name}
            className={styleClassName}
          >
            {children}
          </FileSelect>
        </FormGroup>
      );
    }

    if (type === 'alert') {
      return (
        <FormAlert key={name} message={label} icon={icon} variant={variant} />
      );
    }

    if (type === 'auth-control') {
      authControls.push(
        <AuthenticationFormControl
          key={name}
          type={submit ? 'submit' : 'button'}
          content={label}
          variant={variant}
          onClick={onClick}
          link={link}
        />,
      );
      return null;
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
          value={formState[name] || initialValue || ''}
          onChange={(e) => setFormState({ ...formState, [name]: e.target.value })}
          disabled={disabled}
          required
        />
      </FormGroup>
    );
  });

  let formClassName = Styles.form;
  formClassName += ` ${Styles[gap]}`;

  useEffect(() => {
    const formState = {};
    fields.forEach((field) => {
      if (field.initialValue) formState[field.name] = field.initialValue;
    });
    setFormState(formState);

    if (clear) {
      setFormState({});
      fields.forEach((field) => {
        if (field.onClear) field.onClear();
      });
    }
  }, [clear, fields]);

  return (
    <form onSubmit={(e) => onSubmit(e, formState)} className={formClassName}>
      {title && <h1>{title}</h1>}
      {formComponents}
      {!noLineBreakBeforeSubmit && <br />}
      <div className={Styles['form-controls']}>
        <FormSubmit
          styleClass={submitButtonStlye}
          content={submitButtonContent}
          variant={submitButtonVariant}
          fullWidth={submitButtonFullWidth}
          size={submitButtonSize}
          disabled={submitButtonDisabled}
          isLoading={isLoading}
        />
        {authControls}
      </div>
    </form>
  );
}

Form.propTypes = {
  clear: PropTypes.bool,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string,
  submitButtonContent: PropTypes.string.isRequired,
  submitButtonVariant: PropTypes.string.isRequired,
  submitButtonFullWidth: PropTypes.bool,
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    maxChars: PropTypes.number,
    numRows: PropTypes.number,
    url: PropTypes.string,
    prefill: PropTypes.shape({}),
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })),
    callback: PropTypes.func,
    onClear: PropTypes.func,
    icon: PropTypes.string,
    variant: PropTypes.string,
    content: PropTypes.node,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    initialValue: PropTypes.string,
    styleClassName: PropTypes.string,
  })).isRequired,
  fieldSize: PropTypes.string,
  gap: PropTypes.string,
  submitButtonSize: PropTypes.string,
  submitButtonStlye: PropTypes.string,
  noLineBreakBeforeSubmit: PropTypes.bool,
  submitButtonDisabled: PropTypes.bool,
};

Form.defaultProps = {
  clear: false,
  isLoading: false,
  title: '',
  onClick: () => {},
  submitButtonFullWidth: false,
  submitButtonSize: 'normal',
  fieldSize: 'normal',
  gap: 'default',
  noLineBreakBeforeSubmit: false,
  submitButtonDisabled: false,
  submitButtonStlye: '',
};

export default Form;
