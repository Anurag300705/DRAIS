import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Sidebar from './Sidebar';
// import { Alert } from './Alert';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        {/* Alert Section */}
        {/* <div className="p-4">
          <Alert />
        </div> */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-white/10">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;