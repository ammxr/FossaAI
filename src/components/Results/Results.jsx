import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/output';

const Results = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        console.log(response.data);
        const dataTest = response.data;
        setPost(dataTest);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Results</h2>
      {post && (
        <p>Recommendation: {post.recommendation}</p>
      )}
    </div>
  );
};

export default Results;
