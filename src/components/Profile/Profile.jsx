import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo.jsx';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile
