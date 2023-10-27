import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthenticateUserQuery } from '@/services/tkt-backend/auth';

function ProtectedRoute({
  isAuthenticationPage,
  admin,
  children,
}) {
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useAuthenticateUserQuery('protected-route-cache-key');

  if (isUserLoading) {
    return <div>Loading...</div>;
  }

  if (!user && isAuthenticationPage) {
    return children;
  }

  if (!user && !isUserLoading) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticationPage && user) {
    return <Navigate to="/" />;
  }

  if (admin && !user.role === 'admin') {
    return <Navigate to="/" />;
  }

  if (isUserError) {
    return <Navigate to="/login" />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  isAuthenticationPage: PropTypes.bool,
  admin: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ProtectedRoute.defaultProps = {
  isAuthenticationPage: false,
  admin: false,
};

export default ProtectedRoute;
