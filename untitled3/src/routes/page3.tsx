import { NavLink } from "react-router";

export default function First() {
    return (
        <nav>
            <NavLink to="/">Do strony głównej </NavLink>
            <NavLink to="/podstrona1">Do podstrony 1</NavLink>
            <div>
                <h1>Seis Siete</h1>
            </div>
        </nav>
    );
}