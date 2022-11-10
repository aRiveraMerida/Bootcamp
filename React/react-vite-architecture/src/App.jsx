
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
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
    </>
  );
}

export default App;