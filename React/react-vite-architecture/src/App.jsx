
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import MainLayout from './components/ui/layout/MainLayout';

const App = () => {
  return (
    <MainLayout>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </MainLayout>
  );
}

export default App;