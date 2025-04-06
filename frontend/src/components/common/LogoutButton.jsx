// src/components/common/LogoutButton.jsx
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <button 
      onClick={handleLogout}
      className="w-full flex items-center p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 cursor-pointer"
    >
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L14 11.586V7z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-white">Log Out</p>
        <p className="text-xs text-white/50">End your session</p>
      </div>
    </button>
  );
};

export default LogoutButton;
