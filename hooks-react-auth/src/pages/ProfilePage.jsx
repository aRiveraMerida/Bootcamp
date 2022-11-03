import { BasicPage } from "../components/BasicPage";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const {user} = useAuth()
  return (
    <BasicPage
      title="Profile Page"
      description={`Welcome to profile - ${user.email}`}
    />
  );
};

export default ProfilePage;
