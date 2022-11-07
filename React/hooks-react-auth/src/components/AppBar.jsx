import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AppBar = ({ pages }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <nav>
      <h2>React Router Auth</h2>
      {pages?.map((page) => (
        <button key={page.label} onClick={() => handleNavigate(page.path)}>
          {page.label}
        </button>
      ))}
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

export default AppBar;
