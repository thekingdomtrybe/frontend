import React from 'react';
import { useAuthenticateUserQuery } from '@/services/tkt-backend/auth';
import UserLoading from './Loading';
import Styles from './UserInfoDisplay.module.scss';

function UserInfoDisplay() {
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useAuthenticateUserQuery();

  if (isUserLoading || isUserError) {
    return <UserLoading />;
  }

  const name = `${user.first_name} ${user.last_name}`;
  const { email } = user;
  const img = user.picture_url;

  return (
    <div className={Styles['user-info']}>
      <img src={img} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default UserInfoDisplay;
