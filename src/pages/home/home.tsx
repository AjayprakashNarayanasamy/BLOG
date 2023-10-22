/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mockData from './data.json';
import './home.scss';

export default function Home() {
  const [blog, setBlog] = useState<any>([]);

  const fetchBlog = () => {
    setBlog(mockData);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="home">
      <div className="posts">
        {blog.map((val: any) => {
          const {
            id, title, desc, img,
          } = val;
          return (
            <div className="post " key={id}>
              <div className="img">
                <img src={img} alt="alt" />
                <div className="check" />
              </div>
              <div className="content">
                <Link to={`/viewsingleblog/${id}`}>
                  <h1 className="text-4xl" style={{ lineHeight: '50px' }}>
                    {' '}
                    {title}
                  </h1>
                </Link>
                <p>{desc}</p>
                <button>Read More </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
