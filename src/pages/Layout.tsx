
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Layout: React.FC = () => {
    return (
        <div className=''>
            <Navbar />
            <div className="container mx-auto mt-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;