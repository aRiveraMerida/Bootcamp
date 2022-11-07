import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AppBar from "./AppBar";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/profile" option={{ replace: true }} />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Home", path: "/" },
          { label: "Login", path: "/login" },
        ]}
      />
      {outlet}
    </div>
  );
};
