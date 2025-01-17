
import { Outlet } from 'react-router';
import Navbar from './../components/Navbar';

const Dashboard: React.FC = () => {
    return (
        <div className='font-general'>
            <Navbar />
            <div className="container mx-auto mt-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;