import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const authenticated = localStorage.getItem("authenticated");

  if (authenticated === 'true') {
    return <>{children}</>;
  } else {
    const currentPath = window.location.pathname;
    if (currentPath !== "/notfound") {
      return <Navigate to="/signin" />;
    } else {
      return <>{children}</>;
    }
  }
}
