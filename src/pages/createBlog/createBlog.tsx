/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './createblog.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreateBlog() {
  const [value, setValue] = useState('');
  return (
    <div className="write">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1 className="font-bold text-5xl">Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: 'none' }} type="file" id="file" />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-5xl">Category</h1>
          <div className="category">
            <input type="radio" name="category" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>

          <div className="category">
            <input type="radio" name="category" value="science" id="science" />
            <label htmlFor="science">science</label>
          </div>

          <div className="category">
            <input
              type="radio"
              name="category"
              value="technology"
              id="technology"
            />
            <label htmlFor="technology">technology</label>
          </div>

          <div className="category">
            <input type="radio" name="category" value="cinema" id="cinema" />
            <label htmlFor="cinema">cinema</label>
          </div>

          <div className="category">
            <input type="radio" name="category" value="design" id="design" />
            <label htmlFor="design">design</label>
          </div>

          <div className="category">
            <input type="radio" name="category" value="food" id="food" />
            <label htmlFor="food">food</label>
          </div>

        </div>
      </div>
    </div>
  );
}
export default CreateBlog;
