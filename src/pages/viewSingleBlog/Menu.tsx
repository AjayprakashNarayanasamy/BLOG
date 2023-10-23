/* eslint-disable react/button-has-type */
import React from 'react';
import data from './data.json';
import './viewSingleBlog.scss';

function Menu() {
  return (
    <div className="menu">
      <h1 className="font-bold">Other posts you may like</h1>
      {data.map((post: any) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="broken" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}
export default Menu;
