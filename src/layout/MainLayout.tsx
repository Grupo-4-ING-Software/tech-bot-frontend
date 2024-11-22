import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';

const MainLayout: FC = () => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout; 