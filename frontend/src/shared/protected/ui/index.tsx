import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props extends React.PropsWithChildren {
  isAllowed: boolean | null;
}
export const ProtectedRoute: React.FC<Props> = ({ isAllowed, children }) => {
  if (!isAllowed) {
    return <Navigate to="/login" />;
  }
  return children;
};