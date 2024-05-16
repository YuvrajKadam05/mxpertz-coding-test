// App.js
import React, { useState, useEffect } from 'react';
import CardItems from './CardItems';
import axios from 'axios';

const Card = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://child.onrender.com/api/sciencefiction');
        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h2 style={{textAlign:"center"}}>Science Fiction Books</h2>
      <div className="card-container">
        {books.map((book, index) => (
          <CardItems
            key={index}
            title={book.Title}
            image={book.Image}
            status={book.Status}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;

{/* <div>
      {data && (
        <div className="card">
          <img src={data.Image[0]} alt={data.Title} />
          <div className="card-body">
            <h5 className="card-title">{data.Title}</h5>
            <p className="card-author">Author: Unknown</p>
          </div>
        </div>
      )}
    </div> */}
