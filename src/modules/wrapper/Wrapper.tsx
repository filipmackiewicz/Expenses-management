import { Outlet } from 'react-router-dom';
import Navbar from '../common/components/navbar/Navbar';

export const Wrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
