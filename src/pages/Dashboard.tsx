
import { Outlet } from 'react-router';
import Navbar from './../components/Navbar';

const Dashboard: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <h2 className="">hello</h2>
        </div>
    );
};

export default Dashboard;