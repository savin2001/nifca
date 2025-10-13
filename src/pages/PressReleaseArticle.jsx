import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PressReleaseArticle = () => {
  const { id } = useParams();
  const [pressRelease, setPressRelease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPressRelease = async () => {
      setLoading(true);
      try {
        const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
        const response = await axios.get(`${baseURL}/api/content/press-releases/${id}`);
        setPressRelease(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        setPressRelease(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPressRelease();
    }
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error || !pressRelease) {
    return (
      <div className="min-h-screen flex justify-center items-center px-4">
        <div className="alert alert-error max-w-md">
          <span>Error loading press release. Please try again later.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-base-100">
      <main className="flex-1 pt-32">
        {/* Breadcrumb - Above Content */}
        <div className="mx-auto max-w-4xl px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
          <div className="text-sm font-medium">
            <Link to="/media" className="text-primary hover:underline transition-colors">
              News & Media
            </Link>
            <span className="mx-2 text-neutral/40">/</span>
            <Link to="/press-releases" className="text-primary hover:underline transition-colors">
              Press Releases
            </Link>
            <span className="mx-2 text-neutral/40">/</span>
            <span className="text-neutral/60">Article</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 pb-8 sm:pb-12 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-neutral">
                {pressRelease.title}
              </h1>
              <p className="mt-3 text-base text-neutral/60">
                Issued on: {formatDate(pressRelease.created_at)}
              </p>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none text-neutral prose-headings:font-bold prose-headings:text-neutral prose-p:leading-relaxed prose-p:text-neutral/80 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-neutral/80 prose-strong:text-neutral prose-strong:font-semibold">
              <div
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: pressRelease.content
                    .split('\n\n')
                    .map(paragraph => {
                      // Check if paragraph starts with # for headings
                      if (paragraph.startsWith('### ')) {
                        return `<h3>${paragraph.substring(4)}</h3>`;
                      } else if (paragraph.startsWith('## ')) {
                        return `<h2>${paragraph.substring(3)}</h2>`;
                      } else if (paragraph.startsWith('# ')) {
                        return `<h1>${paragraph.substring(2)}</h1>`;
                      } else if (paragraph.startsWith('> ')) {
                        return `<blockquote><p>${paragraph.substring(2)}</p></blockquote>`;
                      }
                      return `<p>${paragraph}</p>`;
                    })
                    .join('')
                }}
              />
            </article>

            {/* Back Button */}
            <div className="pt-8 border-t border-base-300">
              <Link
                to="/press-releases"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
                Back to Press Releases
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PressReleaseArticle;
