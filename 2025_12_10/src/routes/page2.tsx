import { NavLink } from "react-router";

export default function First() {
    return (
        <nav>
            <NavLink to="/">Do strony głównej </NavLink>
            <NavLink to="/podstrona67">67</NavLink>
            <div>
                <h1>Druga</h1>
            </div>
        </nav>
    );
}