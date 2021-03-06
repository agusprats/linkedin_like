import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Latest News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Welcome 2021", "Top news - 3444 readers")}
            {newsArticle("React and Redux, master it in 2021", "Top news - 6784 readers")}
            {newsArticle("MERN Stack, best on-line courses", "Top news - 9544 readers")}
            {newsArticle("Fullstack, what does it really mean?", "Top news - 2311 readers")}
            {newsArticle("IT industry in Argentina", "Top news - 3444 readers")}
            {newsArticle("React vs Angular", "Top news - 6784 readers")}
            {newsArticle("Junior Dev opportunities", "Top news - 7534 readers")}
            {newsArticle("Zero to Full Stack Hero", "Top news - 3119 readers")}
        </div>
        
    )
}

export default Widgets
