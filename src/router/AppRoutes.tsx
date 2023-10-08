import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Page
//import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Team from '../components/Team';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={About} />
                <Route path="/home" Component={Home} />
                <Route path="/team" Component={Team} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;