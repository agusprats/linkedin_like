import React from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import { Avatar } from '@material-ui/core';
import './HeaderOption.css'

function HeaderOption({avatar, title, Icon, onClick}) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon ClassName="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption__icon">{user?.email[0]}</Avatar>
            )}
            
            
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
