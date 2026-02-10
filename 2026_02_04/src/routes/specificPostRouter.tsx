import {NavLink} from "react-router"
import { useEffect, useState } from "react"
import type {Comment} from "../types/Comment/Comment.ts";
import styles from './specificPostRouter.module.scss'
import {useLocation} from "react-router-dom";
export default function PostPage2(){
    const [comments, setComments] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const location = useLocation();
    const id = location.state?.id;
    useEffect(() => {
        (() => {
            setIsLoading(true)
        })()
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then((json: Comment[]) => {
                setComments(json)
            })
            .catch(() => {
                setIsError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);
    return (
        <div>
            <nav>
                <NavLink to="/">Strona główna</NavLink>
                <NavLink to="/categoriesPage">Lista kategorii</NavLink>
            </nav>
            <article className={styles.Posts}>
                {isLoading && (
                    <div className={styles.PostsLoading}>
                        <div className={styles.PostsLoadingLoader}>
                            <div></div>
                        </div>

                        Trwa ładowanie...
                    </div>
                )}
                {isError && (
                    <div className={styles.PostsError}>
                        Wystąpił nieoczekiwany błąd
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
                {!isLoading && !isError && (
                    <div className={styles.PostsX}>
                        {comments.length === 0 && (
                            <div className={styles.PostsError}>
                                Brak komentarzy
                            </div>
                        )}
                        {comments.map(p => (
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