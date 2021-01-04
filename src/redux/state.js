import {renderEntireTree} from '../render'
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'Its my first post', likesCount: 11 }
        ],
        newPosText: ''
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }

        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Yo' }
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPosText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export let updatePostText = (newText) => {
    state.profilePage.newPosText = newText;
    renderEntireTree(state);
}

export default state;