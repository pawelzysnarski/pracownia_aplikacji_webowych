import {NavLink} from "react-router"
import { useEffect, useState } from "react"
import styles from './specificPostRouter.module.scss'
import {useLocation} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
async function getComments(x){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${x}/comments`);
    if (!res.ok) {throw new Error('Błąd pobierania danych')};
    return res.json();
}
export default function PostPage2(){

    const location = useLocation();
    const id = location.state?.id;
    const { isPending, isError, data, error } = useQuery({queryKey:['Comments',id], queryFn: ()=>getComments(id)});
    return (
        <div>
            <nav>
                <NavLink to="/">Strona główna</NavLink>
                <NavLink to="/categoriesPage">Lista kategorii</NavLink>
            </nav>
            <article className={styles.Posts}>
                {isPending && (
                    <div className={styles.PostsLoading}>
                        <div className={styles.PostsLoadingLoader}>
                            <div></div>
                        </div>

                        Trwa ładowanie...
                    </div>
                )}
                {isError && (
                    <div className={styles.PostsError}>
                        Wystąpił nieoczekiwany błąd {error.message}
                    </div>
                )}
                <div className={styles.PostsMain}>
                    <h5 className={styles.PostsPostTitle}>
                        {location.state.title}
                    </h5>
                    <p className={styles.PostsPostBody}>
                        {location.state.content}
                    </p>
                </div>
                {!isPending && !isError && (
                    <div className={styles.PostsX}>
                        {data.length === 0 && (
                            <div className={styles.PostsError}>
                                Brak komentarzy
                            </div>
                        )}
                        {data.map(p => (
                            <div className={styles.PostsPost} key={p.id}>
                                <h5 className={styles.PostsPostTitle}>
                                    {p.name.substring(0, 20)}...
                                </h5>
                                <p className={styles.PostsPostEmail}>
                                    {p.email}
                                </p>
                                <p className={styles.PostsPostBody}>
                                    {p.body.substring(0, 50)}...
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </article>
        </div>
    )
}