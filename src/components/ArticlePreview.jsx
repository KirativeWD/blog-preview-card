import React from "react";

function ArticlePreview({ blogData }) {

    return (
        <article>
            <img src={blogData.illustration} alt="" />
            <header>
                <p>{blogData.category}</p>
                <p>Published <time>21 Dec 2023</time></p>
                <h1>{blogData.title}</h1>
            </header>
            <p>{blogData.preview}</p>
            <footer>
                <img src={blogData.avatar} alt={blogData.authorAlt} />
                <address>{blogData.author}</address>
            </footer>
        </article>
    )
}

export default ArticlePreview;