import React from 'react';
import AuthenticationForm from '@/components/AuthenticationForm/AuthenticationForm';
import AuthenticationFormGroup from '@/components/AuthenticationFormGroup/AuthenticationFormGroup';
import AuthenticationFormControl from '@/components/AuthenticationFormControl/AuthenticationFormControl';
import AuthenticationPageSwitch from '@/components/AuthenticationPageSwitch/AuthenticationPageSwitch';
import Styles from './FormSection.module.scss';

function ResetPasswordFormSection() {
  return (
    <section className={Styles['form-section']}>
      <AuthenticationForm>
        <AuthenticationFormGroup>
          <input placeholder="Email" required />
        </AuthenticationFormGroup>
        <AuthenticationFormGroup>
          <AuthenticationFormControl
            type="submit"
            content="Reset My Password"
            variant="blue"
            onClick={() => {}}
          />
        </AuthenticationFormGroup>
      </AuthenticationForm>

      <div className={Styles['auth-page-switch']}>
        <AuthenticationPageSwitch
          text="Back to"
          cta="Login"
          newPageUrl="/login"
        />
      </div>
    </section>
  );
}

export default ResetPasswordFormSection;
