import React, { useEffect } from "react";
import './css/ArticlePreview.css';

function ArticlePreview({ blogData }) {

    const articleCategories = ["Learning", "Tips & Tricks", "Trends"]
    const categoryColors = ["hsl(47 88% 63%)", "hsl(104 90% 70%)", "hsl(173 88% 63%)"]

    const getCategoryColor = (category) => {
        const categoryIndex = articleCategories.indexOf(category);
        return categoryColors[categoryIndex] || "hsl(0 0% 100%)";
    };

    const categoryColor = getCategoryColor(blogData.category);

    // Sets the background color of the page depending on the category selected
    useEffect(() => {
        document.body.style.backgroundColor = categoryColor;

        return () => {
            document.body.style.backgroundColor = "";
        }

    }, [categoryColor]);

    return (
        <a className="article-preview" href="#" style={{ "--category-color": categoryColor }} >
            <article>
                <img className="article-preview__illustration" src={blogData.illustration} alt="" />
                <header>
                    <p className="article-preview__category">{blogData.category}</p>
                    <p className="article-preview__date">Published <time datetime="2023-12-21">21 Dec 2023</time></p>
                    <h1>{blogData.title}</h1>
                </header>
                <p className="article-preview__preview">{blogData.preview}</p>
                <footer>
                    <img className="article-preview__avatar" src={blogData.avatar} alt={blogData.authorAlt} />
                    <address>{blogData.author}</address>
                </footer>
            </article>
        </a>
    )
}

export default ArticlePreview;