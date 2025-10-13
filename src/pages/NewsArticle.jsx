import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const NewsArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
        const response = await axios.get(`${baseURL}/api/content/news/${id}`);
        setArticle(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex justify-center items-center px-4">
        <div className="alert alert-error max-w-md">
          <span>Error loading article. Please try again later.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-base-100">
      <main className="flex-grow">
        {/* Breadcrumb - Above Content */}
        <div className="mx-auto max-w-4xl px-4 py-4 sm:py-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Link to="/media" className="text-primary hover:underline transition-colors">
              News & Media
            </Link>
            <span className="text-neutral/40">/</span>
            <Link to="/news" className="text-primary hover:underline transition-colors">
              News
            </Link>
            <span className="text-neutral/40">/</span>
            <span className="text-neutral/60">Article</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 pb-8 sm:pb-12 lg:pb-16">
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral lg:text-5xl">
                {article.title}
              </h1>

              {/* Author and Date */}
              <p className="text-base text-neutral/60">
                Published on {new Date(article.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            {/* Featured Image */}
            {article.picture && (
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                <img
                  alt={article.title}
                  className="h-full w-full object-cover"
                  src={`${import.meta.env.VITE_BASE_URL}${article.picture}`}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/1200x675?text=Image+Not+Available';
                  }}
                />
              </div>
            )}

            {/* Article Content */}
            <article className="prose prose-lg max-w-none text-neutral prose-headings:font-bold prose-headings:text-neutral prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-neutral/80">
              <div
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .split('\n\n')
                    .map(paragraph => `<p>${paragraph}</p>`)
                    .join('')
                }}
              />
            </article>

            {/* Back to News Button */}
            <div className="pt-8 border-t border-base-300">
              <Link
                to="/news"
                className="btn btn-primary"
              >
                ← Back to News
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsArticle;
