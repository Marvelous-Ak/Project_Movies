import React from 'react';
import "./Buttons.css";

const Buttons = () => {
    return (
        <>
        <div className="container ButtonCat">
        <div className="row row-cols-1 row-cols-md-4 g-4"></div>

        <ul className="ButtonCat">
          <li className="">
            <a className="col btn btn-secondary btn-lg" href="/Now_Playing" role="button">
              Now Playing
            </a>
          </li>
          <li className="">
            <a className="col btn btn-secondary btn-lg" href="/Popular" role="button">
              Popular
            </a>
          </li>
          <li className="">
            <a className="col btn btn-secondary btn-lg" href="/Top_Rated" role="button">
              Top Rated
            </a>
          </li>
          <li className="">
            <a className="col btn btn-secondary btn-lg" href="/Upcoming" role="button">
              Upcoming
            </a>
          </li>
        </ul>
      </div>
        </>
    );
};

export default Buttons;