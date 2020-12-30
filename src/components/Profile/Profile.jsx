import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img class={s.content__img} src='https://wallpaperaccess.com/full/267434.jpg' />
            </div>
            <div>
                ava + des
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile
