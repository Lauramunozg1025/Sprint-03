import { Navigate } from 'react-router-dom';

export const PrivateRoutes = (isAutenticated, children) => {
    return isAutenticated
    ? children
    : <Navigate to='/login' />
}