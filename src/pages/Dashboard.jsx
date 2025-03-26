import { useSelector } from 'react-redux';
import {AlertSummary} from '../components/disaster/AlertSummary';
import {RecentEvents} from '../components/disaster/RecentEvents';
import {StatsOverview} from '../components/disaster/StatsOverview.jsx';


export const Dashboard = () => {
  const { user } = useSelector(state => state.auth);
  
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name || 'Admin'}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <AlertSummary />
          <RecentEvents />
        </div>
        <div className="md:col-span-1">
          <StatsOverview />
        </div>
      </div>
    </div>
  );
}