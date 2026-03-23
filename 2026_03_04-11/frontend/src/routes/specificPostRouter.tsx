import {NavLink, useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import styles from './specificPostRouter.module.scss'
import type {Comment} from "../types/Comment/Comment.ts";
export default function PostPage2(){

    const location = useLocation();
    const [form, setForm] = useState({
        author: "",
        content: "",
        postId: Number(location.state.id)
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        const data = await res.json();
        console.log(data);

        globalThis.location.reload();
    };
    const [comments, setComments] = useState<Comment[]>([]);
    useEffect(() => {
        fetch("api/comment").then((res) => res.json())
            .then(data => setComments(data))
            .catch(err => console.error(err));
    }, []);
    const comments2=comments.filter(comment =>
        comment.postId===location.state.id
    )
    return (
        <div>
            <nav>
                <NavLink to="/">Strona główna</NavLink>
                <NavLink to="/categoriesPage">Lista kategorii</NavLink>
            </nav>
            <article className={styles.Posts}>
                {/*isPending && (
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
                <div className={styles.PostsMain}>
                    <h5 className={styles.PostsPostTitle}>
                        {location.state.title}
                    </h5>
                    <p className={styles.PostsPostBody}>
                        {location.state.content}
                    </p>
                </div>
                {//!isPending && !isError &&
                     (
                    <div className={styles.PostsX}>
                        {comments.length === 0 && (
                            <div className={styles.PostsError}>
                                Brak komentarzy
                            </div>
                        )}
                        {comments2.map(p => (
                            <div className={styles.PostsPost} key={p.id}>
                                <p className={styles.PostsPostEmail}>
                                    {p.author}
                                </p>
                                <p className={styles.PostsPostBody}>
                                    {p.content.substring(0, 50)}...
                                </p>
                            </div>
                        ))}
                        <form className="newPost" onSubmit={handleSubmit}>
                            <label htmlFor="author">Autor:</label>
                            <input
                                id="author"
                                name="author"
                                value={form.author}
                                onChange={handleChange}
                            />

                            <label htmlFor="content">Treść:</label>
                            <input
                                id="content"
                                name="content"
                                value={form.content}
                                onChange={handleChange}
                            />
                            <button type="submit">Wyślij</button>
                        </form>
                    </div>
                )}
            </article>
        </div>
    )
}