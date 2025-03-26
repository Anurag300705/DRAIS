import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user } = useSelector(state => state.auth);
  
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-800">DRAIS</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">{user?.name || 'Guest'}</span>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            {user?.name?.charAt(0) || 'G'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;