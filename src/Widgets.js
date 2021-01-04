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
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Welcome from Bs As", "Top news - 3444 readers")}
            {newsArticle("React and Redux, master it in 2021", "Top news - 6784 readers")}
            {newsArticle("MERN Stack, best on-line courses", "Top news - 5544 readers")}
            {newsArticle("Fullstack, what does it really mean?", "Top news - 2311 readers")}
            {newsArticle("Welcome from Bs As", "Top news - 3444 readers")}
            {newsArticle("React and Redux, master it in 2021", "Top news - 6784 readers")}
            {newsArticle("MERN Stack, best on-line courses", "Top news - 5544 readers")}
            {newsArticle("Fullstack, what does it really mean?", "Top news - 2311 readers")}
        </div>
        
    )
}

export default Widgets
