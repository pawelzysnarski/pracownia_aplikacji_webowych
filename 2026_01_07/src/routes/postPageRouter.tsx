import {NavLink} from "react-router"
export default function RouterPage(){
    return (
        <div>
        <nav>
            <NavLink to="/">Strona główna</NavLink>
            <NavLink to="/categoriesPage">Lista kategorii</NavLink>
        </nav>
            <article>
                <h1>Tytuł postu</h1>
                <h3>Treść postu</h3>
            </article>
        </div>
    )
}