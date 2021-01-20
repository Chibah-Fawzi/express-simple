const React = require('react');
import './style.css';

export default function Index() {
    return (
        <>
            <Home />
            <NavTab />
        </>
    );
}

const Home = () => {
    return (
        <>
        </>
    )
}

const NavTab = () => {
    return (
        <nav style={{ display: "table-cell" }} >
            <ul >
                <li className="test"><a href="#">Services</a></li>
                <li className="test"><a href="#">Home</a></li>
                <li className="test"><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}