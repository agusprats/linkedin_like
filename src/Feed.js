import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
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
import FlipMove from "react-flip-move";

function Feed() {
    const user = useSelector(selectUser);
    const[input, setInput] = useState('');
    const[posts, setPosts] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => (
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
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            image: imageUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
        setImageUrl('');
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        type='text' />
                        <input 
                        value={imageUrl}
                        onChange={ (e) => setImageUrl(e.target.value) }
                        placeholder='image URL (Optional)'/>
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
            <FlipMove>
            {/* Posts */}
            {posts.map(({ id, data: { name, description, message, photoUrl, image, timestamp }}) => (
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                image={image}
                timestamp={timestamp}
                />
            ))}
            </FlipMove>
        </div>
    );
}

export default Feed
