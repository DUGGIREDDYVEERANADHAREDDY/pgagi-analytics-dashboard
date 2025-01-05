import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { Commet } from 'react-loading-indicators';
const NewsAPIKey = 'c33d1143dc4b4f9da3e7d7fe27ee64ca';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState('business');
  const [loading, setLoading] = useState(true); // Initial loading state is true
  const [page, setPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetchNewsData();
  }, [category, page]);

  const fetchNewsData = async () => {
    setLoading(true); // Set loading true before fetching data
    try {
      const newsResponse = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&page=${page}&apiKey=${NewsAPIKey}`);
      setNewsData(newsResponse.data.articles);
    } catch (error) {
      console.error("Error fetching news", error);
    } finally {
      setLoading(false); // Always set loading false after fetching
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1); // Reset to first page on category change
  };

  const handlePagination = (direction) => {
    setPage((prevPage) => (direction === 'next' ? prevPage + 1 : prevPage - 1));
  };

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <Helmet>
        <title>User Dashboard - Sygnus Techlabs</title>
        <meta
          name="description"
          content="Access the Sygnus Admin Dashboard to manage restaurant listings, view statistics, and perform administrative tasks efficiently."
        />
        <link rel="icon" href="images/PGAGI.jpeg" />
      </Helmet>

      <div className="bg-white p-8 rounded-lg shadow-xl relative">
        <h3 className="text-2xl font-semibold mb-4">Latest News</h3>

        {/* Spinner Overlay */}
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <Commet color="#0bb5c9" size="medium" text="PGAGI" textColor="#7bc8d1" />
          </div>
        )}

        {/* Category Selection */}
        <div className="mb-4">
          <select value={category} onChange={handleCategoryChange} className="p-2 border rounded-md">
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="sports">Sports</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>

        {/* Fixed Article Box (Selected Article) */}
        {selectedArticle && (
          <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg z-10 max-w-lg w-full">
            <h4 className="text-2xl font-semibold">{selectedArticle.title}</h4>
            <p className="text-lg mt-4">{selectedArticle.content || 'No full content available.'}</p>
            <div className="mt-4">
              <a href={selectedArticle.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read full article</a>
            </div>
            <button onClick={handleCloseModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">
              Close
            </button>
          </div>
        )}

        {/* News Articles (Scrollable) */}
        {!loading && (
          <div className="max-h-[500px] overflow-y-scroll mb-6">
            {newsData.length === 0 && <p>No articles found.</p>}
            {newsData.map((article, index) => (
              <div
                key={index}
                className="mb-6 cursor-pointer"
                onClick={() => handleArticleSelect(article)}
              >
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg">
                  <h4 className="text-xl font-medium text-gray-800">{article.title}</h4>
                  <p className="text-gray-600">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && (
          <div className="flex justify-between mt-4">
            <button onClick={() => handlePagination('prev')} disabled={page === 1} className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-300">
              Previous
            </button>
            <button onClick={() => handlePagination('next')} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default News;
