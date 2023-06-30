import { Link } from 'react-router-dom';
const Index = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="mx-3">
                <img src="/img/TERCEIRO-GESTOR_Logotipo.png" height="24" />
            </div>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/team" className="nav-link">Team</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Index;
