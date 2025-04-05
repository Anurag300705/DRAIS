// SignUp.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../services/firebase.js';
import { loginSuccess } from '../redux/slices/authSlice';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    bloodGroup: '',
    dateOfBirth: '',
    mobileNumber: '',
    emergencyContact: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      
      const user = userCredential.user;
      
      // Update user profile with display name
      await updateProfile(user, {
        displayName: formData.fullName
      });
      
      // Store additional user data in Firebase or your backend
      // This would typically be done with Firestore or your own API
      // For now, we'll just use local storage as an example
      const userData = {
        fullName: formData.fullName,
        age: formData.age,
        gender: formData.gender,
        bloodGroup: formData.bloodGroup,
        dateOfBirth: formData.dateOfBirth,
        mobileNumber: formData.mobileNumber,
        emergencyContact: formData.emergencyContact,
        email: formData.email,
        uid: user.uid
      };
      
      localStorage.setItem(`user_${user.uid}`, JSON.stringify(userData));
      
      console.log('User created successfully:', userData);
      
      // Update Redux state
      dispatch(loginSuccess({
        name: formData.fullName,
        email: formData.email,
        uid: user.uid,
        role: 'user'
      }));
      
      // Redirect to layout page
      navigate('/layout');
    } catch (err) {
      console.error('Signup error:', err);
      
      // Handle specific Firebase auth errors
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('This email is already registered.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address format.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Please use a stronger password.');
          break;
        default:
          setError('Failed to create account. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
      <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-2xl border border-white/20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full filter blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full filter blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-white mb-2">Create Account</h1>
          <p className="text-center text-white/70 mb-6">Join DRAIS for disaster response and information system</p>
          
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded-lg text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
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
                  value={formData.gender}
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
                  value={formData.bloodGroup}
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
                  value={formData.dateOfBirth}
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
                  value={formData.mobileNumber}
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
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </>
              ) : 'Create Account'}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-white/70">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-purple-300 hover:text-purple-200">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
