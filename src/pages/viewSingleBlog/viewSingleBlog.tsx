/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable quotes */
import React from 'react';
import './viewSingleBlog.scss';
import { Link } from 'react-router-dom';
import editicon from '../../assests/edit.png';
import deleteicon from '../../assests/delete.png';
import user from '../../assests/viewPhoto.png';
import Menu from "./Menu";

function ViewSingleBlog() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Broken"
        />
        <div className="user">
          <img src={user} alt="broken" />

          <div className="info">
            <span>Ajay</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="action">
            <Link to={`/writeblog?edit=2`}>
              <img src={editicon} alt="broken" />
            </Link>

            <img src={deleteicon} alt="broken" />
          </div>
        </div>
        <h1 className="text-4xl font-bold">Lorem ipsum dolor, sit amet consectetur next test value </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis facere cupiditate laudantium inventore impedit quibusdam sed sint voluptates possimus illum harum velit asperiores, sapiente dolores doloremque aliquid ullam vitae?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis facere cupiditate laudantium inventore impedit quibusdam sed sint voluptates possimus illum harum velit asperiores, sapiente dolores doloremque aliquid ullam vitae?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis facere cupiditate laudantium inventore impedit quibusdam sed sint voluptates possimus illum harum velit asperiores, sapiente dolores doloremque aliquid ullam vitae?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis facere cupiditate laudantium inventore impedit quibusdam sed sint voluptates possimus illum harum velit asperiores, sapiente dolores doloremque aliquid ullam vitae?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis facere cupiditate laudantium inventore impedit quibusdam sed sint voluptates possimus illum harum velit asperiores, sapiente dolores doloremque aliquid ullam vitae?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis facere cupiditate laudantium inventore impedit quibusdam sed sint voluptates possimus illum harum velit asperiores, sapiente dolores doloremque aliquid ullam vitae?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis facere cupiditate laudantium inventore impedit quibusdam sed sint voluptates possimus illum harum velit asperiores, sapiente dolores doloremque aliquid ullam vitae?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corporis facere cupiditate laudantium inventore impedit quibusdam sed sint voluptates possimus illum harum velit asperiores, sapiente dolores doloremque aliquid ullam vitae?
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}
export default ViewSingleBlog;
