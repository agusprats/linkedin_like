import React, {useState, useEffect} from 'react';
import './Feed.css';
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import {db} from './firebase';
import firebase from 'firebase';

function Feed() {
    const[input, setInput] = useState('');
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
        setPosts(
            snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
            }))
        )
    ))
}, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Agus Dev',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.fieldValue.serverTimestamp()
        })
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' 
                    color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title='Video' 
                    color="#e7a33e" />
                    <InputOption Icon={EventNoteIcon} title='Event' 
                    color="#70B5F9" />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article'
                    color="#7fc15e"
                    />
                </div>
            </div>
            
            {/* Posts */}
            {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
                <Post/>
            ))}
            <Post 
            name='Agus Prats' 
            description='this is a test'
            message='wow this works'/>
        </div>
    )
}

export default Feed