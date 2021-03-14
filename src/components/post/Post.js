import React from 'react';
import miniLogo from '../../img/mini-logo.png'
import './style-post.scss'
const Post = ({title, paragraph1, paragraph2, paragraph3, date, avatar}) =>{
    return(
        <div className='container-post'>
            <div className='avatar'>
                <img src={avatar} alt='avatar'/>
            </div>
            <div className='content-post'>
                <h4 className='title-post'>{title}</h4>
                <p className='paragraph-post'>{paragraph1}</p>
                <p className='paragraph-post'>{paragraph2}</p>
                <p className='paragraph-post'>{paragraph3}</p>
                <hr className='line-post'/>
                <div className='style-data-post'>
                    <img src={miniLogo} alt="mini logo"/>
                    <div>
                        <p>SincereSystems</p>
                        {date}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;