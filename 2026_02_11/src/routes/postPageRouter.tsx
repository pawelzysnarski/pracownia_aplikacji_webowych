//import type {Post} from "../types/Post/Post.ts";
import styles from './postPageRouter.module.scss'
import { NavLink, Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {throw new Error('Błąd pobierania danych')};
    return res.json();
}
export default function RouterPage(){
    const { isPending, isError, data, error } = useQuery({queryKey:['Post'], queryFn: getPosts});
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
                {!isPending && !isError && (
                    <>
                        {data.length === 0 && (
                            <div className={styles.PostsError}>
                                Brak wpisów
                            </div>
                        )}
                        {data.map(p => (
                            <div className={styles.PostsPost} key={p.id}>
                                <h5 className={styles.PostsPostTitle}>
                                    {p.title.substring(0, 20)}...
                                </h5>
                                <p className={styles.PostsPostBody}>
                                    {p.body.substring(0, 50)}...
                                </p>
                                <Link
                                    className={styles.PostsPostLink}
                                    to={"/post"}
                                    state={{ id: p.id,title:p.title ,content:p.body}}
                                >
                                    Przejdź do wpisu
                                </Link>
                            </div>
                        ))}
                    </>
                )}
            </article>
        </div>
    )
}