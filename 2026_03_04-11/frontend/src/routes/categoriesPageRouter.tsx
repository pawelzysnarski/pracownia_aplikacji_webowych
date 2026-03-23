import {NavLink} from "react-router"
import { useState, useEffect } from "react";
import type {Category} from "../types/Category/Category"

export default function CategoriesPage(){
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        fetch("api/category").then((res) => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
        <nav>
            <NavLink to="/">Strona główna</NavLink>
            <NavLink to="/postPage">Przeglądaj wpisy</NavLink>
        </nav>
            <article>
                <h2>Lista kategorii</h2>
                <ol>
                {
                    categories.map(category => (
                        <li key={category.id}>{category.category}</li>
                    ))
                }
                </ol>
            </article>
        </div>
    )
}