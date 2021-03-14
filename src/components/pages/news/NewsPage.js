import React from 'react';
import fields from './fields';
import './news-page-style.scss'
import {v4 as uuidv4} from 'uuid'
import Post from "../../post/Post";


const NewsPage = () =>{
    const result = fields.map(({avatar, title, date,paragraph1, paragraph2, paragraph3}) => {
        return (
            <Post key={uuidv4()} avatar={avatar}
                  title={title}
                  paragraph1={paragraph1}
                  paragraph2={paragraph2}
                  paragraph3={paragraph3}
                  date={date} />
        )
    })
    return(
        <div className='container-new-page'>
            <h3 className='title-new-page' >Новости <span>SincereSystems</span></h3>
            {result}
        </div>
    )
}
export default NewsPage;