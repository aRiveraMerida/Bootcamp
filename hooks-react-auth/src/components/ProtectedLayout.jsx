import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AppBar from "./AppBar";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" option={{ replace: true }} />;
  }

  return (
    <div>
      <AppBar
        pages={[
          { label: "Settings", path: "settings" },
          { label: "Profile", path: "profile" },
        ]}
      />
      {outlet}
    </div>
  );
};
