import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;

    a{
            color:black;
            text-decoration: none;
        }

    .thumbnail{
        margin-right: 1rem;
        img {
            display: block;
            width:100px;
            height:160px;
            object-fit: cover;
        }
    }

    .content{
        h2{
            margin: 0;
        }
        p{
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
            font-size: 0.8rem;
        }
    }

    &+& {
        margin-top: 2rem;
    }

`;


function NewsItem({ article }) {
    const{title, description, urlToImage, url} = article;
    return <NewsItemBlock>
        <div className='thumbnail'>
            <a href={url} target="_black" rel="noopenner noreferrer">
                <img src={urlToImage} alt="thumnail"/>
            </a>
        </div>
        <div className='content'>
            <a href={url} target="_black" rel="noopenner noreferrer">
                <h2> {title}</h2>
            </a>
            <p> {description}</p>
        </div>
    </NewsItemBlock>
}

export default NewsItem;