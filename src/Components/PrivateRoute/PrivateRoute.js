import { Navigate } from 'react-router-dom';


function PrivateRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = localStorage.getItem('access_token') && localStorage.getItem('user');

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  if (!user.is_admin) {
    return <Navigate to="/employee" replace />;
  }

  

  return children;
}
export default PrivateRoute;