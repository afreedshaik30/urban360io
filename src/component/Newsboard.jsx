import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Build the backend proxy URL
        //  let url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        let url = "https://urban360-backend.onrender.com/api/news";
        if (category && category !== "home") {
          url += `?category=${category}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch news");

        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="text-center position-relative">
      <span className="badge bg-black text-white fs-3 fw-bold">
        Latest <span className="text-purple">News</span>
      </span>

      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(34, 32, 32, 0.8)",
            zIndex: 9999,
          }}
        >
          <div
            className="spinner-border"
            style={{
              width: "8rem",
              height: "8rem",
              color: "yellow",
              borderWidth: "1.0em",
            }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <p className="text-danger mt-3">{error}</p>}

      {!loading && !error && articles.length > 0 && (
        <div className="d-flex flex-wrap justify-content-center gap-5 mt-4">
          {articles.map((article, idx) => (
            <NewsItem
              key={idx}
              title={article.title}
              description={article.description}
              imgSrc={article.urlToImage}
              url={article.url}
            />
          ))}
        </div>
      )}

      {!loading && !error && articles.length === 0 && (
        <p className="mt-3">No articles available at the moment.</p>
      )}
    </div>
  );
};

export default Newsboard;

// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const Newsboard = ({ category }) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       const apiKey = import.meta.env.VITE_CURR_API_KEY;
//       const baseUrl = import.meta.env.VITE_CURR_URL;

//       if (!apiKey || !baseUrl) {
//         setError("Missing API key or URL. Check your environment variables.");
//         setLoading(false);
//         return;
//       }

//       // Build URL
//       let url = `${baseUrl}?apiKey=${apiKey}&language=en&country=in`;

//       if (category && category !== "home") {
//         url += `&category=${category}`;
//       }

//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Failed to fetch news");

//         const data = await response.json();
//         setArticles(data.news || []);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch news.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [category]);

//   return (
//     <div className="text-center">
//       <span className="badge bg-black text-white fs-3 fw-bold">
//         Latest <span className="text-purple">News</span>
//       </span>

//       {loading && <p className="mt-3">Loading news...</p>}
//       {error && <p className="text-danger mt-3">{error}</p>}

//       {!loading && !error && articles.length > 0 && (
//         <div className="d-flex flex-wrap justify-content-center gap-5 mt-4">
//           {articles.map((article, idx) => (
//             <NewsItem
//               key={idx}
//               title={article.title}
//               description={article.description}
//               imgSrc={article.image}
//               url={article.url}
//             />
//           ))}
//         </div>
//       )}

//       {!loading && !error && articles.length === 0 && (
//         <p className="mt-3">No articles available at the moment.</p>
//       )}
//     </div>
//   );
// };

// export default Newsboard;
