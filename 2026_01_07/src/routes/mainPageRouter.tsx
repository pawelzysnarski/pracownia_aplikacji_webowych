import {NavLink} from "react-router"
export default function MainPage(){
    return (
        <div>
        <nav>
            <NavLink to="/postPage">Przeglądaj wpisy</NavLink>
            <NavLink to="/categoriesPage">Lista kategorii</NavLink>
        </nav>
        <article>
            <h1>Witamy na stronie</h1>
            <p>Zachęcamy do pomocy w rozwoju naszej strony</p>
            <button type="button">DONATE</button>
        </article>
        </div>
    )
}