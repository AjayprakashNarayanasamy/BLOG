/* eslint-disable import/no-extraneous-dependencies */
import { Outlet } from 'react-router';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

function RootLayout() {
  return (
    <div className="w-[85%] m-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default RootLayout;
