import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Page
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Team from '../components/Team';

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/team" Component={Team} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;