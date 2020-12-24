import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
<div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>{topic}</p>
</div>
    )

    return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://www.viverosshangai.es/image/cache/catalog/Blog/fotos-blog-Los-Tulipanes-Blancos-son-una-representacion-de-ternura-1200x750.jpg" alt=""/>
            <Avatar className="sidebar__avatar"/>
            <h2>Agus Prats</h2>
            <h4>agus.dev@protonmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">567</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">447</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('Reactjs')}
            {recentItem('Programming')}
            {recentItem('Software Development')}
            {recentItem('Developer')}
            {recentItem('MERN stack')}
            {recentItem('JAVA')}
            {recentItem('Backend')}
            {recentItem('Fullstack')}
        </div>
    </div>
    ) 
}

export default Sidebar;
