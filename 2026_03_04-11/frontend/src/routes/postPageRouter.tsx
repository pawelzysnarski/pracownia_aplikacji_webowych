import type {Post} from "../types/Post/Post.ts";
import styles from './postPageRouter.module.scss'
import { NavLink, Link } from "react-router-dom";
import {useEffect, useState} from "react";
export default function RouterPage(){
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        fetch("api/post").then((res) => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
        <nav>
            <NavLink to="/">Strona główna</NavLink>
            <NavLink to="/categoriesPage">Lista kategorii</NavLink>
        </nav>
            <article className={styles.Posts}>
                {/* && (
                    <div className={styles.PostsLoading}>
                        <div className={styles.PostsLoadingLoader}>
                            <div></div>
                        </div>

                        Trwa ładowanie...
                    </div>
                )*/}
                {/*isError && (
                    <div className={styles.PostsError}>
                        Wystąpił nieoczekiwany błąd {error.message}
                    </div>
                )*/}
                {//!isPending && !isError &&
                    (
                    <>
                        {posts.length === 0 && (
                            <div className={styles.PostsError}>
                                Brak wpisów
                            </div>
                        )}
                        {posts.map(p => (
                            <div className={styles.PostsPost} key={p.id}>
                                <h5 className={styles.PostsPostTitle}>
                                    {p.title.substring(0, 20)}...
                                </h5>
                                <p className={styles.PostsPostBody}>
                                    {p.content.substring(0, 50)}...
                                </p>
                                <Link
                                    className={styles.PostsPostLink}
                                    to={"/post"}
                                    state={{ id: p.id,title:p.title ,content:p.content}}
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