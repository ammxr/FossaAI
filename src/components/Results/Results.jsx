import React from 'react';
import './Results.css';

const Results = () => {
  const results = [
    { title: 'Product 1', description: 'Description for Product 1', imageUrl: 'product1.jpg' },
    { title: 'Product 2', description: 'Description for Product 2', imageUrl: 'product2.jpg' },
  ];

  return (
    <section id="results" className="section">
      <div className="results-container">
        <h2>Results</h2>
        <div className="result-cards">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <img src={result.imageUrl} alt={result.title} />
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
