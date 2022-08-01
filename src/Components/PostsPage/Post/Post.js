import React from 'react';
import './Post.scss'

const Post = ({ author, content, data }) => {
   const { name, photo, nickname } = author
   return (
      <div>
         <div className='card'>
            <div className='block card__avatar'>
               <div className='img' style={{ background: `url('${photo}') 50% 0%/ cover  no-repeat` }}></div>
            </div>
            <div className='block card__info'>
               <h5 className='card__info-name'> {name} </h5>
               <span className='card__info-nickname'> {nickname}</span>
               <span className='card__info-date'>{data}</span>
               <p className='card__info-content'> {content} </p>
            </div>
         </div>
      </div>
   );
};

export default Post;