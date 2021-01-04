import React from 'react'
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.content__img} src='https://wallpaperaccess.com/full/267434.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + des
            </div>
        </div>
    )
}

export default ProfileInfo
