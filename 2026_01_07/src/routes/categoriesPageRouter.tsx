import {NavLink} from "react-router"
export default function CategoriesPage(){
    return (
        <div>
        <nav>
            <NavLink to="/">Strona główna</NavLink>
            <NavLink to="/postPage">Przeglądaj wpisy</NavLink>
        </nav>
            <article>
                <h2>Lista kategorii</h2>
                <ol>
                    <li>Sport</li>
                    <li>Memy</li>
                    <li>Polityka</li>
                </ol>
            </article>
        </div>
    )
}