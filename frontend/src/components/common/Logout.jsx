// import { signOut } from 'firebase/auth';
// import { auth } from '../../services/firebase.js';
// import { useNavigate } from 'react-router-dom';
// // import { logoutSuccess } from '../../redux/slices/authSlice';
// // import { useDispatch } from 'react-redux';

// export const Logout = () => {
//   const navigate = useNavigate();
//   // const dispatch = useDispatch();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       // Uncomment when redux is ready
//       // dispatch(logoutSuccess());
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

//   return (
//     <button 
//       onClick={handleLogout}
//       className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
//     >
//       Sign Out
//     </button>
//   );
// };
