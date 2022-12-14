import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/Blog.css"
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Gambar2 from '../components/Gambar2';


export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(function () {
    document.title = "BLOG";
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    
    <section className="section">
      <div>
      <Navbar/>
      <Gambar2 heading="BLOG" text=" Here are some readings that can make you more brilliant:"/>
    </div>
      {loading ? (
        <i>Loading blogs..</i>
      ) : (
        <article className="articles">
          {articles.map(function (article) {
            return (
              <article key={article.id} className="article">
                <h3 className="article-title">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h3>
                <time className="article-time">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </time>
              </article>
            );
          })}
        </article>
      )}
      <Footer/>
    </section>
    
  );
}
