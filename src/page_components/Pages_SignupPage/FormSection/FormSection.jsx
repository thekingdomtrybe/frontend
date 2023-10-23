import React from 'react';
import AuthenticationForm from '@/components/AuthenticationForm/AuthenticationForm';
import AuthenticationFormGroup from '@/components/AuthenticationFormGroup/AuthenticationFormGroup';
import AuthenticationFormControl from '@/components/AuthenticationFormControl/AuthenticationFormControl';
import SocialLogin from '@/components/SocialLogin/SocialLogin';
import AuthenticationPageSwitch from '@/components/AuthenticationPageSwitch/AuthenticationPageSwitch';
import Styles from './FormSection.module.scss';

function SignUpFormSection() {
  return (
    <section className={Styles['form-section']}>
      <AuthenticationForm>
        <AuthenticationFormGroup>
          <input placeholder="First Name" required />
        </AuthenticationFormGroup>
        <AuthenticationFormGroup>
          <input placeholder="Last Name" required />
        </AuthenticationFormGroup>
        <AuthenticationFormGroup>
          <input placeholder="Email" required />
        </AuthenticationFormGroup>
        <AuthenticationFormGroup>
          <input placeholder="Password" required />
        </AuthenticationFormGroup>
        <AuthenticationFormGroup>
          <AuthenticationFormControl
            type="submit"
            content="Sign Up"
            variant="blue"
          />
          <AuthenticationFormControl
            type="button"
            content="Forgot Password?"
            variant="white"
            link="/reset-password"
          />
        </AuthenticationFormGroup>
      </AuthenticationForm>

      <div className={Styles['social-login']}>
        <SocialLogin text="Continue" img="https://via.placeholder.com/30" />
      </div>

      <div className={Styles['auth-page-switch']}>
        <AuthenticationPageSwitch
          text="Already have an account?"
          cta="Log In"
          newPageUrl="/login"
        />
      </div>
    </section>
  );
}

export default SignUpFormSection;
