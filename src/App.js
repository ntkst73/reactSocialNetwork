import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost} 
            updatePostText={props.updatePostText}
            />} />

          {/* <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} /> */}
        </div>
        <footer className='footer'></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
