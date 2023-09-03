import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = localStorage.getItem("authenticated") === "true";

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/signin" />;
  }
}
