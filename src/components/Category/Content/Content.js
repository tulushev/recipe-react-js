import React from 'react';
import { Link } from 'react-router-dom';

import './Content.css';

const content = props => (
  <div>
    {props.contentList.map(item => {
      if (item && item.content) {
        return (
          <div key={item.content._id}>
            <Link to={`/content/${item.content._id}`} className="itemTitle">
              Title: {item.content.name}
            </Link>
            <p className="itemDescr">Descriprion: {item.content.description}</p>
          </div>
        );
      }
    })}
  </div>
);

export default content;
