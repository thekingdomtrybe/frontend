import React from 'react';
import AuthenticationForm from '@/components/AuthenticationForm/AuthenticationForm';
import AuthenticationFormGroup from '@/components/AuthenticationFormGroup/AuthenticationFormGroup';
import AuthenticationFormControl from '@/components/AuthenticationFormControl/AuthenticationFormControl';
import SocialLogin from '@/components/SocialLogin/SocialLogin';
import AuthenticationPageSwitch from '@/components/AuthenticationPageSwitch/AuthenticationPageSwitch';
import Styles from './FormSection.module.scss';

function LoginFormSection() {
  return (
    <section className={Styles['form-section']}>
      <AuthenticationForm>
        <AuthenticationFormGroup>
          <input placeholder="Email" required />
        </AuthenticationFormGroup>
        <AuthenticationFormGroup>
          <input placeholder="Password" required />
        </AuthenticationFormGroup>
        <AuthenticationFormGroup>
          <AuthenticationFormControl
            type="submit"
            content="Sign In"
            variant="blue"
            onClick={() => {}}
          />
          <AuthenticationFormControl
            type="button"
            content="Forgot Password?"
            variant="white"
            link="/reset-password"
            onClick={() => {}}
          />
        </AuthenticationFormGroup>
      </AuthenticationForm>

      <div className={Styles['social-login']}>
        <SocialLogin
          text="Sign in"
          img="https://via.placeholder.com/30"
          url=""
        />
      </div>

      <div className={Styles['auth-page-switch']}>
        <AuthenticationPageSwitch
          text="Don't have an account?"
          cta="Sign Up"
          newPageUrl="/sign-up"
        />
      </div>
    </section>
  );
}

export default LoginFormSection;
