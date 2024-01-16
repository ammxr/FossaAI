import React, { useState, useEffect } from 'react';
import './Results.css';
import Navbar from '../Navbar/Navbar.jsx';
import axios from 'axios';
import Card from '../Card/Card.jsx';

const Results = () => {
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    // Fetch recommendation data from the Django backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/output');
        setRecommendation(response.data.recommendation);
      } catch (error) {
        console.error('Error fetching recommendation:', error);
      }
    };

    fetchData();  // Call the fetch function when the component mounts
  }, []);  // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <Navbar />
      <h2>Results</h2>

      {recommendation && (
        <Card
          thumbnail='https://m.media-amazon.com/images/I/81mnW5T+ZcL._AC_SL1500_.jpg'
          name={recommendation[0]}
          link={recommendation[1]}
        />
      )}
    </div>
  );
};

export default Results;
