
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { loginSuccess } from '../../redux/slices/authSlice';

const UserInfo = () => {
  const { user } = useSelector(state => state.auth);
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    age: '',
    gender: '',
    bloodGroup: '',
    dateOfBirth: '',
    mobileNumber: '',
    emergencyContact: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data from localStorage
    if (user?.uid) {
      const storedData = localStorage.getItem(`user_${user.uid}`);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setUserData({
          fullName: parsedData.fullName || '',
          email: parsedData.email || '',
          age: parsedData.age || '',
          gender: parsedData.gender || '',
          bloodGroup: parsedData.bloodGroup || '',
          dateOfBirth: parsedData.dateOfBirth || '',
          mobileNumber: parsedData.mobileNumber || '',
          emergencyContact: parsedData.emergencyContact || ''
        });
      }
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: '', type: '' });
    
    try {
      // Update display name in Firebase Auth
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: userData.fullName
        });
      }
      
      // Update user data in localStorage
      const updatedUserData = {
        ...userData,
        uid: user.uid
      };
      
      localStorage.setItem(`user_${user.uid}`, JSON.stringify(updatedUserData));
      
      // Update Redux state
      dispatch(loginSuccess({
        name: userData.fullName,
        email: userData.email,
        uid: user.uid,
        role: user.role || 'user'
      }));
      
      setMessage({ 
        text: 'Profile updated successfully!', 
        type: 'success' 
      });
    } catch (err) {
      console.error('Profile update error:', err);
      setMessage({ 
        text: 'Failed to update profile. Please try again.', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-white mb-6">User Profile</h1>
            
            {message.text && (
              <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                {message.text}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={userData.fullName}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                    disabled
                    readOnly
                  />
                  <p className="text-xs text-white/60 mt-1">Email cannot be changed</p>
                </div>
                
                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={userData.age}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="25"
                    required
                  />
                </div>
                
                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={userData.gender}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="" disabled className="text-black">Select Gender</option>
                    <option value="male" className="text-black">Male</option>
                    <option value="female" className="text-black">Female</option>
                    <option value="other" className="text-black">Other</option>
                  </select>
                </div>
                
                {/* Blood Group */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Blood Group</label>
                  <select
                    name="bloodGroup"
                    value={userData.bloodGroup}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="" disabled className="text-black">Select Blood Group</option>
                    <option value="A+" className="text-black">A+</option>
                    <option value="A-" className="text-black">A-</option>
                    <option value="B+" className="text-black">B+</option>
                    <option value="B-" className="text-black">B-</option>
                    <option value="AB+" className="text-black">AB+</option>
                    <option value="AB-" className="text-black">AB-</option>
                    <option value="O+" className="text-black">O+</option>
                    <option value="O-" className="text-black">O-</option>
                  </select>
                </div>
                
                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={userData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                
                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={userData.mobileNumber}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
                
                {/* Emergency Contact */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Emergency Contact</label>
                  <input
                    type="tel"
                    name="emergencyContact"
                    value={userData.emergencyContact}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex items-center py-2 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Updating...
                    </>
                  ) : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
