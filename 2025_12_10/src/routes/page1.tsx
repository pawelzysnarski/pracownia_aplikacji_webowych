import { NavLink } from "react-router";

export default function First() {
    return (
        <nav>
            <NavLink to="/podstrona1">Do podstrony 1 </NavLink>
            <NavLink to="/podstrona67">67</NavLink>
            <div>
                <h1>Pierwsza</h1>
            </div>
        </nav>
    );
}